#!/usr/bin/env python3
"""Local-only static server. No dependencies. Run from any directory."""
import functools
import http.server
import os
import argparse
import re
import threading
import webbrowser
from pathlib import Path
root = Path(__file__).resolve().parent / 'dist'
if not (root / 'index.html').is_file():
    raise SystemExit('Folderul dist lipsește. Folosește arhiva completă sau rulează npm run build.')
class RangeRequestHandler(http.server.SimpleHTTPRequestHandler):
    """Serve local media with the byte ranges browsers need for seeking."""

    def send_head(self):
        self.byte_range = None
        filename = self.translate_path(self.path)
        if not os.path.isfile(filename):
            return super().send_head()
        try:
            source = open(filename, 'rb')
        except OSError:
            self.send_error(404, 'File not found')
            return None
        size = os.fstat(source.fileno()).st_size
        start, end, status = 0, size - 1, 200
        requested = re.fullmatch(r'bytes=(\d*)-(\d*)', self.headers.get('Range', '')) if self.command == 'GET' else None
        if requested:
            first, last = requested.groups()
            try:
                if first:
                    start = int(first)
                    end = int(last) if last else end
                elif last:
                    start = max(0, size - int(last))
                invalid = (not first and not last) or (not first and int(last) == 0) or start >= size or end < start
            except ValueError:
                invalid = True
            if invalid:
                source.close()
                self.send_response(416)
                self.send_header('Accept-Ranges', 'bytes')
                self.send_header('Content-Range', f'bytes */{size}')
                self.send_header('Content-Length', '0')
                self.end_headers()
                return None
            end = min(end, size - 1)
            status = 206
            self.byte_range = (start, end)
            source.seek(start)
        self.send_response(status)
        self.send_header('Content-Type', self.guess_type(filename))
        self.send_header('Content-Length', str(end - start + 1 if status == 206 else size))
        self.send_header('Accept-Ranges', 'bytes')
        self.send_header('Cache-Control', 'no-cache')
        self.send_header('X-Content-Type-Options', 'nosniff')
        if status == 206:
            self.send_header('Content-Range', f'bytes {start}-{end}/{size}')
        self.end_headers()
        return source

    def copyfile(self, source, outputfile):
        if self.byte_range is None:
            return super().copyfile(source, outputfile)
        remaining = self.byte_range[1] - self.byte_range[0] + 1
        while remaining:
            chunk = source.read(min(64 * 1024, remaining))
            if not chunk:
                break
            outputfile.write(chunk)
            remaining -= len(chunk)

parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument('--port', type=int, default=8000)
parser.add_argument('--no-open', action='store_true')
args = parser.parse_args()
port = args.port
handler = functools.partial(RangeRequestHandler, directory=str(root))
attempts = 0
while True:
    try:
        server = http.server.ThreadingHTTPServer(('127.0.0.1', port), handler)
        break
    except OSError:
        port += 1
        attempts += 1
        if attempts > 10:
            raise
url = f'http://localhost:{port}/'
print(f'Timișoara, cameră cu cameră\n{url}\nLasă această fereastră deschisă. Ctrl+C pentru oprire.', flush=True)
if not args.no_open:
    threading.Timer(0.8, lambda: webbrowser.open(url)).start()
try:
    server.serve_forever()
except KeyboardInterrupt:
    pass
finally:
    server.server_close()

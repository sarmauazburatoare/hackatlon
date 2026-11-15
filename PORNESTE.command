#!/bin/zsh
cd "${0:A:h}"
if command -v python3 >/dev/null 2>&1; then
  exec python3 serve.py
elif command -v node >/dev/null 2>&1; then
  exec node serve.mjs
else
  echo "Instalează Python 3 sau Node.js, apoi deschide din nou acest fișier."
  read "?Apasă Enter pentru a închide."
fi

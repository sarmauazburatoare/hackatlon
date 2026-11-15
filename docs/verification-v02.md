# Local release verification — v0.2, 13 November 2026

This release extends the local guide with reviewed destinations, four additional licensed photographs and 42 local narrations. Public hosting remains deferred. Inventory stays 84 entities, 85 appearances and nine rooms; languages are Romanian, English, Italian, French, Spanish and Simplified Chinese.

## Current production evidence

- `npm run build`: exit 0, TypeScript and Vite. **136 files / 12,571,354 bytes**. Exact production/source hashes: `build-info.json`. Vite retains its lazy museum size advisory (561.84 KB / 151.58 KB gzip); the museum chunk is not loaded on the homepage.
- `npm test -- --reporter=json --outputFile=docs/unit-results.json`: **54/54 pass**. Nine test files cover inventory, recommendation rules, dated eligibility, editorial status, collision/proximity/cameras, location search, narration mapping/media and both bundled servers' byte-range/HEAD behavior.
- `npx playwright test`: **18/18 pass**, zero skipped, unexpected or flaky results, against actual production `dist` through the included Node server. Covers all 85 appearances, every published photo decoding locally, six languages at 320/390/768/1024/1440 px, nine rooms, both wheels, WebGL fallback, location/privacy, principal-screen axe checks and offline catalog operation.
- Six narration browser tests cover initial pause/mute, user-initiated playback, pause/restart, six local languages with external HTTPS blocked, semantic position retention, continued playback with mute/volume retained, fallback on a host without byte ranges, cancellation when closing during fallback, and explicit mute across stories.
- Two event-date regressions advance the clock on an already-open wheel and across the event's final day. Eligibility refreshes before selection and the chosen venue is revalidated before publishing.

The first sandboxed suite could not bind sockets (EPERM). The complete suite was rerun with local-server access and passed. Socket-denied results are not treated as successful tests. Audio resume and explicit-mute regressions were reproduced before correction and pass afterward. Independent targeted review found no remaining Critical or Important issue in those fixes. The focused final browser smoke passes in Chromium, Firefox and WebKit at 390×844: real RO/EN/Chinese playback, exact sentence-relative EN resume (0 s observed error), no initial homepage MP3/3D requests, no page errors/HTTP failures/external requests. Eight modal language scans have no overflow or serious/critical axe violations; 12/12 new-photo checks decode correctly. Evidence: `v02-browser-smoke.json`. The initial smoke harness assumed absolute image paths and synchronous dialog close events; resolved-URL comparison and waiting for the close event corrected those harness assumptions without changing the product.

## Local audio

Seven stories × six languages = **42 MP3s**, 42 WebVTT files and synchronized visible transcripts. Total: **13 min 40.6 s**, 6,594,210 bytes; tracks last 12.80–26.20 s. Every final MP3 fully decodes as 24 kHz mono, is nonempty/non-silent, and matches its unique manifest SHA256. Caption text/counts, bounded monotonic timings and duration checks pass. See `v02-audio-qa.json` and `v02-audio-qa.md`.

Local Whisper base/small supplied 39 current ASR passes across 33 distinct final clips, detecting the intended language in each. Coverage includes all seven Chinese characters and all six wolf languages. Nine clips have technical checks only. Corrected Romanian numerals, Italian wolf date/opening, Italian umbrella onset and Chinese fountain voice were checked again. Stale results are excluded from final coverage. Native-human pronunciation/naturalness signoff remains outstanding; ASR cannot certify it. Several Chinese readings of Latin proper names remain ASR-ambiguous.

Synthetic presets: Supertonic 3 for five European languages, Kokoro for Chinese. Pinned revisions/voices and license evidence: `v02-audio-provenance.json`. Models and generation environments are not distributed or loaded at runtime. Notices accompany the build. No cloud speech service, API key or recurring service is needed.

Playback starts only after a user action. First Listen enables sound unless an explicit mute choice was made. Pause/play/mute/volume and narrative position survive language changes. Closing cancels loading, pauses audio and releases fallback URLs. Full text remains readable if audio fails.

## Editorial result and remaining gaps

**83 identified destinations**, **72 documented open**, **11 with uncertain current operation** and **one seasonal closure** (STPT boats). Only the original Paradisul Piraților identity remains unresolved: its old site redirects to Megazone Bites without proof of restaurant/playground continuity. Unknown/closed records are excluded from recommendations. Identity verification is not a same-day opening guarantee.

User confirmations applied: Gruni, Vineri 15, Riyo, Why Pizza, Berăria 700 and Pinocchio in Piața Unirii. Pinocchio's street number is omitted because sources conflict. User-authorized suggestions: Arena Paintball's Army field in Giroc and Puppy Yoga at FABER on **22 November 2026**, by reservation. The yoga event expires after its final day in Bucharest time; Gruni's sold-out course remains operationally unknown.

**21 licensed photographs**, up from 17: new images for Parcul Castelului, Memorialul Revoluției, Fratelli (2013 archive) and Berăria 700 (2019 exterior crop). Archive/current-premises uncertainty and cropping are visibly disclosed. All 63 remaining exact-place images were researched without establishing compatible reuse permission; neutral localized placeholders remain. `Fotografii_de_completat.html` lists the pending work. Operator publication alone was not treated as redistribution permission.

Per-record sources/limits: `editorial.json`, `v02-coverage.json`, `v02-destinations.md` and v0.2 photo JSON evidence. Minor eligibility is documented for 31 entities. Unknown age policies and entrance coordinates are not invented.

## Inherited scope and practical limits

Offline origin selection retains 715 OSM/Wikidata suggestions and 507 road polylines. Coverage is partial, points representative and distances approximate straight-line kilometres. Origin stays in memory; language/minors preference use localStorage. Operator/directions links open only when chosen.

Earlier v0.1 evidence is preserved in `verification-v01.md`: its 156-state earlier-build matrix and performance simulations are not claimed for v0.2 hashes. No new physical-phone, native-speaker, assistive-reader, observer, projector, entrance survey or integrated-GPU frame-rate signoff is claimed. Automated axe and headless rendering have those limits.

The PDF painting/proprietary fonts remain replaced with original imagery/libre fonts. Architecture/models remain original procedural stylized geometry. No reservation or live opening-status integration is simulated.

## Delivery verification

The compact ZIP contains complete production, local launchers, Python/Node servers and Romanian instructions/reports. The source ZIP adds editable code, lockfile, tests, evidence, licenses and map derivation snapshots. Model downloads, node_modules and research caches without redistribution rights are excluded. v0.1 archives are preserved.

Final CRC/hash, clean extraction, audio byte-range and local deployment checks are recorded in `archive-verification.json` and external `Timisoara-v0.2-verification.json`. External SHA256SUMS identifies final ZIP bytes without self-reference. Windows launchers are supplied but not run on physical Windows.

Clean compact extraction passed with both included Node and Python servers: all 136 production resources return HTTP200 with matching hashes; valid audio ranges return206, invalid ranges416, HEAD200. Actual Romanian playback and paused English semantic resume pass in Chromium with zero page/HTTP/external-request errors. Both ZIPs pass CRC; extracted source additionally matches all 20 source hashes, and the Mac launcher retains execute permission. Final ZIP byte hashes live in the external verification manifest and SHA256SUMS.

# Bounded production browser QA

This read-only sweep exercised the frozen **22:41 build**: `index-BFMeh7tx.js`, `main-Q5k-PiFy.js`, and `museum-BQ1Iw3pF.js`. Exact entry hashes, per-case observations and metrics are in `docs/cross-browser.json`. Root subsequently prepared guarded route transitions and local home contrast improvements; those changes require the root's targeted final verification. This matrix does not claim to test a later rebuild.

## Result

**156 observed layout/function states:** 126 home states, 21 history-gallery states and 9 lobby/wheel states. No document horizontal overflow, broken decoded history photo, JavaScript page error, HTTP error, failed request, or attempted outbound runtime request was recorded. The request interceptor allowed only the local origin, `data:` and `blob:` URLs; no public Internet was used.

- Chromium 158.0.8127.18, Firefox 159.0, WebKit 27.2, headless on macOS.
- Viewports: 320×740,390×844,768×1024,1024×768,1440×900,1366×768, and844×390 landscape.
- Home: all six languages at every viewport in each engine, after the 3-second intro. The two final resting home screenshots have the language select blurred.
- History gallery: seven viewport states per engine with representative Romanian, English, Italian, French, Spanish and simplified-Chinese selections. Each state's six history photos was scrolled into view and decoded before its image checks. This is not an exhaustive check of all catalog photographs.
- Lobby, 2D wheel and 3D wheel: one desktop state per engine. All three engines produced a lobby canvas, a 3D wheel canvas, and a result for each wheel; the default minor filter was checked.

Visual inspection confirmed the French 390 px history text fits and all six photographs load, simplified-Chinese glyphs render in the 768 px Firefox catalog, and the lobby and 3D wheel appear as volumetric geometry. The home white text appeared low contrast over the pale image; root accepted this finding and is applying a targeted contrast improvement. No image-background WCAG contrast pass is claimed from this visual check.

## Cold navigation observations

Three fresh Chromium contexts used 390×844, device scale factor 1, mobile/touch emulation, CPU 4× slowdown, cache disabled, 150 ms emulated network latency, 1.6 Mbps download and 750 kbps upload. Metrics were observed for 4.5 seconds after the load event. The local static server uses no response compression. Chromium used ANGLE SwiftShader software rendering. These are software-browser observations, not measurements of a phone, integrated GPU, or deployed CDN.

| Run | LCP | CLS | Load event |
| --- | ---: | ---: | ---: |
|1|1.708s|0|3.351s|
|2|1.068s|0.000242|3.282s|
|3|1.072s|0.000242|3.291s|
| Median | **1.072s** | **0.000242** | **3.291s** |

The LCP entries identify the `.city` text span. This metric does not mean the background image or the full3-second fade had completed. At the final observation the title and buttons were fully opaque and the buttons had `pointer-events:auto`; the earliest enabled-event-handler time was not measured here. No 3D resource was requested by any of the three cold home navigations.

## Evidence and limits

Screenshots are in `work/final-qa/`: desktop English home, mobile Romanian home, Chinese catalog, desktop English history, mobile French history, lobby, 2D result and 3D result. The executable evidence script is `work/final-qa/cross-browser.mjs`; the final home refresh script is `work/final-qa/rest-screens.mjs`.

This sweep did not perform a physical-phone test, screen-reader review, native-speaker review, full keyboard/touch audit, source-PDF overlay, every 3D room, measured real-device FPS, or public-hosting verification. Root owns the unit/end-to-end suites and final archive validation. The temporary 4175 server was stopped after this sweep.

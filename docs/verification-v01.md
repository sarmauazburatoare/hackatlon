# Local release verification — 2026-11-13

## Delivered scope

Version0.1 is a local, static implementation of the final supplied prompt, with public hosting deferred by explicit user instruction. It includes the real nine-room museum, complete 85-appearance catalog, six languages, two shared recommendation wheels, partial offline locator and seven written heritage stories. It is a review release; missing licensed photographs, unresolved destinations and local audio are not represented as complete.

## Reproducible commands and observed results

- `npm test`: **45/45 passed**, subsequently saved with `npm test -- --reporter=json --outputFile=docs/unit-results.json`.
- `npm run build`: **exit0**, TypeScript and Vite production build. `docs/build-info.json` records every production file hash and size. One advisory remains: the lazy museum bundle is approximately562KB before gzip/151.6KB gzip. It is fetched only after requesting museum content.
- `npx playwright test`: **10/10 passed** against actual dist served by the included Node server on4174. Inventory count85; all category pages; six languages at320/390/768/1024/1440px; preserved language/focus/history; default minors and explicit location confirmation; both wheels with reduced motion; all nine rooms; story language changes; WebGL fallback; no runtime external requests on the tested entry/catalog flow; axe on five principal screens.
- `node work/final-qa/final-smoke.mjs`: **passed in Chromium, Firefox and WebKit** on the final build. Homepage→museum; culture room; French story; close;3D wheel result;390px home; location ambiguity; axe on the open location modal; source-retention fallback with native ViewTransitions disabled. **Zero page errors, HTTP failures or serious/critical modal axe violations** in all three engines. Evidence: `final-browser-smoke.json`.

The initial gallery E2E wait matched the total “09” in every collection caption and could operate on the preceding page. The wait was corrected to compare the entire collection caption; the complete inventory/media flow now passes. No failed test has been omitted from the development record or represented as a successful run.

## Independent checks

An earlier immutable build was exercised through **156 states** in Chromium/Firefox/WebKit:126 home language/viewport states,21 history/photo states and9 museum/wheel scenes. Widths320,390,768,1024,1440,1366×768 and844×390; six home languages. No recorded horizontal overflow, broken decoded history photographs, page errors, HTTP failures or runtime outbound requests. `cross-browser.json` identifies the exact earlier hashes. Final entry/transition/contrast updates were then checked by the three-engine targeted smoke above; the156-state sweep is not claimed to have run on those later hashes.

Static independent review found and the implementation fixed story restoration, lazy3D wheel readiness, localized map precision, language keyboard focus, destination-ready transitions, missing-photo proximity notices, invalid museum category behavior and first-entry controls. A second targeted source review found no remaining Important issue among those findings. Pixel-identical room/lobby camera restoration and temporary-model cleanup were separately demonstrated under reduced motion; scripts remain in project work evidence.

## Performance evidence and limits

On the earlier build, three isolated-cache Chromium mobile simulations used390×844, CPU4× slowdown,150ms latency,1.6Mbps download and750kbps upload. LCP1.708/1.068/1.072s, median1.072s; CLS0/0.000242/0.000242, median0.000242. LCP was the city text, not full background readiness; page load3.28–3.35s and the full3s title fade are recorded separately. These are simulated measurements on this Mac, not physical-phone measurements. The final localized tone adjustment does not have a new cold-performance series.

Home now loads a roughly24.5KB entry module, styles/fonts and its local background; catalog/location data and Three.js are lazy. All app resources are local. Blocking external traffic keeps tested catalog and museum operations functional. This simulates an internet outage while localhost remains reachable; physical disconnection was not performed.

No physical phone, native-speaker linguistic signoff, actual assistive-reader session, outside observer usability study, title-hidden local-recognition study, physical projector check or real integrated-GPU30fps measurement was available. No claim is made that automated axe proves complete accessibility, or that headless rendering proves real-device frame rate. Homepage image-background contrast received visual review, local tonal adjustment and text shadow; a pixel-by-pixel contrast certification is not claimed.

## Editorial scope and remaining content

See `editorial.json` for each entity, source/date, age policy, identity ambiguity and media state.84 entities/85 appearances; Paradisul Piraților shares one entity in two rooms; Muzeul Satului appears once.48 checked destinations,43 documented operational and25 minor-eligible.36 destinations remain unresolved;5 checked identities have uncertain current status. Unknown and closed records are excluded from active recommendations as appropriate.

17 authentic licensed photos;67 missing-photo entities remain neutral, with a localized notice. All84 photo searches were attempted;48 Commons lookups were rate-limited and remain incomplete. Operator photos without redistribution terms were not copied. Written stories7×6; local audio0. Uncertain child sculpture omitted according to the prompt. Six-language model review and automated completeness checks were performed; independent native-speaker review is pending.

Offline search has715 sourced suggestions and507 road polylines, derived from real OSM/Wikidata snapshots. Address coverage is partial. Coordinates are representative map/building points rather than surveyed entrances. Distances are labelled approximate straight-line distances; no travel minutes are fabricated. Origin lives in session memory; language/minor preference in localStorage.

## Visual deviations

Original decorative ImageGen background and libre font substitutions replace assets without documented web redistribution rights. The title/control composition, bird motif, two entry routes, mobile ordering and stepped gallery frames follow the supplied PDF. Local tonal adjustment, stronger button contrast and title shadow improve readability. The museum uses original procedural stylized geometry rather than licensed architectural/model assets or externally loaded GLBs. Desktop wheel controls sit beside the wheel; on narrow displays they are below it. No commercial partnership, reservation or live operational API is simulated.

## Delivery

The compact ZIP contains dist, launchers, Python/Node static servers and Romanian instructions; the source ZIP additionally includes source, lockfile, tests, editor notes, licenses and map derivation data. Archive integrity and clean extraction are recorded in `archive-verification.json` after packaging. The local deployment URL is verified separately. No online host was provisioned or deployed.

## Development source check

The final source also starts with `npm run dev`: local address search rendered with zero page/console errors. A Vite public-JSON import warning was corrected by copying the canonical public index into a generated source JSON through automatic predev/prebuild/pretest scripts. The subsequent production rebuild was byte-identical across all44 files to the tested and archived dist, so the production browser evidence and compact ZIP remain exact.

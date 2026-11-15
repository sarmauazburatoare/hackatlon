# Timișoara Local Implementation Plan

> For agentic workers: use subagent-driven-development for independent data and 3D tasks, then independent review.

**Goal:** Implement the supplied final tourism guide prompt, run locally and deliver shareable archives.
**Architecture:** Static TypeScript DOM application, fragment routes, lazy Three.js museum, one typed data source and shared recommendation algorithm.
**Tech Stack:** TypeScript, Vite, Three.js, Vitest, Playwright.
**Spec:** ../specs/2026-11-13-local-design.md and ../../prompt-final.md

## Global Constraints
- 9 rooms; 85 appearances distributed 14,7,10,4,7,11,19,7,6; Paradisul Piraților one entity in two categories.
- Languages ro,en,it,fr,es,zh-Hans; Romanian default; brand always Welcome to Timișoara.
- Minor filter initially yes; only confirmed eligible open places recommended; five/ten nearest distinct entities with origin.
- No runtime remote assets or public deployment. All assets distributed locally with provenance or missing-content notes.
- Hash routes work under a basic HTTP server. Public UI contains no school or implementation notes.

## Review Focus
- Unknown venues cannot become recommendations when minor filter is off.
- Category switching, history navigation and rapid leaving do not leak rendering or publish stale results.
- Text in six languages remains usable at 320px and 200% text zoom.
- Denied GPS and ambiguous input preserve manual pin confirmation.
- Both wheels stop at the category actually selected; repeated entities deduplicate.

## Task 1 — Shared data and editorial registry
Files: src/types.ts, src/data.ts, src/stories.ts, public/media, docs/editorial.json; tests/data.test.ts.
- [ ] Test exact inventory, translations, IDs, duplication and referenced files.
- [ ] Research official destinations and redistributable authentic photos; record source/date/license. Unknown remains explicit.
- [ ] Populate concise descriptions and seven verified heritage stories in six languages. Local recordings only if redistributable.
- [ ] Run tests; report editorial gaps.

## Task 2 — Recommendations and map
Files: src/recommend.ts, src/location.ts, tests/recommend.test.ts.
Interfaces: eligibleActivities(data, preferences), chooseRecommendation(pool, random, previousId), wheelRotation(categoryIndex,currentRotation).
- [ ] Write failing controlled-fixture tests for filters, closest branch, dedup, top five/ten, nine segments, empty categories and immediate repetition.
- [ ] Implement pure shared logic; run tests.
- [ ] Implement searchable local landmarks and adjustable georeferenced SVG pin with explicit origin confirmation.

## Task 3 — Real 3D museum
Files: src/museum.ts; geometry helpers as needed.
Interface: mountMuseum(container, options) -> {dispose, spinTo?, setLanguage?}; options provide mode, category, categories, activities, lang and callbacks.
- [ ] Build geometric roofless plan, nine rooms, reception/sofa/Bega lighting, 3D wheel and heritage objects.
- [ ] Add direct raycast room selection, eye-level movement/look/collision, proximity callback and direct external click.
- [ ] Add cleanup, resize, touch, context-loss fallback and shared wheel-angle rotation.
- [ ] Verify real geometry and scene navigation in production browser.

## Task 4 — Interface and integration
Files: src/main.ts, src/i18n.ts, src/styles.css, index.html, tests/e2e.spec.ts.
- [ ] Write end-to-end acceptance cases before UI implementation.
- [ ] Build faithful responsive homepage, categories, galleries, wheel controls/results, map dialog, story dialog, credits and accessible alternatives.
- [ ] Integrate lazy museum, shared state, persistent language/preferences and history.
- [ ] Test desktop/mobile all languages, offline local assets, all rooms, wheel and location, accessibility.

## Task 5 — Delivery
Files: README.html, PORNESTE.command, PORNESTE.bat, serve.mjs, docs/verification.md; outputs zips.
- [ ] Run typecheck, unit tests, production build, end-to-end and independent review.
- [ ] Start persistent local server from delivered production dist; open it for user.
- [ ] Extract archives and confirm a clean static server loads all app assets.
- [ ] Deliver compact ready-to-run build zip and sources zip with exact instructions and documented gaps.

# Offline locator: source and limits

The offline locator uses a real, downloaded OpenStreetMap subset and selected Wikidata coordinate records. It does not use a runtime geocoding or map-tile service. Sources were fetched on **2026-11-13**. It is intentionally a partial index: it supports named streets and available addresses in two sampled parts of Timișoara, plus selected landmarks, neighbourhoods and nearby catalog settlements. It is not a complete address index for the catalog's whole region.

## Redistributed files

- `public/data/location-index.json`: 715 suggestion points: 21 landmarks, 34 representative area points, and 660 named streets or available house-number points.
- `public/data/map-lines.json`: 507 selected street-way polylines. Coordinates are `[longitude, latitude]` in WGS84. Multiple ways can have the same street name.
- `public/data/README.txt`: attribution, download URLs, query and reuse notice, included in the public build.
- `public/data/ODbL-1.0.txt`: the Open Database License text, included in the public build.
- `src/location.ts`: accent-insensitive local lookup; returns at most 12 matches and never interpolates missing house numbers.

The public JSON is the derived database itself and can be downloaded without an account. Individual record `sources` identify original OSM nodes, ways, relations, or Wikidata items; `dataDate` is the download date, not a promise that a venue was inspected on that date. The record `license` field identifies the source license. The combined index and street geometry are offered under ODbL 1.0; original Wikidata structured-data source records remain CC0.

## Primary sources

OpenStreetMap extracts were actually retrieved via the official API:

1. [Central Timișoara, bbox 21.22,45.75,21.23,45.76](https://api.openstreetmap.org/api/0.6/map?bbox=21.22,45.75,21.23,45.76), 4,268,056 downloaded bytes.
2. [Martirilor area, bbox 21.231,45.729,21.238,45.739](https://api.openstreetmap.org/api/0.6/map?bbox=21.231,45.729,21.238,45.739), 1,557,602 downloaded bytes.

The API includes complete ways intersecting its requested box and relations referencing included geometry, so some street fragments extend beyond those boxes. The source snapshot is kept under `work/map-source/`. Unresponsive Overpass mirror attempts were not used as source data. The OpenStreetMap API downloads, not a claimed Overpass download, supply the OSM records here.

Selected landmarks, districts and settlements come from a real [Wikidata Query Service](https://query.wikidata.org/) response around `Point(21.23 45.75)` with radius 35 km, fetched as JSON, 368,272 bytes and 878 returned records. Only an explicitly selected subset is included. The query is reproduced in the public README. For example, [Piața Unirii](https://www.wikidata.org/wiki/Q422722), [Muzeul Apei](https://www.wikidata.org/wiki/Q134311609), [Herneacova](https://www.wikidata.org/wiki/Q776040), and [Moșnița Nouă](https://www.wikidata.org/wiki/Q12724955) provide representative coordinates.

OpenStreetMap is licensed under the [Open Database License](https://www.openstreetmap.org/copyright); Wikidata structured data is released under [CC0](https://www.wikidata.org/wiki/Wikidata:Licensing). Display **© OpenStreetMap contributors** with a link to the copyright page beside the map or in its continuously available attribution. The downloadable data notice links directly to both licensing pages.

## Derivation and accuracy

`work/map-source/build-index.py` produces the two JSON files from the downloaded source snapshots. It retains source entity URLs, uses available OSM building numbers instead of inventing addresses, combines duplicate names and keeps one named street suggestion. A street suggestion uses an actual node nearest the centre of that street's available extent. A building point uses the centre of the available building geometry's bounding box; it is not an entrance. OSM suburb points and selected Wikidata areas use representative centres. Duplicate names from a selected Wikidata landmark replace a same-named street-fragment suggestion. Road polylines preserve the available OSM way nodes.

The precision values deliberately mean:

- `landmark`: an approximate landmark point; the actual entrance must be checked.
- `area`: a representative point inside or near a named neighbourhood/settlement; it is not a property address.
- `street`: an approximate available street segment or OSM building/address point; inspect the detailed suggestion and confirm or move the pin.

Search ignores accents including Romanian comma/cedilla variants, case, and punctuation. Numeric tokens match complete numbers, so searching a missing number does not silently return a different number. The alias “Centru” points to Cetate and still requires selection and pin confirmation. “Martirilor” can produce both the actual Calea Martirilor 1989 street and the Girocului / Martirilor area; these have explicit locality and precision details. Nearby settlements include Giroc, Chișoda, Moșnița Nouă, Moșnița Veche, Dumbrăvița, Bazoșu Nou, Herneacova, Recaș, Izvin, Remetea Mare and others.

The locator coverage is longitude 21.10–21.56 and latitude 45.66–45.89. This extent accommodates the supplied suggestions; it is not a navigation boundary. The map is for choosing an origin. It does not establish opening hours, minor access, travel times, safe routes, accessibility, or verified venue status. The recommendation engine independently requires verified open venue records and, when enabled, confirmed minor access. Distances are great-circle kilometres and must be labelled approximate straight-line distances.

## Verified checks

`npm test -- tests/recommend.test.ts tests/location.test.ts` covers accent and numeric matching, locality/precision for ambiguous terms, nearby settlements, bounded suggestions, coordinate validity, source coverage bounds, filtering, deduplication, branch selection, global five/ten limits, deterministic choices for all nine segments, one reroll maximum, immediate-repeat prevention, and shared stop angles. Pin adjustment, GPS refusal, session memory and UI confirmations are integration responsibilities and must be checked in the application. No physical entrance or exhaustive street/address survey was performed.

## Source snapshot checksums

SHA-256 of the downloaded source files:

```text
center.osm          d0616a7928a4022297144b09618d52d45dc3a78c74605fb03cbbefeccf676860
martirilor.osm      830f26e7c6d9f15f3030aa95009c210e41ea2265f5d947aa420579cd7e30fae3
wikidata-area.json 599abf7ae0f6e59e7f1edf9a65d8758445570f83938a925590d2ce6cefeca02e
```

## Vite source generation

`public/data/location-index.json` remains canonical and publicly downloadable. `scripts/sync-data.mjs` validates and generates `src/location-index.generated.json` before dev, build and unit tests; do not edit the generated copy. This avoids importing directly from Vite public assets during development.

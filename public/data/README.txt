Offline location data — Timișoara, cameră cu cameră
Downloaded and derived: 2026-11-13

© OpenStreetMap contributors. OpenStreetMap data is available under the
Open Database License (ODbL) 1.0: https://www.openstreetmap.org/copyright
License text: ./ODbL-1.0.txt

location-index.json is a derived and combined offline database, made available
under ODbL 1.0. Individual unmodified Wikidata structured-data source records
remain available under CC0 1.0. The license field identifies each source's
license; the combined database is offered under ODbL 1.0.
https://www.wikidata.org/wiki/Wikidata:Licensing
https://creativecommons.org/publicdomain/zero/1.0/

map-lines.json contains selected OpenStreetMap street line geometry and is
available under ODbL 1.0. It is intended as a simplified orientation layer.

Every index record contains source entity URLs and the date the source was
fetched. Geometry and points are approximate; no point is a certified building
entrance, an accessible entrance, a navigation route, or evidence a venue is open.

Coverage: streets and available building/house-number points from two small
OpenStreetMap API extracts (central Timișoara and Calea Martirilor 1989), plus a
curated set of Wikidata landmarks, districts, and nearby settlements. This is
NOT a complete city/regional address index. Unmatched numbers must be located
and confirmed with the adjustable pin. No interpolation of missing house
numbers is performed.

OSM download URLs:
https://api.openstreetmap.org/api/0.6/map?bbox=21.22,45.75,21.23,45.76
https://api.openstreetmap.org/api/0.6/map?bbox=21.231,45.729,21.238,45.739

Wikidata source query (https://query.wikidata.org/sparql):
SELECT ?item ?itemLabel ?coord WHERE {
 SERVICE wikibase:around {
  ?item wdt:P625 ?coord .
  bd:serviceParam wikibase:center "Point(21.23 45.75)"^^geo:wktLiteral ;
                  wikibase:radius "35" .
 }
 SERVICE wikibase:label { bd:serviceParam wikibase:language "ro,en" . }
} LIMIT 3000

No third-party map tiles, remote fonts, runtime geocoder, runtime map service,
API key, or hosted location database is used. User coordinates are not part of
these data files. Geolocation must be requested only through an explicit user
action; the UI is responsible for storing a confirmed visitor point in memory.

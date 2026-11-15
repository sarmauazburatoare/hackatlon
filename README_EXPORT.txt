EXPORT COMPLET — TIMIȘOARA, CAMERĂ CU CAMERĂ
Versiunea publicată: v0.3.0 · 14 noiembrie 2026
Commit sursă: e8d8d9b81a808e320d6596c7a7ec86c87880f340
Site: https://timisoara-camera-cu-camera-2026.popescu-andrei314159.chatgpt.site/

Acest export include exact fișierele commitului publicat, plus documentul de publicare și sursele pentru regenerarea hărții.
README.md și unele rapoarte păstrează istoricul livrării locale de dinaintea publicării; starea online actuală este în PUBLICARE_ONLINE.json.

EDITARE ȘI COMPILARE
Necesită Node.js 22 sau mai nou. Din acest folder:
  npm ci
  npm run dev
Pentru buildul final:
  npm run build
Pentru testele unitare:
  npm test
Pentru testele în browser: npx playwright install chromium firefox webkit, apoi npm run test:e2e.

PORNIREA BUILDULUI INCLUS
Windows: PORNESTE.bat
Mac: PORNESTE.command
Este necesar Python 3 sau Node.js. Alternativ: node serve.mjs sau python3 serve.py.
Browser: http://localhost:8000/ — păstrează fereastra serverului deschisă.
Extrage întreaga arhivă înainte de pornire. Aplicația necesită serverul HTTP local; dist/index.html nu se pornește direct prin file://.
Rularea locală nu necesită contul autorului sau acces la proiectul său Sites.

STRUCTURĂ
src/ — codul TypeScript, componentele 2D/3D, stiluri, traduceri, date și povești
public/ — toate imaginile, cele 42 MP3, subtitrări, date de hartă și licențe
dist/ — versiunea compilată publicată
scripts/ — sincronizare date, integrare editorială și generator audio
tests/ — teste unitare și teste în browser
docs/ — prompt, proveniență, verificări și limite editoriale
work/map-source/ — generatorul indexului de hartă și cele trei surse efectiv folosite
.openai/hosting.json — configurația proiectului Sites existent, fără chei de acces
package.json și package-lock.json — dependențe și comenzi

42 MP3 sunt incluse și funcționează fără generare la rulare. Modelele și mediul Python de generare a vocilor se obțin separat conform docs/v02-audio-provenance.json; nu sunt necesare pentru build sau pentru site.
Sursele și condițiile drepturilor media sunt păstrate în docs/editorial.json și în Credite & surse.
MANIFEST-SHA256.json permite verificarea tuturor fișierelor exportate.

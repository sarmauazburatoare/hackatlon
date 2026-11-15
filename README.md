# Timișoara, cameră cu cameră — v0.3 local

Ghidul include 9 camere, **84 de locuri distincte / 85 de apariții**, catalog 2D, muzeu 3D, roți de recomandări și hartă locală, în română, engleză, italiană, franceză, spaniolă și chineză simplificată. **Nu este publicat online.** Livrare locală: **14 noiembrie 2026**; cercetare documentară: 13–14 noiembrie 2026.

## Pornire și partajare

1. Extrage **întreaga arhivă** într-un folder; păstrează `dist` lângă fișierele de pornire.
2. Pe Mac deschide `PORNESTE.command`; pe Windows, `PORNESTE.bat`. Calculatorul trebuie să aibă Python 3 sau Node.js.
3. Deschide adresa locală afișată, de regulă `http://localhost:8000/`. Lasă fereastra serverului deschisă; `Ctrl+C` îl oprește.

Pornire manuală din folderul extras: `python3 serve.py` (Windows: `py -3 serve.py`) sau `node serve.mjs`.

Pentru partajare trimite **Timisoara-local-v0.3.zip**; pentru codul editabil și documentația completă, **Timisoara-surse-v0.3.zip**. Destinatarul trebuie să extragă arhiva și să pornească serverul. ZIP-ul nu rulează direct pe telefon, iar aplicația nu se deschide prin `file://` sau dublu clic pe `dist/index.html`. `localhost` nu este un link public. Pentru acces obișnuit de pe telefon este necesară o publicare ulterioară pe un serviciu de hosting.

[Instrucțiuni de pornire în HTML](README.html) · [Raport de livrare](Raport_livrare.html) · [Fotografii: 10 lipsă și 52 cu drepturi de clarificat](Fotografii_de_completat.html)

## Conținut și audio

- **83 de destinații identificate**, 72 cu stare documentată ca deschisă; 31 de entități eligibile cu filtrul pentru minori, în condițiile de vârstă și acces publicate. Paradisul Piraților păstrează statutul neconfirmat și este exclus din recomandări. Identitatea istorică este restaurantul/locul de joacă de la Cantina 4C, Aleea Studenților; migrarea web către Megazone Bites este documentată, dar funcționarea actuală a amplasamentului original nu este confirmată. Nu i-a fost atribuit un URL de succesor. Imaginea autentică veche „Tunurile Piraților” are o legendă de arhivă explicită.
- **74 de imagini disponibile, cu 53 mai multe decât în v0.2:** 22 de fotografii cu licență documentată și 52 de imagini preluate de pe paginile operatorilor, ale căror condiții de reutilizare nu sunt publicate. În acest al doilea grup, imaginea Roller Dreams este un banner ilustrativ, etichetat vizibil ca nefiind o fotografie verificată a locației. **10 locuri au încă rame neutre.** Sursele și autorii cunoscuți sunt indicați în „Credite & surse”; acordul utilizatorului pentru această selecție nu constituie o licență acordată de titularii drepturilor. Imaginile de arhivă sunt etichetate și nu certifică aspectul actual al locului.
- **42 de fișiere MP3 locale: 7 povești × 6 limbi**, aproximativ 13 min 41 s în total. Toate au trecut decodarea tehnică; 33 de clipuri distincte au avut verificări automate de limbă prin transcriere. Nu există validare de vorbitori nativi pentru traducere sau pronunție.

Audio pornește numai prin **Play**. Sunetul este inițial pe mut; primul Play îl activează dacă nu ai ales explicit să îl păstrezi mut. La schimbarea limbii, redarea continuă din pasajul corespunzător, cu propoziția curentă evidențiată. Textul și audio funcționează offline.

Corecțiile confirmate sunt Gruni, Vineri 15, Why Pizza și Riyo Wok & Sushi; Berăria înseamnă Berăria 700, iar Pinocchio este localul din Piața Unirii. Au fost alese Arena Paintball din Giroc și Puppy Yoga la FABER pe **22 noiembrie 2026**; evenimentul este exclus automat din recomandări după această dată.

## Offline și limite

Interfața, resursele incluse, catalogul, muzeul compatibil WebGL, harta, indexul local și poveștile sunt servite de pe calculator. Linkurile operatorilor și traseele externe necesită internet. Localizarea poate fi aleasă manual. Harta are acoperire parțială; coordonatele sunt puncte reprezentative, nu intrări măsurate, iar distanțele sunt aproximative, în linie dreaptă.

Rezultatele și numărul testelor finale: **vezi `docs/verification.md`**. Rămân de făcut revizia de vorbitori nativi, verificări pe dispozitive fizice, completarea celor 10 imagini lipsă și clarificarea drepturilor pentru cele 52 de imagini ale operatorilor. Fonturile, fundalul și modelele 3D urmează proveniența din `docs/asset-provenance.json`; licențele însoțesc proiectul.

## Dezvoltare

Cu Node.js 22 sau mai nou: `npm ci`, `npm test`, `npm run build`. Pentru testele de browser: `npx playwright install chromium firefox webkit`, apoi `npm run test:e2e`; acestea folosesc buildul `dist`, pe portul 4174. `npm run dev` pornește mediul de editare.

Datele și traducerile au un catalog comun; resursele de rulare sunt locale. Sursele și rapoartele detaliate se află în arhiva cu surse, inclusiv `docs/editorial.json`, `docs/v03-coverage.json`, `docs/map-provenance.md` și `docs/verification.md`.

import type {Activity,Category} from './types';
// Shared catalog; v0.3 editorial evidence and image rights are in docs/editorial.json.
export const categories:Category[]=[
  {
    "id": "adventure",
    "number": 1,
    "color": "#52C9C2",
    "symbol": "↗",
    "name": {
      "ro": "Distracție & aventură",
      "en": "Fun & adventure",
      "it": "Divertimento e avventura",
      "fr": "Loisirs et aventure",
      "es": "Diversión y aventura",
      "zh-Hans": "娱乐与冒险"
    },
    "intro": {
      "ro": "Mișcare, joc și provocări de încercat împreună.",
      "en": "Movement, games and challenges to try together.",
      "it": "Movimento, giochi e sfide da provare insieme.",
      "fr": "Du mouvement, des jeux et des défis à partager.",
      "es": "Movimiento, juegos y retos para compartir.",
      "zh-Hans": "一起运动、游戏，迎接新的挑战。"
    }
  },
  {
    "id": "kids",
    "number": 2,
    "color": "#F2D66D",
    "symbol": "◒",
    "name": {
      "ro": "Bucurii pentru cei mici",
      "en": "Little discoveries",
      "it": "Scoperte per i più piccoli",
      "fr": "Découvertes pour les petits",
      "es": "Descubrimientos para peques",
      "zh-Hans": "亲子时光"
    },
    "intro": {
      "ro": "Ieșiri gândite în jurul curiozității copiilor.",
      "en": "Outings shaped around children’s curiosity.",
      "it": "Uscite pensate per la curiosità dei bambini.",
      "fr": "Des sorties au rythme de la curiosité des enfants.",
      "es": "Planes para la curiosidad de los niños.",
      "zh-Hans": "以孩子的好奇心为起点，安排一次出游。"
    }
  },
  {
    "id": "nature",
    "number": 3,
    "color": "#8E9B68",
    "symbol": "♧",
    "name": {
      "ro": "Escapade în aer liber",
      "en": "Outdoor escapes",
      "it": "Fughe all’aperto",
      "fr": "Escapades en plein air",
      "es": "Escapadas al aire libre",
      "zh-Hans": "户外漫游"
    },
    "intro": {
      "ro": "Parcuri, plimbări și o altă perspectivă asupra orașului.",
      "en": "Parks, walks and another view of the city.",
      "it": "Parchi, passeggiate e un altro sguardo sulla città.",
      "fr": "Des parcs, des promenades et un autre regard sur la ville.",
      "es": "Parques, paseos y otra mirada a la ciudad.",
      "zh-Hans": "走进公园，沿路漫步，换个角度看城市。"
    }
  },
  {
    "id": "relax",
    "number": 4,
    "color": "#C3A4D8",
    "symbol": "≈",
    "name": {
      "ro": "Relaxare & răsfăț",
      "en": "Rest & relaxation",
      "it": "Relax e benessere",
      "fr": "Détente et bien-être",
      "es": "Descanso y bienestar",
      "zh-Hans": "放松身心"
    },
    "intro": {
      "ro": "Lasă loc unei pauze, pe apă sau pe mal.",
      "en": "Make room for a pause, on the water or beside it.",
      "it": "Concediti una pausa, sull’acqua o lungo la riva.",
      "fr": "Accordez-vous une pause, sur l’eau ou sur la berge.",
      "es": "Haz una pausa, en el agua o junto a ella.",
      "zh-Hans": "在水上或岸边，给自己留一段休息时间。"
    }
  },
  {
    "id": "night",
    "number": 5,
    "color": "#F05B9E",
    "symbol": "☾",
    "name": {
      "ro": "Nopți în oraș",
      "en": "After dark",
      "it": "Notti in città",
      "fr": "Nuits en ville",
      "es": "Noches en la ciudad",
      "zh-Hans": "城市之夜"
    },
    "intro": {
      "ro": "Muzică și întâlniri de seară. Consultă condițiile fiecărui loc.",
      "en": "Music and evening gatherings. Check each venue’s admission rules.",
      "it": "Musica e incontri serali. Controlla le condizioni di accesso.",
      "fr": "Musique et rencontres en soirée. Vérifiez les conditions d’entrée.",
      "es": "Música y encuentros nocturnos. Consulta las condiciones de acceso.",
      "zh-Hans": "音乐与夜间聚会。请查看各场所的入场规定。"
    }
  },
  {
    "id": "cafes",
    "number": 6,
    "color": "#8B6454",
    "symbol": "☕",
    "name": {
      "ro": "Cafenele",
      "en": "Coffee stops",
      "it": "Caffetterie",
      "fr": "Cafés",
      "es": "Cafeterías",
      "zh-Hans": "咖啡馆"
    },
    "intro": {
      "ro": "Alege o pauză de cafea între două descoperiri.",
      "en": "Choose a coffee break between discoveries.",
      "it": "Scegli una pausa caffè tra una scoperta e l’altra.",
      "fr": "Choisissez une pause café entre deux découvertes.",
      "es": "Elige una pausa de café entre descubrimientos.",
      "zh-Hans": "在两次探索之间，停下来喝杯咖啡。"
    }
  },
  {
    "id": "food",
    "number": 7,
    "color": "#F28B68",
    "symbol": "◡",
    "name": {
      "ro": "Descoperiri culinare",
      "en": "Food discoveries",
      "it": "Scoperte gastronomiche",
      "fr": "Découvertes gourmandes",
      "es": "Descubrimientos gastronómicos",
      "zh-Hans": "寻味之旅"
    },
    "intro": {
      "ro": "Mese în oraș, bucătării diferite și locuri de întâlnire.",
      "en": "Eating out, different cuisines and places to meet.",
      "it": "Mangiare fuori, cucine diverse e luoghi d’incontro.",
      "fr": "Des repas en ville, des cuisines variées et des rencontres.",
      "es": "Comer fuera, cocinas diferentes y lugares para reunirse.",
      "zh-Hans": "在城里品尝不同风味，找到相聚的地方。"
    }
  },
  {
    "id": "culture",
    "number": 8,
    "color": "#DEC7BD",
    "symbol": "⌑",
    "name": {
      "ro": "Cultură & muzee",
      "en": "Culture & museums",
      "it": "Cultura e musei",
      "fr": "Culture et musées",
      "es": "Cultura y museos",
      "zh-Hans": "文化与博物馆"
    },
    "intro": {
      "ro": "Artă, memorie și patrimoniul cotidian al Banatului.",
      "en": "Art, memory and the everyday heritage of Banat.",
      "it": "Arte, memoria e patrimonio quotidiano del Banato.",
      "fr": "Art, mémoire et patrimoine quotidien du Banat.",
      "es": "Arte, memoria y patrimonio cotidiano del Banato.",
      "zh-Hans": "艺术、记忆，以及巴纳特地区的日常文化遗产。"
    }
  },
  {
    "id": "history",
    "number": 9,
    "color": "#B8BDC5",
    "symbol": "♜",
    "name": {
      "ro": "Timișoara istorică",
      "en": "Historic Timișoara",
      "it": "Timișoara storica",
      "fr": "Timișoara historique",
      "es": "Timișoara histórica",
      "zh-Hans": "历史中的蒂米什瓦拉"
    },
    "intro": {
      "ro": "Piețe și clădiri care te îndeamnă să privești mai atent.",
      "en": "Squares and buildings that reward a closer look.",
      "it": "Piazze ed edifici da osservare con attenzione.",
      "fr": "Des places et des bâtiments à regarder de plus près.",
      "es": "Plazas y edificios para observar con calma.",
      "zh-Hans": "放慢脚步，细看广场与建筑的故事。"
    }
  }
];
export const activities:Activity[]=[
  {
    "id": "beat-seven",
    "name": {
      "ro": "Beat Se7en",
      "en": "Beat Se7en",
      "it": "Beat Se7en",
      "fr": "Beat Se7en",
      "es": "Beat Se7en",
      "zh-Hans": "Beat Se7en"
    },
    "description": {
      "ro": "Coordonează pașii echipei pe o podea LED interactivă. În clădirea Modex, jocul pune la încercare reflexele și cooperarea; consultă operatorul pentru rezervare și siguranță.",
      "en": "Coordinate your team’s steps on an interactive LED floor. Inside the Modex building, the game challenges reflexes and cooperation; check reservations and safety requirements with the operator.",
      "it": "Coordina i passi della squadra su un pavimento LED interattivo. Nel palazzo Modex, il gioco mette alla prova riflessi e collaborazione; verifica prenotazione e sicurezza.",
      "fr": "Coordonnez les pas de votre équipe sur un sol LED interactif. Dans le bâtiment Modex, le jeu sollicite réflexes et coopération ; vérifiez réservation et sécurité.",
      "es": "Coordina los pasos del equipo sobre un suelo LED interactivo. En el edificio Modex, el juego pone a prueba reflejos y cooperación; consulta reservas y seguridad.",
      "zh-Hans": "在 Modex 大楼的互动 LED 地板上，与队友协调步伐、挑战反应与合作能力。请向经营方确认预约方式和安全要求。"
    },
    "categories": [
      "adventure"
    ],
    "venues": [
      {
        "id": "beat-seven-main",
        "name": "Beat Se7en",
        "address": "Piața Iancu Huniade 3, Modex, etaj 2, Timișoara",
        "verified": true,
        "status": "open",
        "minors": "unknown",
        "url": "https://beatse7en.ro/",
        "linkType": "official",
        "sources": [
          "https://beatse7en.ro/",
          "https://beatse7en.com/"
        ],
        "verifiedAt": "2026-11-14"
      }
    ],
    "photo": {
      "path": "/media/photos-v03/outdoor-beat-seven.webp",
      "author": "Autor neprecizat (site-ul operatorului)",
      "source": "https://beatse7en.ro/",
      "license": "Sursă: site-ul operatorului · licență de reutilizare neprecizată",
      "rightsStatus": "operator-homepage-unconfirmed",
      "alt": {
        "ro": "Jucători pe podeaua LED de la Beat Se7en.",
        "en": "Players on the LED floor at Beat Se7en.",
        "it": "Giocatori sul pavimento LED di Beat Se7en.",
        "fr": "Joueurs sur le sol LED de Beat Se7en.",
        "es": "Jugadores en el suelo LED de Beat Se7en.",
        "zh-Hans": "Beat Se7en 的玩家在 LED 地板上游戏。"
      }
    }
  },
  {
    "id": "hype",
    "name": {
      "ro": "Hype Play by Kiddo",
      "en": "Hype Play by Kiddo",
      "it": "Hype Play by Kiddo",
      "fr": "Hype Play by Kiddo",
      "es": "Hype Play by Kiddo",
      "zh-Hans": "Hype Play by Kiddo"
    },
    "description": {
      "ro": "Încearcă o provocare interactivă alături de prieteni, cu mișcare și coordonare. Verifică la operator jocurile disponibile, regulile de siguranță și condițiile pentru grupul tău.",
      "en": "Try an interactive challenge with friends, combining movement and coordination. Check available games, safety instructions and the conditions for your group with the operator before visiting.",
      "it": "Prova una sfida interattiva con gli amici, tra movimento e coordinazione. Verifica con il gestore i giochi disponibili, le regole di sicurezza e le condizioni del gruppo.",
      "fr": "Essayez un défi interactif entre amis, mêlant mouvement et coordination. Vérifiez auprès du lieu les jeux disponibles, les consignes de sécurité et les conditions pour votre groupe.",
      "es": "Prueba un reto interactivo con amigos que combina movimiento y coordinación. Consulta los juegos disponibles, las normas de seguridad y las condiciones para vuestro grupo.",
      "zh-Hans": "和朋友一起挑战互动游戏，体验运动与配合的乐趣。到访前请向经营方确认可选游戏、安全要求，以及适合你们团队的参与条件。"
    },
    "categories": [
      "adventure"
    ],
    "venues": [
      {
        "id": "hype-main",
        "name": "Hype Play by Kiddo",
        "address": "Calea Stan Vidrighin 5D, Timișoara",
        "verified": true,
        "status": "open",
        "minors": "yes",
        "url": "https://hypeplay.ro/hype-timisoara/contact/",
        "linkType": "official",
        "sources": [
          "https://hypeplay.ro/hype-timisoara/contact/"
        ],
        "verifiedAt": "2026-11-13",
        "adultRequired": true,
        "lat": 45.7433807,
        "lon": 21.2559901
      }
    ],
    "photo": {
      "path": "/media/photos-v03/outdoor-hype.webp",
      "author": "Autor neprecizat (site-ul operatorului)",
      "source": "https://hypeplay.ro/hype-timisoara/",
      "license": "Sursă: site-ul operatorului · licență de reutilizare neprecizată",
      "rightsStatus": "operator-homepage-unconfirmed",
      "alt": {
        "ro": "Zonă cu bureți și echipamente de joacă la Hype Play.",
        "en": "Foam pit and play equipment at Hype Play.",
        "it": "Vasca di gommapiuma e giochi da Hype Play.",
        "fr": "Bac de mousse et équipements chez Hype Play.",
        "es": "Foso de espuma y juegos de Hype Play.",
        "zh-Hans": "Hype Play 的海绵池与游乐设施。"
      }
    }
  },
  {
    "id": "skydiving",
    "name": {
      "ro": "Skydiving Simulator",
      "en": "Skydiving Simulator",
      "it": "Skydiving Simulator",
      "fr": "Skydiving Simulator",
      "es": "Skydiving Simulator",
      "zh-Hans": "Skydiving Simulator"
    },
    "description": {
      "ro": "Încearcă zborul în tunelul de vânt de la Zero Gravity Center, Ghiroda. Rezervare și verificarea condițiilor de siguranță obligatorii.",
      "en": "Try the wind tunnel at Zero Gravity Center in Ghiroda. Book and check the safety requirements before visiting.",
      "it": "Prova il tunnel del vento di Zero Gravity Center a Ghiroda. Prenota e verifica i requisiti di sicurezza.",
      "fr": "Essayez la soufflerie de Zero Gravity Center à Ghiroda. Réservez et vérifiez les conditions de sécurité.",
      "es": "Prueba el túnel de viento de Zero Gravity Center en Ghiroda. Reserva y consulta los requisitos de seguridad.",
      "zh-Hans": "在 Ghiroda 的 Zero Gravity Center 体验风洞飞行。请提前预约并确认安全要求。"
    },
    "categories": [
      "adventure"
    ],
    "venues": [
      {
        "id": "skydiving-unconfirmed",
        "name": "Zero Gravity Center — tunel de vânt",
        "address": "Calea Speranței 10, Ghiroda, Timiș",
        "verified": true,
        "status": "open",
        "minors": "yes",
        "sources": [
          "https://zerogravitycenter.ro/",
          "https://booking.zerogravitycenter.ro/en/flight-club"
        ],
        "url": "https://zerogravitycenter.ro/",
        "linkType": "official",
        "minimumAge": 4,
        "verifiedAt": "2026-11-13"
      }
    ]
  },
  {
    "id": "bowling",
    "name": {
      "ro": "Bowling — Gentlemen’s Social Club",
      "en": "Bowling — Gentlemen’s Social Club",
      "it": "Bowling — Gentlemen’s Social Club",
      "fr": "Bowling — Gentlemen’s Social Club",
      "es": "Bolos — Gentlemen’s Social Club",
      "zh-Hans": "保龄球 — Gentlemen’s Social Club"
    },
    "description": {
      "ro": "Bowling la Gentlemen’s Social Club, în Shopping City. Confirmă rezervarea și condițiile pentru copii înainte de vizită.",
      "en": "Bowling at Gentlemen’s Social Club in Shopping City. Confirm reservations and children’s admission before visiting.",
      "it": "Bowling al Gentlemen’s Social Club di Shopping City. Verifica prenotazione e accesso dei bambini.",
      "fr": "Bowling au Gentlemen’s Social Club de Shopping City. Vérifiez la réservation et les conditions pour les enfants.",
      "es": "Bolos en Gentlemen’s Social Club, en Shopping City. Confirma la reserva y el acceso de menores.",
      "zh-Hans": "在 Shopping City 的 Gentlemen’s Social Club 打保龄球。请确认预约和儿童入场规定。"
    },
    "categories": [
      "adventure"
    ],
    "venues": [
      {
        "id": "bowling-unconfirmed",
        "name": "Bowling — Gentlemen’s Social Club",
        "address": "Calea Șagului 100, Shopping City Timișoara",
        "verified": true,
        "status": "open",
        "minors": "unknown",
        "sources": [
          "https://www.gomry.com/event/Bowling-QUoZIaEAsrZe94p2DRAt",
          "https://www.shoppingcitytm.ro/contact",
          "https://am-gasit.ro/gentlemens-social-club-str-calea-sagului-100-300426-timisoara/"
        ],
        "url": "https://www.google.com/maps/search/?api=1&query=Gentlemen+Social+Club&query_place_id=ChIJ6dDmfYZdRUcR4ZYUMW0Wapw",
        "linkType": "map",
        "verifiedAt": "2026-11-13"
      }
    ]
  },
  {
    "id": "rolers",
    "name": {
      "ro": "Rolers Dreams",
      "en": "Rolers Dreams",
      "it": "Rolers Dreams",
      "fr": "Rolers Dreams",
      "es": "Rolers Dreams",
      "zh-Hans": "Rolers Dreams"
    },
    "description": {
      "ro": "Încearcă patinajul pe patine cu patru roți, într-un decor inspirat de disco. Alege sediul Roller Dreams din Dumbrăvița și verifică echipamentul, regulile și programul înainte de vizită.",
      "en": "Try four-wheel roller skating in a disco-inspired setting. Choose the Roller Dreams branch in Dumbrăvița and check equipment, rules and opening information before planning your visit.",
      "it": "Prova il pattinaggio a quattro ruote in un ambiente ispirato alla disco. Scegli Roller Dreams a Dumbrăvița e verifica attrezzatura, regole e apertura prima della visita.",
      "fr": "Essayez les patins à quatre roues dans un décor disco. Choisissez Roller Dreams à Dumbrăvița et vérifiez l’équipement, les règles et les horaires avant votre visite.",
      "es": "Prueba los patines de cuatro ruedas en un entorno disco. Elige Roller Dreams en Dumbrăvița y consulta equipo, normas y apertura antes de la visita.",
      "zh-Hans": "在迪斯科风格的场地体验四轮溜冰。此条目选定 Dumbrăvița 的 Roller Dreams 分店；到访前请确认装备、参与规则及开放安排。"
    },
    "categories": [
      "adventure"
    ],
    "venues": [
      {
        "id": "rolers-main",
        "name": "Roller Dreams — Dumbrăvița",
        "address": "Strada Gramma II 1, Dumbrăvița",
        "verified": true,
        "status": "open",
        "minors": "unknown",
        "url": "https://rollerdreams.ro/contact/",
        "linkType": "official",
        "sources": [
          "https://rollerdreams.ro/contact/"
        ],
        "verifiedAt": "2026-11-13",
        "lat": 45.79536494983532,
        "lon": 21.245222153415042
      }
    ],
    "photo": {
      "path": "/media/photos-v03/root-rolers.webp",
      "author": "Roller Dreams (creator neprecizat)",
      "source": "https://rollerdreams.ro/",
      "license": "Site-ul operatorului · licență de reutilizare neprecizată",
      "alt": {
        "ro": "Ilustrație de prezentare cu patine cu rotile și lumini colorate.",
        "en": "Promotional illustration of roller skates and colorful lights.",
        "it": "Illustrazione promozionale con pattini a rotelle e luci colorate.",
        "fr": "Illustration promotionnelle avec des patins à roulettes et des lumières colorées.",
        "es": "Ilustración promocional con patines y luces de colores.",
        "zh-Hans": "带有轮滑鞋和彩色灯光的宣传插图。"
      },
      "caption": {
        "ro": "Imagine promoțională ilustrativă publicată de operator; nu este o fotografie verificată a locației.",
        "en": "Illustrative promotional image published by the operator; this is not a verified photograph of the venue.",
        "it": "Immagine promozionale illustrativa pubblicata dal gestore; non è una fotografia verificata del locale.",
        "fr": "Image promotionnelle illustrative publiée par l’exploitant ; il ne s’agit pas d’une photographie vérifiée du lieu.",
        "es": "Imagen promocional ilustrativa publicada por el operador; no es una fotografía verificada del local.",
        "zh-Hans": "运营方发布的宣传示意图片，并非经核实的场所实景照片。"
      },
      "illustrative": true,
      "rightsStatus": "operator-homepage-unconfirmed"
    }
  },
  {
    "id": "animus",
    "name": {
      "ro": "Animus — Floor Is Lava",
      "en": "Animus — Floor Is Lava",
      "it": "Animus — Floor Is Lava",
      "fr": "Animus — Floor Is Lava",
      "es": "Animus — Floor Is Lava",
      "zh-Hans": "Animus — Floor Is Lava"
    },
    "description": {
      "ro": "Încearcă o provocare interactivă alături de prieteni, cu mișcare și coordonare. Verifică la operator jocurile disponibile, regulile de siguranță și condițiile pentru grupul tău.",
      "en": "Try an interactive challenge with friends, combining movement and coordination. Check available games, safety instructions and the conditions for your group with the operator before visiting.",
      "it": "Prova una sfida interattiva con gli amici, tra movimento e coordinazione. Verifica con il gestore i giochi disponibili, le regole di sicurezza e le condizioni del gruppo.",
      "fr": "Essayez un défi interactif entre amis, mêlant mouvement et coordination. Vérifiez auprès du lieu les jeux disponibles, les consignes de sécurité et les conditions pour votre groupe.",
      "es": "Prueba un reto interactivo con amigos que combina movimiento y coordinación. Consulta los juegos disponibles, las normas de seguridad y las condiciones para vuestro grupo.",
      "zh-Hans": "和朋友一起挑战互动游戏，体验运动与配合的乐趣。到访前请向经营方确认可选游戏、安全要求，以及适合你们团队的参与条件。"
    },
    "categories": [
      "adventure"
    ],
    "venues": [
      {
        "id": "animus-main",
        "name": "Animus — Floor Is Lava",
        "address": "VOX Technology Park, clădirea B, etaj 1, Timișoara",
        "verified": true,
        "status": "open",
        "minors": "yes",
        "url": "https://animusarena.ro/en/what-is-animus",
        "linkType": "official",
        "sources": [
          "https://animusarena.ro/en/what-is-animus"
        ],
        "verifiedAt": "2026-11-13"
      }
    ],
    "photo": {
      "path": "/media/photos-v03/outdoor-animus.webp",
      "author": "Autor neprecizat (site-ul operatorului)",
      "source": "https://animusarena.ro/",
      "license": "Sursă: site-ul operatorului · licență de reutilizare neprecizată",
      "rightsStatus": "operator-homepage-unconfirmed",
      "alt": {
        "ro": "Participanți pe podeaua interactivă din ANIMUS Arena.",
        "en": "Participants on the interactive floor at ANIMUS Arena.",
        "it": "Partecipanti sul pavimento interattivo di ANIMUS Arena.",
        "fr": "Participants sur le sol interactif d’ANIMUS Arena.",
        "es": "Participantes en el suelo interactivo de ANIMUS Arena.",
        "zh-Hans": "ANIMUS Arena 的参与者在互动地板上游戏。"
      }
    }
  },
  {
    "id": "red-motor",
    "name": {
      "ro": "Red Motor",
      "en": "Red Motor",
      "it": "Red Motor",
      "fr": "Red Motor",
      "es": "Red Motor",
      "zh-Hans": "Red Motor"
    },
    "description": {
      "ro": "Încearcă o sesiune de karting pe circuitul Red Motor. Există karturi pentru copii și adulți; verifică încadrarea, acordul însoțitorului și instructajul de siguranță înainte de cursă.",
      "en": "Try a karting session at Red Motor. Karts are offered for children and adults; confirm eligibility, the accompanying adult’s consent and the safety briefing before your race.",
      "it": "Prova una sessione di kart da Red Motor. Sono disponibili kart per bambini e adulti; verifica requisiti, consenso dell’accompagnatore e briefing di sicurezza prima della corsa.",
      "fr": "Essayez le karting chez Red Motor. Des karts sont proposés aux enfants et adultes ; vérifiez les conditions, l’accord de l’accompagnateur et les consignes avant la course.",
      "es": "Prueba una sesión de karting en Red Motor. Hay karts para niños y adultos; confirma requisitos, autorización del acompañante e instrucciones de seguridad antes de correr.",
      "zh-Hans": "在 Red Motor 体验卡丁车。经营方提供儿童和成人车辆；比赛前请确认参与条件、陪同成人的同意要求，并完成安全讲解。"
    },
    "categories": [
      "adventure"
    ],
    "venues": [
      {
        "id": "red-motor-main",
        "name": "Red Motor",
        "address": "Strada Ovidiu Cotruș 30, Timișoara",
        "verified": true,
        "status": "open",
        "minors": "yes",
        "url": "https://www.redmotor.ro/",
        "linkType": "official",
        "sources": [
          "https://www.redmotor.ro/"
        ],
        "verifiedAt": "2026-11-13",
        "minimumAge": 6,
        "adultRequired": true
      }
    ],
    "photo": {
      "path": "/media/photos-v03/outdoor-red-motor.webp",
      "author": "Autor neprecizat (site-ul operatorului)",
      "source": "https://www.redmotor.ro/",
      "license": "Sursă: site-ul operatorului · licență de reutilizare neprecizată",
      "rightsStatus": "operator-homepage-unconfirmed",
      "alt": {
        "ro": "Karturi electrice pe circuitul interior Red Motor.",
        "en": "Electric karts on the Red Motor indoor track.",
        "it": "Kart elettrici sulla pista coperta Red Motor.",
        "fr": "Karts électriques sur la piste intérieure Red Motor.",
        "es": "Karts eléctricos en la pista cubierta Red Motor.",
        "zh-Hans": "Red Motor 室内赛道上的电动卡丁车。"
      }
    }
  },
  {
    "id": "arcade",
    "name": {
      "ro": "Arcade — Iulius Mall",
      "en": "Arcade — Iulius Mall",
      "it": "Sala giochi — Iulius Mall",
      "fr": "Jeux d’arcade — Iulius Mall",
      "es": "Juegos arcade — Iulius Mall",
      "zh-Hans": "街机游戏 — Iulius Mall"
    },
    "description": {
      "ro": "Jocuri arcade la Energy Games, în Iulius Town. Copiii până la 14 ani au nevoie de acordul și supravegherea adultului însoțitor.",
      "en": "Arcade games at Energy Games in Iulius Town. Children up to 14 need the accompanying adult’s consent and supervision.",
      "it": "Giochi arcade da Energy Games a Iulius Town. Fino a 14 anni servono consenso e supervisione dell’adulto accompagnatore.",
      "fr": "Jeux d’arcade chez Energy Games à Iulius Town. Jusqu’à 14 ans, accord et surveillance de l’adulte accompagnateur sont requis.",
      "es": "Juegos recreativos en Energy Games de Iulius Town. Hasta los 14 años se requieren consentimiento y supervisión del adulto acompañante.",
      "zh-Hans": "在 Iulius Town 的 Energy Games 玩街机。14 岁及以下儿童须经陪同成人同意并全程监督。"
    },
    "categories": [
      "adventure"
    ],
    "venues": [
      {
        "id": "arcade-unconfirmed",
        "name": "Energy Games Arcade — Iulius Town",
        "address": "Piața Consiliul Europei 2, Iulius Town, etaj, Timișoara",
        "verified": true,
        "status": "open",
        "minors": "yes",
        "sources": [
          "https://energy-games.ro/locatie/timisoara-iulius-town/",
          "https://iuliustown.ro/ro/entertainment"
        ],
        "url": "https://energy-games.ro/locatie/timisoara-iulius-town/",
        "linkType": "official",
        "adultRequired": true,
        "verifiedAt": "2026-11-13"
      }
    ],
    "photo": {
      "path": "/media/photos-v03/outdoor-arcade.webp",
      "author": "Autor neprecizat (site-ul operatorului)",
      "source": "https://energy-games.ro/locatie/timisoara-iulius-town/",
      "license": "Sursă: site-ul operatorului · licență de reutilizare neprecizată",
      "rightsStatus": "operator-homepage-unconfirmed",
      "alt": {
        "ro": "Aparate arcade la Energy Games, Iulius Town Timișoara.",
        "en": "Arcade machines at Energy Games, Iulius Town Timișoara.",
        "it": "Videogiochi da Energy Games, Iulius Town Timișoara.",
        "fr": "Bornes d’arcade chez Energy Games, Iulius Town Timișoara.",
        "es": "Máquinas arcade de Energy Games, Iulius Town Timișoara.",
        "zh-Hans": "蒂米什瓦拉 Iulius Town 的 Energy Games 街机。"
      }
    }
  },
  {
    "id": "amazonia",
    "name": {
      "ro": "Amazonia",
      "en": "Amazonia",
      "it": "Amazonia",
      "fr": "Amazonia",
      "es": "Amazonia",
      "zh-Hans": "Amazonia"
    },
    "description": {
      "ro": "Alege zona de aquapark pentru piscine și tobogane. Minorii au nevoie de însoțire, iar atracțiile au reguli proprii; accesul la Spa are restricții separate.",
      "en": "Choose the aquapark area for pools and slides. Minors need adult supervision, attractions have their own rules, and admission to the Spa has separate restrictions.",
      "it": "Scegli l’area acquapark per piscine e scivoli. I minori devono essere accompagnati, le attrazioni hanno regole proprie e l’accesso alla Spa prevede restrizioni separate.",
      "fr": "Choisissez l’espace aquapark pour les bassins et toboggans. Les mineurs doivent être accompagnés ; chaque attraction a ses règles et le Spa applique des restrictions distinctes.",
      "es": "Elige la zona acuática para piscinas y toboganes. Los menores necesitan acompañamiento, cada atracción tiene sus normas y el acceso al spa tiene restricciones propias.",
      "zh-Hans": "在水上乐园体验泳池与滑梯。未成年人需由成人陪同；各项目有独立参与规定，Spa 区另有年龄限制，请提前确认。"
    },
    "categories": [
      "adventure"
    ],
    "venues": [
      {
        "id": "amazonia-main",
        "name": "Amazonia",
        "address": "Strada Avram Imbroane 56, Recepția 1 / intrarea A, Timișoara",
        "verified": true,
        "status": "open",
        "minors": "yes",
        "url": "https://www.amazonia.ro/bilete/",
        "linkType": "official",
        "sources": [
          "https://www.amazonia.ro/bilete/",
          "https://www.amazonia.ro/regulament-intern/"
        ],
        "verifiedAt": "2026-11-13",
        "adultRequired": true
      }
    ],
    "photo": {
      "path": "/media/photos-v03/outdoor-amazonia.webp",
      "author": "Autor neprecizat (site-ul operatorului)",
      "source": "https://www.amazonia.ro/",
      "license": "Sursă: site-ul operatorului · licență de reutilizare neprecizată",
      "rightsStatus": "operator-homepage-unconfirmed",
      "alt": {
        "ro": "Tobogane și piscine exterioare la Amazonia Timișoara.",
        "en": "Outdoor slides and pools at Amazonia Timișoara.",
        "it": "Scivoli e piscine all’aperto di Amazonia Timișoara.",
        "fr": "Toboggans et piscines extérieures d’Amazonia Timișoara.",
        "es": "Toboganes y piscinas exteriores de Amazonia Timișoara.",
        "zh-Hans": "蒂米什瓦拉 Amazonia 的室外滑梯与泳池。"
      }
    }
  },
  {
    "id": "exitgames",
    "name": {
      "ro": "Exitgames",
      "en": "Exitgames",
      "it": "Exitgames",
      "fr": "Exitgames",
      "es": "Exitgames",
      "zh-Hans": "Exitgames"
    },
    "description": {
      "ro": "Rezolvă indicii într-o cameră de evadare împreună cu echipa. Alege tema și vârsta potrivită; minorii participă cu adult, iar rezervarea se face la operator.",
      "en": "Solve clues together inside a themed escape room. Choose a room with the right age limit; minors need an adult teammate and bookings go through the operator.",
      "it": "Risolvi gli indizi con la squadra in una stanza a tema. Scegli il limite d’età adatto; i minori partecipano con un adulto e serve prenotare.",
      "fr": "Résolvez ensemble les énigmes d’une salle à thème. Choisissez une limite d’âge adaptée ; les mineurs jouent avec un adulte et la réservation se fait directement.",
      "es": "Resuelve pistas en equipo dentro de una sala temática. Elige una edad mínima adecuada; los menores juegan con un adulto y la reserva se realiza directamente.",
      "zh-Hans": "与队友在主题密室中寻找线索、解开谜题。请选择年龄要求合适的房间；未成年人需有成人队友，并提前向经营方预约。"
    },
    "categories": [
      "adventure"
    ],
    "venues": [
      {
        "id": "exitgames-main",
        "name": "Exitgames",
        "address": "Strada Constantin Brâncoveanu 53, Timișoara",
        "verified": true,
        "status": "open",
        "minors": "yes",
        "url": "https://exitgames.ro/public/ro",
        "linkType": "official",
        "sources": [
          "https://exitgames.ro/public/ro"
        ],
        "verifiedAt": "2026-11-13",
        "minimumAge": 12,
        "adultRequired": true
      }
    ],
    "photo": {
      "path": "/media/photos-v03/root-exitgames.jpg",
      "author": "Publicată de Exit Games Timișoara; fotograf neprecizat",
      "source": "https://exitgames.ro/new/",
      "license": "Site-ul operatorului · licență de reutilizare neprecizată",
      "alt": {
        "ro": "Personaj Sherlock Holmes într-un decor de investigație, fotografie promoțională Exit Games Timișoara.",
        "en": "A Sherlock Holmes character in a detective setting, an Exit Games Timișoara promotional photograph.",
        "it": "Un personaggio di Sherlock Holmes in un ambiente investigativo, fotografia promozionale di Exit Games Timișoara.",
        "fr": "Un personnage de Sherlock Holmes dans un décor d’enquête, photographie promotionnelle d’Exit Games Timișoara.",
        "es": "Un personaje de Sherlock Holmes en un decorado de investigación, fotografía promocional de Exit Games Timișoara.",
        "zh-Hans": "福尔摩斯角色置身侦探主题布景中，图片由蒂米什瓦拉 Exit Games 用于宣传。"
      },
      "caption": {
        "ro": "Fotografie promoțională a temei Sherlock, publicată de Exit Games Timișoara.",
        "en": "Promotional photograph for the Sherlock theme, published by Exit Games Timișoara.",
        "it": "Fotografia promozionale del tema Sherlock, pubblicata da Exit Games Timișoara.",
        "fr": "Photographie promotionnelle du thème Sherlock, publiée par Exit Games Timișoara.",
        "es": "Fotografía promocional del tema Sherlock, publicada por Exit Games Timișoara.",
        "zh-Hans": "由蒂米什瓦拉 Exit Games 发布的福尔摩斯主题宣传照片。"
      },
      "rightsStatus": "operator-homepage-unconfirmed"
    }
  },
  {
    "id": "samantha",
    "name": {
      "ro": "Samantha’s House",
      "en": "Samantha’s House",
      "it": "Samantha’s House",
      "fr": "Samantha’s House",
      "es": "Samantha’s House",
      "zh-Hans": "Samantha’s House"
    },
    "description": {
      "ro": "Samantha’s Escape House propune scenarii de evadare horror. Rezervă direct și confirmă vârsta minimă și locația înainte de plecare.",
      "en": "Samantha’s Escape House offers horror escape scenarios. Book directly and confirm the minimum age and location before leaving.",
      "it": "Samantha’s Escape House propone scenari di fuga horror. Prenota direttamente e conferma età minima e sede.",
      "fr": "Samantha’s Escape House propose des scénarios d’évasion horrifiques. Réservez directement et confirmez l’âge minimum et l’adresse.",
      "es": "Samantha’s Escape House ofrece juegos de escape de terror. Reserva directamente y confirma la edad mínima y la ubicación.",
      "zh-Hans": "Samantha’s Escape House 提供恐怖主题密室体验。请直接预约并确认最低年龄和地址。"
    },
    "categories": [
      "adventure"
    ],
    "venues": [
      {
        "id": "samantha-unconfirmed",
        "name": "Samantha’s House",
        "address": "Calea Stan Vidrighin 18, etaj 1, Timișoara",
        "verified": true,
        "status": "open",
        "minors": "unknown",
        "sources": [
          "https://linktr.ee/samanthasescapehouse",
          "https://drive.google.com/file/d/1RezHU2F3GOPe6yqE8yoLgUS1WT5wFMPf/view",
          "https://escapebeacon.com/ro/timisoara/samantha-s-escape-house"
        ],
        "url": "https://linktr.ee/samanthasescapehouse",
        "linkType": "official",
        "verifiedAt": "2026-11-13"
      }
    ]
  },
  {
    "id": "grumi",
    "name": {
      "ro": "Olărit — Gruni",
      "en": "Pottery — Gruni",
      "it": "Ceramica — Gruni",
      "fr": "Poterie — Gruni",
      "es": "Alfarería — Gruni",
      "zh-Hans": "陶艺 — Gruni"
    },
    "description": {
      "ro": "Încearcă roata olarului la Gruni, pe Gheorghe Lazăr 26. Atelierul este pentru adulți și copii peste 10 ani; rezervarea este necesară.",
      "en": "Try the pottery wheel at Gruni on Gheorghe Lazăr 26. The workshop welcomes adults and children over 10; booking is required.",
      "it": "Prova il tornio da Gruni, in Gheorghe Lazăr 26. Il laboratorio è per adulti e bambini sopra i 10 anni; prenotazione obbligatoria.",
      "fr": "Essayez le tour de potier chez Gruni, au 26 Gheorghe Lazăr. Atelier pour adultes et enfants de plus de 10 ans, sur réservation.",
      "es": "Prueba el torno de alfarero en Gruni, en Gheorghe Lazăr 26. Taller para adultos y mayores de 10 años, con reserva.",
      "zh-Hans": "在 Gheorghe Lazăr 26 的 Gruni 体验陶轮制作。课程面向成人及 10 岁以上儿童，须提前预约。"
    },
    "categories": [
      "adventure"
    ],
    "venues": [
      {
        "id": "grumi-unconfirmed",
        "name": "Olărit — Gruni",
        "address": "Strada Gheorghe Lazăr 26, spațiul 7, Halele Fructus, Timișoara",
        "verified": true,
        "status": "unknown",
        "minors": "yes",
        "sources": [
          "https://gruni.ro/atelier/",
          "https://gruni-for-fun.ro/produs/atelier-de-olarit-pentru-incepatori/",
          "https://gruni-for-fun.ro/oferta-ateliere-de-ceramica/",
          "https://gruni-for-fun.ro/calendar/"
        ],
        "url": "https://gruni-for-fun.ro/produs/atelier-de-olarit-pentru-incepatori/",
        "linkType": "official",
        "verifiedAt": "2026-11-13",
        "minimumAge": 11
      }
    ],
    "photo": {
      "path": "/media/photos-v03/outdoor-grumi.webp",
      "author": "Autor neprecizat (site-ul operatorului)",
      "source": "https://gruni.ro/atelier/",
      "license": "Sursă: site-ul operatorului · licență de reutilizare neprecizată",
      "rightsStatus": "operator-homepage-unconfirmed",
      "alt": {
        "ro": "Intrarea atelierului Gruni, cu ceramică și panou pictat.",
        "en": "Entrance to the Gruni studio with pottery and a painted sign.",
        "it": "Ingresso dell’atelier Gruni con ceramiche e insegna dipinta.",
        "fr": "Entrée de l’atelier Gruni avec céramiques et panneau peint.",
        "es": "Entrada del taller Gruni con cerámica y cartel pintado.",
        "zh-Hans": "Gruni 工作室入口的陶器与彩绘招牌。"
      }
    }
  },
  {
    "id": "megazone",
    "name": {
      "ro": "Megazone — Laser Tag",
      "en": "Megazone — Laser Tag",
      "it": "Megazone — Laser Tag",
      "fr": "Megazone — Laser Tag",
      "es": "Megazone — Laser Tag",
      "zh-Hans": "Megazone — Laser Tag"
    },
    "description": {
      "ro": "Formează o echipă pentru laser tag în arena Megazone 2 din Lipovei. Operatorul anunță acces de la șapte ani; verifică sesiunea și regulile înainte de rezervare.",
      "en": "Gather a team for laser tag at Megazone 2 in Lipovei. The operator lists admission from age seven; confirm the session and rules before booking your visit.",
      "it": "Forma una squadra per il laser tag da Megazone 2, a Lipovei. Il gestore indica accesso dai sette anni; verifica sessione e regole prima di prenotare.",
      "fr": "Formez une équipe de laser tag chez Megazone 2, à Lipovei. Le lieu annonce l’accès dès sept ans ; confirmez la séance et les règles avant réservation.",
      "es": "Forma un equipo para jugar al laser tag en Megazone 2, en Lipovei. El operador admite desde siete años; confirma la sesión y las normas.",
      "zh-Hans": "在 Lipovei 的 Megazone 2 组队体验激光对战。经营方公布的参与年龄为七岁起；预约前请确认场次和具体规则。"
    },
    "categories": [
      "adventure"
    ],
    "venues": [
      {
        "id": "megazone-main",
        "name": "Megazone 2 — LaserTag",
        "address": "Strada Ion Ionescu de la Brad 15, Timișoara",
        "verified": true,
        "status": "open",
        "minors": "yes",
        "url": "https://www.megazonetimisoara.ro/megazone-2",
        "linkType": "official",
        "sources": [
          "https://www.megazonetimisoara.ro/megazone-2"
        ],
        "verifiedAt": "2026-11-13",
        "minimumAge": 7
      }
    ],
    "photo": {
      "path": "/media/photos-v03/outdoor-megazone.webp",
      "author": "Autor neprecizat (site-ul operatorului)",
      "source": "https://www.megazonetimisoara.ro/megazone-2",
      "license": "Sursă: site-ul operatorului · licență de reutilizare neprecizată",
      "rightsStatus": "operator-homepage-unconfirmed",
      "alt": {
        "ro": "Jucător cu echipament laser tag în arena Megazone 2.",
        "en": "Player with laser tag equipment inside Megazone 2.",
        "it": "Giocatore con attrezzatura laser tag da Megazone 2.",
        "fr": "Joueur équipé de laser tag dans Megazone 2.",
        "es": "Jugador con equipo de laser tag en Megazone 2.",
        "zh-Hans": "Megazone 2 场馆内穿戴激光对战装备的玩家。"
      }
    }
  },
  {
    "id": "paintball",
    "name": {
      "ro": "Paintball — Arena Paintball",
      "en": "Paintball — Arena Paintball",
      "it": "Paintball — Arena Paintball",
      "fr": "Paintball — Arena Paintball",
      "es": "Paintball — Arena Paintball",
      "zh-Hans": "彩弹 — Arena Paintball"
    },
    "description": {
      "ro": "Propunere: paintball la Arena Paintball, terenul Army din Giroc. Rezervarea este pentru grupuri de minimum 10; confirmă siguranța și accesul.",
      "en": "Suggested option: Arena Paintball’s Army field in Giroc. Groups need at least 10 people; confirm bookings, safety and admission.",
      "it": "Proposta: campo Army di Arena Paintball a Giroc. Gruppi di almeno 10 persone; conferma prenotazione, sicurezza e accesso.",
      "fr": "Suggestion : terrain Army d’Arena Paintball à Giroc. Groupes d’au moins 10 personnes ; confirmez réservation, sécurité et accès.",
      "es": "Propuesta: campo Army de Arena Paintball en Giroc. Grupos de al menos 10; confirma reserva, seguridad y acceso.",
      "zh-Hans": "推荐选项：Giroc 的 Arena Paintball Army 场地。团体至少 10 人；请确认预约、安全要求和入场规定。"
    },
    "categories": [
      "adventure"
    ],
    "venues": [
      {
        "id": "paintball-unconfirmed",
        "name": "Paintball — Arena Paintball",
        "address": "Bulevardul Aviației, fostul teren militar Army, Giroc, Timiș",
        "verified": true,
        "status": "open",
        "minors": "unknown",
        "sources": [
          "https://www.arenapaintball.ro/locatii.html",
          "https://www.arenapaintball.ro/contact.html",
          "https://www.waze.com/ro/live-map/directions/ro/tm/giroc/arena-paintball-timisoara?to=place.ChIJqRCwW59dRUcRI2TTXvQZ-kA"
        ],
        "url": "https://www.arenapaintball.ro/locatii.html",
        "linkType": "official",
        "verifiedAt": "2026-11-13"
      }
    ],
    "photo": {
      "path": "/media/photos-v03/outdoor-paintball.webp",
      "author": "Autor neprecizat (site-ul operatorului)",
      "source": "https://www.arenapaintball.ro/poze.html",
      "license": "Sursă: site-ul operatorului · licență de reutilizare neprecizată",
      "rightsStatus": "operator-homepage-unconfirmed",
      "alt": {
        "ro": "Grup de jucători pe terenul Army al Arena Paintball din zona Giroc.",
        "en": "Group of players at the Arena Paintball Army grounds near Giroc.",
        "it": "Gruppo di giocatori sul campo Army di Arena Paintball vicino a Giroc.",
        "fr": "Groupe de joueurs sur le terrain Army d’Arena Paintball près de Giroc.",
        "es": "Grupo de jugadores en el campo Army de Arena Paintball cerca de Giroc.",
        "zh-Hans": "Giroc 附近 Arena Paintball Army 场地内的玩家合影。"
      },
      "caption": {
        "ro": "Fotografie din galeria operatorului; data realizării nu este precizată.",
        "en": "Photograph from the operator’s gallery; capture date unspecified.",
        "it": "Fotografia della galleria del gestore; data di scatto non indicata.",
        "fr": "Photographie de la galerie de l’exploitant ; date de prise de vue non précisée.",
        "es": "Fotografía de la galería del operador; fecha de captura no indicada.",
        "zh-Hans": "来自经营方图库；拍摄日期未注明。"
      }
    }
  },
  {
    "id": "parcul-copiilor",
    "name": {
      "ro": "Parcul Copiilor",
      "en": "Children’s Park",
      "it": "Parco dei Bambini",
      "fr": "Parc des Enfants",
      "es": "Parque de los Niños",
      "zh-Hans": "儿童公园"
    },
    "description": {
      "ro": "Alege aleile parcului pentru o plimbare în aer liber și o pauză la umbră. Respectă spațiile verzi și indicatoarele întâlnite pe traseul tău.",
      "en": "Choose the park’s paths for an outdoor walk and a pause in the shade. Respect planted areas and follow the signs you encounter along your way.",
      "it": "Scegli i viali del parco per una passeggiata all’aperto e una pausa all’ombra. Rispetta gli spazi verdi e le indicazioni lungo il tuo percorso.",
      "fr": "Empruntez les allées du parc pour marcher dehors et faire une pause à l’ombre. Respectez les espaces plantés et les indications rencontrées sur votre chemin.",
      "es": "Recorre los senderos del parque y descansa a la sombra. Respeta las zonas verdes y sigue las indicaciones que encuentres a lo largo del paseo.",
      "zh-Hans": "沿公园步道散步，在树荫下歇一歇。请爱护绿地，留意沿途标识，按照现场开放情况选择适合自己的游览路线。"
    },
    "categories": [
      "kids"
    ],
    "venues": [
      {
        "id": "parcul-copiilor-main",
        "name": "Parcul Copiilor",
        "address": "Parcul Copiilor „Ion Creangă”, Splaiul Nistrului, Timișoara",
        "verified": true,
        "status": "open",
        "minors": "yes",
        "url": "https://visit-timisoara.com/ro/o-zi-in-timisoara/",
        "linkType": "official",
        "sources": [
          "https://visit-timisoara.com/ro/o-zi-in-timisoara/",
          "https://assets.primariatm.ro/794f423e-e38c-4343-bb13-ffc0a0128100",
          "https://www.wikidata.org/wiki/Q22691420",
          "https://www.wikidata.org/wiki/Q132449",
          "https://www.wikidata.org/wiki/Q22693421"
        ],
        "verifiedAt": "2026-11-13"
      }
    ],
    "photo": {
      "path": "/media/photos/parcul-copiilor.webp",
      "author": "Mister No",
      "source": "https://commons.wikimedia.org/wiki/File:Parcul_Copiilor_-_panoramio.jpg",
      "license": "CC BY 3.0 · https://creativecommons.org/licenses/by/3.0",
      "alt": {
        "ro": "Parcul Copiilor",
        "en": "Children’s Park",
        "it": "Parco dei Bambini",
        "fr": "Parc des Enfants",
        "es": "Parque de los Niños",
        "zh-Hans": "儿童公园"
      },
      "rightsStatus": "licensed"
    }
  },
  {
    "id": "energy-kids",
    "name": {
      "ro": "Energy Kids — Iulius Mall",
      "en": "Energy Kids — Iulius Mall",
      "it": "Energy Kids — Iulius Mall",
      "fr": "Energy Kids — Iulius Mall",
      "es": "Energy Kids — Iulius Mall",
      "zh-Hans": "Energy Kids — Iulius Mall"
    },
    "description": {
      "ro": "Alege o zonă de joacă potrivită vârstei la Energy Kids, pe terasa Iulius Mall. Trambulinele și traseele au reguli diferite; confirmă însoțirea și accesul cu echipa locului.",
      "en": "Choose an age-appropriate play area at Energy Kids on Iulius Mall’s terrace. Trampolines and climbing routes have different rules; confirm supervision and admission with the venue’s team.",
      "it": "Scegli una zona adatta all’età da Energy Kids, sulla terrazza di Iulius Mall. Trampolini e percorsi hanno regole diverse; conferma accompagnamento e accesso con lo staff.",
      "fr": "Choisissez une zone adaptée à l’âge chez Energy Kids, sur la terrasse d’Iulius Mall. Trampolines et parcours ont leurs règles ; confirmez l’accompagnement et l’accès avec l’équipe.",
      "es": "Elige una zona adecuada a la edad en Energy Kids, en la terraza de Iulius Mall. Trampolines y recorridos tienen normas distintas; confirma acompañamiento y acceso.",
      "zh-Hans": "在 Iulius Mall 露台上的 Energy Kids 选择适合孩子年龄的游戏区域。蹦床和攀爬项目有不同规定，请向工作人员确认陪同与参与要求。"
    },
    "categories": [
      "kids"
    ],
    "venues": [
      {
        "id": "energy-kids-main",
        "name": "Energy Kids — Iulius Mall",
        "address": "Iulius Mall Timișoara, terasă, Piața Consiliul Europei 2",
        "verified": true,
        "status": "open",
        "minors": "yes",
        "url": "https://energykids.ro/locatii/timisoara-iulius-town/",
        "linkType": "official",
        "sources": [
          "https://energykids.ro/locatii/timisoara-iulius-town/",
          "https://www.iuliustown.ro/ro/entertainment/energy-kids-family-center"
        ],
        "verifiedAt": "2026-11-13",
        "minimumAge": 1
      }
    ],
    "photo": {
      "path": "/media/photos-v03/outdoor-energy-kids.webp",
      "author": "Autor neprecizat (site-ul operatorului)",
      "source": "https://energykids.ro/locatii/timisoara-iulius-town/",
      "license": "Sursă: site-ul operatorului · licență de reutilizare neprecizată",
      "rightsStatus": "operator-homepage-unconfirmed",
      "alt": {
        "ro": "Interiorul locului de joacă Energy Kids din Iulius Town.",
        "en": "Interior of the Energy Kids playground at Iulius Town.",
        "it": "Interno dell’area giochi Energy Kids di Iulius Town.",
        "fr": "Intérieur de l’aire de jeux Energy Kids d’Iulius Town.",
        "es": "Interior de la zona de juegos Energy Kids de Iulius Town.",
        "zh-Hans": "Iulius Town 的 Energy Kids 游乐区内部。"
      }
    }
  },
  {
    "id": "paradisul-piratilor",
    "name": {
      "ro": "Paradisul Piraților",
      "en": "Paradisul Piraților",
      "it": "Paradisul Piraților",
      "fr": "Paradisul Piraților",
      "es": "Paradisul Piraților",
      "zh-Hans": "Paradisul Piraților"
    },
    "description": {
      "ro": "Paradisul Piraților este numele istoric al restaurantului de pe Aleea Studenților, Cantina 4C. Site-ul vechi redirecționează acum către Megazone Bites; funcționarea restaurantului inițial și a locului său de joacă nu este confirmată.",
      "en": "Paradisul Piraților is the historical name of the restaurant at Aleea Studenților, Cantina 4C. Its former website now redirects to Megazone Bites; operation of the original restaurant and its playground is unconfirmed.",
      "it": "Paradisul Piraților è il nome storico del ristorante in Aleea Studenților, Cantina 4C. Il vecchio sito ora rimanda a Megazone Bites; l’attività del ristorante originario e della sua area giochi non è confermata.",
      "fr": "Paradisul Piraților est le nom historique du restaurant situé Aleea Studenților, Cantina 4C. Son ancien site redirige désormais vers Megazone Bites ; le fonctionnement du restaurant d’origine et de son aire de jeux reste à confirmer.",
      "es": "Paradisul Piraților es el nombre histórico del restaurante de Aleea Studenților, Cantina 4C. Su antigua web ahora redirige a Megazone Bites; no está confirmado que el restaurante original y su zona de juegos sigan funcionando.",
      "zh-Hans": "Paradisul Piraților 是 Aleea Studenților、Cantina 4C 餐厅的历史名称。原网站现已跳转至 Megazone Bites；原餐厅及其儿童游乐区是否仍在营业尚未确认。"
    },
    "categories": [
      "kids",
      "food"
    ],
    "venues": [
      {
        "id": "paradisul-piratilor-unconfirmed",
        "name": "Paradisul Piraților",
        "address": "Aleea Studenților, Cantina 4C, Timișoara",
        "verified": false,
        "status": "unknown",
        "minors": "unknown",
        "sources": [
          "https://www.paradisulpiratilor.ro/povestea-noastra",
          "https://www.megazonebites.ro/",
          "https://www.timisoara-info.ro/infocentru/alimentatie"
        ],
        "verifiedAt": "2026-11-13"
      }
    ],
    "note": "Official historical URL redirects to megazonebites.ro. Original pirate-themed venue may have closed/rebranded. Retain one entity/two appearances; do not recommend or silently substitute successor.",
    "photo": {
      "path": "/media/photos-v03/paradisul-piratilor.jpg",
      "author": "Paradisul Piraților (fotograf neprecizat)",
      "source": "https://www.megazonebites.ro/tunurile-piratilor",
      "license": "Site-ul operatorului · licență de reutilizare neprecizată",
      "alt": {
        "ro": "Copii la tunurile cu mingi de burete și sigla Tunurile Piraților, în prezentarea originală a localului.",
        "en": "Children at foam-ball cannons with the Tunurile Piraților logo in the venue’s original promotional image.",
        "it": "Bambini ai cannoni con palline di gommapiuma e logo Tunurile Piraților nella promozione originale del locale.",
        "fr": "Enfants aux canons à balles en mousse et logo Tunurile Piraților dans la présentation d’origine du lieu.",
        "es": "Niños junto a cañones de bolas de espuma y el logotipo de Tunurile Piraților en la promoción original del local.",
        "zh-Hans": "场所原宣传图片中的儿童泡沫球炮和 Tunurile Piraților 标志。"
      },
      "caption": {
        "ro": "Imagine promoțională nedatată a Tunurilor Piraților, atracția originală pentru copii de la Paradisul Piraților. Funcționarea actuală nu este confirmată.",
        "en": "Undated promotional image of Tunurile Piraților, the original children’s attraction at Paradisul Piraților. Current operation is unconfirmed.",
        "it": "Immagine promozionale senza data di Tunurile Piraților, l’attrazione originaria per bambini di Paradisul Piraților. L’attività attuale non è confermata.",
        "fr": "Image promotionnelle non datée de Tunurile Piraților, l’attraction d’origine pour enfants de Paradisul Piraților. Son fonctionnement actuel reste à confirmer.",
        "es": "Imagen promocional sin fecha de Tunurile Piraților, la atracción infantil original de Paradisul Piraților. Su funcionamiento actual no está confirmado.",
        "zh-Hans": "Tunurile Piraților 的未注明日期宣传图片，展示 Paradisul Piraților 原有的儿童游乐项目。该项目目前是否仍在运营尚未确认。"
      },
      "rightsStatus": "operator-homepage-unconfirmed"
    }
  },
  {
    "id": "arena-jocurilor",
    "name": {
      "ro": "Arena Jocurilor SRL",
      "en": "Arena Jocurilor SRL",
      "it": "Arena Jocurilor SRL",
      "fr": "Arena Jocurilor SRL",
      "es": "Arena Jocurilor SRL",
      "zh-Hans": "Arena Jocurilor SRL"
    },
    "description": {
      "ro": "Joacă și petreceri pentru copii la Arena Jocurilor, pe Divizia 9 Cavalerie. Confirmă rezervarea și regulile echipamentelor.",
      "en": "Children’s play and parties at Arena Jocurilor on Divizia 9 Cavalerie. Confirm bookings and equipment rules.",
      "it": "Giochi e feste per bambini da Arena Jocurilor, in Divizia 9 Cavalerie. Verifica prenotazione e regole delle attrezzature.",
      "fr": "Jeux et fêtes pour enfants à Arena Jocurilor, rue Divizia 9 Cavalerie. Vérifiez réservation et règles des équipements.",
      "es": "Juegos y fiestas infantiles en Arena Jocurilor, en Divizia 9 Cavalerie. Confirma la reserva y las normas de los equipos.",
      "zh-Hans": "在 Divizia 9 Cavalerie 街的 Arena Jocurilor 玩耍或举办儿童派对。请确认预约和设施使用规则。"
    },
    "categories": [
      "kids"
    ],
    "venues": [
      {
        "id": "arena-jocurilor-unconfirmed",
        "name": "Arena Jocurilor SRL",
        "address": "Strada Divizia 9 Cavalerie 19, etaj 2, Timișoara",
        "verified": true,
        "status": "open",
        "minors": "yes",
        "sources": [
          "https://arena-jocurilor.ro/contact.html",
          "https://arena-jocurilor.ro/",
          "https://www.waze.com/live-map/directions/arena-jocurilor-str.-divizia-9-cavalerie-19-timisoara?to=place.w.13894090.139137505.9092848"
        ],
        "url": "https://arena-jocurilor.ro/contact.html",
        "linkType": "official",
        "verifiedAt": "2026-11-13"
      }
    ],
    "photo": {
      "path": "/media/photos-v03/outdoor-arena-jocurilor.webp",
      "author": "Autor neprecizat (site-ul operatorului)",
      "source": "https://arena-jocurilor.ro/",
      "license": "Sursă: site-ul operatorului · licență de reutilizare neprecizată",
      "rightsStatus": "operator-homepage-unconfirmed",
      "alt": {
        "ro": "Sală colorată pentru copii la Arena Jocurilor.",
        "en": "Colourful children’s room at Arena Jocurilor.",
        "it": "Sala colorata per bambini di Arena Jocurilor.",
        "fr": "Salle colorée pour enfants d’Arena Jocurilor.",
        "es": "Sala infantil de colores de Arena Jocurilor.",
        "zh-Hans": "Arena Jocurilor 色彩缤纷的儿童活动室。"
      }
    }
  },
  {
    "id": "kids-town",
    "name": {
      "ro": "Kids Town",
      "en": "Kids Town",
      "it": "Kids Town",
      "fr": "Kids Town",
      "es": "Kids Town",
      "zh-Hans": "Kids Town"
    },
    "description": {
      "ro": "KidsTown by Megazone este un loc de joacă pe Nicolae Paulescu 3. Aici nu se organizează petreceri; confirmă regulile înainte de vizită.",
      "en": "KidsTown by Megazone is a playground at Nicolae Paulescu 3. It does not host parties; check the rules before visiting.",
      "it": "KidsTown by Megazone è uno spazio giochi in Nicolae Paulescu 3. Non organizza feste; verifica le regole prima della visita.",
      "fr": "KidsTown by Megazone est un espace de jeux au 3 Nicolae Paulescu. Il n’organise pas de fêtes ; vérifiez les règles.",
      "es": "KidsTown by Megazone es un espacio de juegos en Nicolae Paulescu 3. No organiza fiestas; consulta las normas antes de ir.",
      "zh-Hans": "KidsTown by Megazone 是位于 Nicolae Paulescu 3 的儿童游乐场，不举办派对。到访前请确认使用规则。"
    },
    "categories": [
      "kids"
    ],
    "venues": [
      {
        "id": "kids-town-unconfirmed",
        "name": "KidsTown by Megazone",
        "address": "Strada Doctor Nicolae Paulescu 3, Timișoara",
        "verified": true,
        "status": "open",
        "minors": "yes",
        "sources": [
          "https://www.megazonetimisoara.ro/megazone-kidstown",
          "https://visit-timis.ro/kidstown-by-megazone-en",
          "https://www.megazonetimisoara.ro/megazone-kidstown/contact"
        ],
        "url": "https://www.megazonetimisoara.ro/megazone-kidstown",
        "linkType": "official",
        "verifiedAt": "2026-11-13"
      }
    ],
    "photo": {
      "path": "/media/photos-v03/root-kids-town.webp",
      "author": "Megazone KidsTown (fotograf neprecizat)",
      "source": "https://www.megazonetimisoara.ro/megazone-kidstown",
      "license": "Site-ul operatorului · licență de reutilizare neprecizată",
      "alt": {
        "ro": "Zona de construcții KidsTown, cu piese mari colorate și mese pentru joacă.",
        "en": "KidsTown building-play area with large colorful blocks and play tables.",
        "it": "Area costruzioni di KidsTown con grandi blocchi colorati e tavoli da gioco.",
        "fr": "Espace de construction de KidsTown avec de grands blocs colorés et des tables de jeu.",
        "es": "Zona de construcción de KidsTown con grandes bloques de colores y mesas de juego.",
        "zh-Hans": "KidsTown 的积木游戏区，设有大型彩色积木和游戏桌。"
      },
      "rightsStatus": "operator-homepage-unconfirmed"
    }
  },
  {
    "id": "noso",
    "name": {
      "ro": "Noso",
      "en": "Noso",
      "it": "Noso",
      "fr": "Noso",
      "es": "Noso",
      "zh-Hans": "Noso"
    },
    "description": {
      "ro": "Copiii de până la paisprezece ani pot descoperi zonele de joacă indoor Noso, de la bile la cățărare. Confirmă regulile fiecărui echipament și supravegherea înainte de vizită.",
      "en": "Children up to fourteen can explore Noso’s indoor play areas, from ball pools to climbing. Confirm each piece of equipment’s rules and supervision arrangements before your visit.",
      "it": "I bambini fino a quattordici anni possono esplorare le aree al coperto di Noso, tra palline e arrampicata. Conferma regole delle attrezzature e supervisione prima della visita.",
      "fr": "Les enfants jusqu’à quatorze ans découvrent les jeux intérieurs de Noso, des balles à l’escalade. Confirmez les règles des équipements et l’accompagnement avant votre visite.",
      "es": "Los niños de hasta catorce años pueden explorar los juegos interiores de Noso, entre bolas y escalada. Confirma normas de equipos y supervisión antes de visitar.",
      "zh-Hans": "十四岁及以下儿童可在 Noso 的室内游戏区探索球池与攀爬项目。到访前请确认各项设备的参与规则和成人看护安排。"
    },
    "categories": [
      "kids"
    ],
    "venues": [
      {
        "id": "noso-main",
        "name": "Noso",
        "address": "Strada Johann Heinrich Pestalozzi 20, Timișoara",
        "verified": true,
        "status": "open",
        "minors": "yes",
        "url": "https://noso.ro/",
        "linkType": "official",
        "sources": [
          "https://noso.ro/"
        ],
        "verifiedAt": "2026-11-13"
      }
    ],
    "photo": {
      "path": "/media/photos-v03/outdoor-noso.webp",
      "author": "Autor neprecizat (site-ul operatorului)",
      "source": "https://noso.ro/",
      "license": "Sursă: site-ul operatorului · licență de reutilizare neprecizată",
      "rightsStatus": "operator-homepage-unconfirmed",
      "alt": {
        "ro": "Activitate de grup cu un membru al echipei Noso.",
        "en": "Group activity with a member of the Noso team.",
        "it": "Attività di gruppo con un membro del team Noso.",
        "fr": "Activité de groupe avec un membre de l’équipe Noso.",
        "es": "Actividad en grupo con un miembro del equipo Noso.",
        "zh-Hans": "Noso 团队成员带领的团体活动。"
      }
    }
  },
  {
    "id": "planetarium",
    "name": {
      "ro": "Planetarium — UVT",
      "en": "Planetarium — UVT",
      "it": "Planetario — UVT",
      "fr": "Planétarium — UVT",
      "es": "Planetario — UVT",
      "zh-Hans": "天文馆 — UVT"
    },
    "description": {
      "ro": "Descoperă cerul proiectat în planetariul UVT, la etajul al doilea al Facultății de Fizică. Vizitele se programează anticipat; confirmă componența grupului și locurile disponibile.",
      "en": "Explore the projected sky at UVT’s planetarium on the Physics Faculty’s second floor. Visits need advance booking; confirm your group’s eligibility and the places available before visiting.",
      "it": "Scopri il cielo proiettato nel planetario UVT, al secondo piano della Facoltà di Fisica. Le visite richiedono prenotazione; verifica requisiti del gruppo e disponibilità.",
      "fr": "Découvrez le ciel projeté au planétarium UVT, au deuxième étage de la faculté de physique. Les visites se réservent ; confirmez les groupes admis et les disponibilités.",
      "es": "Descubre el cielo proyectado en el planetario UVT, en la segunda planta de Física. Las visitas requieren reserva; confirma los requisitos del grupo y las plazas.",
      "zh-Hans": "前往 UVT 物理学院二楼的天文馆，观看投影星空。参观需提前预约；请确认团队是否符合要求，以及是否仍有名额。"
    },
    "categories": [
      "kids"
    ],
    "venues": [
      {
        "id": "planetarium-main",
        "name": "Planetarium — UVT",
        "address": "Bd. Vasile Pârvan 4, Facultatea de Fizică UVT, etaj 2, Timișoara",
        "verified": true,
        "status": "open",
        "minors": "yes",
        "url": "https://physics.uvt.ro/planetariu/",
        "linkType": "official",
        "sources": [
          "https://physics.uvt.ro/planetariu/"
        ],
        "verifiedAt": "2026-11-13",
        "adultRequired": true
      }
    ],
    "photo": {
      "path": "/media/photos-v03/outdoor-planetarium.webp",
      "author": "Autor neprecizat (site-ul operatorului)",
      "source": "https://physics.uvt.ro/planetariu/",
      "license": "Sursă: site-ul operatorului · licență de reutilizare neprecizată",
      "rightsStatus": "operator-homepage-unconfirmed",
      "alt": {
        "ro": "Proiectorul și scaunele din Planetariul UVT.",
        "en": "Projector and seating inside the UVT Planetarium.",
        "it": "Proiettore e posti a sedere nel Planetario UVT.",
        "fr": "Projecteur et sièges du planétarium UVT.",
        "es": "Proyector y asientos del Planetario UVT.",
        "zh-Hans": "UVT 天文馆内的放映机与座椅。"
      }
    }
  },
  {
    "id": "bike-serbia",
    "name": {
      "ro": "Pista de bicicletă spre Serbia / Zrenjanin",
      "en": "Cycle path towards Serbia / Zrenjanin",
      "it": "Pista ciclabile verso la Serbia / Zrenjanin",
      "fr": "Piste cyclable vers la Serbie / Zrenjanin",
      "es": "Vía ciclista hacia Serbia / Zrenjanin",
      "zh-Hans": "通往塞尔维亚／兹雷尼亚宁方向的自行车道"
    },
    "description": {
      "ro": "O idee pentru pedalat de-a lungul Begăi spre granița cu Serbia. Alege dinainte porțiunea și punctul de acces; trecerea frontierei și continuarea spre Zrenjanin necesită verificare separată.",
      "en": "An idea for cycling along the Bega towards Serbia’s border. Choose your section and access point first; crossing the border and continuing towards Zrenjanin require separate checks.",
      "it": "Un’idea per pedalare lungo il Bega verso il confine serbo. Scegli prima tratto e accesso; attraversamento della frontiera e prosecuzione verso Zrenjanin richiedono verifiche separate.",
      "fr": "Une idée de balade à vélo le long de la Bega vers la frontière serbe. Choisissez tronçon et accès ; passage frontalier et continuation vers Zrenjanin se vérifient séparément.",
      "es": "Una idea para pedalear junto al Bega hacia Serbia. Elige tramo y acceso antes; el cruce fronterizo y la continuación hacia Zrenjanin requieren comprobaciones aparte.",
      "zh-Hans": "沿贝加河向塞尔维亚边境方向骑行。请先选定路段与入口；跨境通行以及继续前往兹雷尼亚宁的路线，需要另行确认。"
    },
    "categories": [
      "nature"
    ],
    "venues": [
      {
        "id": "bike-serbia-unconfirmed",
        "name": "Pista de bicicletă spre Serbia / Zrenjanin",
        "address": "Pista de pe digul Begăi; acces din zona Podului Modoș / strada Ion Român, Timișoara",
        "verified": true,
        "status": "unknown",
        "minors": "unknown",
        "sources": [
          "https://www.cjtimis.ro/comunicate-de-presa/in-acest-weekend-se-redeschide-punctul-de-trecere-a-frontierei-pe-pista-timisoara-zrenjanin-din-luna-mai-acces-si-pentru-ambarcatiuni/",
          "https://www.cjtimis.ro/wp-content/uploads/2020/07/PATJ-Timis-Volumul-III-Zone-protejate-turism.pdf",
          "https://www.cjtimis.ro/infocjt/admin/upload/f98q476m3pjy.pdf"
        ],
        "url": "https://www.cjtimis.ro/comunicate-de-presa/in-acest-weekend-se-redeschide-punctul-de-trecere-a-frontierei-pe-pista-timisoara-zrenjanin-din-luna-mai-acces-si-pentru-ambarcatiuni/",
        "linkType": "official",
        "verifiedAt": "2026-11-13"
      }
    ],
    "photo": {
      "path": "/media/photos-v03/outdoor-bike-serbia.webp",
      "author": "Autor neprecizat (Consiliul Județean Timiș)",
      "source": "https://www.cjtimis.ro/comunicate-de-presa/in-acest-weekend-se-redeschide-punctul-de-trecere-a-frontierei-pe-pista-timisoara-zrenjanin-din-luna-mai-acces-si-pentru-ambarcatiuni/",
      "license": "Sursă: site-ul operatorului · licență de reutilizare neprecizată",
      "rightsStatus": "operator-homepage-unconfirmed",
      "alt": {
        "ro": "Anunț oficial cu fotografie a bicicliștilor pe ruta Timișoara–Zrenjanin.",
        "en": "Official announcement with a photograph of cyclists on the Timișoara–Zrenjanin route.",
        "it": "Avviso ufficiale con fotografia di ciclisti sulla rotta Timișoara–Zrenjanin.",
        "fr": "Annonce officielle avec photographie de cyclistes sur l’itinéraire Timișoara–Zrenjanin.",
        "es": "Anuncio oficial con fotografía de ciclistas en la ruta Timișoara–Zrenjanin.",
        "zh-Hans": "附有蒂米什瓦拉—兹雷尼亚宁路线骑行者照片的官方公告。"
      },
      "caption": {
        "ro": "Anunț oficial publicat în martie 2026, cu o fotografie a traseului. Verifică separat condițiile actuale de trecere.",
        "en": "Official announcement published in March 2026 with a route photograph. Check current crossing conditions separately.",
        "it": "Avviso ufficiale di marzo 2026 con fotografia del percorso. Verifica separatamente le condizioni attuali di attraversamento.",
        "fr": "Annonce officielle de mars 2026 avec une photographie du parcours. Vérifiez les conditions actuelles de passage.",
        "es": "Anuncio oficial de marzo de 2026 con fotografía de la ruta. Consulta por separado las condiciones actuales del paso.",
        "zh-Hans": "2026 年 3 月发布的官方公告，含路线照片。请另行确认当前通关条件。"
      }
    }
  },
  {
    "id": "la-livada",
    "name": {
      "ro": "La Livada",
      "en": "La Livada",
      "it": "La Livada",
      "fr": "La Livada",
      "es": "La Livada",
      "zh-Hans": "La Livada"
    },
    "description": {
      "ro": "Fă o oprire la livada din Sânmihaiu Român, lângă pista de pe Bega. Consultă operatorul pentru masa în aer liber, intrarea exactă și disponibilitatea din ziua vizitei.",
      "en": "Pause at the orchard in Sânmihaiu Român, beside the Bega cycle path. Check with the operator about outdoor dining, the exact entrance and availability on your visiting day.",
      "it": "Fai una sosta nella livadă di Sânmihaiu Român, vicino alla ciclabile del Bega. Verifica con il gestore tavoli all’aperto, ingresso esatto e disponibilità del giorno.",
      "fr": "Faites une halte au verger de Sânmihaiu Român, près de la piste du Bega. Renseignez-vous sur les repas dehors, l’entrée exacte et la disponibilité du jour.",
      "es": "Haz una parada en el huerto de Sânmihaiu Român, junto a la vía ciclista del Bega. Consulta mesas exteriores, entrada exacta y disponibilidad del día.",
      "zh-Hans": "在贝加河自行车道旁的 Sânmihaiu Român 果园歇一歇。请向经营方确认户外用餐、确切入口，以及到访当天是否开放。"
    },
    "categories": [
      "nature"
    ],
    "venues": [
      {
        "id": "la-livada-main",
        "name": "La Livada",
        "address": "Sânmihaiu Român, lângă pista de biciclete Bega",
        "verified": true,
        "status": "open",
        "minors": "unknown",
        "url": "https://lalivadabanateana.ro/",
        "linkType": "official",
        "sources": [
          "https://lalivadabanateana.ro/"
        ],
        "verifiedAt": "2026-11-13"
      }
    ],
    "photo": {
      "path": "/media/photos-v03/outdoor-la-livada.webp",
      "author": "Autor neprecizat (site-ul operatorului)",
      "source": "https://lalivadabanateana.ro/",
      "license": "Sursă: site-ul operatorului · licență de reutilizare neprecizată",
      "rightsStatus": "operator-homepage-unconfirmed",
      "alt": {
        "ro": "Zonă verde și leagăn la La Livada Bănățeană.",
        "en": "Green grounds and a swing at La Livada Bănățeană.",
        "it": "Spazio verde e altalena a La Livada Bănățeană.",
        "fr": "Espace vert et balançoire à La Livada Bănățeană.",
        "es": "Zona verde y columpio de La Livada Bănățeană.",
        "zh-Hans": "La Livada Bănățeană 的绿地与秋千。"
      }
    }
  },
  {
    "id": "plaja-noua",
    "name": {
      "ro": "Plaja Nouă",
      "en": "Plaja Nouă",
      "it": "Plaja Nouă",
      "fr": "Plaja Nouă",
      "es": "Plaja Nouă",
      "zh-Hans": "Plaja Nouă"
    },
    "description": {
      "ro": "La Plaja Nouă este o locație în aer liber în zona Sânmihaiu Român. Confirmă accesul public și sezonul direct.",
      "en": "La Plaja Nouă is an outdoor venue near Sânmihaiu Român. Confirm public access and the season directly.",
      "it": "La Plaja Nouă è uno spazio all’aperto presso Sânmihaiu Român. Conferma accesso pubblico e stagione.",
      "fr": "La Plaja Nouă est un lieu de plein air près de Sânmihaiu Român. Confirmez l’accès public et la saison.",
      "es": "La Plaja Nouă es un recinto al aire libre cerca de Sânmihaiu Român. Confirma el acceso público y la temporada.",
      "zh-Hans": "La Plaja Nouă 是 Sânmihaiu Român 附近的户外场地。请直接确认开放季节和公众入场安排。"
    },
    "categories": [
      "nature"
    ],
    "venues": [
      {
        "id": "plaja-noua-unconfirmed",
        "name": "La Plaja Nouă",
        "address": "DJ591C, Sânmihaiu Român / zona Utvin, Timiș",
        "verified": true,
        "status": "unknown",
        "minors": "unknown",
        "sources": [
          "https://www.facebook.com/laplajanoua/",
          "https://bestmarkets.ro/en/la-plaja-noua/"
        ],
        "url": "https://www.facebook.com/laplajanoua/",
        "linkType": "official",
        "verifiedAt": "2026-11-13"
      }
    ]
  },
  {
    "id": "herneacova",
    "name": {
      "ro": "Herneacova",
      "en": "Herneacova",
      "it": "Herneacova",
      "fr": "Herneacova",
      "es": "Herneacova",
      "zh-Hans": "Herneacova"
    },
    "description": {
      "ro": "O idee de ieșire în natură la Domeniul Herneacova, cu activități ecvestre și trasee de explorat. Confirmă sezonul, rezervarea și condițiile fiecărei activități direct la operator.",
      "en": "Consider an outdoor outing at the Herneacova estate, with equestrian activities and places to explore. Confirm the season, booking and each activity’s conditions directly with the operator.",
      "it": "Un’idea per uscire nella natura alla tenuta Herneacova, tra attività equestri e percorsi da esplorare. Conferma stagione, prenotazione e condizioni di ogni attività con il gestore.",
      "fr": "Une idée de sortie nature au domaine Herneacova, entre activités équestres et parcours. Confirmez directement la saison, les réservations et les conditions de chaque activité.",
      "es": "Una idea de salida a la naturaleza en Herneacova, con actividades ecuestres y recorridos. Confirma temporada, reservas y condiciones de cada actividad directamente con el operador.",
      "zh-Hans": "到 Herneacova 庄园探索自然与马术活动。安排出游前，请直接向经营方确认开放季节、预约方式，以及各项活动的具体条件。"
    },
    "categories": [
      "nature"
    ],
    "venues": [
      {
        "id": "herneacova-main",
        "name": "Herneacova",
        "address": "Domeniul Herneacova, Herneacova, Timiș",
        "verified": true,
        "status": "unknown",
        "minors": "unknown",
        "url": "https://herneacova.ro/",
        "linkType": "official",
        "sources": [
          "https://herneacova.ro/",
          "https://visit-timis.ro/domeniul-herneacova",
          "https://visit-timis.ro/parcul-de-aventura-herneacova"
        ],
        "verifiedAt": "2026-11-13"
      }
    ],
    "photo": {
      "path": "/media/photos-v03/outdoor-herneacova.webp",
      "author": "Autor neprecizat (site-ul operatorului)",
      "source": "https://herneacova.ro/279016651_2904048349893273_2193175180094128341_n/",
      "license": "Sursă: site-ul operatorului · licență de reutilizare neprecizată",
      "rightsStatus": "operator-homepage-unconfirmed",
      "alt": {
        "ro": "Trăsură, gazon și clădiri pe Domeniul Herneacova, în fotografia de arhivă a operatorului.",
        "en": "Carriage, lawns and buildings at Domeniul Herneacova in the operator’s archive photograph.",
        "it": "Carrozza, prati ed edifici del Domeniul Herneacova nella fotografia d’archivio del gestore.",
        "fr": "Calèche, pelouses et bâtiments de Domeniul Herneacova sur une photographie d’archive de l’exploitant.",
        "es": "Carruaje, césped y edificios de Domeniul Herneacova en una fotografía de archivo del operador.",
        "zh-Hans": "经营方档案照片中的 Domeniul Herneacova 马车、草坪与建筑。"
      },
      "caption": {
        "ro": "Fotografie din arhiva operatorului, încărcată în martie 2024; data fotografierii nu este precizată.",
        "en": "Operator archive photograph uploaded in March 2024; capture date unspecified.",
        "it": "Fotografia dell’archivio del gestore, caricata a marzo 2024; data di scatto non indicata.",
        "fr": "Photographie d’archive de l’exploitant mise en ligne en mars 2024 ; date de prise de vue non précisée.",
        "es": "Fotografía del archivo del operador subida en marzo de 2024; fecha de captura no indicada.",
        "zh-Hans": "经营方档案照片，于 2024 年 3 月上传；拍摄日期未注明。"
      }
    }
  },
  {
    "id": "liziera",
    "name": {
      "ro": "L’iziera Park",
      "en": "L’iziera Park",
      "it": "L’iziera Park",
      "fr": "L’iziera Park",
      "es": "L’iziera Park",
      "zh-Hans": "L’iziera Park"
    },
    "description": {
      "ro": "Descoperă un spațiu de recreere lângă pădurea Bistra, în zona Ghiroda. Activitățile și accesul depind de sezon; confirmă redeschiderea la operator înainte de a porni.",
      "en": "Discover a recreation space beside Bistra forest, near Ghiroda. Activities and admission depend on the season; confirm reopening with the operator before setting out for your visit.",
      "it": "Scopri uno spazio ricreativo vicino alla foresta Bistra, nella zona di Ghiroda. Attività e accesso dipendono dalla stagione; conferma la riapertura con il gestore prima di partire.",
      "fr": "Découvrez un espace de loisirs près de la forêt Bistra, à Ghiroda. Activités et accès dépendent de la saison ; confirmez la réouverture avant de partir.",
      "es": "Descubre un espacio de ocio junto al bosque Bistra, cerca de Ghiroda. Las actividades y el acceso son estacionales; confirma la reapertura antes de salir.",
      "zh-Hans": "探索 Ghiroda 附近 Bistra 森林旁的休闲空间。活动与入场受季节影响；出发前请向经营方确认是否已重新开放。"
    },
    "categories": [
      "nature"
    ],
    "venues": [
      {
        "id": "liziera-main",
        "name": "L’iziera Park",
        "address": "Pădurea Bistra, lângă Ghiroda, Timiș",
        "verified": true,
        "status": "unknown",
        "minors": "yes",
        "url": "https://liziera.com/",
        "linkType": "official",
        "sources": [
          "https://liziera.com/"
        ],
        "verifiedAt": "2026-11-13"
      }
    ],
    "photo": {
      "path": "/media/photos-v03/outdoor-liziera.webp",
      "author": "Autor neprecizat (site-ul operatorului)",
      "source": "https://liziera.com/",
      "license": "Sursă: site-ul operatorului · licență de reutilizare neprecizată",
      "rightsStatus": "operator-homepage-unconfirmed",
      "alt": {
        "ro": "Colț cu scaune și oglindă în pădurea de la L’iziera Park.",
        "en": "Chairs and a mirror in the woodland at L’iziera Park.",
        "it": "Sedie e specchio nel bosco di L’iziera Park.",
        "fr": "Chaises et miroir dans le bois de L’iziera Park.",
        "es": "Sillas y espejo en el bosque de L’iziera Park.",
        "zh-Hans": "L’iziera Park 林间的椅子与镜子。"
      }
    }
  },
  {
    "id": "parcul-rozelor",
    "name": {
      "ro": "Parcul Rozelor",
      "en": "Rose Park",
      "it": "Parco delle Rose",
      "fr": "Parc des Roses",
      "es": "Parque de las Rosas",
      "zh-Hans": "玫瑰公园"
    },
    "description": {
      "ro": "Plimbă-te printre straturile de trandafiri și aleile Parcului Rozelor. Observă culorile și ritmul grădinii, apoi continuă spre malul Begăi pentru o pauză în aer liber.",
      "en": "Walk among the rose beds and paths of Rose Park. Notice the garden’s colours and rhythm, then continue towards the Bega riverbank for an outdoor pause.",
      "it": "Passeggia tra le aiuole di rose e i viali del Parco delle Rose. Osserva colori e ritmo del giardino, poi prosegui verso la riva del Bega.",
      "fr": "Promenez-vous parmi les rosiers et les allées du parc des Roses. Observez les couleurs du jardin, puis poursuivez vers la berge de la Bega pour une pause.",
      "es": "Pasea entre los rosales y senderos del Parque de las Rosas. Observa los colores del jardín y continúa hacia la ribera del Bega para descansar.",
      "zh-Hans": "沿玫瑰公园的花坛和步道漫步，观察花园的色彩与节奏，再走向附近的贝加河岸，享受一段户外休息时光。"
    },
    "categories": [
      "nature"
    ],
    "venues": [
      {
        "id": "parcul-rozelor-main",
        "name": "Parcul Rozelor",
        "address": "Parcul Rozelor, Strada Academician Alexandru Borza, Timișoara",
        "verified": true,
        "status": "open",
        "minors": "yes",
        "url": "https://www.openstreetmap.org/?mlat=45.75&mlon=21.231111#map=18/45.75/21.231111",
        "linkType": "map",
        "sources": [
          "https://visit-timisoara.com/ro/o-zi-in-timisoara/",
          "https://assets.primariatm.ro/794f423e-e38c-4343-bb13-ffc0a0128100",
          "https://www.wikidata.org/wiki/Q22691420",
          "https://www.wikidata.org/wiki/Q132449",
          "https://www.wikidata.org/wiki/Q22693421"
        ],
        "verifiedAt": "2026-11-13",
        "lat": 45.75,
        "lon": 21.231111
      }
    ],
    "photo": {
      "path": "/media/photos/parcul-rozelor.webp",
      "author": "Turbojet",
      "source": "https://commons.wikimedia.org/wiki/File:Parcul_Rozelor_Timisoara_-_entrance.jpg",
      "license": "CC BY-SA 4.0 · https://creativecommons.org/licenses/by-sa/4.0",
      "alt": {
        "ro": "Parcul Rozelor",
        "en": "Rose Park",
        "it": "Parco delle Rose",
        "fr": "Parc des Roses",
        "es": "Parque de las Rosas",
        "zh-Hans": "玫瑰公园"
      },
      "rightsStatus": "licensed"
    }
  },
  {
    "id": "parcul-botanic",
    "name": {
      "ro": "Parcul Botanic",
      "en": "Botanical Park",
      "it": "Parco Botanico",
      "fr": "Parc botanique",
      "es": "Parque Botánico",
      "zh-Hans": "植物园"
    },
    "description": {
      "ro": "Explorează aleile Grădinii Botanice și observă arborii și schimbările de anotimp. O plimbare liniștită aproape de centru, cu atenție la plante și la indicatoarele grădinii.",
      "en": "Explore the Botanical Garden’s paths and notice its trees and changing seasons. Take a quiet walk near the centre, respecting the plants and the garden’s posted signs.",
      "it": "Esplora i viali del Giardino Botanico e osserva alberi e stagioni. Una passeggiata tranquilla vicino al centro, rispettando le piante e le indicazioni del giardino.",
      "fr": "Explorez les allées du jardin botanique, ses arbres et les changements de saison. Une promenade calme près du centre, dans le respect des plantes et des panneaux.",
      "es": "Explora los caminos del Jardín Botánico y observa sus árboles y estaciones. Un paseo tranquilo cerca del centro, respetando las plantas y las indicaciones del jardín.",
      "zh-Hans": "走进植物园步道，观察树木与季节变化。在市中心附近慢慢散步，爱护植物，并遵守园内标识和现场开放规定。"
    },
    "categories": [
      "nature"
    ],
    "venues": [
      {
        "id": "parcul-botanic-main",
        "name": "Parcul Botanic",
        "address": "Grădina Botanică, Strada Gheorghe Dima, Timișoara",
        "verified": true,
        "status": "open",
        "minors": "yes",
        "url": "https://www.openstreetmap.org/?mlat=45.76&mlon=21.2247222#map=18/45.76/21.2247222",
        "linkType": "map",
        "sources": [
          "https://visit-timisoara.com/ro/o-zi-in-timisoara/",
          "https://assets.primariatm.ro/794f423e-e38c-4343-bb13-ffc0a0128100",
          "https://www.wikidata.org/wiki/Q22691420",
          "https://www.wikidata.org/wiki/Q132449",
          "https://www.wikidata.org/wiki/Q22693421"
        ],
        "verifiedAt": "2026-11-13",
        "lat": 45.76,
        "lon": 21.2247222
      }
    ],
    "photo": {
      "path": "/media/photos/parcul-botanic.webp",
      "author": "Tournasol7",
      "source": "https://commons.wikimedia.org/wiki/File:Botanical_Garden_in_Timisoara_(1).jpg",
      "license": "CC BY 4.0 · https://creativecommons.org/licenses/by/4.0",
      "alt": {
        "ro": "Parcul Botanic",
        "en": "Botanical Park",
        "it": "Parco Botanico",
        "fr": "Parc botanique",
        "es": "Parque Botánico",
        "zh-Hans": "植物园"
      },
      "rightsStatus": "licensed"
    }
  },
  {
    "id": "parcul-civic",
    "name": {
      "ro": "Parcul Civic",
      "en": "Civic Park",
      "it": "Parco Civico",
      "fr": "Parc civique",
      "es": "Parque Cívico",
      "zh-Hans": "市民公园"
    },
    "description": {
      "ro": "Alege aleile parcului pentru o plimbare în aer liber și o pauză la umbră. Respectă spațiile verzi și indicatoarele întâlnite pe traseul tău.",
      "en": "Choose the park’s paths for an outdoor walk and a pause in the shade. Respect planted areas and follow the signs you encounter along your way.",
      "it": "Scegli i viali del parco per una passeggiata all’aperto e una pausa all’ombra. Rispetta gli spazi verdi e le indicazioni lungo il tuo percorso.",
      "fr": "Empruntez les allées du parc pour marcher dehors et faire une pause à l’ombre. Respectez les espaces plantés et les indications rencontrées sur votre chemin.",
      "es": "Recorre los senderos del parque y descansa a la sombra. Respeta las zonas verdes y sigue las indicaciones que encuentres a lo largo del paseo.",
      "zh-Hans": "沿公园步道散步，在树荫下歇一歇。请爱护绿地，留意沿途标识，按照现场开放情况选择适合自己的游览路线。"
    },
    "categories": [
      "nature"
    ],
    "venues": [
      {
        "id": "parcul-civic-main",
        "name": "Parcul Civic",
        "address": "Parcul Civic, Bd. Ion C. Brătianu, Timișoara",
        "verified": true,
        "status": "open",
        "minors": "yes",
        "url": "https://www.openstreetmap.org/?mlat=45.7538889&mlon=21.2313889#map=18/45.7538889/21.2313889",
        "linkType": "map",
        "sources": [
          "https://assets.primariatm.ro/a5b46023-21e5-4f2d-a058-16a90869b8d6",
          "https://assets.primariatm.ro/794f423e-e38c-4343-bb13-ffc0a0128100",
          "https://www.wikidata.org/wiki/Q22693420"
        ],
        "verifiedAt": "2026-11-13",
        "lat": 45.7538889,
        "lon": 21.2313889
      }
    ],
    "photo": {
      "path": "/media/photos/parcul-civic.webp",
      "author": "Ionlizarazu",
      "source": "https://commons.wikimedia.org/wiki/File:Civic_Park,_Timi%C8%99oara.jpg",
      "license": "CC BY-SA 4.0 · https://creativecommons.org/licenses/by-sa/4.0",
      "alt": {
        "ro": "Parcul Civic",
        "en": "Civic Park",
        "it": "Parco Civico",
        "fr": "Parc civique",
        "es": "Parque Cívico",
        "zh-Hans": "市民公园"
      },
      "rightsStatus": "licensed"
    }
  },
  {
    "id": "parcul-castelului",
    "name": {
      "ro": "Parcul Castelului",
      "en": "Castle Park",
      "it": "Parco del Castello",
      "fr": "Parc du Château",
      "es": "Parque del Castillo",
      "zh-Hans": "城堡公园"
    },
    "description": {
      "ro": "Explorează spațiul verde din jurul Castelului Huniade, denumit oficial Scuarul Castelului. Accesul în castel se verifică separat.",
      "en": "Explore the green space around Huniade Castle, officially Scuarul Castelului. Castle admission must be checked separately.",
      "it": "Esplora il verde intorno al Castello Huniade, ufficialmente Scuarul Castelului. Verifica separatamente l’accesso al castello.",
      "fr": "Découvrez l’espace vert autour du château Huniade, officiellement Scuarul Castelului. Vérifiez séparément l’accès au château.",
      "es": "Explora la zona verde del castillo Huniade, oficialmente Scuarul Castelului. Consulta por separado el acceso al castillo.",
      "zh-Hans": "探索 Huniade 城堡周围的绿地，其正式名称为 Scuarul Castelului。城堡内部的开放情况须另行确认。"
    },
    "categories": [
      "nature"
    ],
    "venues": [
      {
        "id": "parcul-castelului-unconfirmed",
        "name": "Parcul Castelului",
        "address": "În jurul Castelului Huniade, Piața Iancu Huniade, Timișoara",
        "verified": true,
        "status": "open",
        "minors": "yes",
        "sources": [
          "https://assets.primariatm.ro/fcc31563-72a6-4e5c-9610-2562cfb00ce9",
          "https://hcl.civicul.ro/view-hcl/hcl_533_08.12.2015/attachment/007_ANEXA_NR.1_LISTA_DENUMIRI_PARCURI_SCUARURI.pdf",
          "https://hcl.usr.ro/timisoara/2023/h229"
        ],
        "url": "https://hcl.civicul.ro/view-hcl/hcl_533_08.12.2015/attachment/007_ANEXA_NR.1_LISTA_DENUMIRI_PARCURI_SCUARURI.pdf",
        "linkType": "official",
        "verifiedAt": "2026-11-13"
      }
    ],
    "photo": {
      "path": "/media/photos-v02/parcul-castelului.webp",
      "author": "Vacant0",
      "source": "https://commons.wikimedia.org/wiki/File:Huniade_Castle,_Timi%C8%99oara,_August_2022.jpg",
      "license": "CC BY-SA 4.0 · https://creativecommons.org/licenses/by-sa/4.0",
      "alt": {
        "ro": "Alee și gazon în Scuarul Castelului, lângă Castelul Huniade.",
        "en": "Path and lawn in Castle Park beside Huniade Castle.",
        "it": "Sentiero e prato del Parco del Castello accanto al Castello Huniade.",
        "fr": "Allée et pelouse du parc du Château, à côté du château Huniade.",
        "es": "Sendero y césped del Parque del Castillo, junto al castillo Huniade.",
        "zh-Hans": "匈雅提城堡旁城堡公园内的小径与草坪。"
      },
      "rightsStatus": "licensed"
    }
  },
  {
    "id": "parcul-regina-maria",
    "name": {
      "ro": "Parcul Regina Maria",
      "en": "Queen Maria Park",
      "it": "Parco Regina Maria",
      "fr": "Parc Regina Maria",
      "es": "Parque Regina Maria",
      "zh-Hans": "玛丽亚王后公园"
    },
    "description": {
      "ro": "Alege aleile parcului pentru o plimbare în aer liber și o pauză la umbră. Respectă spațiile verzi și indicatoarele întâlnite pe traseul tău.",
      "en": "Choose the park’s paths for an outdoor walk and a pause in the shade. Respect planted areas and follow the signs you encounter along your way.",
      "it": "Scegli i viali del parco per una passeggiata all’aperto e una pausa all’ombra. Rispetta gli spazi verdi e le indicazioni lungo il tuo percorso.",
      "fr": "Empruntez les allées du parc pour marcher dehors et faire une pause à l’ombre. Respectez les espaces plantés et les indications rencontrées sur votre chemin.",
      "es": "Recorre los senderos del parque y descansa a la sombra. Respeta las zonas verdes y sigue las indicaciones que encuentres a lo largo del paseo.",
      "zh-Hans": "沿公园步道散步，在树荫下歇一歇。请爱护绿地，留意沿途标识，按照现场开放情况选择适合自己的游览路线。"
    },
    "categories": [
      "nature"
    ],
    "venues": [
      {
        "id": "parcul-regina-maria-main",
        "name": "Parcul Regina Maria",
        "address": "Parcul Regina Maria, Bd. 3 August 1919, Timișoara",
        "verified": true,
        "status": "open",
        "minors": "yes",
        "url": "https://www.openstreetmap.org/?mlat=45.755587&mlon=21.242449#map=18/45.755587/21.242449",
        "linkType": "map",
        "sources": [
          "https://visit-timisoara.com/ro/o-zi-in-timisoara/",
          "https://assets.primariatm.ro/794f423e-e38c-4343-bb13-ffc0a0128100",
          "https://www.wikidata.org/wiki/Q22691420",
          "https://www.wikidata.org/wiki/Q132449",
          "https://www.wikidata.org/wiki/Q22693421"
        ],
        "verifiedAt": "2026-11-13",
        "lat": 45.755587,
        "lon": 21.242449
      }
    ],
    "photo": {
      "path": "/media/photos/parcul-regina-maria.webp",
      "author": "Fred Romero from Paris, France",
      "source": "https://commons.wikimedia.org/wiki/File:Timi%C8%99oara_-_Parcul_%E2%80%9ERegina_Maria%E2%80%9D_(43013587180).jpg",
      "license": "CC BY 2.0 · https://creativecommons.org/licenses/by/2.0",
      "alt": {
        "ro": "Parcul Regina Maria",
        "en": "Queen Maria Park",
        "it": "Parco Regina Maria",
        "fr": "Parc Regina Maria",
        "es": "Parque Regina Maria",
        "zh-Hans": "玛丽亚王后公园"
      },
      "rightsStatus": "licensed"
    }
  },
  {
    "id": "pet-yoga",
    "name": {
      "ro": "Pet Yoga — Puppy Yoga la FABER",
      "en": "Pet Yoga — Puppy Yoga at FABER",
      "it": "Pet Yoga — Puppy Yoga da FABER",
      "fr": "Pet Yoga — Puppy Yoga à FABER",
      "es": "Pet Yoga — Puppy Yoga en FABER",
      "zh-Hans": "宠物瑜伽 — FABER 小狗瑜伽"
    },
    "description": {
      "ro": "Propunere: Puppy Yoga la FABER, pe 22 noiembrie 2026, numai cu rezervare. Sesiunile standard sunt pentru persoane de minimum 14 ani.",
      "en": "Suggested option: Puppy Yoga at FABER on 22 November 2026, by reservation only. Standard sessions are for ages 14 and over.",
      "it": "Proposta: Puppy Yoga da FABER il 22 novembre 2026, solo su prenotazione. Sessioni standard dai 14 anni.",
      "fr": "Suggestion : Puppy Yoga à FABER le 22 novembre 2026, sur réservation. Séances standard à partir de 14 ans.",
      "es": "Propuesta: Puppy Yoga en FABER el 22 de noviembre de 2026, con reserva. Sesiones estándar a partir de 14 años.",
      "zh-Hans": "推荐选项：2026 年 11 月 22 日在 FABER 举行的小狗瑜伽，须预约。普通课程仅限 14 岁及以上人士。"
    },
    "categories": [
      "relax"
    ],
    "venues": [
      {
        "id": "pet-yoga-unconfirmed",
        "name": "Pet Yoga — Puppy Yoga la FABER",
        "address": "FABER, Splaiul Peneș Curcanul 4–5, Timișoara",
        "verified": true,
        "status": "open",
        "minors": "yes",
        "sources": [
          "https://puppyyoga.ro/programari/",
          "https://puppyyoga.ro/termeni-si-conditii/",
          "https://faber.ro/ro/contact/",
          "https://yogafit.ro/blog/ce-se-intampla-cand-aduci-catei-pe-saltea/"
        ],
        "url": "https://puppyyoga.ro/programari/",
        "linkType": "official",
        "verifiedAt": "2026-11-13",
        "minimumAge": 14,
        "eventDates": [
          "2026-11-22"
        ],
        "reviewAfter": "2026-11-22"
      }
    ],
    "photo": {
      "path": "/media/photos-v03/outdoor-pet-yoga.webp",
      "author": "Autor neprecizat (site-ul operatorului)",
      "source": "https://puppyyoga.ro/",
      "license": "Sursă: site-ul operatorului · licență de reutilizare neprecizată",
      "rightsStatus": "operator-homepage-unconfirmed",
      "alt": {
        "ro": "Participantă și cățeluș într-o fotografie de prezentare Puppy Yoga România.",
        "en": "Participant and puppy in a Puppy Yoga Romania promotional photograph.",
        "it": "Partecipante e cucciolo in una fotografia di Puppy Yoga Romania.",
        "fr": "Participante et chiot sur une photographie de Puppy Yoga Romania.",
        "es": "Participante y cachorro en una fotografía de Puppy Yoga Romania.",
        "zh-Hans": "Puppy Yoga Romania 宣传照片中的参与者与小狗。"
      },
      "caption": {
        "ro": "Imagine de prezentare a operatorului; nu este confirmată ca fiind realizată la FABER.",
        "en": "Operator promotional photograph; not confirmed as taken at FABER.",
        "it": "Fotografia del gestore; non è confermato che sia stata scattata a FABER.",
        "fr": "Photographie de l’exploitant ; prise de vue à FABER non confirmée.",
        "es": "Fotografía del operador; no se ha confirmado que se tomara en FABER.",
        "zh-Hans": "经营方宣传照片；尚未证实拍摄地点为 FABER。"
      }
    }
  },
  {
    "id": "dharmaland",
    "name": {
      "ro": "Dharmaland",
      "en": "Dharmaland",
      "it": "Dharmaland",
      "fr": "Dharmaland",
      "es": "Dharmaland",
      "zh-Hans": "Dharmaland"
    },
    "description": {
      "ro": "Dharmaland, la Gymone4spa, oferă piscină interioară, saune și servicii de relaxare. Verifică rezervarea și condițiile fiecărui serviciu.",
      "en": "Dharmaland at Gymone4spa offers an indoor pool, saunas and relaxation services. Check bookings and each service’s conditions.",
      "it": "Dharmaland, presso Gymone4spa, offre piscina coperta, saune e servizi relax. Verifica prenotazione e condizioni del servizio.",
      "fr": "Dharmaland, chez Gymone4spa, propose piscine intérieure, saunas et services de détente. Vérifiez réservation et conditions du service.",
      "es": "Dharmaland, en Gymone4spa, ofrece piscina cubierta, saunas y servicios de relajación. Consulta reservas y condiciones de cada servicio.",
      "zh-Hans": "Gymone4spa 的 Dharmaland 提供室内泳池、桑拿和放松服务。请确认预约及各项服务的使用条件。"
    },
    "categories": [
      "relax"
    ],
    "venues": [
      {
        "id": "dharmaland-unconfirmed",
        "name": "Dharmaland",
        "address": "Strada Memorandului 76–80, Timișoara",
        "verified": true,
        "status": "open",
        "minors": "unknown",
        "sources": [
          "https://gymone4spa.ro/programare/",
          "https://gymone4spa.ro/spa/",
          "https://gymone4spa.ro/contact-2/"
        ],
        "url": "https://gymone4spa.ro/programare/",
        "linkType": "official",
        "verifiedAt": "2026-11-13"
      }
    ],
    "photo": {
      "path": "/media/photos-v03/outdoor-dharmaland.webp",
      "author": "Autor neprecizat (site-ul operatorului)",
      "source": "https://gymone4spa.ro/",
      "license": "Sursă: site-ul operatorului · licență de reutilizare neprecizată",
      "rightsStatus": "operator-homepage-unconfirmed",
      "alt": {
        "ro": "Piscina interioară Gym One 4 Spa, fostul Dharmaland.",
        "en": "Indoor pool at Gym One 4 Spa, formerly Dharmaland.",
        "it": "Piscina coperta di Gym One 4 Spa, già Dharmaland.",
        "fr": "Piscine intérieure de Gym One 4 Spa, anciennement Dharmaland.",
        "es": "Piscina cubierta de Gym One 4 Spa, antes Dharmaland.",
        "zh-Hans": "Gym One 4 Spa（原 Dharmaland）的室内泳池。"
      }
    }
  },
  {
    "id": "bega-walk",
    "name": {
      "ro": "Plimbare pe malul Begăi",
      "en": "Walk along the Bega",
      "it": "Passeggiata lungo il Bega",
      "fr": "Promenade au bord de la Bega",
      "es": "Paseo junto al Bega",
      "zh-Hans": "贝加河畔漫步"
    },
    "description": {
      "ro": "Urmează promenada Begăi între poduri și privește orașul dinspre apă. Seara, luminile se reflectă în canal; păstrează distanța față de margine și respectă traseele comune.",
      "en": "Follow the Bega promenade between bridges and see the city from the water’s edge. Evening lights reflect in the canal; keep clear of the edge and shared routes.",
      "it": "Segui la passeggiata del Bega tra i ponti e guarda la città dall’acqua. La sera le luci si riflettono nel canale; rispetta margini e percorsi condivisi.",
      "fr": "Longez la Bega entre les ponts pour voir la ville depuis l’eau. Le soir, les lumières se reflètent dans le canal ; respectez la berge et les parcours partagés.",
      "es": "Sigue el paseo del Bega entre puentes y observa la ciudad desde el agua. Las luces se reflejan al anochecer; respeta el borde y los caminos compartidos.",
      "zh-Hans": "沿贝加河步道穿行于桥梁之间，从水边欣赏城市。夜晚灯光映在运河中；请与岸边保持距离，并注意共用步道上的行人和骑车者。"
    },
    "categories": [
      "relax"
    ],
    "venues": [
      {
        "id": "bega-walk-main",
        "name": "Plimbare pe malul Begăi",
        "address": "Malul Begăi, între Podul Maria și Podul Mihai Viteazul, Timișoara",
        "verified": true,
        "status": "open",
        "minors": "yes",
        "url": "https://visit-timisoara.com/ro/timisoara-instagramabila/",
        "linkType": "official",
        "sources": [
          "https://visit-timisoara.com/ro/timisoara-instagramabila/"
        ],
        "verifiedAt": "2026-11-13"
      }
    ],
    "photo": {
      "path": "/media/photos/bega-walk.webp",
      "author": "ABBAfan18",
      "source": "https://commons.wikimedia.org/wiki/File:Bega_noaptea_in_Timisoara_Podul_Tineretii.JPG",
      "license": "Public domain",
      "alt": {
        "ro": "Plimbare pe malul Begăi",
        "en": "Walk along the Bega",
        "it": "Passeggiata lungo il Bega",
        "fr": "Promenade au bord de la Bega",
        "es": "Paseo junto al Bega",
        "zh-Hans": "贝加河畔漫步"
      },
      "rightsStatus": "licensed"
    }
  },
  {
    "id": "bega-boat",
    "name": {
      "ro": "Plimbare cu vaporașul pe Bega",
      "en": "Boat ride on the Bega",
      "it": "Giro in battello sul Bega",
      "fr": "Balade en bateau sur la Bega",
      "es": "Paseo en barco por el Bega",
      "zh-Hans": "乘船游览贝加河"
    },
    "description": {
      "ro": "Sezonul STPT de navigație pe Bega s-a încheiat pe 23 octombrie 2026. Verifică anunțul de reluare înainte de a planifica îmbarcarea.",
      "en": "The STPT Bega navigation season ended on 23 October 2026. Check for a reopening announcement before planning to board.",
      "it": "La stagione STPT sul Bega è terminata il 23 ottobre 2026. Verifica l’annuncio di ripresa prima di pianificare l’imbarco.",
      "fr": "La saison STPT sur la Bega s’est achevée le 23 octobre 2026. Vérifiez l’annonce de reprise avant de prévoir l’embarquement.",
      "es": "La temporada de STPT en el Bega terminó el 23 de octubre de 2026. Consulta el anuncio de reapertura antes de embarcar.",
      "zh-Hans": "STPT 的 Bega 河航季已于 2026 年 10 月 23 日结束。计划乘船前请查看恢复运营公告。"
    },
    "categories": [
      "relax"
    ],
    "venues": [
      {
        "id": "bega-boat-main",
        "name": "Plimbare cu vaporașul pe Bega",
        "address": "Canalul Bega, stațiile STPT din Timișoara",
        "verified": true,
        "status": "closed",
        "minors": "unknown",
        "url": "https://stpt.ro/",
        "linkType": "official",
        "sources": [
          "https://stpt.ro/vaporasele-stpt-isi-incheie-sezonul-de-navigatie-pe-canalul-bega/"
        ],
        "verifiedAt": "2026-11-13"
      }
    ],
    "photo": {
      "path": "/media/photos/bega-boat.webp",
      "author": "Mihai mircea moise",
      "source": "https://commons.wikimedia.org/wiki/File:Sta%C8%9Bie_vaporetto_Ardealul.jpg",
      "license": "CC BY-SA 4.0 · https://creativecommons.org/licenses/by-sa/4.0",
      "alt": {
        "ro": "Stația de îmbarcare Ardealul pe Bega",
        "en": "Ardealul boarding stop on the Bega",
        "it": "Fermata d’imbarco Ardealul sul Bega",
        "fr": "Arrêt d’embarquement Ardealul sur la Bega",
        "es": "Embarcadero Ardealul en el Bega",
        "zh-Hans": "贝加河 Ardealul 上船站"
      },
      "rightsStatus": "licensed"
    }
  },
  {
    "id": "no-name",
    "name": {
      "ro": "No Name",
      "en": "No Name",
      "it": "No Name",
      "fr": "No Name",
      "es": "No Name",
      "zh-Hans": "No Name"
    },
    "description": {
      "ro": "Consultă programul locului pentru o seară de muzică sau întâlniri în oraș. Accesul, evenimentele și rezervările trebuie confirmate direct; condițiile pot diferi de la o seară la alta.",
      "en": "Check the venue’s programme for an evening of music or meeting friends. Confirm admission, events and reservations directly, as conditions can vary from one evening to another.",
      "it": "Consulta il programma del locale per una serata di musica o incontri. Conferma direttamente accesso, eventi e prenotazioni: le condizioni possono cambiare da una sera all’altra.",
      "fr": "Consultez le programme du lieu pour une soirée musicale ou entre amis. Confirmez directement l’entrée, les événements et les réservations ; les conditions peuvent changer selon la soirée.",
      "es": "Consulta la programación del local para una noche de música o encuentros. Confirma directamente el acceso, los eventos y las reservas, que pueden cambiar cada noche.",
      "zh-Hans": "查看场所安排，选择一晚音乐或朋友聚会。请直接确认入场、活动与预约要求；不同晚间活动的条件可能不同。"
    },
    "categories": [
      "night"
    ],
    "venues": [
      {
        "id": "no-name-unconfirmed",
        "name": "No Name",
        "address": "Bulevardul Doctor Iosif Bulbuca 11, Timișoara",
        "verified": true,
        "status": "unknown",
        "minors": "unknown",
        "sources": [
          "https://www.facebook.com/clubnonametm/",
          "https://www.timisoreni.ro/despre/club-no-name/",
          "https://www.fest.ro/ro/timisoara/locuri/beraria-park/no-name"
        ],
        "url": "https://www.facebook.com/clubnonametm/",
        "linkType": "official",
        "verifiedAt": "2026-11-13"
      }
    ],
    "photo": {
      "path": "/media/photos-v03/city-no-name.webp",
      "author": "Autor neprecizat (pagina operatorului No Name)",
      "source": "https://www.facebook.com/clubnonametm/",
      "license": "Sursă: site-ul operatorului · licență de reutilizare neprecizată",
      "rightsStatus": "operator-homepage-unconfirmed",
      "alt": {
        "ro": "Piscina No Name iluminată noaptea, fotografie publicată de operator.",
        "en": "The No Name pool lit at night, in a photograph published by the operator.",
        "it": "La piscina di No Name illuminata di notte, in una foto pubblicata dal gestore.",
        "fr": "La piscine de No Name éclairée de nuit, sur une photo publiée par l’établissement.",
        "es": "La piscina de No Name iluminada de noche, en una foto publicada por el local.",
        "zh-Hans": "运营方发布的 No Name 泳池夜景照片。"
      },
      "caption": {
        "ro": "Fotografie de prezentare publicată de operator.",
        "en": "Presentation photograph published by the operator.",
        "it": "Foto di presentazione pubblicata dal gestore.",
        "fr": "Photo de présentation publiée par l’établissement.",
        "es": "Foto de presentación publicada por el local.",
        "zh-Hans": "运营方发布的展示照片。"
      }
    }
  },
  {
    "id": "heaven",
    "name": {
      "ro": "Heaven",
      "en": "Heaven",
      "it": "Heaven",
      "fr": "Heaven",
      "es": "Heaven",
      "zh-Hans": "Heaven"
    },
    "description": {
      "ro": "Consultă programul locului pentru o seară de muzică sau întâlniri în oraș. Accesul, evenimentele și rezervările trebuie confirmate direct; condițiile pot diferi de la o seară la alta.",
      "en": "Check the venue’s programme for an evening of music or meeting friends. Confirm admission, events and reservations directly, as conditions can vary from one evening to another.",
      "it": "Consulta il programma del locale per una serata di musica o incontri. Conferma direttamente accesso, eventi e prenotazioni: le condizioni possono cambiare da una sera all’altra.",
      "fr": "Consultez le programme du lieu pour une soirée musicale ou entre amis. Confirmez directement l’entrée, les événements et les réservations ; les conditions peuvent changer selon la soirée.",
      "es": "Consulta la programación del local para una noche de música o encuentros. Confirma directamente el acceso, los eventos y las reservas, que pueden cambiar cada noche.",
      "zh-Hans": "查看场所安排，选择一晚音乐或朋友聚会。请直接确认入场、活动与预约要求；不同晚间活动的条件可能不同。"
    },
    "categories": [
      "night"
    ],
    "venues": [
      {
        "id": "heaven-unconfirmed",
        "name": "Heaven",
        "address": "Strada Ripensia 40, Timișoara",
        "verified": true,
        "status": "open",
        "minors": "unknown",
        "sources": [
          "https://heaventimisoara.ro/heaven-club/",
          "https://heaventimisoara.ro/contact/",
          "https://www.livetickets.ro/evenimente/heaven",
          "https://www.isutimis.ro/images/AVIZARE_-AUTORIZARE/2024/Anexa-12131-OIG-evidenta-autorizatii_2018---30.06.2024.pdf"
        ],
        "url": "https://heaventimisoara.ro/heaven-club/",
        "linkType": "official",
        "verifiedAt": "2026-11-13"
      }
    ],
    "photo": {
      "path": "/media/photos-v03/city-heaven.webp",
      "author": "Autor neprecizat (pagina operatorului Heaven)",
      "source": "https://heaventimisoara.ro/",
      "license": "Sursă: site-ul operatorului · licență de reutilizare neprecizată",
      "rightsStatus": "operator-homepage-unconfirmed",
      "alt": {
        "ro": "Concert la Heaven, fotografie de arhivă de pe site-ul operatorului.",
        "en": "Performance at Heaven, an archive photograph from the operator’s website.",
        "it": "Concerto da Heaven, foto d’archivio dal sito del gestore.",
        "fr": "Concert au Heaven, photo d’archive du site de l’établissement.",
        "es": "Concierto en Heaven, foto de archivo del sitio del local.",
        "zh-Hans": "Heaven 演出场景，照片来自运营方网站的历史图片。"
      },
      "caption": {
        "ro": "Fotografie de arhivă de pe site-ul Heaven; data exactă neprecizată.",
        "en": "Archive photograph from the Heaven website; exact date unspecified.",
        "it": "Foto d’archivio dal sito di Heaven; data esatta non indicata.",
        "fr": "Photo d’archive du site de Heaven ; date exacte non précisée.",
        "es": "Foto de archivo del sitio de Heaven; fecha exacta no indicada.",
        "zh-Hans": "来自 Heaven 网站的历史照片；确切拍摄日期未注明。"
      }
    }
  },
  {
    "id": "fratelli",
    "name": {
      "ro": "Fratelli",
      "en": "Fratelli",
      "it": "Fratelli",
      "fr": "Fratelli",
      "es": "Fratelli",
      "zh-Hans": "Fratelli"
    },
    "description": {
      "ro": "Consultă programul locului pentru o seară de muzică sau întâlniri în oraș. Accesul, evenimentele și rezervările trebuie confirmate direct; condițiile pot diferi de la o seară la alta.",
      "en": "Check the venue’s programme for an evening of music or meeting friends. Confirm admission, events and reservations directly, as conditions can vary from one evening to another.",
      "it": "Consulta il programma del locale per una serata di musica o incontri. Conferma direttamente accesso, eventi e prenotazioni: le condizioni possono cambiare da una sera all’altra.",
      "fr": "Consultez le programme du lieu pour une soirée musicale ou entre amis. Confirmez directement l’entrée, les événements et les réservations ; les conditions peuvent changer selon la soirée.",
      "es": "Consulta la programación del local para una noche de música o encuentros. Confirma directamente el acceso, los eventos y las reservas, que pueden cambiar cada noche.",
      "zh-Hans": "查看场所安排，选择一晚音乐或朋友聚会。请直接确认入场、活动与预约要求；不同晚间活动的条件可能不同。"
    },
    "categories": [
      "night"
    ],
    "venues": [
      {
        "id": "fratelli-main",
        "name": "Fratelli",
        "address": "Bulevardul Corneliu Coposu 3, Timișoara",
        "verified": true,
        "status": "open",
        "minors": "unknown",
        "url": "https://fratelli.ro/fratelli-timisoara",
        "linkType": "official",
        "sources": [
          "https://fratelli.ro/fratelli-timisoara"
        ],
        "verifiedAt": "2026-11-13"
      }
    ],
    "photo": {
      "path": "/media/photos-v02/city-fratelli.webp",
      "author": "Datz.ro",
      "source": "https://www.flickr.com/photos/datz_ro/8478800217/",
      "license": "CC BY 2.0 · https://creativecommons.org/licenses/by/2.0/",
      "alt": {
        "ro": "Zdob și Zdub în concert la Fratelli Timișoara, februarie 2013.",
        "en": "Zdob și Zdub performing at Fratelli Timișoara, February 2013.",
        "it": "Zdob și Zdub in concerto al Fratelli Timișoara, febbraio 2013.",
        "fr": "Concert de Zdob și Zdub au Fratelli Timișoara, en février 2013.",
        "es": "Zdob și Zdub en concierto en Fratelli Timișoara, febrero de 2013.",
        "zh-Hans": "2013 年 2 月，Zdob și Zdub 乐队在蒂米什瓦拉 Fratelli 演出。"
      },
      "caption": {
        "ro": "Arhivă, 2013. Sediul fotografiat nu este confirmat ca sediul actual.",
        "en": "Archive, 2013. The pictured premises are not confirmed as the current venue.",
        "it": "Archivio, 2013. Non è confermato che i locali fotografati siano la sede attuale.",
        "fr": "Archive, 2013. Les locaux photographiés ne sont pas confirmés comme étant le lieu actuel.",
        "es": "Archivo, 2013. No se ha confirmado que el local fotografiado sea la sede actual.",
        "zh-Hans": "2013 年资料照片，尚未确认图中场所是否为现址。"
      },
      "rightsStatus": "licensed"
    }
  },
  {
    "id": "darc",
    "name": {
      "ro": "D’arc",
      "en": "D’arc",
      "it": "D’arc",
      "fr": "D’arc",
      "es": "D’arc",
      "zh-Hans": "D’arc"
    },
    "description": {
      "ro": "Consultă programul locului pentru o seară de muzică sau întâlniri în oraș. Accesul, evenimentele și rezervările trebuie confirmate direct; condițiile pot diferi de la o seară la alta.",
      "en": "Check the venue’s programme for an evening of music or meeting friends. Confirm admission, events and reservations directly, as conditions can vary from one evening to another.",
      "it": "Consulta il programma del locale per una serata di musica o incontri. Conferma direttamente accesso, eventi e prenotazioni: le condizioni possono cambiare da una sera all’altra.",
      "fr": "Consultez le programme du lieu pour une soirée musicale ou entre amis. Confirmez directement l’entrée, les événements et les réservations ; les conditions peuvent changer selon la soirée.",
      "es": "Consulta la programación del local para una noche de música o encuentros. Confirma directamente el acceso, los eventos y las reservas, que pueden cambiar cada noche.",
      "zh-Hans": "查看场所安排，选择一晚音乐或朋友聚会。请直接确认入场、活动与预约要求；不同晚间活动的条件可能不同。"
    },
    "categories": [
      "night"
    ],
    "venues": [
      {
        "id": "darc-main",
        "name": "D’arc",
        "address": "Piața Unirii 5, Timișoara",
        "verified": true,
        "status": "open",
        "minors": "unknown",
        "url": "https://www.facebook.com/club.darc.timisoara/",
        "linkType": "official",
        "sources": [
          "https://visit-timis.ro/d-arc"
        ],
        "verifiedAt": "2026-11-13"
      }
    ]
  },
  {
    "id": "darc-mal",
    "name": {
      "ro": "D’arc pe Mal",
      "en": "D’arc pe Mal",
      "it": "D’arc pe Mal",
      "fr": "D’arc pe Mal",
      "es": "D’arc pe Mal",
      "zh-Hans": "D’arc pe Mal"
    },
    "description": {
      "ro": "Consultă programul locului pentru o seară de muzică sau întâlniri în oraș. Accesul, evenimentele și rezervările trebuie confirmate direct; condițiile pot diferi de la o seară la alta.",
      "en": "Check the venue’s programme for an evening of music or meeting friends. Confirm admission, events and reservations directly, as conditions can vary from one evening to another.",
      "it": "Consulta il programma del locale per una serata di musica o incontri. Conferma direttamente accesso, eventi e prenotazioni: le condizioni possono cambiare da una sera all’altra.",
      "fr": "Consultez le programme du lieu pour une soirée musicale ou entre amis. Confirmez directement l’entrée, les événements et les réservations ; les conditions peuvent changer selon la soirée.",
      "es": "Consulta la programación del local para una noche de música o encuentros. Confirma directamente el acceso, los eventos y las reservas, que pueden cambiar cada noche.",
      "zh-Hans": "查看场所安排，选择一晚音乐或朋友聚会。请直接确认入场、活动与预约要求；不同晚间活动的条件可能不同。"
    },
    "categories": [
      "night"
    ],
    "venues": [
      {
        "id": "darc-mal-unconfirmed",
        "name": "D’arc pe Mal",
        "address": "Malul Begăi, lângă Podul Mitropolit Andrei Șaguna / Podul Tinereții, Timișoara",
        "verified": true,
        "status": "unknown",
        "minors": "unknown",
        "sources": [
          "https://m.iabilet.ro/bilete-d-arc-pe-mal-venue-6483/",
          "https://www.timisoreni.ro/despre/d-arc-pe-mal/",
          "https://www.onevent.ro/evenimente/nidal-pe-mal-2/"
        ],
        "url": "https://m.iabilet.ro/bilete-d-arc-pe-mal-venue-6483/",
        "linkType": "map",
        "verifiedAt": "2026-11-13"
      }
    ],
    "photo": {
      "path": "/media/photos-v03/city-darc-mal.webp",
      "author": "Autor neprecizat (pagina operatorului D’arc pe Mal)",
      "source": "https://www.facebook.com/club.darc.timisoara/",
      "license": "Sursă: site-ul operatorului · licență de reutilizare neprecizată",
      "rightsStatus": "operator-homepage-unconfirmed",
      "alt": {
        "ro": "Terasa D’arc pe Mal și ambarcațiuni pe Bega.",
        "en": "The D’arc pe Mal terrace and boats on the Bega.",
        "it": "La terrazza di D’arc pe Mal e imbarcazioni sul Bega.",
        "fr": "La terrasse de D’arc pe Mal et des bateaux sur la Bega.",
        "es": "La terraza de D’arc pe Mal y barcos en el Bega.",
        "zh-Hans": "D’arc pe Mal 的露台与 Bega 河上的船只。"
      },
      "caption": {
        "ro": "Fotografie de prezentare publicată de operator.",
        "en": "Presentation photograph published by the operator.",
        "it": "Foto di presentazione pubblicata dal gestore.",
        "fr": "Photo de présentation publiée par l’établissement.",
        "es": "Foto de presentación publicada por el local.",
        "zh-Hans": "运营方发布的展示照片。"
      }
    }
  },
  {
    "id": "atelier-experience",
    "name": {
      "ro": "Atelier d’Experience",
      "en": "Atelier d’Experience",
      "it": "Atelier d’Experience",
      "fr": "Atelier d’Experience",
      "es": "Atelier d’Experience",
      "zh-Hans": "Atelier d’Experience"
    },
    "description": {
      "ro": "Consultă programul locului pentru o seară de muzică sau întâlniri în oraș. Accesul, evenimentele și rezervările trebuie confirmate direct; condițiile pot diferi de la o seară la alta.",
      "en": "Check the venue’s programme for an evening of music or meeting friends. Confirm admission, events and reservations directly, as conditions can vary from one evening to another.",
      "it": "Consulta il programma del locale per una serata di musica o incontri. Conferma direttamente accesso, eventi e prenotazioni: le condizioni possono cambiare da una sera all’altra.",
      "fr": "Consultez le programme du lieu pour une soirée musicale ou entre amis. Confirmez directement l’entrée, les événements et les réservations ; les conditions peuvent changer selon la soirée.",
      "es": "Consulta la programación del local para una noche de música o encuentros. Confirma directamente el acceso, los eventos y las reservas, que pueden cambiar cada noche.",
      "zh-Hans": "查看场所安排，选择一晚音乐或朋友聚会。请直接确认入场、活动与预约要求；不同晚间活动的条件可能不同。"
    },
    "categories": [
      "night"
    ],
    "venues": [
      {
        "id": "atelier-experience-unconfirmed",
        "name": "Atelier d’Experience",
        "address": "Strada Dimitrie Cantemir 1, Timișoara",
        "verified": true,
        "status": "unknown",
        "minors": "unknown",
        "sources": [
          "https://restaurantguru.com/Atelier-dexperience-Timisoara",
          "https://zilesinopti.ro/2025/02/24/unde-bei-paloma-cocktail-2025/"
        ],
        "url": "https://www.google.com/maps/dir/?api=1&destination=45.75512280,21.22798400",
        "linkType": "map",
        "verifiedAt": "2026-11-13"
      }
    ],
    "photo": {
      "path": "/media/photos-v03/city-atelier-experience.webp",
      "author": "Autor neprecizat (pagina operatorului Atelier d’Experience)",
      "source": "https://atelier.bargig.ro/",
      "license": "Sursă: site-ul operatorului · licență de reutilizare neprecizată",
      "rightsStatus": "operator-homepage-unconfirmed",
      "alt": {
        "ro": "Cocktail prezentat de Atelier d’Experience.",
        "en": "Cocktail presented by Atelier d’Experience.",
        "it": "Cocktail presentato da Atelier d’Experience.",
        "fr": "Cocktail présenté par Atelier d’Experience.",
        "es": "Cóctel presentado por Atelier d’Experience.",
        "zh-Hans": "Atelier d’Experience 展示的鸡尾酒。"
      },
      "caption": {
        "ro": "Fotografie de prezentare publicată de operator.",
        "en": "Presentation photograph published by the operator.",
        "it": "Foto di presentazione pubblicata dal gestore.",
        "fr": "Photo de présentation publiée par l’établissement.",
        "es": "Foto de presentación publicada por el local.",
        "zh-Hans": "运营方发布的展示照片。"
      }
    }
  },
  {
    "id": "escape-venue",
    "name": {
      "ro": "Escape Venue",
      "en": "Escape Venue",
      "it": "Escape Venue",
      "fr": "Escape Venue",
      "es": "Escape Venue",
      "zh-Hans": "Escape Venue"
    },
    "description": {
      "ro": "Consultă programul locului pentru o seară de muzică sau întâlniri în oraș. Accesul, evenimentele și rezervările trebuie confirmate direct; condițiile pot diferi de la o seară la alta.",
      "en": "Check the venue’s programme for an evening of music or meeting friends. Confirm admission, events and reservations directly, as conditions can vary from one evening to another.",
      "it": "Consulta il programma del locale per una serata di musica o incontri. Conferma direttamente accesso, eventi e prenotazioni: le condizioni possono cambiare da una sera all’altra.",
      "fr": "Consultez le programme du lieu pour une soirée musicale ou entre amis. Confirmez directement l’entrée, les événements et les réservations ; les conditions peuvent changer selon la soirée.",
      "es": "Consulta la programación del local para una noche de música o encuentros. Confirma directamente el acceso, los eventos y las reservas, que pueden cambiar cada noche.",
      "zh-Hans": "查看场所安排，选择一晚音乐或朋友聚会。请直接确认入场、活动与预约要求；不同晚间活动的条件可能不同。"
    },
    "categories": [
      "night"
    ],
    "venues": [
      {
        "id": "escape-venue-unconfirmed",
        "name": "Escape Venue",
        "address": "Strada Pictor Ion Zaicu 26, Timișoara",
        "verified": true,
        "status": "unknown",
        "minors": "unknown",
        "sources": [
          "https://dutchculture.nl/en/organisation/escape-venue",
          "https://timisoara.cylex.ro/firma/escape%2Bvenue-1341395.html",
          "https://ra.co/clubs/129426",
          "https://restaurantguru.com/Escape-Venue-Timisoara"
        ],
        "url": "https://www.facebook.com/escape.venue/",
        "linkType": "official",
        "verifiedAt": "2026-11-13"
      }
    ]
  },
  {
    "id": "tucano",
    "name": {
      "ro": "Tucano",
      "en": "Tucano",
      "it": "Tucano",
      "fr": "Tucano",
      "es": "Tucano",
      "zh-Hans": "Tucano"
    },
    "description": {
      "ro": "Oprește-te pentru o cafea și o conversație în timpul plimbării. Consultă pagina cafenelei pentru meniul actual, adresa aleasă și condițiile vizitei.",
      "en": "Pause for coffee and conversation during your walk. Check the café’s own page for its current menu, the branch you choose and details for your visit.",
      "it": "Fermati per un caffè e una chiacchierata durante la passeggiata. Consulta la pagina del locale per il menu attuale, la sede scelta e i dettagli della visita.",
      "fr": "Faites une pause café et conversation pendant votre promenade. Consultez la page du café pour son menu actuel, l’adresse choisie et les modalités de visite.",
      "es": "Haz una pausa para tomar café y conversar durante el paseo. Consulta la página del local para ver el menú, la dirección elegida y los detalles.",
      "zh-Hans": "散步途中，停下来喝杯咖啡、聊聊天。出发前请查看咖啡馆的官方页面，确认所选分店、当前菜单和到访信息。"
    },
    "categories": [
      "cafes"
    ],
    "venues": [
      {
        "id": "tucano-main",
        "name": "Tucano Coffee Venezuela — Iulius Mall",
        "address": "Iulius Mall Timișoara, parter, Piața Consiliul Europei 2",
        "verified": true,
        "status": "open",
        "minors": "unknown",
        "url": "https://iuliustown.ro/ro/dining/cafenele",
        "linkType": "official",
        "sources": [
          "https://iuliustown.ro/ro/dining/iuliustown.ro/ro/dining/cafenele"
        ],
        "verifiedAt": "2026-11-13"
      }
    ],
    "photo": {
      "path": "/media/photos-v03/city-tucano.webp",
      "author": "Keizers",
      "source": "https://commons.wikimedia.org/wiki/File:Iulius_Town_Timi%C8%99oara_at_night,_September_2019_1.jpg",
      "license": "CC BY-SA 4.0 · https://creativecommons.org/licenses/by-sa/4.0/",
      "alt": {
        "ro": "Fațada și terasa Tucano Coffee Venezuela din Iulius Town, noaptea, în septembrie 2019.",
        "en": "Facade and terrace of Tucano Coffee Venezuela in Iulius Town at night, September 2019.",
        "it": "Facciata e terrazza di Tucano Coffee Venezuela a Iulius Town di notte, settembre 2019.",
        "fr": "Façade et terrasse de Tucano Coffee Venezuela à Iulius Town, de nuit, en septembre 2019.",
        "es": "Fachada y terraza de Tucano Coffee Venezuela en Iulius Town por la noche, septiembre de 2019.",
        "zh-Hans": "2019 年 9 月，Iulius Town 的 Tucano Coffee Venezuela 外立面与露台夜景。"
      },
      "caption": {
        "ro": "Imagine de arhivă decupată: Tucano Coffee Venezuela, septembrie 2019.",
        "en": "Cropped archive photograph: Tucano Coffee Venezuela, September 2019.",
        "it": "Foto d’archivio ritagliata: Tucano Coffee Venezuela, settembre 2019.",
        "fr": "Photo d’archive recadrée : Tucano Coffee Venezuela, septembre 2019.",
        "es": "Foto de archivo recortada: Tucano Coffee Venezuela, septiembre de 2019.",
        "zh-Hans": "已裁剪的历史照片：Tucano Coffee Venezuela，2019 年 9 月。"
      },
      "rightsStatus": "licensed"
    }
  },
  {
    "id": "starbucks",
    "name": {
      "ro": "Starbucks",
      "en": "Starbucks",
      "it": "Starbucks",
      "fr": "Starbucks",
      "es": "Starbucks",
      "zh-Hans": "Starbucks"
    },
    "description": {
      "ro": "Oprește-te pentru o cafea și o conversație în timpul plimbării. Consultă pagina cafenelei pentru meniul actual, adresa aleasă și condițiile vizitei.",
      "en": "Pause for coffee and conversation during your walk. Check the café’s own page for its current menu, the branch you choose and details for your visit.",
      "it": "Fermati per un caffè e una chiacchierata durante la passeggiata. Consulta la pagina del locale per il menu attuale, la sede scelta e i dettagli della visita.",
      "fr": "Faites une pause café et conversation pendant votre promenade. Consultez la page du café pour son menu actuel, l’adresse choisie et les modalités de visite.",
      "es": "Haz una pausa para tomar café y conversar durante el paseo. Consulta la página del local para ver el menú, la dirección elegida y los detalles.",
      "zh-Hans": "散步途中，停下来喝杯咖啡、聊聊天。出发前请查看咖啡馆的官方页面，确认所选分店、当前菜单和到访信息。"
    },
    "categories": [
      "cafes"
    ],
    "venues": [
      {
        "id": "starbucks-main",
        "name": "Starbucks — Iulius Mall",
        "address": "Iulius Mall Timișoara, demisol, Piața Consiliul Europei 2",
        "verified": true,
        "status": "open",
        "minors": "unknown",
        "url": "https://iuliustown.ro/ro/dining/cafenele",
        "linkType": "official",
        "sources": [
          "https://iuliustown.ro/ro/dining/iuliustown.ro/ro/dining/cafenele"
        ],
        "verifiedAt": "2026-11-13"
      }
    ],
    "photo": {
      "path": "/media/photos-v03/city-starbucks.webp",
      "author": "Autor neprecizat (pagina operatorului Starbucks)",
      "source": "https://iuliustown.ro/ro/dining/starbucks",
      "license": "Sursă: site-ul operatorului · licență de reutilizare neprecizată",
      "rightsStatus": "operator-homepage-unconfirmed",
      "alt": {
        "ro": "Fațada și intrarea Starbucks.",
        "en": "Facade and entrance of Starbucks.",
        "it": "Facciata e ingresso di Starbucks.",
        "fr": "Façade et entrée de Starbucks.",
        "es": "Fachada y entrada de Starbucks.",
        "zh-Hans": "Starbucks 的外立面与入口。"
      },
      "caption": {
        "ro": "Fotografie de prezentare publicată de operator.",
        "en": "Presentation photograph published by the operator.",
        "it": "Foto di presentazione pubblicata dal gestore.",
        "fr": "Photo de présentation publiée par l’établissement.",
        "es": "Foto de presentación publicada por el local.",
        "zh-Hans": "运营方发布的展示照片。"
      }
    }
  },
  {
    "id": "frenzy",
    "name": {
      "ro": "Frenzy",
      "en": "Frenzy",
      "it": "Frenzy",
      "fr": "Frenzy",
      "es": "Frenzy",
      "zh-Hans": "Frenzy"
    },
    "description": {
      "ro": "Oprește-te pentru o cafea și o conversație în timpul plimbării. Consultă pagina cafenelei pentru meniul actual, adresa aleasă și condițiile vizitei.",
      "en": "Pause for coffee and conversation during your walk. Check the café’s own page for its current menu, the branch you choose and details for your visit.",
      "it": "Fermati per un caffè e una chiacchierata durante la passeggiata. Consulta la pagina del locale per il menu attuale, la sede scelta e i dettagli della visita.",
      "fr": "Faites une pause café et conversation pendant votre promenade. Consultez la page du café pour son menu actuel, l’adresse choisie et les modalités de visite.",
      "es": "Haz una pausa para tomar café y conversar durante el paseo. Consulta la página del local para ver el menú, la dirección elegida y los detalles.",
      "zh-Hans": "散步途中，停下来喝杯咖啡、聊聊天。出发前请查看咖啡馆的官方页面，确认所选分店、当前菜单和到访信息。"
    },
    "categories": [
      "cafes"
    ],
    "venues": [
      {
        "id": "frenzy-unconfirmed",
        "name": "Frenzy",
        "address": "Piața Victoriei 7, Timișoara",
        "verified": true,
        "status": "open",
        "minors": "unknown",
        "sources": [
          "https://curated.spot/en/spot/frenzy-specialty-coffee-shop/",
          "https://maps.google.com/?cid=18223216652637309210",
          "https://www.instagram.com/frenzy.specialtycoffee/"
        ],
        "url": "https://www.instagram.com/frenzy.specialtycoffee/",
        "linkType": "official",
        "verifiedAt": "2026-11-13"
      }
    ]
  },
  {
    "id": "teds",
    "name": {
      "ro": "Ted’s Coffee",
      "en": "Ted’s Coffee",
      "it": "Ted’s Coffee",
      "fr": "Ted’s Coffee",
      "es": "Ted’s Coffee",
      "zh-Hans": "Ted’s Coffee"
    },
    "description": {
      "ro": "Oprește-te pentru o cafea și o conversație în timpul plimbării. Consultă pagina cafenelei pentru meniul actual, adresa aleasă și condițiile vizitei.",
      "en": "Pause for coffee and conversation during your walk. Check the café’s own page for its current menu, the branch you choose and details for your visit.",
      "it": "Fermati per un caffè e una chiacchierata durante la passeggiata. Consulta la pagina del locale per il menu attuale, la sede scelta e i dettagli della visita.",
      "fr": "Faites une pause café et conversation pendant votre promenade. Consultez la page du café pour son menu actuel, l’adresse choisie et les modalités de visite.",
      "es": "Haz una pausa para tomar café y conversar durante el paseo. Consulta la página del local para ver el menú, la dirección elegida y los detalles.",
      "zh-Hans": "散步途中，停下来喝杯咖啡、聊聊天。出发前请查看咖啡馆的官方页面，确认所选分店、当前菜单和到访信息。"
    },
    "categories": [
      "cafes"
    ],
    "venues": [
      {
        "id": "teds-main",
        "name": "Ted’s Coffee",
        "address": "City Business Centre, Strada Coriolan Brediceanu 10, Timișoara",
        "verified": true,
        "status": "open",
        "minors": "unknown",
        "url": "https://www.old.teds.ro/locatii",
        "linkType": "official",
        "sources": [
          "https://www.old.teds.ro/locatii"
        ],
        "verifiedAt": "2026-11-13"
      }
    ],
    "photo": {
      "path": "/media/photos-v03/city-teds.webp",
      "author": "Autor neprecizat (pagina operatorului Ted’s Coffee)",
      "source": "https://www.old.teds.ro/",
      "license": "Sursă: site-ul operatorului · licență de reutilizare neprecizată",
      "rightsStatus": "operator-homepage-unconfirmed",
      "alt": {
        "ro": "Barista la espressor, fotografie de prezentare Ted’s Coffee.",
        "en": "Barista at an espresso machine in a Ted’s Coffee presentation photograph.",
        "it": "Barista alla macchina da espresso in una foto di presentazione di Ted’s Coffee.",
        "fr": "Barista à la machine à espresso sur une photo de présentation de Ted’s Coffee.",
        "es": "Barista con una máquina de espresso en una foto de presentación de Ted’s Coffee.",
        "zh-Hans": "Ted’s Coffee 展示照片中的咖啡师与意式咖啡机。"
      },
      "caption": {
        "ro": "Fotografie de pe pagina operatorului; filiala fotografiată nu este confirmată.",
        "en": "Photograph from the operator’s page; the pictured branch is unconfirmed.",
        "it": "Foto dalla pagina del gestore; la sede fotografata non è confermata.",
        "fr": "Photo de la page de l’établissement ; la succursale photographiée n’est pas confirmée.",
        "es": "Foto de la página del operador; la sucursal fotografiada no está confirmada.",
        "zh-Hans": "照片来自运营方页面；所拍摄的分店尚未确认。"
      }
    }
  },
  {
    "id": "brewno",
    "name": {
      "ro": "Brewno",
      "en": "Brewno",
      "it": "Brewno",
      "fr": "Brewno",
      "es": "Brewno",
      "zh-Hans": "Brewno"
    },
    "description": {
      "ro": "Alege o cafea de specialitate și patiserie la Brewno Unirii, pe Gheorghe Lazăr. Operatorul are și alte sedii; această oprire păstrează adresa centrală verificată în ghid.",
      "en": "Choose specialty coffee and pastry at Brewno Unirii on Gheorghe Lazăr Street. The operator has other branches too; this stop uses the central address checked for the guide.",
      "it": "Scegli caffè di specialità e pasticceria da Brewno Unirii, in via Gheorghe Lazăr. Il gestore ha altre sedi; questa tappa usa l’indirizzo centrale verificato nella guida.",
      "fr": "Choisissez café de spécialité et pâtisserie chez Brewno Unirii, rue Gheorghe Lazăr. Le café possède d’autres adresses ; cette étape conserve la succursale centrale vérifiée pour le guide.",
      "es": "Elige café de especialidad y pastelería en Brewno Unirii, en Gheorghe Lazăr. El operador tiene otras sucursales; esta parada usa la dirección central comprobada.",
      "zh-Hans": "在 Gheorghe Lazăr 街的 Brewno Unirii 品尝精品咖啡与糕点。品牌另有分店；本条目对应已核对的市中心地址，请留意所选馆址。"
    },
    "categories": [
      "cafes"
    ],
    "venues": [
      {
        "id": "brewno-main",
        "name": "Brewno Unirii",
        "address": "Strada Gheorghe Lazăr 6, Timișoara",
        "verified": true,
        "status": "open",
        "minors": "unknown",
        "url": "https://brewno.ro/",
        "linkType": "official",
        "sources": [
          "https://brewno.ro/"
        ],
        "verifiedAt": "2026-11-13"
      }
    ],
    "photo": {
      "path": "/media/photos-v03/city-brewno.webp",
      "author": "Autor neprecizat (pagina operatorului Brewno)",
      "source": "https://brewno.ro/",
      "license": "Sursă: site-ul operatorului · licență de reutilizare neprecizată",
      "rightsStatus": "operator-homepage-unconfirmed",
      "alt": {
        "ro": "Cafea în fotografia de prezentare Brewno.",
        "en": "Coffee in a presentation photograph from Brewno.",
        "it": "Caffè in una foto di presentazione di Brewno.",
        "fr": "Café sur une photo de présentation de Brewno.",
        "es": "Café en una foto de presentación de Brewno.",
        "zh-Hans": "Brewno 展示照片中的咖啡。"
      },
      "caption": {
        "ro": "Fotografie de prezentare publicată de operator.",
        "en": "Presentation photograph published by the operator.",
        "it": "Foto di presentazione pubblicata dal gestore.",
        "fr": "Photo de présentation publiée par l’établissement.",
        "es": "Foto de presentación publicada por el local.",
        "zh-Hans": "运营方发布的展示照片。"
      }
    }
  },
  {
    "id": "mercy",
    "name": {
      "ro": "Mercy Coffee",
      "en": "Mercy Coffee",
      "it": "Mercy Coffee",
      "fr": "Mercy Coffee",
      "es": "Mercy Coffee",
      "zh-Hans": "Mercy Coffee"
    },
    "description": {
      "ro": "Oprește-te pentru o cafea și o conversație în timpul plimbării. Consultă pagina cafenelei pentru meniul actual, adresa aleasă și condițiile vizitei.",
      "en": "Pause for coffee and conversation during your walk. Check the café’s own page for its current menu, the branch you choose and details for your visit.",
      "it": "Fermati per un caffè e una chiacchierata durante la passeggiata. Consulta la pagina del locale per il menu attuale, la sede scelta e i dettagli della visita.",
      "fr": "Faites une pause café et conversation pendant votre promenade. Consultez la page du café pour son menu actuel, l’adresse choisie et les modalités de visite.",
      "es": "Haz una pausa para tomar café y conversar durante el paseo. Consulta la página del local para ver el menú, la dirección elegida y los detalles.",
      "zh-Hans": "散步途中，停下来喝杯咖啡、聊聊天。出发前请查看咖啡馆的官方页面，确认所选分店、当前菜单和到访信息。"
    },
    "categories": [
      "cafes"
    ],
    "venues": [
      {
        "id": "mercy-unconfirmed",
        "name": "Mercy Coffee",
        "address": "Strada Florimund Mercy 4, Timișoara",
        "verified": true,
        "status": "open",
        "minors": "unknown",
        "sources": [
          "https://restaurantguru.com/Mercy-Coffee-Timisoara",
          "https://firmania.ro/timisoara/mercy-coffee-397918"
        ],
        "url": "https://www.google.com/maps/dir/?api=1&destination=45.75700200,21.22891920",
        "linkType": "map",
        "verifiedAt": "2026-11-13"
      }
    ]
  },
  {
    "id": "comun-cafe-mara",
    "name": {
      "ro": "Comun Cafe Mara",
      "en": "Comun Cafe Mara",
      "it": "Comun Cafe Mara",
      "fr": "Comun Cafe Mara",
      "es": "Comun Cafe Mara",
      "zh-Hans": "Comun Cafe Mara"
    },
    "description": {
      "ro": "Cafea de specialitate și patiserie la Común Cafe Mara, în City of Mara, pe Calea Circumvalațiunii 1.",
      "en": "Specialty coffee and pastries at Común Cafe Mara, in City of Mara on Calea Circumvalațiunii 1.",
      "it": "Caffè specialty e pasticceria da Común Cafe Mara, nel complesso City of Mara, Calea Circumvalațiunii 1.",
      "fr": "Café de spécialité et pâtisseries chez Común Cafe Mara, dans City of Mara, Calea Circumvalațiunii 1.",
      "es": "Café de especialidad y bollería en Común Cafe Mara, en City of Mara, Calea Circumvalațiunii 1.",
      "zh-Hans": "在 City of Mara 的 Común Cafe Mara 品尝精品咖啡和糕点，地址为 Calea Circumvalațiunii 1。"
    },
    "categories": [
      "cafes"
    ],
    "venues": [
      {
        "id": "comun-cafe-mara-unconfirmed",
        "name": "Comun Cafe Mara",
        "address": "Calea Circumvalațiunii 1, City of Mara, Timișoara",
        "verified": true,
        "status": "open",
        "minors": "unknown",
        "sources": [
          "https://comun.cafe/about/",
          "https://comun.cafe/contact/"
        ],
        "url": "https://comun.cafe/about/",
        "linkType": "official",
        "verifiedAt": "2026-11-13"
      }
    ],
    "photo": {
      "path": "/media/photos-v03/city-comun-cafe-mara.webp",
      "author": "Autor neprecizat (pagina operatorului Comun Cafe Mara)",
      "source": "https://comun.cafe/",
      "license": "Sursă: site-ul operatorului · licență de reutilizare neprecizată",
      "rightsStatus": "operator-homepage-unconfirmed",
      "alt": {
        "ro": "Fațada și intrarea Comun Cafe Mara.",
        "en": "Facade and entrance of Comun Cafe Mara.",
        "it": "Facciata e ingresso di Comun Cafe Mara.",
        "fr": "Façade et entrée de Comun Cafe Mara.",
        "es": "Fachada y entrada de Comun Cafe Mara.",
        "zh-Hans": "Comun Cafe Mara 的外立面与入口。"
      },
      "caption": {
        "ro": "Fotografie de prezentare publicată de operator.",
        "en": "Presentation photograph published by the operator.",
        "it": "Foto di presentazione pubblicata dal gestore.",
        "fr": "Photo de présentation publiée par l’établissement.",
        "es": "Foto de presentación publicada por el local.",
        "zh-Hans": "运营方发布的展示照片。"
      }
    }
  },
  {
    "id": "street-coffee",
    "name": {
      "ro": "Street Coffee Roasters",
      "en": "Street Coffee Roasters",
      "it": "Street Coffee Roasters",
      "fr": "Street Coffee Roasters",
      "es": "Street Coffee Roasters",
      "zh-Hans": "Street Coffee Roasters"
    },
    "description": {
      "ro": "Oprește-te pentru o cafea și o conversație în timpul plimbării. Consultă pagina cafenelei pentru meniul actual, adresa aleasă și condițiile vizitei.",
      "en": "Pause for coffee and conversation during your walk. Check the café’s own page for its current menu, the branch you choose and details for your visit.",
      "it": "Fermati per un caffè e una chiacchierata durante la passeggiata. Consulta la pagina del locale per il menu attuale, la sede scelta e i dettagli della visita.",
      "fr": "Faites une pause café et conversation pendant votre promenade. Consultez la page du café pour son menu actuel, l’adresse choisie et les modalités de visite.",
      "es": "Haz una pausa para tomar café y conversar durante el paseo. Consulta la página del local para ver el menú, la dirección elegida y los detalles.",
      "zh-Hans": "散步途中，停下来喝杯咖啡、聊聊天。出发前请查看咖啡馆的官方页面，确认所选分店、当前菜单和到访信息。"
    },
    "categories": [
      "cafes"
    ],
    "venues": [
      {
        "id": "street-coffee-main",
        "name": "Street Coffee Roasters — Alba Iulia",
        "address": "Strada Alba Iulia 5, Timișoara",
        "verified": true,
        "status": "open",
        "minors": "unknown",
        "url": "https://streetcoffee.ro/locatii/timisoara/",
        "linkType": "official",
        "sources": [
          "https://streetcoffee.ro/locatii/timisoara/"
        ],
        "verifiedAt": "2026-11-13"
      }
    ],
    "photo": {
      "path": "/media/photos-v03/city-street-coffee.webp",
      "author": "Autor neprecizat (pagina operatorului Street Coffee Roasters)",
      "source": "https://streetcoffee.ro/locatii/timisoara/",
      "license": "Sursă: site-ul operatorului · licență de reutilizare neprecizată",
      "rightsStatus": "operator-homepage-unconfirmed",
      "alt": {
        "ro": "Fațada și intrarea Street Coffee Roasters.",
        "en": "Facade and entrance of Street Coffee Roasters.",
        "it": "Facciata e ingresso di Street Coffee Roasters.",
        "fr": "Façade et entrée de Street Coffee Roasters.",
        "es": "Fachada y entrada de Street Coffee Roasters.",
        "zh-Hans": "Street Coffee Roasters 的外立面与入口。"
      },
      "caption": {
        "ro": "Fotografie de prezentare publicată de operator.",
        "en": "Presentation photograph published by the operator.",
        "it": "Foto di presentazione pubblicata dal gestore.",
        "fr": "Photo de présentation publiée par l’établissement.",
        "es": "Foto de presentación publicada por el local.",
        "zh-Hans": "运营方发布的展示照片。"
      }
    }
  },
  {
    "id": "meron",
    "name": {
      "ro": "Meron Timișoara",
      "en": "Meron Timișoara",
      "it": "Meron Timișoara",
      "fr": "Meron Timișoara",
      "es": "Meron Timișoara",
      "zh-Hans": "Meron Timișoara"
    },
    "description": {
      "ro": "Oprește-te pentru o cafea și o conversație în timpul plimbării. Consultă pagina cafenelei pentru meniul actual, adresa aleasă și condițiile vizitei.",
      "en": "Pause for coffee and conversation during your walk. Check the café’s own page for its current menu, the branch you choose and details for your visit.",
      "it": "Fermati per un caffè e una chiacchierata durante la passeggiata. Consulta la pagina del locale per il menu attuale, la sede scelta e i dettagli della visita.",
      "fr": "Faites une pause café et conversation pendant votre promenade. Consultez la page du café pour son menu actuel, l’adresse choisie et les modalités de visite.",
      "es": "Haz una pausa para tomar café y conversar durante el paseo. Consulta la página del local para ver el menú, la dirección elegida y los detalles.",
      "zh-Hans": "散步途中，停下来喝杯咖啡、聊聊天。出发前请查看咖啡馆的官方页面，确认所选分店、当前菜单和到访信息。"
    },
    "categories": [
      "cafes"
    ],
    "venues": [
      {
        "id": "meron-main",
        "name": "Meron Timișoara",
        "address": "Strada Johann Wolfgang von Goethe 2, Timișoara",
        "verified": true,
        "status": "open",
        "minors": "unknown",
        "url": "https://www.meron.coffee/meron-timisoara-2/",
        "linkType": "official",
        "sources": [
          "https://www.meron.coffee/meron-timisoara-2/"
        ],
        "verifiedAt": "2026-11-13"
      }
    ],
    "photo": {
      "path": "/media/photos-v03/city-meron.webp",
      "author": "Autor neprecizat (pagina rețelei Meron)",
      "source": "https://www.meron.coffee/",
      "license": "Sursă: site-ul operatorului · licență de reutilizare neprecizată",
      "rightsStatus": "operator-homepage-unconfirmed",
      "alt": {
        "ro": "Espresso într-o ceașcă, fotografie de prezentare Meron.",
        "en": "Espresso in a cup, a Meron presentation photograph.",
        "it": "Espresso in tazza, foto di presentazione Meron.",
        "fr": "Espresso dans une tasse, photo de présentation Meron.",
        "es": "Espresso en una taza, foto de presentación de Meron.",
        "zh-Hans": "Meron 展示照片中的一杯意式浓缩咖啡。"
      },
      "caption": {
        "ro": "Fotografie de pe pagina rețelei Meron; filiala din Timișoara nu este identificată.",
        "en": "Photograph from Meron’s brand homepage; the Timișoara branch is not identified.",
        "it": "Foto dalla pagina della rete Meron; la sede di Timișoara non è identificata.",
        "fr": "Photo de la page du réseau Meron ; la succursale de Timișoara n’est pas identifiée.",
        "es": "Foto de la página de la cadena Meron; no se identifica la sucursal de Timișoara.",
        "zh-Hans": "照片来自 Meron 品牌主页；未指明蒂米什瓦拉分店。"
      }
    }
  },
  {
    "id": "caffe-doge",
    "name": {
      "ro": "Caffe del Doge",
      "en": "Caffe del Doge",
      "it": "Caffe del Doge",
      "fr": "Caffe del Doge",
      "es": "Caffe del Doge",
      "zh-Hans": "Caffe del Doge"
    },
    "description": {
      "ro": "Oprește-te pentru o cafea și o conversație în timpul plimbării. Consultă pagina cafenelei pentru meniul actual, adresa aleasă și condițiile vizitei.",
      "en": "Pause for coffee and conversation during your walk. Check the café’s own page for its current menu, the branch you choose and details for your visit.",
      "it": "Fermati per un caffè e una chiacchierata durante la passeggiata. Consulta la pagina del locale per il menu attuale, la sede scelta e i dettagli della visita.",
      "fr": "Faites une pause café et conversation pendant votre promenade. Consultez la page du café pour son menu actuel, l’adresse choisie et les modalités de visite.",
      "es": "Haz una pausa para tomar café y conversar durante el paseo. Consulta la página del local para ver el menú, la dirección elegida y los detalles.",
      "zh-Hans": "散步途中，停下来喝杯咖啡、聊聊天。出发前请查看咖啡馆的官方页面，确认所选分店、当前菜单和到访信息。"
    },
    "categories": [
      "cafes"
    ],
    "venues": [
      {
        "id": "caffe-doge-unconfirmed",
        "name": "Caffe del Doge",
        "address": "Calea Sever Bocu 2, Galeria 1, Timișoara",
        "verified": true,
        "status": "open",
        "minors": "unknown",
        "sources": [
          "https://www.facebook.com/caffedeldogeromania/",
          "https://www.timisoreni.ro/despre/caffe-del-doge/"
        ],
        "url": "https://www.facebook.com/caffedeldogeromania/",
        "linkType": "official",
        "verifiedAt": "2026-11-13"
      }
    ],
    "photo": {
      "path": "/media/photos-v03/city-caffe-doge.webp",
      "author": "Autor neprecizat (pagina operatorului Caffe del Doge)",
      "source": "https://www.facebook.com/caffedeldogeromania/",
      "license": "Sursă: site-ul operatorului · licență de reutilizare neprecizată",
      "rightsStatus": "operator-homepage-unconfirmed",
      "alt": {
        "ro": "Cafea în fotografia de prezentare Caffe del Doge.",
        "en": "Coffee in a presentation photograph from Caffe del Doge.",
        "it": "Caffè in una foto di presentazione di Caffe del Doge.",
        "fr": "Café sur une photo de présentation de Caffe del Doge.",
        "es": "Café en una foto de presentación de Caffe del Doge.",
        "zh-Hans": "Caffe del Doge 展示照片中的咖啡。"
      },
      "caption": {
        "ro": "Fotografie de prezentare publicată de operator.",
        "en": "Presentation photograph published by the operator.",
        "it": "Foto di presentazione pubblicata dal gestore.",
        "fr": "Photo de présentation publiée par l’établissement.",
        "es": "Foto de presentación publicada por el local.",
        "zh-Hans": "运营方发布的展示照片。"
      }
    }
  },
  {
    "id": "senses",
    "name": {
      "ro": "Senses Specialty Coffee",
      "en": "Senses Specialty Coffee",
      "it": "Senses Specialty Coffee",
      "fr": "Senses Specialty Coffee",
      "es": "Senses Specialty Coffee",
      "zh-Hans": "Senses Specialty Coffee"
    },
    "description": {
      "ro": "Oprește-te pentru o cafea și o conversație în timpul plimbării. Consultă pagina cafenelei pentru meniul actual, adresa aleasă și condițiile vizitei.",
      "en": "Pause for coffee and conversation during your walk. Check the café’s own page for its current menu, the branch you choose and details for your visit.",
      "it": "Fermati per un caffè e una chiacchierata durante la passeggiata. Consulta la pagina del locale per il menu attuale, la sede scelta e i dettagli della visita.",
      "fr": "Faites une pause café et conversation pendant votre promenade. Consultez la page du café pour son menu actuel, l’adresse choisie et les modalités de visite.",
      "es": "Haz una pausa para tomar café y conversar durante el paseo. Consulta la página del local para ver el menú, la dirección elegida y los detalles.",
      "zh-Hans": "散步途中，停下来喝杯咖啡、聊聊天。出发前请查看咖啡馆的官方页面，确认所选分店、当前菜单和到访信息。"
    },
    "categories": [
      "cafes"
    ],
    "venues": [
      {
        "id": "senses-unconfirmed",
        "name": "Senses Specialty Coffee",
        "address": "Strada Matei Corvin 4, Timișoara",
        "verified": true,
        "status": "open",
        "minors": "unknown",
        "sources": [
          "https://www.facebook.com/sensescoffee.ro/",
          "https://www.restaurants10.com/RO/Timisoara/714044261797630/Senses-Specialty-Coffee-Timisoara"
        ],
        "url": "https://www.facebook.com/sensescoffee.ro/",
        "linkType": "official",
        "verifiedAt": "2026-11-13"
      }
    ],
    "photo": {
      "path": "/media/photos-v03/city-senses.webp",
      "author": "Autor neprecizat (pagina operatorului Senses Specialty Coffee)",
      "source": "https://www.facebook.com/sensescoffee.ro/",
      "license": "Sursă: site-ul operatorului · licență de reutilizare neprecizată",
      "rightsStatus": "operator-homepage-unconfirmed",
      "alt": {
        "ro": "Pahare și cești Senses Specialty Coffee, cu Piața Unirii în fundal.",
        "en": "Senses Specialty Coffee cups with Union Square in the background.",
        "it": "Bicchieri e tazze Senses Specialty Coffee, con Piața Unirii sullo sfondo.",
        "fr": "Gobelets et tasses Senses Specialty Coffee, avec Piața Unirii en arrière-plan.",
        "es": "Vasos y tazas Senses Specialty Coffee, con Piața Unirii al fondo.",
        "zh-Hans": "Senses Specialty Coffee 咖啡杯，背景为联合广场。"
      },
      "caption": {
        "ro": "Fotografie de prezentare publicată de operator.",
        "en": "Presentation photograph published by the operator.",
        "it": "Foto di presentazione pubblicata dal gestore.",
        "fr": "Photo de présentation publiée par l’établissement.",
        "es": "Foto de presentación publicada por el local.",
        "zh-Hans": "运营方发布的展示照片。"
      }
    }
  },
  {
    "id": "zaza",
    "name": {
      "ro": "Zaza",
      "en": "Zaza",
      "it": "Zaza",
      "fr": "Zaza",
      "es": "Zaza",
      "zh-Hans": "Zaza"
    },
    "description": {
      "ro": "Alege o masă în oraș și consultă meniul direct la restaurant. Confirmă disponibilitatea mesei, ingredientele și condițiile de acces înainte de a porni.",
      "en": "Choose a meal out and view the menu directly with the restaurant. Confirm table availability, ingredients and admission details before setting out for your visit.",
      "it": "Scegli un pranzo o una cena fuori e consulta il menu del ristorante. Verifica disponibilità dei tavoli, ingredienti e condizioni di accesso prima di partire.",
      "fr": "Choisissez un repas en ville et consultez le menu du restaurant. Confirmez la disponibilité des tables, les ingrédients et les conditions d’accès avant de partir.",
      "es": "Elige una comida fuera y consulta el menú del restaurante. Confirma la disponibilidad de mesas, los ingredientes y las condiciones de acceso antes de salir.",
      "zh-Hans": "安排一顿外出用餐，直接向餐厅查看菜单。出发前请确认座位、食材以及入场规定，以经营方当前公布的信息为准。"
    },
    "categories": [
      "food"
    ],
    "venues": [
      {
        "id": "zaza-main",
        "name": "Zaza",
        "address": "Bd. Vasile Pârvan 9, Timișoara",
        "verified": true,
        "status": "open",
        "minors": "unknown",
        "url": "https://zazarestopub.ro/",
        "linkType": "official",
        "sources": [
          "https://zazarestopub.ro/"
        ],
        "verifiedAt": "2026-11-13"
      }
    ],
    "photo": {
      "path": "/media/photos-v03/city-zaza.webp",
      "author": "Autor neprecizat (pagina operatorului Zaza)",
      "source": "https://zazarestopub.ro/",
      "license": "Sursă: site-ul operatorului · licență de reutilizare neprecizată",
      "rightsStatus": "operator-homepage-unconfirmed",
      "alt": {
        "ro": "Preparat prezentat pe pagina Zaza.",
        "en": "Dish shown on the Zaza page.",
        "it": "Piatto mostrato nella pagina di Zaza.",
        "fr": "Plat présenté sur la page de Zaza.",
        "es": "Plato mostrado en la página de Zaza.",
        "zh-Hans": "Zaza 页面展示的菜品。"
      },
      "caption": {
        "ro": "Fotografie de prezentare publicată de operator.",
        "en": "Presentation photograph published by the operator.",
        "it": "Foto di presentazione pubblicata dal gestore.",
        "fr": "Photo de présentation publiée par l’établissement.",
        "es": "Foto de presentación publicada por el local.",
        "zh-Hans": "运营方发布的展示照片。"
      }
    }
  },
  {
    "id": "vineri-13",
    "name": {
      "ro": "Vineri 15",
      "en": "Vineri 15",
      "it": "Vineri 15",
      "fr": "Vineri 15",
      "es": "Vineri 15",
      "zh-Hans": "Vineri 15"
    },
    "description": {
      "ro": "Oprește-te la Vineri 15, restaurant și terasă pe Bulevardul Vasile Pârvan. Confirmă masa și programul înainte de vizită.",
      "en": "Stop at Vineri 15, a restaurant and terrace on Bulevardul Vasile Pârvan. Confirm your table and opening hours.",
      "it": "Fermati da Vineri 15, ristorante con terrazza sul Bulevardul Vasile Pârvan. Conferma tavolo e orari.",
      "fr": "Faites une pause chez Vineri 15, restaurant avec terrasse sur Bulevardul Vasile Pârvan. Confirmez table et horaires.",
      "es": "Haz una parada en Vineri 15, restaurante con terraza en Bulevardul Vasile Pârvan. Confirma mesa y horario.",
      "zh-Hans": "在 Bulevardul Vasile Pârvan 的 Vineri 15 餐厅及露台稍作停留。请确认订位和营业时间。"
    },
    "categories": [
      "food"
    ],
    "venues": [
      {
        "id": "vineri-13-unconfirmed",
        "name": "Vineri 15",
        "address": "Bulevardul Vasile Pârvan 9, Timișoara",
        "verified": true,
        "status": "open",
        "minors": "unknown",
        "sources": [
          "https://visit-timis.ro/vineri-15-en",
          "https://www.facebook.com/vineri15/",
          "https://ialoc.ro/restaurante-timisoara/vineri-15-rezervari-1956"
        ],
        "url": "https://www.facebook.com/vineri15/",
        "linkType": "official",
        "verifiedAt": "2026-11-13"
      }
    ]
  },
  {
    "id": "massimo",
    "name": {
      "ro": "Massimo",
      "en": "Massimo",
      "it": "Massimo",
      "fr": "Massimo",
      "es": "Massimo",
      "zh-Hans": "Massimo"
    },
    "description": {
      "ro": "Alege o masă în oraș și consultă meniul direct la restaurant. Confirmă disponibilitatea mesei, ingredientele și condițiile de acces înainte de a porni.",
      "en": "Choose a meal out and view the menu directly with the restaurant. Confirm table availability, ingredients and admission details before setting out for your visit.",
      "it": "Scegli un pranzo o una cena fuori e consulta il menu del ristorante. Verifica disponibilità dei tavoli, ingredienti e condizioni di accesso prima di partire.",
      "fr": "Choisissez un repas en ville et consultez le menu du restaurant. Confirmez la disponibilité des tables, les ingrédients et les conditions d’accès avant de partir.",
      "es": "Elige una comida fuera y consulta el menú del restaurante. Confirma la disponibilidad de mesas, los ingredientes y las condiciones de acceso antes de salir.",
      "zh-Hans": "安排一顿外出用餐，直接向餐厅查看菜单。出发前请确认座位、食材以及入场规定，以经营方当前公布的信息为准。"
    },
    "categories": [
      "food"
    ],
    "venues": [
      {
        "id": "massimo-unconfirmed",
        "name": "Massimo",
        "address": "Strada Johann Wolfgang von Goethe 2, Timișoara",
        "verified": true,
        "status": "open",
        "minors": "unknown",
        "sources": [
          "https://www.facebook.com/massimotimisoara/",
          "https://www.timisoreni.ro/despre/la-mia-cucina-da-massimo/",
          "https://kompas.ro/afaceri/timisoara/restaurante/massimo"
        ],
        "url": "https://www.facebook.com/massimotimisoara/",
        "linkType": "official",
        "verifiedAt": "2026-11-13"
      }
    ],
    "photo": {
      "path": "/media/photos-v03/city-massimo.webp",
      "author": "Autor neprecizat (pagina operatorului Massimo)",
      "source": "https://www.facebook.com/massimotimisoara/",
      "license": "Sursă: site-ul operatorului · licență de reutilizare neprecizată",
      "rightsStatus": "operator-homepage-unconfirmed",
      "alt": {
        "ro": "Preparat prezentat pe pagina Massimo.",
        "en": "Dish shown on the Massimo page.",
        "it": "Piatto mostrato nella pagina di Massimo.",
        "fr": "Plat présenté sur la page de Massimo.",
        "es": "Plato mostrado en la página de Massimo.",
        "zh-Hans": "Massimo 页面展示的菜品。"
      },
      "caption": {
        "ro": "Fotografie de prezentare publicată de operator.",
        "en": "Presentation photograph published by the operator.",
        "it": "Foto di presentazione pubblicata dal gestore.",
        "fr": "Photo de présentation publiée par l’établissement.",
        "es": "Foto de presentación publicada por el local.",
        "zh-Hans": "运营方发布的展示照片。"
      }
    }
  },
  {
    "id": "rio",
    "name": {
      "ro": "Riyo — ramen",
      "en": "Riyo — ramen",
      "it": "Riyo — ramen",
      "fr": "Riyo — ramen",
      "es": "Riyo — ramen",
      "zh-Hans": "Riyo — 拉面"
    },
    "description": {
      "ro": "Descoperă ramenul la Riyo Wok & Sushi, pe Mărășești 12. Consultă meniul actual și rezervarea direct la restaurant.",
      "en": "Try ramen at Riyo Wok & Sushi on Mărășești 12. Check the current menu and reservations directly with the restaurant.",
      "it": "Prova il ramen da Riyo Wok & Sushi, in Mărășești 12. Consulta menu e prenotazioni direttamente al ristorante.",
      "fr": "Goûtez le ramen chez Riyo Wok & Sushi, au 12 Mărășești. Consultez le menu et les réservations directement.",
      "es": "Prueba ramen en Riyo Wok & Sushi, en Mărășești 12. Consulta el menú actual y las reservas directamente.",
      "zh-Hans": "在 Mărășești 12 的 Riyo Wok & Sushi 品尝拉面。请直接向餐厅查询最新菜单和订位。"
    },
    "categories": [
      "food"
    ],
    "venues": [
      {
        "id": "rio-unconfirmed",
        "name": "Riyo — ramen",
        "address": "Strada Mărășești 12, Timișoara",
        "verified": true,
        "status": "open",
        "minors": "unknown",
        "sources": [
          "https://riyosushi.ro/",
          "https://riyosushi.ro/wp-content/uploads/2024/01/Meniu-Riyo-2024-Valori.pdf"
        ],
        "url": "https://riyosushi.ro/",
        "linkType": "official",
        "verifiedAt": "2026-11-13"
      }
    ],
    "photo": {
      "path": "/media/photos-v03/city-rio.webp",
      "author": "Autor neprecizat (pagina operatorului Riyo Wok Sushi)",
      "source": "https://riyosushi.ro/",
      "license": "Sursă: site-ul operatorului · licență de reutilizare neprecizată",
      "rightsStatus": "operator-homepage-unconfirmed",
      "alt": {
        "ro": "Interior prezentat pe pagina Riyo Wok Sushi.",
        "en": "Interior shown on the Riyo Wok Sushi page.",
        "it": "Interni mostrati nella pagina di Riyo Wok Sushi.",
        "fr": "Intérieur présenté sur la page de Riyo Wok Sushi.",
        "es": "Interior mostrado en la página de Riyo Wok Sushi.",
        "zh-Hans": "Riyo Wok Sushi 页面展示的室内空间。"
      },
      "caption": {
        "ro": "Fotografie de prezentare publicată de operator.",
        "en": "Presentation photograph published by the operator.",
        "it": "Foto di presentazione pubblicata dal gestore.",
        "fr": "Photo de présentation publiée par l’établissement.",
        "es": "Foto de presentación publicada por el local.",
        "zh-Hans": "运营方发布的展示照片。"
      }
    }
  },
  {
    "id": "woktagon",
    "name": {
      "ro": "Woktagon",
      "en": "Woktagon",
      "it": "Woktagon",
      "fr": "Woktagon",
      "es": "Woktagon",
      "zh-Hans": "Woktagon"
    },
    "description": {
      "ro": "Alege o masă în oraș și consultă meniul direct la restaurant. Confirmă disponibilitatea mesei, ingredientele și condițiile de acces înainte de a porni.",
      "en": "Choose a meal out and view the menu directly with the restaurant. Confirm table availability, ingredients and admission details before setting out for your visit.",
      "it": "Scegli un pranzo o una cena fuori e consulta il menu del ristorante. Verifica disponibilità dei tavoli, ingredienti e condizioni di accesso prima di partire.",
      "fr": "Choisissez un repas en ville et consultez le menu du restaurant. Confirmez la disponibilité des tables, les ingrédients et les conditions d’accès avant de partir.",
      "es": "Elige una comida fuera y consulta el menú del restaurante. Confirma la disponibilidad de mesas, los ingredientes y las condiciones de acceso antes de salir.",
      "zh-Hans": "安排一顿外出用餐，直接向餐厅查看菜单。出发前请确认座位、食材以及入场规定，以经营方当前公布的信息为准。"
    },
    "categories": [
      "food"
    ],
    "venues": [
      {
        "id": "woktagon-unconfirmed",
        "name": "Woktagon",
        "address": "Strada Gheorghe Lazăr 8, Timișoara",
        "verified": true,
        "status": "open",
        "minors": "unknown",
        "sources": [
          "https://www.woktagon.ro/contact",
          "https://www.firmadeaur.ro/company/woktagon-2797250"
        ],
        "url": "https://www.woktagon.ro/contact",
        "linkType": "official",
        "verifiedAt": "2026-11-13"
      }
    ],
    "note": "Search-indexed official contact corroborates Gheorghe Lazăr8 and Korean cuisine; direct page redirects to Google login. Public link withheld until accessible destination checked."
  },
  {
    "id": "pinocchio",
    "name": {
      "ro": "Pinocchio — Piața Unirii",
      "en": "Pinocchio — Piața Unirii",
      "it": "Pinocchio — Piața Unirii",
      "fr": "Pinocchio — Piața Unirii",
      "es": "Pinocchio — Piața Unirii",
      "zh-Hans": "Pinocchio — 联合广场"
    },
    "description": {
      "ro": "La Pinocchio din Piața Unirii servește pizza, paste și clătite. Confirmă masa și meniul actual direct la restaurant.",
      "en": "La Pinocchio in Piața Unirii serves pizza, pasta and pancakes. Confirm your table and the current menu directly.",
      "it": "La Pinocchio in Piața Unirii serve pizza, pasta e crêpe. Conferma direttamente tavolo e menu attuale.",
      "fr": "La Pinocchio, Piața Unirii, sert pizzas, pâtes et crêpes. Confirmez directement votre table et le menu actuel.",
      "es": "La Pinocchio, en Piața Unirii, sirve pizza, pasta y crepes. Confirma la mesa y el menú actual directamente.",
      "zh-Hans": "联合广场的 La Pinocchio 提供披萨、意面和可丽饼。请直接确认订位和最新菜单。"
    },
    "categories": [
      "food"
    ],
    "venues": [
      {
        "id": "pinocchio-unconfirmed",
        "name": "Pinocchio — Piața Unirii",
        "address": "Piața Unirii, Timișoara",
        "verified": true,
        "status": "open",
        "minors": "unknown",
        "sources": [
          "https://www.clatite-pinochio.ro/contact",
          "https://www.clatite-pinochio.ro/despre-noi",
          "https://www.cartogiraffe.com/rom%C3%A2nia/timi%C8%99/timi%C8%99oara/pia%C8%9Ba%2Bunirii/"
        ],
        "url": "https://www.clatite-pinochio.ro/contact",
        "linkType": "official",
        "verifiedAt": "2026-11-13"
      }
    ],
    "photo": {
      "path": "/media/photos-v03/city-pinocchio.webp",
      "author": "Autor neprecizat (pagina operatorului Pinocchio — Piața Libertății)",
      "source": "https://www.clatite-pinochio.ro/",
      "license": "Sursă: site-ul operatorului · licență de reutilizare neprecizată",
      "rightsStatus": "operator-homepage-unconfirmed",
      "alt": {
        "ro": "Clătită cu ciocolată și căpșuni prezentată de Pinocchio — Piața Libertății.",
        "en": "Crepe with chocolate and strawberries presented by Pinocchio — Piața Libertății.",
        "it": "Crêpe con cioccolato e fragole presentata da Pinocchio — Piața Libertății.",
        "fr": "Crêpe au chocolat et aux fraises présentée par Pinocchio — Piața Libertății.",
        "es": "Crepe con chocolate y fresas presentada por Pinocchio — Piața Libertății.",
        "zh-Hans": "Pinocchio — Piața Libertății 展示的巧克力草莓可丽饼。"
      },
      "caption": {
        "ro": "Fotografie de pe pagina operatorului; filiala fotografiată nu este confirmată.",
        "en": "Photograph from the operator’s page; the pictured branch is unconfirmed.",
        "it": "Foto dalla pagina del gestore; la sede fotografata non è confermata.",
        "fr": "Photo de la page de l’établissement ; la succursale photographiée n’est pas confirmée.",
        "es": "Foto de la página del operador; la sucursal fotografiada no está confirmada.",
        "zh-Hans": "照片来自运营方页面；所拍摄的分店尚未确认。"
      }
    }
  },
  {
    "id": "jacks",
    "name": {
      "ro": "Jack’s",
      "en": "Jack’s",
      "it": "Jack’s",
      "fr": "Jack’s",
      "es": "Jack’s",
      "zh-Hans": "Jack’s"
    },
    "description": {
      "ro": "Alege o masă în oraș și consultă meniul direct la restaurant. Confirmă disponibilitatea mesei, ingredientele și condițiile de acces înainte de a porni.",
      "en": "Choose a meal out and view the menu directly with the restaurant. Confirm table availability, ingredients and admission details before setting out for your visit.",
      "it": "Scegli un pranzo o una cena fuori e consulta il menu del ristorante. Verifica disponibilità dei tavoli, ingredienti e condizioni di accesso prima di partire.",
      "fr": "Choisissez un repas en ville et consultez le menu du restaurant. Confirmez la disponibilité des tables, les ingrédients et les conditions d’accès avant de partir.",
      "es": "Elige una comida fuera y consulta el menú del restaurante. Confirma la disponibilidad de mesas, los ingredientes y las condiciones de acceso antes de salir.",
      "zh-Hans": "安排一顿外出用餐，直接向餐厅查看菜单。出发前请确认座位、食材以及入场规定，以经营方当前公布的信息为准。"
    },
    "categories": [
      "food"
    ],
    "venues": [
      {
        "id": "jacks-unconfirmed",
        "name": "Jack’s Bistro — Old Town",
        "address": "Strada Vasile Alecsandri 7, Old Town, Timișoara",
        "verified": true,
        "status": "open",
        "minors": "unknown",
        "sources": [
          "https://jacksbistro.ro/locatii/",
          "https://jacksbistro.ro/contact/",
          "https://horeo.ro/brand/jack-s-bistro-sifyxjxi"
        ],
        "url": "https://jacksbistro.ro/locatii/",
        "linkType": "official",
        "verifiedAt": "2026-11-13"
      }
    ],
    "photo": {
      "path": "/media/photos-v03/city-jacks.webp",
      "author": "Autor neprecizat (pagina operatorului Jack’s)",
      "source": "https://jacksbistro.ro/",
      "license": "Sursă: site-ul operatorului · licență de reutilizare neprecizată",
      "rightsStatus": "operator-homepage-unconfirmed",
      "alt": {
        "ro": "Interior prezentat pe pagina Jack’s.",
        "en": "Interior shown on the Jack’s page.",
        "it": "Interni mostrati nella pagina di Jack’s.",
        "fr": "Intérieur présenté sur la page de Jack’s.",
        "es": "Interior mostrado en la página de Jack’s.",
        "zh-Hans": "Jack’s 页面展示的室内空间。"
      },
      "caption": {
        "ro": "Fotografie de pe pagina operatorului; filiala fotografiată nu este confirmată.",
        "en": "Photograph from the operator’s page; the pictured branch is unconfirmed.",
        "it": "Foto dalla pagina del gestore; la sede fotografata non è confermata.",
        "fr": "Photo de la page de l’établissement ; la succursale photographiée n’est pas confirmée.",
        "es": "Foto de la página del operador; la sucursal fotografiada no está confirmada.",
        "zh-Hans": "照片来自运营方页面；所拍摄的分店尚未确认。"
      }
    }
  },
  {
    "id": "moon-garden",
    "name": {
      "ro": "Moon Garden",
      "en": "Moon Garden",
      "it": "Moon Garden",
      "fr": "Moon Garden",
      "es": "Moon Garden",
      "zh-Hans": "Moon Garden"
    },
    "description": {
      "ro": "Alege o masă în oraș și consultă meniul direct la restaurant. Confirmă disponibilitatea mesei, ingredientele și condițiile de acces înainte de a porni.",
      "en": "Choose a meal out and view the menu directly with the restaurant. Confirm table availability, ingredients and admission details before setting out for your visit.",
      "it": "Scegli un pranzo o una cena fuori e consulta il menu del ristorante. Verifica disponibilità dei tavoli, ingredienti e condizioni di accesso prima di partire.",
      "fr": "Choisissez un repas en ville et consultez le menu du restaurant. Confirmez la disponibilité des tables, les ingrédients et les conditions d’accès avant de partir.",
      "es": "Elige una comida fuera y consulta el menú del restaurante. Confirma la disponibilidad de mesas, los ingredientes y las condiciones de acceso antes de salir.",
      "zh-Hans": "安排一顿外出用餐，直接向餐厅查看菜单。出发前请确认座位、食材以及入场规定，以经营方当前公布的信息为准。"
    },
    "categories": [
      "food"
    ],
    "venues": [
      {
        "id": "moon-garden-main",
        "name": "Moon Garden",
        "address": "Strada Grigore Alexandrescu 204, Timișoara",
        "verified": true,
        "status": "open",
        "minors": "unknown",
        "url": "https://moongarden.ro/",
        "linkType": "official",
        "sources": [
          "https://moongarden.ro/"
        ],
        "verifiedAt": "2026-11-13"
      }
    ],
    "photo": {
      "path": "/media/photos-v03/city-moon-garden.webp",
      "author": "Autor neprecizat (pagina operatorului Moon Garden)",
      "source": "https://moongarden.ro/",
      "license": "Sursă: site-ul operatorului · licență de reutilizare neprecizată",
      "rightsStatus": "operator-homepage-unconfirmed",
      "alt": {
        "ro": "Vedere de sus asupra restaurantului Moon Garden.",
        "en": "Aerial view of the Moon Garden restaurant.",
        "it": "Vista aerea del ristorante Moon Garden.",
        "fr": "Vue aérienne du restaurant Moon Garden.",
        "es": "Vista aérea del restaurante Moon Garden.",
        "zh-Hans": "Moon Garden 餐厅的俯视照片。"
      },
      "caption": {
        "ro": "Fotografie de prezentare publicată de operator.",
        "en": "Presentation photograph published by the operator.",
        "it": "Foto di presentazione pubblicata dal gestore.",
        "fr": "Photo de présentation publiée par l’établissement.",
        "es": "Foto de presentación publicada por el local.",
        "zh-Hans": "运营方发布的展示照片。"
      }
    }
  },
  {
    "id": "napoleon",
    "name": {
      "ro": "Napoleon Pizza",
      "en": "Napoleon Pizza",
      "it": "Napoleon Pizza",
      "fr": "Napoleon Pizza",
      "es": "Napoleon Pizza",
      "zh-Hans": "Napoleon Pizza"
    },
    "description": {
      "ro": "Alege o masă în oraș și consultă meniul direct la restaurant. Confirmă disponibilitatea mesei, ingredientele și condițiile de acces înainte de a porni.",
      "en": "Choose a meal out and view the menu directly with the restaurant. Confirm table availability, ingredients and admission details before setting out for your visit.",
      "it": "Scegli un pranzo o una cena fuori e consulta il menu del ristorante. Verifica disponibilità dei tavoli, ingredienti e condizioni di accesso prima di partire.",
      "fr": "Choisissez un repas en ville et consultez le menu du restaurant. Confirmez la disponibilité des tables, les ingrédients et les conditions d’accès avant de partir.",
      "es": "Elige una comida fuera y consulta el menú del restaurante. Confirma la disponibilidad de mesas, los ingredientes y las condiciones de acceso antes de salir.",
      "zh-Hans": "安排一顿外出用餐，直接向餐厅查看菜单。出发前请确认座位、食材以及入场规定，以经营方当前公布的信息为准。"
    },
    "categories": [
      "food"
    ],
    "venues": [
      {
        "id": "napoleon-unconfirmed",
        "name": "Napoleon — Complex",
        "address": "Aleea Studenților 5, Timișoara",
        "verified": true,
        "status": "open",
        "minors": "unknown",
        "sources": [
          "https://napoleon.ro/",
          "https://pizzanapoleon.ro/"
        ],
        "url": "https://napoleon.ro/",
        "linkType": "official",
        "verifiedAt": "2026-11-13"
      }
    ],
    "photo": {
      "path": "/media/photos-v03/city-napoleon.webp",
      "author": "Autor neprecizat (pagina operatorului Napoleon Pizza)",
      "source": "https://napoleon.ro/",
      "license": "Sursă: site-ul operatorului · licență de reutilizare neprecizată",
      "rightsStatus": "operator-homepage-unconfirmed",
      "alt": {
        "ro": "Pizza în fotografia principală de pe pagina Napoleon Pizza.",
        "en": "Pizza in the main photograph on the Napoleon Pizza page.",
        "it": "Pizza nella foto principale della pagina di Napoleon Pizza.",
        "fr": "Pizza sur la photo principale de la page de Napoleon Pizza.",
        "es": "Pizza en la foto principal de la página de Napoleon Pizza.",
        "zh-Hans": "Napoleon Pizza 页面主照片中的披萨。"
      },
      "caption": {
        "ro": "Fotografie de prezentare publicată de operator.",
        "en": "Presentation photograph published by the operator.",
        "it": "Foto di presentazione pubblicata dal gestore.",
        "fr": "Photo de présentation publiée par l’établissement.",
        "es": "Foto de presentación publicada por el local.",
        "zh-Hans": "运营方发布的展示照片。"
      }
    }
  },
  {
    "id": "white-pizza",
    "name": {
      "ro": "Why Pizza",
      "en": "Why Pizza",
      "it": "Why Pizza",
      "fr": "Why Pizza",
      "es": "Why Pizza",
      "zh-Hans": "Why Pizza"
    },
    "description": {
      "ro": "Încearcă pizza al taglio, în stil roman, la Why Pizza pe Vasile Alecsandri 2. Consultă oferta actuală direct.",
      "en": "Try Roman-style pizza al taglio at Why Pizza on Vasile Alecsandri 2. Check the current selection directly.",
      "it": "Prova la pizza al taglio in stile romano da Why Pizza, in Vasile Alecsandri 2. Consulta l’offerta attuale.",
      "fr": "Goûtez la pizza romaine al taglio chez Why Pizza, au 2 Vasile Alecsandri. Consultez la sélection du jour.",
      "es": "Prueba pizza al taglio de estilo romano en Why Pizza, en Vasile Alecsandri 2. Consulta la oferta actual.",
      "zh-Hans": "在 Vasile Alecsandri 2 的 Why Pizza 品尝罗马风格的切块披萨。请查询当天供应。"
    },
    "categories": [
      "food"
    ],
    "venues": [
      {
        "id": "white-pizza-unconfirmed",
        "name": "Why Pizza",
        "address": "Strada Vasile Alecsandri 2, Timișoara",
        "verified": true,
        "status": "open",
        "minors": "unknown",
        "sources": [
          "https://www.whypizza.ro/",
          "https://www.whypizza.ro/despre-noi"
        ],
        "url": "https://www.whypizza.ro/",
        "linkType": "official",
        "verifiedAt": "2026-11-13"
      }
    ],
    "photo": {
      "path": "/media/photos-v03/city-white-pizza.webp",
      "author": "Autor neprecizat (pagina operatorului Why Pizza)",
      "source": "https://www.whypizza.ro/",
      "license": "Sursă: site-ul operatorului · licență de reutilizare neprecizată",
      "rightsStatus": "operator-homepage-unconfirmed",
      "alt": {
        "ro": "Interior prezentat pe pagina Why Pizza.",
        "en": "Interior shown on the Why Pizza page.",
        "it": "Interni mostrati nella pagina di Why Pizza.",
        "fr": "Intérieur présenté sur la page de Why Pizza.",
        "es": "Interior mostrado en la página de Why Pizza.",
        "zh-Hans": "Why Pizza 页面展示的室内空间。"
      },
      "caption": {
        "ro": "Fotografie de prezentare publicată de operator.",
        "en": "Presentation photograph published by the operator.",
        "it": "Foto di presentazione pubblicata dal gestore.",
        "fr": "Photo de présentation publiée par l’établissement.",
        "es": "Foto de presentación publicada por el local.",
        "zh-Hans": "运营方发布的展示照片。"
      }
    }
  },
  {
    "id": "dei-frati",
    "name": {
      "ro": "Dei Frati",
      "en": "Dei Frati",
      "it": "Dei Frati",
      "fr": "Dei Frati",
      "es": "Dei Frati",
      "zh-Hans": "Dei Frati"
    },
    "description": {
      "ro": "Alege o masă în oraș și consultă meniul direct la restaurant. Confirmă disponibilitatea mesei, ingredientele și condițiile de acces înainte de a porni.",
      "en": "Choose a meal out and view the menu directly with the restaurant. Confirm table availability, ingredients and admission details before setting out for your visit.",
      "it": "Scegli un pranzo o una cena fuori e consulta il menu del ristorante. Verifica disponibilità dei tavoli, ingredienti e condizioni di accesso prima di partire.",
      "fr": "Choisissez un repas en ville et consultez le menu du restaurant. Confirmez la disponibilité des tables, les ingrédients et les conditions d’accès avant de partir.",
      "es": "Elige una comida fuera y consulta el menú del restaurante. Confirma la disponibilidad de mesas, los ingredientes y las condiciones de acceso antes de salir.",
      "zh-Hans": "安排一顿外出用餐，直接向餐厅查看菜单。出发前请确认座位、食材以及入场规定，以经营方当前公布的信息为准。"
    },
    "categories": [
      "food"
    ],
    "venues": [
      {
        "id": "dei-frati-unconfirmed",
        "name": "Dei Frati",
        "address": "Strada Vasile Alecsandri 3, Timișoara",
        "verified": true,
        "status": "open",
        "minors": "unknown",
        "sources": [
          "https://www.deifratitm.ro/",
          "https://www.timisoara-info.ro/infocentru/alimentatie",
          "https://bookingham.ro/timisoara/restaurante/dei-frati-timisoara/2594"
        ],
        "url": "https://www.deifratitm.ro/",
        "linkType": "official",
        "verifiedAt": "2026-11-13"
      }
    ],
    "photo": {
      "path": "/media/photos-v03/city-dei-frati.webp",
      "author": "Autor neprecizat (pagina operatorului Dei Frati)",
      "source": "https://www.deifratitm.ro/",
      "license": "Sursă: site-ul operatorului · licență de reutilizare neprecizată",
      "rightsStatus": "operator-homepage-unconfirmed",
      "alt": {
        "ro": "Preparate prezentate pe pagina Dei Frati.",
        "en": "Dishes shown on the Dei Frati page.",
        "it": "Piatti mostrati nella pagina di Dei Frati.",
        "fr": "Plats présentés sur la page de Dei Frati.",
        "es": "Platos mostrados en la página de Dei Frati.",
        "zh-Hans": "Dei Frati 页面展示的菜品。"
      },
      "caption": {
        "ro": "Fotografie de prezentare publicată de operator.",
        "en": "Presentation photograph published by the operator.",
        "it": "Foto di presentazione pubblicata dal gestore.",
        "fr": "Photo de présentation publiée par l’établissement.",
        "es": "Foto de presentación publicada por el local.",
        "zh-Hans": "运营方发布的展示照片。"
      }
    }
  },
  {
    "id": "del-corso",
    "name": {
      "ro": "Del Corso",
      "en": "Del Corso",
      "it": "Del Corso",
      "fr": "Del Corso",
      "es": "Del Corso",
      "zh-Hans": "Del Corso"
    },
    "description": {
      "ro": "Alege o masă în oraș și consultă meniul direct la restaurant. Confirmă disponibilitatea mesei, ingredientele și condițiile de acces înainte de a porni.",
      "en": "Choose a meal out and view the menu directly with the restaurant. Confirm table availability, ingredients and admission details before setting out for your visit.",
      "it": "Scegli un pranzo o una cena fuori e consulta il menu del ristorante. Verifica disponibilità dei tavoli, ingredienti e condizioni di accesso prima di partire.",
      "fr": "Choisissez un repas en ville et consultez le menu du restaurant. Confirmez la disponibilité des tables, les ingrédients et les conditions d’accès avant de partir.",
      "es": "Elige una comida fuera y consulta el menú del restaurante. Confirma la disponibilidad de mesas, los ingredientes y las condiciones de acceso antes de salir.",
      "zh-Hans": "安排一顿外出用餐，直接向餐厅查看菜单。出发前请确认座位、食材以及入场规定，以经营方当前公布的信息为准。"
    },
    "categories": [
      "food"
    ],
    "venues": [
      {
        "id": "del-corso-main",
        "name": "Locanda Del Corso",
        "address": "Strada Mărășești 10, Timișoara",
        "verified": true,
        "status": "open",
        "minors": "unknown",
        "url": "https://locandadelcorso.ro/",
        "linkType": "official",
        "sources": [
          "https://delcorsogroup.ro/locatiile-noastre"
        ],
        "verifiedAt": "2026-11-13"
      }
    ],
    "photo": {
      "path": "/media/photos-v03/city-del-corso.webp",
      "author": "Autor neprecizat (pagina operatorului Del Corso)",
      "source": "https://locandadelcorso.ro/",
      "license": "Sursă: site-ul operatorului · licență de reutilizare neprecizată",
      "rightsStatus": "operator-homepage-unconfirmed",
      "alt": {
        "ro": "Interior prezentat pe pagina Del Corso.",
        "en": "Interior shown on the Del Corso page.",
        "it": "Interni mostrati nella pagina di Del Corso.",
        "fr": "Intérieur présenté sur la page de Del Corso.",
        "es": "Interior mostrado en la página de Del Corso.",
        "zh-Hans": "Del Corso 页面展示的室内空间。"
      },
      "caption": {
        "ro": "Fotografie de prezentare publicată de operator.",
        "en": "Presentation photograph published by the operator.",
        "it": "Foto di presentazione pubblicata dal gestore.",
        "fr": "Photo de présentation publiée par l’établissement.",
        "es": "Foto de presentación publicada por el local.",
        "zh-Hans": "运营方发布的展示照片。"
      }
    }
  },
  {
    "id": "el-maguey",
    "name": {
      "ro": "El Maguey",
      "en": "El Maguey",
      "it": "El Maguey",
      "fr": "El Maguey",
      "es": "El Maguey",
      "zh-Hans": "El Maguey"
    },
    "description": {
      "ro": "Alege o masă în oraș și consultă meniul direct la restaurant. Confirmă disponibilitatea mesei, ingredientele și condițiile de acces înainte de a porni.",
      "en": "Choose a meal out and view the menu directly with the restaurant. Confirm table availability, ingredients and admission details before setting out for your visit.",
      "it": "Scegli un pranzo o una cena fuori e consulta il menu del ristorante. Verifica disponibilità dei tavoli, ingredienti e condizioni di accesso prima di partire.",
      "fr": "Choisissez un repas en ville et consultez le menu du restaurant. Confirmez la disponibilité des tables, les ingrédients et les conditions d’accès avant de partir.",
      "es": "Elige una comida fuera y consulta el menú del restaurante. Confirma la disponibilidad de mesas, los ingredientes y las condiciones de acceso antes de salir.",
      "zh-Hans": "安排一顿外出用餐，直接向餐厅查看菜单。出发前请确认座位、食材以及入场规定，以经营方当前公布的信息为准。"
    },
    "categories": [
      "food"
    ],
    "venues": [
      {
        "id": "el-maguey-unconfirmed",
        "name": "El Maguey",
        "address": "Strada Eugeniu de Savoya 18, Timișoara",
        "verified": true,
        "status": "open",
        "minors": "unknown",
        "sources": [
          "https://elmaguey.ro/timisoara/",
          "https://www.timisoara-info.ro/infocentru/alimentatie",
          "https://bookingham.ro/timisoara/restaurante/el-maguey/1715"
        ],
        "url": "https://elmaguey.ro/timisoara/",
        "linkType": "official",
        "verifiedAt": "2026-11-13"
      }
    ],
    "photo": {
      "path": "/media/photos-v03/city-el-maguey.webp",
      "author": "Autor neprecizat (pagina operatorului El Maguey)",
      "source": "https://elmaguey.ro/timisoara/",
      "license": "Sursă: site-ul operatorului · licență de reutilizare neprecizată",
      "rightsStatus": "operator-homepage-unconfirmed",
      "alt": {
        "ro": "Intrarea El Maguey, cu firmă și steag mexican.",
        "en": "Entrance to El Maguey, with its sign and a Mexican flag.",
        "it": "Ingresso di El Maguey, con insegna e bandiera messicana.",
        "fr": "Entrée de El Maguey, avec enseigne et drapeau mexicain.",
        "es": "Entrada de El Maguey, con letrero y bandera mexicana.",
        "zh-Hans": "El Maguey 的入口、招牌与墨西哥国旗。"
      },
      "caption": {
        "ro": "Fotografie de prezentare publicată de operator.",
        "en": "Presentation photograph published by the operator.",
        "it": "Foto di presentazione pubblicata dal gestore.",
        "fr": "Photo de présentation publiée par l’établissement.",
        "es": "Foto de presentación publicada por el local.",
        "zh-Hans": "运营方发布的展示照片。"
      }
    }
  },
  {
    "id": "beraria",
    "name": {
      "ro": "Berăria 700",
      "en": "Berăria 700",
      "it": "Berăria 700",
      "fr": "Berăria 700",
      "es": "Berăria 700",
      "zh-Hans": "Berăria 700"
    },
    "description": {
      "ro": "Descoperă bucătăria românească la Berăria 700, în Piața 700. Consultă meniul și rezervă masa direct la restaurant.",
      "en": "Explore Romanian cooking at Berăria 700 in Piața 700. Check the menu and reserve directly with the restaurant.",
      "it": "Scopri la cucina romena da Berăria 700, in Piața 700. Consulta il menu e prenota direttamente.",
      "fr": "Découvrez la cuisine roumaine chez Berăria 700, Piața 700. Consultez le menu et réservez directement.",
      "es": "Descubre la cocina rumana en Berăria 700, en Piața 700. Consulta el menú y reserva directamente.",
      "zh-Hans": "在 Piața 700 的 Berăria 700 品尝罗马尼亚菜。请直接向餐厅查询菜单和订位。"
    },
    "categories": [
      "food"
    ],
    "venues": [
      {
        "id": "beraria-unconfirmed",
        "name": "Berăria 700",
        "address": "Piața 700, Timișoara",
        "verified": true,
        "status": "open",
        "minors": "unknown",
        "sources": [
          "https://www.beraria700.ro/Rezervari.html",
          "https://www.beraria700.ro/info/78/Despre-noi.html"
        ],
        "url": "https://www.beraria700.ro/Rezervari.html",
        "linkType": "official",
        "verifiedAt": "2026-11-13"
      }
    ],
    "photo": {
      "path": "/media/photos-v02/city-beraria.webp",
      "author": "Dan Lundberg",
      "source": "https://www.flickr.com/photos/9508280@N07/48655733861/",
      "license": "CC BY-SA 2.0 · https://creativecommons.org/licenses/by-sa/2.0/",
      "alt": {
        "ro": "Intrarea și terasa Berăria 700 din Piața 700, iunie 2019.",
        "en": "Entrance and terrace of Berăria 700 at Piața 700, June 2019.",
        "it": "Ingresso e terrazza di Berăria 700 in Piața 700, giugno 2019.",
        "fr": "Entrée et terrasse de Berăria 700 à Piața 700, en juin 2019.",
        "es": "Entrada y terraza de Berăria 700 en Piața 700, junio de 2019.",
        "zh-Hans": "2019 年 6 月，Piața 700 广场的 Berăria 700 入口和露台。"
      },
      "caption": {
        "ro": "Berăria 700, exterior, 2019 (decupaj din fotografia originală).",
        "en": "Berăria 700 exterior, 2019 (cropped from the original photograph).",
        "it": "Esterno di Berăria 700, 2019 (ritaglio della fotografia originale).",
        "fr": "Extérieur de Berăria 700, 2019 (recadrage de la photographie originale).",
        "es": "Exterior de Berăria 700, 2019 (recorte de la fotografía original).",
        "zh-Hans": "Berăria 700 外景，摄于 2019 年（原始照片的裁剪部分）。"
      },
      "rightsStatus": "licensed"
    }
  },
  {
    "id": "casa-bunicii",
    "name": {
      "ro": "Casa Bunicii Garden",
      "en": "Casa Bunicii Garden",
      "it": "Casa Bunicii Garden",
      "fr": "Casa Bunicii Garden",
      "es": "Casa Bunicii Garden",
      "zh-Hans": "Casa Bunicii Garden"
    },
    "description": {
      "ro": "La Casa Bunicii Garden poți combina masa cu o ieșire în grădina urbană de pe Averescu. Operatorul confirmă locul de joacă; verifică masa și condițiile pentru copii.",
      "en": "At Casa Bunicii Garden, combine a meal with the urban garden on Averescu Street. The operator confirms a playground; check table availability and the conditions for children.",
      "it": "Da Casa Bunicii Garden puoi unire il pasto al giardino urbano di via Averescu. Il gestore conferma un’area giochi; verifica tavoli e condizioni per i bambini.",
      "fr": "Chez Casa Bunicii Garden, associez repas et jardin urbain de la rue Averescu. Le lieu confirme une aire de jeux ; vérifiez les tables et conditions pour enfants.",
      "es": "En Casa Bunicii Garden combina una comida con el jardín urbano de Averescu. El operador confirma una zona infantil; consulta mesa y condiciones para niños.",
      "zh-Hans": "在 Averescu 街的 Casa Bunicii Garden 用餐，享受城市花园。经营方确认设有儿童游戏区；请提前确认座位和儿童参与条件。"
    },
    "categories": [
      "food"
    ],
    "venues": [
      {
        "id": "casa-bunicii-main",
        "name": "Casa Bunicii Garden",
        "address": "Strada Mareșal Alexandru Averescu 1B, Timișoara",
        "verified": true,
        "status": "open",
        "minors": "yes",
        "url": "https://www.casa-bunicii.ro/restaurant-timisoara",
        "linkType": "official",
        "sources": [
          "https://www.casa-bunicii.ro/restaurant-timisoara"
        ],
        "verifiedAt": "2026-11-13"
      }
    ],
    "photo": {
      "path": "/media/photos-v03/city-casa-bunicii.webp",
      "author": "Autor neprecizat (pagina operatorului Casa Bunicii Garden)",
      "source": "https://www.casa-bunicii.ro/",
      "license": "Sursă: site-ul operatorului · licență de reutilizare neprecizată",
      "rightsStatus": "operator-homepage-unconfirmed",
      "alt": {
        "ro": "Grădina și mesele restaurantului Casa Bunicii Garden, văzute de sus.",
        "en": "Garden and restaurant tables at Casa Bunicii Garden, viewed from above.",
        "it": "Giardino e tavoli del ristorante Casa Bunicii Garden, visti dall’alto.",
        "fr": "Jardin et tables du restaurant Casa Bunicii Garden, vus d’en haut.",
        "es": "Jardín y mesas del restaurante Casa Bunicii Garden, vistos desde arriba.",
        "zh-Hans": "从上方拍摄的 Casa Bunicii Garden 花园与餐桌。"
      },
      "caption": {
        "ro": "Fotografie de prezentare publicată de operator.",
        "en": "Presentation photograph published by the operator.",
        "it": "Foto di presentazione pubblicata dal gestore.",
        "fr": "Photo de présentation publiée par l’établissement.",
        "es": "Foto de presentación publicada por el local.",
        "zh-Hans": "运营方发布的展示照片。"
      }
    }
  },
  {
    "id": "zone-2",
    "name": {
      "ro": "Restaurant ZONE 2",
      "en": "Restaurant ZONE 2",
      "it": "Restaurant ZONE 2",
      "fr": "Restaurant ZONE 2",
      "es": "Restaurant ZONE 2",
      "zh-Hans": "Restaurant ZONE 2"
    },
    "description": {
      "ro": "Alege o masă în oraș și consultă meniul direct la restaurant. Confirmă disponibilitatea mesei, ingredientele și condițiile de acces înainte de a porni.",
      "en": "Choose a meal out and view the menu directly with the restaurant. Confirm table availability, ingredients and admission details before setting out for your visit.",
      "it": "Scegli un pranzo o una cena fuori e consulta il menu del ristorante. Verifica disponibilità dei tavoli, ingredienti e condizioni di accesso prima di partire.",
      "fr": "Choisissez un repas en ville et consultez le menu du restaurant. Confirmez la disponibilité des tables, les ingrédients et les conditions d’accès avant de partir.",
      "es": "Elige una comida fuera y consulta el menú del restaurante. Confirma la disponibilidad de mesas, los ingredientes y las condiciones de acceso antes de salir.",
      "zh-Hans": "安排一顿外出用餐，直接向餐厅查看菜单。出发前请确认座位、食材以及入场规定，以经营方当前公布的信息为准。"
    },
    "categories": [
      "food"
    ],
    "venues": [
      {
        "id": "zone-2-unconfirmed",
        "name": "Restaurant ZONE 2",
        "address": "Calea Urseni 16, Giroc, Timiș",
        "verified": true,
        "status": "open",
        "minors": "unknown",
        "sources": [
          "https://www.zonecafe.ro/",
          "https://www.smart-menu.ro/zone2",
          "https://bookingham.ro/timisoara/restaurante/restaurant-zone-2-timisoara/2874",
          "https://www.google.com/maps/search/?api=1&query=Restaurant+ZONE+2&query_place_id=ChIJM9S7ItFfRUcR-8HwkDV8k_c"
        ],
        "url": "https://www.zonecafe.ro/",
        "linkType": "official",
        "verifiedAt": "2026-11-13"
      }
    ],
    "photo": {
      "path": "/media/photos-v03/city-zone-2.webp",
      "author": "Autor neprecizat (pagina operatorului Restaurant ZONE 2)",
      "source": "https://www.zonecafe.ro/",
      "license": "Sursă: site-ul operatorului · licență de reutilizare neprecizată",
      "rightsStatus": "operator-homepage-unconfirmed",
      "alt": {
        "ro": "Preparate prezentate pe pagina Restaurant ZONE 2.",
        "en": "Dishes shown on the Restaurant ZONE 2 page.",
        "it": "Piatti mostrati nella pagina di Restaurant ZONE 2.",
        "fr": "Plats présentés sur la page de Restaurant ZONE 2.",
        "es": "Platos mostrados en la página de Restaurant ZONE 2.",
        "zh-Hans": "Restaurant ZONE 2 页面展示的菜品。"
      },
      "caption": {
        "ro": "Fotografie de pe pagina operatorului; filiala fotografiată nu este confirmată.",
        "en": "Photograph from the operator’s page; the pictured branch is unconfirmed.",
        "it": "Foto dalla pagina del gestore; la sede fotografata non è confermata.",
        "fr": "Photo de la page de l’établissement ; la succursale photographiée n’est pas confirmée.",
        "es": "Foto de la página del operador; la sucursal fotografiada no está confirmada.",
        "zh-Hans": "照片来自运营方页面；所拍摄的分店尚未确认。"
      }
    }
  },
  {
    "id": "daf-junior",
    "name": {
      "ro": "DAF Junior",
      "en": "DAF Junior",
      "it": "DAF Junior",
      "fr": "DAF Junior",
      "es": "DAF Junior",
      "zh-Hans": "DAF Junior"
    },
    "description": {
      "ro": "Alege o masă în oraș și consultă meniul direct la restaurant. Confirmă disponibilitatea mesei, ingredientele și condițiile de acces înainte de a porni.",
      "en": "Choose a meal out and view the menu directly with the restaurant. Confirm table availability, ingredients and admission details before setting out for your visit.",
      "it": "Scegli un pranzo o una cena fuori e consulta il menu del ristorante. Verifica disponibilità dei tavoli, ingredienti e condizioni di accesso prima di partire.",
      "fr": "Choisissez un repas en ville et consultez le menu du restaurant. Confirmez la disponibilité des tables, les ingrédients et les conditions d’accès avant de partir.",
      "es": "Elige una comida fuera y consulta el menú del restaurante. Confirma la disponibilidad de mesas, los ingredientes y las condiciones de acceso antes de salir.",
      "zh-Hans": "安排一顿外出用餐，直接向餐厅查看菜单。出发前请确认座位、食材以及入场规定，以经营方当前公布的信息为准。"
    },
    "categories": [
      "food"
    ],
    "venues": [
      {
        "id": "daf-junior-main",
        "name": "DAF Junior",
        "address": "Strada Gloria 5, Giroc",
        "verified": true,
        "status": "open",
        "minors": "unknown",
        "url": "https://dafjunior.ro/contact/",
        "linkType": "official",
        "sources": [
          "https://dafjunior.ro/contact/"
        ],
        "verifiedAt": "2026-11-13"
      }
    ],
    "photo": {
      "path": "/media/photos-v03/city-daf-junior.webp",
      "author": "Autor neprecizat (pagina operatorului DAF Junior)",
      "source": "https://dafjunior.ro/",
      "license": "Sursă: site-ul operatorului · licență de reutilizare neprecizată",
      "rightsStatus": "operator-homepage-unconfirmed",
      "alt": {
        "ro": "Interior prezentat pe pagina DAF Junior.",
        "en": "Interior shown on the DAF Junior page.",
        "it": "Interni mostrati nella pagina di DAF Junior.",
        "fr": "Intérieur présenté sur la page de DAF Junior.",
        "es": "Interior mostrado en la página de DAF Junior.",
        "zh-Hans": "DAF Junior 页面展示的室内空间。"
      },
      "caption": {
        "ro": "Fotografie de prezentare publicată de operator.",
        "en": "Presentation photograph published by the operator.",
        "it": "Foto di presentazione pubblicata dal gestore.",
        "fr": "Photo de présentation publiée par l’établissement.",
        "es": "Foto de presentación publicada por el local.",
        "zh-Hans": "运营方发布的展示照片。"
      }
    }
  },
  {
    "id": "flonta",
    "name": {
      "ro": "Complex Flonta",
      "en": "Complex Flonta",
      "it": "Complex Flonta",
      "fr": "Complex Flonta",
      "es": "Complex Flonta",
      "zh-Hans": "Complex Flonta"
    },
    "description": {
      "ro": "Alege o masă în oraș și consultă meniul direct la restaurant. Confirmă disponibilitatea mesei, ingredientele și condițiile de acces înainte de a porni.",
      "en": "Choose a meal out and view the menu directly with the restaurant. Confirm table availability, ingredients and admission details before setting out for your visit.",
      "it": "Scegli un pranzo o una cena fuori e consulta il menu del ristorante. Verifica disponibilità dei tavoli, ingredienti e condizioni di accesso prima di partire.",
      "fr": "Choisissez un repas en ville et consultez le menu du restaurant. Confirmez la disponibilité des tables, les ingrédients et les conditions d’accès avant de partir.",
      "es": "Elige una comida fuera y consulta el menú del restaurante. Confirma la disponibilidad de mesas, los ingredientes y las condiciones de acceso antes de salir.",
      "zh-Hans": "安排一顿外出用餐，直接向餐厅查看菜单。出发前请确认座位、食材以及入场规定，以经营方当前公布的信息为准。"
    },
    "categories": [
      "food"
    ],
    "venues": [
      {
        "id": "flonta-main",
        "name": "Complex Flonta",
        "address": "Complex Flonta, Giroc, Timiș",
        "verified": true,
        "status": "unknown",
        "minors": "unknown",
        "url": "https://complex-flonta.ro/descopera/restaurantul/",
        "linkType": "official",
        "sources": [
          "https://complex-flonta.ro/descopera/restaurantul/"
        ],
        "verifiedAt": "2026-11-13"
      }
    ],
    "photo": {
      "path": "/media/photos-v03/city-flonta.webp",
      "author": "Autor neprecizat (pagina operatorului Complex Flonta)",
      "source": "https://complex-flonta.ro/",
      "license": "Sursă: site-ul operatorului · licență de reutilizare neprecizată",
      "rightsStatus": "operator-homepage-unconfirmed",
      "alt": {
        "ro": "Terasa Complex Flonta, lângă apă.",
        "en": "The Complex Flonta terrace beside the water.",
        "it": "La terrazza di Complex Flonta, accanto all’acqua.",
        "fr": "La terrasse de Complex Flonta, au bord de l’eau.",
        "es": "La terraza de Complex Flonta, junto al agua.",
        "zh-Hans": "Complex Flonta 的水边露台。"
      },
      "caption": {
        "ro": "Fotografie de prezentare publicată de operator.",
        "en": "Presentation photograph published by the operator.",
        "it": "Foto di presentazione pubblicata dal gestore.",
        "fr": "Photo de présentation publiée par l’établissement.",
        "es": "Foto de presentación publicada por el local.",
        "zh-Hans": "运营方发布的展示照片。"
      }
    }
  },
  {
    "id": "muzeul-arta",
    "name": {
      "ro": "Muzeul Național de Artă Timișoara",
      "en": "Timișoara National Museum of Art",
      "it": "Museo Nazionale d’Arte di Timișoara",
      "fr": "Musée national d’art de Timișoara",
      "es": "Museo Nacional de Arte de Timișoara",
      "zh-Hans": "蒂米什瓦拉国家艺术博物馆"
    },
    "description": {
      "ro": "Intră din Piața Unirii în muzeul găzduit de Palatul Baroc. Descoperă expozițiile de artă, urmărește detaliile clădirii și verifică programul actual pe pagina instituției.",
      "en": "Enter from Union Square into the museum housed in the Baroque Palace. Discover art exhibitions, notice the building’s details and check the institution’s current visiting information.",
      "it": "Entra da Piazza dell’Unione nel museo ospitato dal Palazzo Barocco. Scopri le mostre d’arte, osserva i dettagli dell’edificio e controlla le informazioni attuali dell’istituzione.",
      "fr": "Entrez depuis la place de l’Union dans le musée du palais baroque. Découvrez les expositions, observez les détails du bâtiment et consultez les informations de visite actuelles.",
      "es": "Entra desde la Plaza de la Unión al museo del Palacio Barroco. Descubre las exposiciones, observa los detalles del edificio y consulta la información actual.",
      "zh-Hans": "从联合广场进入巴洛克宫内的艺术博物馆，参观艺术展览，留意建筑细节。具体开放安排和到访信息，请查看博物馆当前公告。"
    },
    "categories": [
      "culture"
    ],
    "venues": [
      {
        "id": "muzeul-arta-main",
        "name": "Muzeul Național de Artă Timișoara",
        "address": "Piața Unirii 1, intrare din piață, Timișoara",
        "verified": true,
        "status": "open",
        "minors": "yes",
        "url": "https://mnart.museum/informatii/",
        "linkType": "official",
        "sources": [
          "https://mnart.museum/informatii/",
          "https://mnart.museum/reguli-de-vizitare/",
          "https://www.wikidata.org/wiki/Q18542193"
        ],
        "verifiedAt": "2026-11-13",
        "lat": 45.7574472,
        "lon": 21.2294528
      }
    ],
    "photo": {
      "path": "/media/photos/muzeul-arta.webp",
      "author": "LuminitaM",
      "source": "https://commons.wikimedia.org/wiki/File:Art_Museum_Timisoara.jpg",
      "license": "CC BY-SA 3.0 · https://creativecommons.org/licenses/by-sa/3.0",
      "alt": {
        "ro": "Muzeul Național de Artă Timișoara",
        "en": "Timișoara National Museum of Art",
        "it": "Museo Nazionale d’Arte di Timișoara",
        "fr": "Musée national d’art de Timișoara",
        "es": "Museo Nacional de Arte de Timișoara",
        "zh-Hans": "蒂米什瓦拉国家艺术博物馆"
      },
      "rightsStatus": "licensed"
    }
  },
  {
    "id": "memorialul-revolutiei",
    "name": {
      "ro": "Memorialul Revoluției",
      "en": "Revolution Memorial",
      "it": "Memoriale della Rivoluzione",
      "fr": "Mémorial de la Révolution",
      "es": "Memorial de la Revolución",
      "zh-Hans": "革命纪念馆"
    },
    "description": {
      "ro": "Descoperă documente și expoziții despre Revoluția din decembrie 1989. Memorialul de pe Oituz păstrează mărturii ale istoriei recente; alege o vizită potrivită intereselor și vârstei grupului.",
      "en": "Discover documents and exhibitions about the December 1989 Revolution. The memorial on Oituz preserves accounts of recent history; consider your group’s interests and ages when planning a visit.",
      "it": "Scopri documenti e mostre sulla Rivoluzione del dicembre 1989. Il memoriale di Oituz conserva testimonianze della storia recente; valuta interessi ed età del gruppo prima della visita.",
      "fr": "Découvrez documents et expositions sur la Révolution de décembre 1989. Le mémorial d’Oituz conserve des témoignages d’histoire récente ; tenez compte des intérêts et des âges du groupe.",
      "es": "Descubre documentos y exposiciones sobre la Revolución de diciembre de 1989. El memorial de Oituz conserva testimonios recientes; considera los intereses y edades del grupo.",
      "zh-Hans": "通过文件和展览了解 1989 年十二月革命。Oituz 街的纪念馆保存近代历史见证；安排参观时，请结合团队兴趣和年龄考虑展览内容。"
    },
    "categories": [
      "culture"
    ],
    "venues": [
      {
        "id": "memorialul-revolutiei-main",
        "name": "Memorialul Revoluției",
        "address": "Strada Oituz 2B, Timișoara",
        "verified": true,
        "status": "open",
        "minors": "yes",
        "url": "https://memorialulrevolutiei.ro/despre-noi/orar/",
        "linkType": "official",
        "sources": [
          "https://memorialulrevolutiei.ro/despre-noi/orar/",
          "https://visit-timisoara.com/ro/muzee/"
        ],
        "verifiedAt": "2026-11-13"
      }
    ],
    "photo": {
      "path": "/media/photos-v02/city-memorialul-revolutiei.webp",
      "author": "Chainwit.",
      "source": "https://commons.wikimedia.org/wiki/File:Memorialul_Revolutiei_din_1989,_Timisoara_(2023)_-_img_01.jpg",
      "license": "CC BY-SA 4.0 · https://creativecommons.org/licenses/by-sa/4.0",
      "alt": {
        "ro": "Fațada și intrarea Memorialului Revoluției de pe Strada Oituz, Timișoara.",
        "en": "Facade and entrance of the Revolution Memorial on Oituz Street, Timișoara.",
        "it": "Facciata e ingresso del Memoriale della Rivoluzione in Strada Oituz, Timișoara.",
        "fr": "Façade et entrée du Mémorial de la Révolution, rue Oituz, à Timișoara.",
        "es": "Fachada y entrada del Memorial de la Revolución en la calle Oituz, Timișoara.",
        "zh-Hans": "蒂米什瓦拉 Oituz 街革命纪念馆的外立面和入口。"
      },
      "rightsStatus": "licensed"
    }
  },
  {
    "id": "muzeul-banatului",
    "name": {
      "ro": "Muzeul Național al Banatului — Bastion",
      "en": "National Museum of Banat — Bastion",
      "it": "Museo Nazionale del Banato — Bastione",
      "fr": "Musée national du Banat — Bastion",
      "es": "Museo Nacional del Banato — Bastión",
      "zh-Hans": "巴纳特国家博物馆 — 堡垒馆址"
    },
    "description": {
      "ro": "Vizitează expozițiile Muzeului Național al Banatului de la Bastionul Theresia. Verifică selecția curentă înainte de plecare; această intrare nu promite acces în Castelul Huniade, aflat în restaurare.",
      "en": "Visit the National Museum of Banat’s exhibitions at Theresia Bastion. Check the current selection before visiting; this entry does not promise access to Huniade Castle, which is under restoration.",
      "it": "Visita le mostre del Museo Nazionale del Banato al Bastione Theresia. Controlla la selezione attuale; questa sede non garantisce accesso al Castello Huniade, in restauro.",
      "fr": "Visitez les expositions du Musée national du Banat au bastion Theresia. Consultez la sélection actuelle ; cette entrée ne donne pas accès au château Huniade, en restauration.",
      "es": "Visita las exposiciones del Museo Nacional del Banato en el Bastión Theresia. Consulta la selección actual; esta entrada no ofrece acceso al castillo Huniade, en restauración.",
      "zh-Hans": "在 Theresia 堡垒参观巴纳特国家博物馆的展览。出发前请查看当前展览信息；本条目指堡垒馆址，Huniade 城堡仍在修复中。"
    },
    "categories": [
      "culture"
    ],
    "venues": [
      {
        "id": "muzeul-banatului-main",
        "name": "Muzeul Național al Banatului — Bastion",
        "address": "Bastionul Theresia, Strada Martin Luther 4, Timișoara",
        "verified": true,
        "status": "open",
        "minors": "yes",
        "url": "https://mnab.ro/visit-us/",
        "linkType": "official",
        "sources": [
          "https://mnab.ro/visit-us/",
          "https://www.wikidata.org/wiki/Q539936"
        ],
        "verifiedAt": "2026-11-13",
        "lat": 45.7569444,
        "lon": 21.2333333
      }
    ],
    "photo": {
      "path": "/media/photos/muzeul-banatului.webp",
      "author": "Marius Catalin Boldeanu",
      "source": "https://commons.wikimedia.org/wiki/File:Bastionul_Theresia_din_Timisoara_(2).jpg",
      "license": "CC BY-SA 4.0 · https://creativecommons.org/licenses/by-sa/4.0",
      "alt": {
        "ro": "Muzeul Național al Banatului — Bastion",
        "en": "National Museum of Banat — Bastion",
        "it": "Museo Nazionale del Banato — Bastione",
        "fr": "Musée national du Banat — Bastion",
        "es": "Museo Nacional del Banato — Bastión",
        "zh-Hans": "巴纳特国家博物馆 — 堡垒馆址"
      },
      "rightsStatus": "licensed"
    }
  },
  {
    "id": "muzeul-comunismului",
    "name": {
      "ro": "Muzeul Consumatorului Comunist",
      "en": "Communist Consumer Museum",
      "it": "Museo del Consumatore Comunista",
      "fr": "Musée du consommateur communiste",
      "es": "Museo del Consumidor Comunista",
      "zh-Hans": "共产主义时期消费生活博物馆"
    },
    "description": {
      "ro": "Descoperă obiecte ale vieții cotidiene din perioada comunistă, la muzeul de pe strada László Székely. Confirmă deschiderea direct pe pagina locului înainte de vizită.",
      "en": "Discover objects from everyday life during the communist period at the museum on László Székely Street. Confirm current opening directly on the venue’s page before visiting.",
      "it": "Scopri oggetti della vita quotidiana del periodo comunista nel museo di via László Székely. Conferma l’apertura attuale direttamente sulla pagina del luogo prima della visita.",
      "fr": "Découvrez des objets du quotidien de la période communiste au musée de la rue László Székely. Confirmez l’ouverture actuelle sur la page du lieu avant la visite.",
      "es": "Descubre objetos cotidianos de la época comunista en el museo de la calle László Székely. Confirma la apertura actual directamente en su página antes de visitar.",
      "zh-Hans": "在 László Székely 街的博物馆了解共产主义时期的日常物品。当前开放状态尚待直接确认，请先查看场所页面再安排到访。"
    },
    "categories": [
      "culture"
    ],
    "venues": [
      {
        "id": "muzeul-comunismului-main",
        "name": "Muzeul Consumatorului Comunist",
        "address": "Strada Arhitect László Székely 1, Timișoara",
        "verified": true,
        "status": "open",
        "minors": "unknown",
        "url": "https://www.facebook.com/muzeuconsumatorcomunist/",
        "linkType": "official",
        "sources": [
          "https://visit-timisoara.com/ro/muzee/",
          "https://romaniatourism.com/timisoara.html"
        ],
        "verifiedAt": "2026-11-13"
      }
    ],
    "photo": {
      "path": "/media/photos/muzeul-comunismului.webp",
      "author": "Chainwit.",
      "source": "https://commons.wikimedia.org/wiki/File:2023_April_-_Muzeul_Consumatorului_Comunist_din_Timi%C8%99oara_10.jpg",
      "license": "CC BY-SA 4.0 · https://creativecommons.org/licenses/by-sa/4.0",
      "alt": {
        "ro": "Muzeul Consumatorului Comunist",
        "en": "Communist Consumer Museum",
        "it": "Museo del Consumatore Comunista",
        "fr": "Musée du consommateur communiste",
        "es": "Museo del Consumidor Comunista",
        "zh-Hans": "共产主义时期消费生活博物馆"
      },
      "rightsStatus": "licensed"
    }
  },
  {
    "id": "jecza",
    "name": {
      "ro": "Jecza Gallery",
      "en": "Jecza Gallery",
      "it": "Jecza Gallery",
      "fr": "Jecza Gallery",
      "es": "Jecza Gallery",
      "zh-Hans": "Jecza Gallery"
    },
    "description": {
      "ro": "Privește expozițiile de artă contemporană ale galeriei Jecza din Timișoara. Consultă programul și expoziția curentă la operator, distingând această galerie de spațiul său din București.",
      "en": "Explore contemporary art exhibitions at Jecza’s Timișoara gallery. Check the programme and current show with the operator, distinguishing this gallery from its separate space in Bucharest.",
      "it": "Osserva le mostre d’arte contemporanea della galleria Jecza di Timișoara. Consulta programma e mostra attuale, distinguendo questa galleria dalla sua sede separata di Bucarest.",
      "fr": "Découvrez l’art contemporain à la galerie Jecza de Timișoara. Consultez le programme actuel en distinguant cette galerie de son autre espace, situé à Bucarest.",
      "es": "Explora las exposiciones de arte contemporáneo de Jecza en Timișoara. Consulta la programación actual y distingue esta galería de su otro espacio en Bucarest.",
      "zh-Hans": "在 Jecza 的蒂米什瓦拉画廊欣赏当代艺术。请向画廊确认当前展览及开放安排，并注意与其布加勒斯特馆址区分。"
    },
    "categories": [
      "culture"
    ],
    "venues": [
      {
        "id": "jecza-main",
        "name": "Jecza Gallery",
        "address": "Calea Martirilor 1989 nr. 51/45, Timișoara",
        "verified": true,
        "status": "open",
        "minors": "unknown",
        "url": "https://jeczagallery.com/",
        "linkType": "official",
        "sources": [
          "https://jeczagallery.com/",
          "https://www.wikidata.org/wiki/Q135219227"
        ],
        "verifiedAt": "2026-11-13",
        "lat": 45.727873,
        "lon": 21.2381153
      }
    ],
    "photo": {
      "path": "/media/photos-v03/city-jecza.webp",
      "author": "Autor neprecizat (pagina operatorului Jecza Gallery)",
      "source": "https://jeczagallery.com/",
      "license": "Sursă: site-ul operatorului · licență de reutilizare neprecizată",
      "rightsStatus": "operator-homepage-unconfirmed",
      "alt": {
        "ro": "Vizitator cu un ghid de expoziție, fotografie publicată de Jecza Gallery.",
        "en": "Visitor with an exhibition guide in a photograph published by Jecza Gallery.",
        "it": "Visitatore con una guida alla mostra, in una foto pubblicata da Jecza Gallery.",
        "fr": "Visiteur avec un guide d’exposition, sur une photo publiée par Jecza Gallery.",
        "es": "Visitante con una guía de exposición, en una foto publicada por Jecza Gallery.",
        "zh-Hans": "Jecza Gallery 发布的照片中，一位参观者手持展览指南。"
      },
      "caption": {
        "ro": "Fotografie de pe pagina operatorului; filiala fotografiată nu este confirmată.",
        "en": "Photograph from the operator’s page; the pictured branch is unconfirmed.",
        "it": "Foto dalla pagina del gestore; la sede fotografata non è confermata.",
        "fr": "Photo de la page de l’établissement ; la succursale photographiée n’est pas confirmée.",
        "es": "Foto de la página del operador; la sucursal fotografiada no está confirmada.",
        "zh-Hans": "照片来自运营方页面；所拍摄的分店尚未确认。"
      }
    }
  },
  {
    "id": "muzeul-apei",
    "name": {
      "ro": "Muzeul Apei",
      "en": "Water Museum",
      "it": "Museo dell’Acqua",
      "fr": "Musée de l’Eau",
      "es": "Museo del Agua",
      "zh-Hans": "水博物馆"
    },
    "description": {
      "ro": "Explorează fosta uzină de apă de la Urseni, cu instalații istorice și clădiri industriale. Copiii sub paisprezece ani sunt însoțiți; consultă programul actual înainte de vizită.",
      "en": "Explore the former Urseni water plant, its historical equipment and industrial buildings. Children under fourteen need adult supervision; check the museum’s current visiting programme before your trip.",
      "it": "Esplora l’ex impianto idrico di Urseni, con macchinari storici ed edifici industriali. I bambini sotto i quattordici anni vanno accompagnati; verifica il programma attuale prima della visita.",
      "fr": "Explorez l’ancienne usine des eaux d’Urseni, ses équipements historiques et bâtiments industriels. Les moins de quatorze ans doivent être accompagnés ; vérifiez le programme actuel avant la visite.",
      "es": "Explora la antigua planta de agua de Urseni, sus instalaciones históricas y edificios industriales. Los menores de catorce años necesitan acompañamiento; consulta el programa actual.",
      "zh-Hans": "探索 Urseni 旧水厂的历史设备与工业建筑。十四岁以下儿童须由成人陪同；参观前请查看博物馆当前的开放安排。"
    },
    "categories": [
      "culture"
    ],
    "venues": [
      {
        "id": "muzeul-apei-main",
        "name": "Muzeul Apei",
        "address": "Calea Urseni 26, Timișoara",
        "verified": true,
        "status": "open",
        "minors": "yes",
        "url": "https://www.muzeulapei.ro/",
        "linkType": "official",
        "sources": [
          "https://www.muzeulapei.ro/en/plan-you-visit/",
          "https://visit-timisoara.com/ro/muzee/",
          "https://www.wikidata.org/wiki/Q134311609"
        ],
        "verifiedAt": "2026-11-13",
        "adultRequired": true,
        "lat": 45.7236111,
        "lon": 21.2563889
      }
    ],
    "photo": {
      "path": "/media/photos-v03/city-muzeul-apei.webp",
      "author": "Autor neprecizat (pagina operatorului Muzeul Apei)",
      "source": "https://www.muzeulapei.ro/",
      "license": "Sursă: site-ul operatorului · licență de reutilizare neprecizată",
      "rightsStatus": "operator-homepage-unconfirmed",
      "alt": {
        "ro": "Vizitatori lângă utilajele expuse la Muzeul Apei.",
        "en": "Visitors beside the machinery displayed at Muzeul Apei.",
        "it": "Visitatori accanto ai macchinari esposti al Muzeul Apei.",
        "fr": "Visiteurs près des machines exposées au Muzeul Apei.",
        "es": "Visitantes junto a la maquinaria expuesta en Muzeul Apei.",
        "zh-Hans": "Muzeul Apei 展出的机器与参观者。"
      },
      "caption": {
        "ro": "Fotografie de prezentare publicată de operator.",
        "en": "Presentation photograph published by the operator.",
        "it": "Foto di presentazione pubblicata dal gestore.",
        "fr": "Photo de présentation publiée par l’établissement.",
        "es": "Foto de presentación publicada por el local.",
        "zh-Hans": "运营方发布的展示照片。"
      }
    }
  },
  {
    "id": "muzeul-satului",
    "name": {
      "ro": "Muzeul Satului Bănățean",
      "en": "Banat Village Museum",
      "it": "Museo del Villaggio del Banato",
      "fr": "Musée du village du Banat",
      "es": "Museo de la Aldea del Banato",
      "zh-Hans": "巴纳特乡村博物馆"
    },
    "description": {
      "ro": "Plimbă-te prin gospodăriile și construcțiile tradiționale ale Banatului, într-un muzeu în aer liber. Terenul poate fi denivelat; copiii sub paisprezece ani vizitează însoțiți de adult.",
      "en": "Walk among Banat’s traditional homes and buildings in an open-air museum. Paths can be uneven; children under fourteen visit with an adult, following the museum’s current visitor rules.",
      "it": "Passeggia tra case ed edifici tradizionali del Banato in un museo all’aperto. Il terreno può essere irregolare; i bambini sotto i quattordici anni visitano accompagnati.",
      "fr": "Promenez-vous parmi les maisons et bâtiments traditionnels du Banat dans un musée de plein air. Le terrain peut être irrégulier ; les moins de quatorze ans sont accompagnés.",
      "es": "Pasea entre casas y edificios tradicionales del Banato en un museo al aire libre. El terreno puede ser irregular; los menores de catorce años van acompañados.",
      "zh-Hans": "在露天博物馆中穿行于巴纳特传统民居与建筑之间。部分道路不平；十四岁以下儿童须由成人陪同，并遵守馆方规定。"
    },
    "categories": [
      "culture"
    ],
    "venues": [
      {
        "id": "muzeul-satului-main",
        "name": "Muzeul Satului Bănățean",
        "address": "Strada Avram Imbroane 1, Timișoara",
        "verified": true,
        "status": "open",
        "minors": "yes",
        "url": "https://muzeulsatuluibanatean.ro/",
        "linkType": "official",
        "sources": [
          "https://muzeulsatuluibanatean.ro/2026/03/11/regulament-de-vizitare-al-muzeului-satului-banatean-timisoara/",
          "https://visit-timisoara.com/ro/muzee/",
          "https://www.wikidata.org/wiki/Q806117"
        ],
        "verifiedAt": "2026-11-13",
        "adultRequired": true,
        "lat": 45.7774344,
        "lon": 21.2660262
      }
    ],
    "photo": {
      "path": "/media/photos/muzeul-satului.webp",
      "author": "Chainwit.",
      "source": "https://commons.wikimedia.org/wiki/File:Muzeul_Satului_B%C4%83n%C4%83%C8%9Bean_Timi%C8%99oara_(2023)_-_img_15.jpg",
      "license": "CC BY 4.0 · https://creativecommons.org/licenses/by/4.0",
      "alt": {
        "ro": "Muzeul Satului Bănățean",
        "en": "Banat Village Museum",
        "it": "Museo del Villaggio del Banato",
        "fr": "Musée du village du Banat",
        "es": "Museo de la Aldea del Banato",
        "zh-Hans": "巴纳特乡村博物馆"
      },
      "rightsStatus": "licensed"
    }
  },
  {
    "id": "catedrala",
    "name": {
      "ro": "Catedrala Mitropolitană „Sfinții Trei Ierarhi”",
      "en": "“Three Holy Hierarchs” Metropolitan Cathedral",
      "it": "Cattedrale metropolitana dei Tre Santi Gerarchi",
      "fr": "Cathédrale métropolitaine des Trois Saints Hiérarques",
      "es": "Catedral Metropolitana de los Tres Santos Jerarcas",
      "zh-Hans": "三圣教父都主教座堂"
    },
    "description": {
      "ro": "Privește turlele Catedralei Mitropolitane din capătul Pieței Victoriei. Dacă intri, respectă slujbele și liniștea lăcașului; pentru colecția muzeală consultă separat informațiile instituției.",
      "en": "Look up at the Metropolitan Cathedral’s towers at the end of Victory Square. Inside, respect worship and quiet; consult the institution separately for its museum collection.",
      "it": "Osserva le torri della Cattedrale metropolitana in fondo a Piazza della Vittoria. All’interno rispetta funzioni e silenzio; consulta separatamente le informazioni sulla collezione museale.",
      "fr": "Observez les tours de la cathédrale métropolitaine au bout de la place de la Victoire. Respectez offices et silence ; renseignez-vous séparément pour la collection du musée.",
      "es": "Observa las torres de la catedral al final de la Plaza de la Victoria. Respeta los oficios y el silencio; consulta aparte la colección museística.",
      "zh-Hans": "在胜利广场一端仰望都主教座堂的塔楼。入内时请尊重礼拜并保持安静；如需参观馆藏，请另向教堂查询。"
    },
    "categories": [
      "history"
    ],
    "venues": [
      {
        "id": "catedrala-main",
        "name": "Catedrala Mitropolitană „Sfinții Trei Ierarhi”",
        "address": "Bd. Regele Ferdinand I, Piața Victoriei, Timișoara",
        "verified": true,
        "status": "open",
        "minors": "unknown",
        "url": "https://www.mitropolia-banatului.ro/",
        "linkType": "official",
        "sources": [
          "https://visit-timis.ro/catedrala-mitropolitana-timisoara",
          "https://www.wikidata.org/wiki/Q1261597"
        ],
        "verifiedAt": "2026-11-13",
        "lat": 45.750626,
        "lon": 21.224234
      }
    ],
    "photo": {
      "path": "/media/photos/catedrala.webp",
      "author": "Choinowski",
      "source": "https://commons.wikimedia.org/wiki/File:Catedrala_Mitropolitan%C4%83_%E2%80%9ESfin%C8%9Bii_Trei_Ierarhi%E2%80%9D.jpg",
      "license": "CC BY-SA 4.0 · https://creativecommons.org/licenses/by-sa/4.0",
      "alt": {
        "ro": "Catedrala Mitropolitană „Sfinții Trei Ierarhi”",
        "en": "“Three Holy Hierarchs” Metropolitan Cathedral",
        "it": "Cattedrale metropolitana dei Tre Santi Gerarchi",
        "fr": "Cathédrale métropolitaine des Trois Saints Hiérarques",
        "es": "Catedral Metropolitana de los Tres Santos Jerarcas",
        "zh-Hans": "三圣教父都主教座堂"
      },
      "rightsStatus": "licensed"
    }
  },
  {
    "id": "piata-victoriei",
    "name": {
      "ro": "Piața Victoriei",
      "en": "Victory Square",
      "it": "Piazza della Vittoria",
      "fr": "Place de la Victoire",
      "es": "Plaza de la Victoria",
      "zh-Hans": "胜利广场"
    },
    "description": {
      "ro": "Traversează piața în ritmul tău și privește fațadele din jur. Oprește-te la detaliile clădirilor, apoi continuă pe străzile pietonale din centrul orașului.",
      "en": "Cross the square at your own pace and look at the surrounding façades. Pause over architectural details, then continue into the pedestrian streets of the city centre.",
      "it": "Attraversa la piazza al tuo ritmo e osserva le facciate intorno. Soffermati sui dettagli degli edifici, poi continua nelle strade pedonali del centro cittadino.",
      "fr": "Traversez la place à votre rythme et observez les façades. Attardez-vous sur les détails des bâtiments, puis poursuivez dans les rues piétonnes du centre-ville.",
      "es": "Cruza la plaza a tu ritmo y observa las fachadas que la rodean. Descubre sus detalles y continúa por las calles peatonales del centro.",
      "zh-Hans": "按照自己的节奏穿过广场，欣赏周边立面与建筑细节。停留片刻，再继续走进市中心的步行街，探索沿途不同的角落。"
    },
    "categories": [
      "history"
    ],
    "venues": [
      {
        "id": "piata-victoriei-main",
        "name": "Piața Victoriei",
        "address": "Piața Victoriei, Timișoara",
        "verified": true,
        "status": "open",
        "minors": "yes",
        "url": "https://www.openstreetmap.org/?mlat=45.753256&mlon=21.225543#map=18/45.753256/21.225543",
        "linkType": "map",
        "sources": [
          "https://visit-timisoara.com/ro/monumente/",
          "https://www.wikidata.org/wiki/Q1402782"
        ],
        "verifiedAt": "2026-11-13",
        "lat": 45.753256,
        "lon": 21.225543
      }
    ],
    "photo": {
      "path": "/media/photos/piata-victoriei.webp",
      "author": "Choinowski",
      "source": "https://commons.wikimedia.org/wiki/File:Victory_Square_in_Timi%C8%99oara_Romania.jpg",
      "license": "CC BY-SA 4.0 · https://creativecommons.org/licenses/by-sa/4.0",
      "alt": {
        "ro": "Piața Victoriei",
        "en": "Victory Square",
        "it": "Piazza della Vittoria",
        "fr": "Place de la Victoire",
        "es": "Plaza de la Victoria",
        "zh-Hans": "胜利广场"
      },
      "rightsStatus": "licensed"
    }
  },
  {
    "id": "piata-libertatii",
    "name": {
      "ro": "Piața Libertății",
      "en": "Liberty Square",
      "it": "Piazza della Libertà",
      "fr": "Place de la Liberté",
      "es": "Plaza de la Libertad",
      "zh-Hans": "自由广场"
    },
    "description": {
      "ro": "Traversează piața în ritmul tău și privește fațadele din jur. Oprește-te la detaliile clădirilor, apoi continuă pe străzile pietonale din centrul orașului.",
      "en": "Cross the square at your own pace and look at the surrounding façades. Pause over architectural details, then continue into the pedestrian streets of the city centre.",
      "it": "Attraversa la piazza al tuo ritmo e osserva le facciate intorno. Soffermati sui dettagli degli edifici, poi continua nelle strade pedonali del centro cittadino.",
      "fr": "Traversez la place à votre rythme et observez les façades. Attardez-vous sur les détails des bâtiments, puis poursuivez dans les rues piétonnes du centre-ville.",
      "es": "Cruza la plaza a tu ritmo y observa las fachadas que la rodean. Descubre sus detalles y continúa por las calles peatonales del centro.",
      "zh-Hans": "按照自己的节奏穿过广场，欣赏周边立面与建筑细节。停留片刻，再继续走进市中心的步行街，探索沿途不同的角落。"
    },
    "categories": [
      "history"
    ],
    "venues": [
      {
        "id": "piata-libertatii-main",
        "name": "Piața Libertății",
        "address": "Piața Libertății, Timișoara",
        "verified": true,
        "status": "open",
        "minors": "yes",
        "url": "https://www.openstreetmap.org/?mlat=45.755568&mlon=21.227201#map=18/45.755568/21.227201",
        "linkType": "map",
        "sources": [
          "https://visit-timisoara.com/ro/monumente/",
          "https://www.wikidata.org/wiki/Q175320"
        ],
        "verifiedAt": "2026-11-13",
        "lat": 45.755568,
        "lon": 21.227201
      }
    ],
    "photo": {
      "path": "/media/photos/piata-libertatii.webp",
      "author": "Gugalcrom123",
      "source": "https://commons.wikimedia.org/wiki/File:Timi%C8%99oara_-_Pia%C8%9Ba_Libert%C4%83%C8%9Bii_noaptea,_septembrie_2023.jpg",
      "license": "CC BY 4.0 · https://creativecommons.org/licenses/by/4.0",
      "alt": {
        "ro": "Piața Libertății",
        "en": "Liberty Square",
        "it": "Piazza della Libertà",
        "fr": "Place de la Liberté",
        "es": "Plaza de la Libertad",
        "zh-Hans": "自由广场"
      },
      "rightsStatus": "licensed"
    }
  },
  {
    "id": "piata-unirii",
    "name": {
      "ro": "Piața Unirii",
      "en": "Union Square",
      "it": "Piazza dell’Unione",
      "fr": "Place de l’Union",
      "es": "Plaza de la Unión",
      "zh-Hans": "联合广场"
    },
    "description": {
      "ro": "Traversează piața în ritmul tău și privește fațadele din jur. Oprește-te la detaliile clădirilor, apoi continuă pe străzile pietonale din centrul orașului.",
      "en": "Cross the square at your own pace and look at the surrounding façades. Pause over architectural details, then continue into the pedestrian streets of the city centre.",
      "it": "Attraversa la piazza al tuo ritmo e osserva le facciate intorno. Soffermati sui dettagli degli edifici, poi continua nelle strade pedonali del centro cittadino.",
      "fr": "Traversez la place à votre rythme et observez les façades. Attardez-vous sur les détails des bâtiments, puis poursuivez dans les rues piétonnes du centre-ville.",
      "es": "Cruza la plaza a tu ritmo y observa las fachadas que la rodean. Descubre sus detalles y continúa por las calles peatonales del centro.",
      "zh-Hans": "按照自己的节奏穿过广场，欣赏周边立面与建筑细节。停留片刻，再继续走进市中心的步行街，探索沿途不同的角落。"
    },
    "categories": [
      "history"
    ],
    "venues": [
      {
        "id": "piata-unirii-main",
        "name": "Piața Unirii",
        "address": "Piața Unirii, Timișoara",
        "verified": true,
        "status": "open",
        "minors": "yes",
        "url": "https://www.openstreetmap.org/?mlat=45.75795&mlon=21.229014#map=18/45.75795/21.229014",
        "linkType": "map",
        "sources": [
          "https://visit-timisoara.com/ro/monumente/",
          "https://www.wikidata.org/wiki/Q422722"
        ],
        "verifiedAt": "2026-11-13",
        "lat": 45.75795,
        "lon": 21.229014
      }
    ],
    "photo": {
      "path": "/media/photos/piata-unirii.webp",
      "author": "Pudelek",
      "source": "https://commons.wikimedia.org/wiki/File:Union_Square,_Timi%C8%99oara,_Banat_02.jpg",
      "license": "CC BY-SA 4.0 · https://creativecommons.org/licenses/by-sa/4.0",
      "alt": {
        "ro": "Piața Unirii",
        "en": "Union Square",
        "it": "Piazza dell’Unione",
        "fr": "Place de l’Union",
        "es": "Plaza de la Unión",
        "zh-Hans": "联合广场"
      },
      "rightsStatus": "licensed"
    }
  },
  {
    "id": "cetate",
    "name": {
      "ro": "Cartierul Cetate",
      "en": "Cetate historic district",
      "it": "Quartiere storico Cetate",
      "fr": "Quartier historique Cetate",
      "es": "Barrio histórico Cetate",
      "zh-Hans": "Cetate 历史街区"
    },
    "description": {
      "ro": "Explorează la pas străzile din Cetate, între piețe, pasaje și fațade istorice. Fotografia arată strada Eugeniu de Savoya; harta te ajută să alegi continuarea plimbării.",
      "en": "Explore Cetate’s streets on foot, between squares, passages and historic façades. The photograph shows Eugeniu de Savoya Street; use the map to choose where your walk goes next.",
      "it": "Esplora a piedi le strade di Cetate, tra piazze, passaggi e facciate storiche. La fotografia mostra via Eugeniu de Savoya; scegli sulla mappa come proseguire.",
      "fr": "Explorez à pied les rues de Cetate, entre places, passages et façades historiques. La photo montre la rue Eugeniu de Savoya ; choisissez votre suite sur la carte.",
      "es": "Explora a pie las calles de Cetate, entre plazas, pasajes y fachadas históricas. La foto muestra Eugeniu de Savoya; el mapa ayuda a continuar el paseo.",
      "zh-Hans": "步行探索 Cetate 的街道、广场、通道与历史立面。照片展示 Eugeniu de Savoya 街；可借助地图决定下一段散步路线。"
    },
    "categories": [
      "history"
    ],
    "venues": [
      {
        "id": "cetate-main",
        "name": "Cartierul Cetate",
        "address": "Cartierul Cetate, Timișoara",
        "verified": true,
        "status": "open",
        "minors": "yes",
        "url": "https://visit-timisoara.com/ro/monumente/",
        "linkType": "official",
        "sources": [
          "https://visit-timisoara.com/ro/monumente/"
        ],
        "verifiedAt": "2026-11-13"
      }
    ],
    "photo": {
      "path": "/media/photos/cetate.webp",
      "author": "Tournasol7",
      "source": "https://commons.wikimedia.org/wiki/File:Strada_Eugeniu_de_Savoya_1_in_Timisoara_(1).jpg",
      "license": "CC BY 4.0 · https://creativecommons.org/licenses/by/4.0",
      "alt": {
        "ro": "Fațadă de pe strada Eugeniu de Savoya, în Cetate",
        "en": "Façade on Eugeniu de Savoya Street, Cetate",
        "it": "Facciata in via Eugeniu de Savoya, Cetate",
        "fr": "Façade de la rue Eugeniu de Savoya, Cetate",
        "es": "Fachada de Eugeniu de Savoya, Cetate",
        "zh-Hans": "Cetate 街区 Eugeniu de Savoya 街的建筑立面"
      },
      "rightsStatus": "licensed"
    }
  },
  {
    "id": "millennium",
    "name": {
      "ro": "Biserica Millennium",
      "en": "Millennium Church",
      "it": "Chiesa del Millennio",
      "fr": "Église Millennium",
      "es": "Iglesia Millennium",
      "zh-Hans": "千禧教堂"
    },
    "description": {
      "ro": "Descoperă biserica romano-catolică Millennium din cartierul Fabric, cu intrarea din Piața Romanilor. Respectă programul liturgic și verifică direct condițiile unei vizite sau ale unui concert.",
      "en": "Discover the Roman Catholic Millennium Church in Fabric, entering from Piața Romanilor. Respect services and check directly for the conditions of a visit or a concert.",
      "it": "Scopri la chiesa cattolica Millennium nel quartiere Fabric, con ingresso da Piața Romanilor. Rispetta le funzioni e verifica le condizioni per visite e concerti.",
      "fr": "Découvrez l’église catholique Millennium, dans le quartier Fabric, depuis Piața Romanilor. Respectez les offices et vérifiez les conditions d’une visite ou d’un concert.",
      "es": "Descubre la iglesia católica Millennium en Fabric, con entrada desde Piața Romanilor. Respeta los oficios y consulta las condiciones de una visita o un concierto.",
      "zh-Hans": "前往 Fabric 街区的天主教千禧教堂，入口位于 Piața Romanilor。请尊重礼拜安排，并直接确认参观或音乐会的参与条件。"
    },
    "categories": [
      "history"
    ],
    "venues": [
      {
        "id": "millennium-main",
        "name": "Biserica Millennium",
        "address": "Piața Romanilor 2, Timișoara",
        "verified": true,
        "status": "open",
        "minors": "unknown",
        "url": "https://gerhardus.ro/events/concert-aniversar-la-biserica-millennium-din-timisoara-fabric/",
        "linkType": "official",
        "sources": [
          "https://gerhardus.ro/parohii/",
          "https://gerhardus.ro/events/concert-aniversar-la-biserica-millennium-din-timisoara-fabric/",
          "https://www.wikidata.org/wiki/Q1935450"
        ],
        "verifiedAt": "2026-11-13",
        "lat": 45.756749,
        "lon": 21.247879
      }
    ],
    "photo": {
      "path": "/media/photos/millennium.webp",
      "author": "BuhaM",
      "source": "https://commons.wikimedia.org/wiki/File:Millennium_Church,_Timi%C8%99oara_02.jpg",
      "license": "CC BY-SA 4.0 · https://creativecommons.org/licenses/by-sa/4.0",
      "alt": {
        "ro": "Biserica Millennium",
        "en": "Millennium Church",
        "it": "Chiesa del Millennio",
        "fr": "Église Millennium",
        "es": "Iglesia Millennium",
        "zh-Hans": "千禧教堂"
      },
      "rightsStatus": "licensed"
    }
  }
];

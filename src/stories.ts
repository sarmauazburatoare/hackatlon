import {LANGS,type Story,type Lang} from './types';
import narrationData from './narrations.generated.json';
import type {CaptionCue} from './narration';
// Authored character narration and locally generated audio grounded in the linked references.
export const stories:Story[]=[
  {
    "id": "fountain",
    "name": {
      "ro": "Fântâna cu pești",
      "en": "Fountain with Fish",
      "it": "Fontana dei Pesci",
      "fr": "Fontaine aux poissons",
      "es": "Fuente de los Peces",
      "zh-Hans": "鱼喷泉"
    },
    "text": {
      "ro": "Sunt o mică replică a Fântânii cu pești din Piața Victoriei. În oraș, apa și bronzul îi opresc din drum pe trecători. Aici, în muzeul imaginar, peștii mei prind viață ca să-ți amintească să privești mai încet.",
      "en": "I am a small replica of the Fountain with Fish in Victory Square. Outside, water and bronze make passers-by pause. Here, in this imaginary museum, my fish come alive to remind you to look a little more slowly.",
      "it": "Sono una piccola replica della Fontana dei Pesci in Piazza della Vittoria. In città, acqua e bronzo fanno fermare i passanti. Qui, nel museo immaginario, i miei pesci prendono vita per ricordarti di osservare con più calma.",
      "fr": "Je suis une petite réplique de la fontaine aux poissons de la place de la Victoire. Dans la ville, eau et bronze arrêtent les passants. Ici, au musée imaginaire, mes poissons s’animent pour vous inviter à regarder plus lentement.",
      "es": "Soy una pequeña réplica de la Fuente de los Peces de la Plaza de la Victoria. Allí, agua y bronce detienen a los paseantes. Aquí, en el museo imaginario, mis peces cobran vida para invitarte a mirar con calma.",
      "zh-Hans": "我是胜利广场鱼喷泉的小小复制品。在真实的城市里，水流与青铜让行人停下脚步。在这座想象中的博物馆里，我的鱼儿游动起来，提醒你放慢一点，细看身边的城市。"
    },
    "voice": "light, flowing; curious pauses",
    "sources": [
      "https://assets.primariatm.ro/2efbba83-fb19-4362-a716-de0ed13fc984/RAPORTUL-PRIMARULUI.pdf",
      "https://en.wikipedia.org/wiki/Victory_Square,_Timi%C8%99oara"
    ]
  },
  {
    "id": "wolf",
    "name": {
      "ro": "Lupoaica și cei doi copii",
      "en": "The she-wolf and the twins",
      "it": "La lupa e i gemelli",
      "fr": "La louve et les jumeaux",
      "es": "La loba y los gemelos",
      "zh-Hans": "母狼与双子"
    },
    "text": {
      "ro": "Apropie-te, fără grabă. Sunt replica Lupoaicei capitoline, darul Romei pentru Timișoara din 1926. Sub mine îi vezi pe Romulus și Remus. Povestea lor aparține legendei; legătura dintre orașe, în schimb, este o amintire păstrată în bronz.",
      "en": "Come closer, gently. I am a replica of the Capitoline Wolf, Rome’s gift to Timișoara in 1926. Below me are Romulus and Remus. Their story belongs to legend; the bond between the cities is a memory kept in bronze.",
      "it": "Avvicinati, senza fretta. Sono una replica della Lupa Capitolina, dono di Roma a Timișoara nel 1926. Sotto di me vedi Romolo e Remo. La loro storia è leggenda; il legame tra le città resta una memoria custodita nel bronzo.",
      "fr": "Approchez, doucement. Je suis une réplique de la Louve du Capitole, offerte par Rome à Timișoara en 1926. Sous moi, Romulus et Rémus. Leur histoire appartient à la légende ; le lien entre les villes demeure un souvenir de bronze.",
      "es": "Acércate, despacio. Soy una réplica de la Loba Capitolina, regalo de Roma a Timișoara en 1926. Debajo están Rómulo y Remo. Su historia pertenece a la leyenda; el vínculo entre ciudades permanece como un recuerdo guardado en bronce.",
      "zh-Hans": "慢慢走近吧。我是卡比托利欧母狼的复制品，是罗马于 1926 年赠给蒂米什瓦拉的礼物。我的身下是罗慕路斯和雷穆斯。他们的故事属于传说，而两座城市之间的情谊，则留存在青铜之中。"
    },
    "voice": "calm, maternal; measured sentences and gentle pauses",
    "sources": [
      "https://cartipostale.cimec.ro/Detaliu.php?criteriu=Statuia+Lupoaicei&id=1899",
      "https://www.cjtimis.ro/judetul-timis/primariile-din-judetul-timis/municipiul-timisoara/"
    ]
  },
  {
    "id": "lantern",
    "name": {
      "ro": "Felinarul",
      "en": "The street lamp",
      "it": "Il lampione",
      "fr": "Le réverbère",
      "es": "La farola",
      "zh-Hans": "街灯"
    },
    "text": {
      "ro": "Eu aprind amintirea unei seri: 12 noiembrie 1884. Atunci a fost inaugurat iluminatul stradal electric al Timișoarei, cu 731 de lămpi. Nu sunt una dintre piesele originale, ci un semn al felului în care lumina a schimbat orașul.",
      "en": "I light the memory of an evening: 12 November 1884. That was when Timișoara’s electric street lighting opened, with 731 lamps. I am not an original lamp, but a reminder of how light changed the city’s streets.",
      "it": "Illumino il ricordo di una sera: 12 novembre 1884. Allora fu inaugurata l’illuminazione elettrica stradale di Timișoara, con 731 lampade. Non sono un pezzo originale, ma un segno di come la luce abbia cambiato le strade della città.",
      "fr": "J’éclaire le souvenir d’un soir : le 12 novembre 1884. Timișoara inaugurait alors son éclairage public électrique, avec 731 lampes. Je ne suis pas une pièce d’origine, mais le rappel d’une lumière qui a changé les rues de la ville.",
      "es": "Ilumino el recuerdo de una tarde: el 12 de noviembre de 1884. Timișoara inauguró su alumbrado eléctrico con 731 lámparas. No soy una pieza original, sino un recuerdo de cómo la luz cambió las calles de la ciudad.",
      "zh-Hans": "我点亮一个夜晚的记忆：1884 年 11 月 12 日。那一天，蒂米什瓦拉启用了拥有 731 盏灯的电力街道照明。我不是当年的原灯，而是对那束改变城市街道的光的纪念。"
    },
    "voice": "clear, warm; a quiet storyteller with deliberate rhythm",
    "sources": [
      "https://visit-timisoara.com/ro/premiere/",
      "https://visit-timisoara.com/firsts/"
    ]
  },
  {
    "id": "clock",
    "name": {
      "ro": "Ceasul floral",
      "en": "The floral clock",
      "it": "L’orologio floreale",
      "fr": "L’horloge florale",
      "es": "El reloj floral",
      "zh-Hans": "花卉钟"
    },
    "text": {
      "ro": "Eu măsor două feluri de timp: al acelor și al florilor. Ceasul floral al Timișoarei datează din anii șaptezeci. Replica mea se mișcă aici, dar afară povestea locului continuă prin grija pentru grădină și proiectele de reabilitare.",
      "en": "I measure two kinds of time: the hands’ time and the flowers’ time. Timișoara’s floral clock dates from the seventies. My replica moves here, while the place outside continues its story through gardening and plans for its restoration.",
      "it": "Misuro due tempi: quello delle lancette e quello dei fiori. L’orologio floreale di Timișoara risale agli anni Settanta. La mia replica si muove qui; fuori, la storia continua con la cura del giardino e i progetti di recupero.",
      "fr": "Je mesure deux temps : celui des aiguilles et celui des fleurs. L’horloge florale de Timișoara date des années soixante-dix. Ma réplique tourne ici ; dehors, son histoire continue avec le jardin et les projets de réhabilitation du lieu.",
      "es": "Mido dos tiempos: el de las agujas y el de las flores. El reloj floral de Timișoara data de los años setenta. Mi réplica se mueve aquí; fuera, su historia continúa con el jardín y los proyectos de rehabilitación.",
      "zh-Hans": "我测量两种时间：指针的时间和花朵的时间。蒂米什瓦拉的花卉钟建于二十世纪七十年代。这里转动的是我的复制品；真实场所的故事，则通过园艺维护与修复计划继续展开。"
    },
    "voice": "precise, playful; short ticking pauses",
    "sources": [
      "https://www.primariatm.ro/2026/09/02/ceas-floral",
      "https://www.radiotimisoara.ro/administratie-politica/ceasul-floral-din-timisoara-va-fi-repus-in-functiune-231220.html"
    ]
  },
  {
    "id": "roses",
    "name": {
      "ro": "Trandafirii",
      "en": "The roses",
      "it": "Le rose",
      "fr": "Les roses",
      "es": "Las rosas",
      "zh-Hans": "玫瑰"
    },
    "text": {
      "ro": "Noi nu înflorim toate odată. În Parcul Rozelor, culoarea se schimbă odată cu anotimpurile și cu îngrijirea grădinii. Privește-ne forma, frunzele, distanța dintre tufe. Orașul grădinilor se descoperă și prin lucruri mici, observate într-o plimbare fără grabă.",
      "en": "We do not all flower at once. In Rose Park, colours change with the seasons and the garden’s care. Notice our shapes, leaves and the space between bushes. The city of gardens also reveals itself through small things on an unhurried walk.",
      "it": "Non fioriamo tutte insieme. Nel Parco delle Rose i colori cambiano con le stagioni e la cura del giardino. Osserva forme, foglie e spazio tra i cespugli. La città dei giardini si svela anche nei piccoli dettagli di una passeggiata lenta.",
      "fr": "Nous ne fleurissons pas toutes ensemble. Au parc des Roses, les couleurs changent avec les saisons et le soin du jardin. Observez formes, feuilles et espaces entre les buissons. La ville des jardins se révèle aussi dans les petits détails d’une promenade tranquille.",
      "es": "No florecemos todas a la vez. En el Parque de las Rosas, los colores cambian con las estaciones y el cuidado del jardín. Observa formas, hojas y espacios entre arbustos. La ciudad de los jardines también se descubre en pequeños detalles, caminando despacio.",
      "zh-Hans": "我们不会同时盛开。玫瑰公园的颜色随着季节和园艺照料而变化。请看看花形、叶片，以及花丛之间的空隙。花园之城也藏在细小的事物中，等待你在悠闲散步时发现。"
    },
    "voice": "soft, observant; airy, varied phrasing",
    "sources": [
      "https://visit-timisoara.com/ro/campaigns/timisoara-inflorita/",
      "https://visit-timis.ro/what-to-see-in-timisoara-en?locale=ro"
    ]
  },
  {
    "id": "umbrellas",
    "name": {
      "ro": "Umbreluțele",
      "en": "The little umbrellas",
      "it": "Gli ombrelli",
      "fr": "Les petits parapluies",
      "es": "Los paraguas",
      "zh-Hans": "彩色雨伞"
    },
    "text": {
      "ro": "Privește în sus! Suntem inspirate de umbrelele suspendate de pe strada Alba Iulia. Această instalație a adus culoare pe o stradă de legătură dintre piețe. În muzeu ne legănăm ușor; în oraș, prezența și înfățișarea decorului se pot schimba.",
      "en": "Look up! We are inspired by the suspended umbrellas on Alba Iulia Street. This installation brought colour to a street connecting the squares. We sway gently in the museum; outside, the decoration’s presence and appearance can change over time.",
      "it": "Guarda in alto! Ci ispiriamo agli ombrelli sospesi di via Alba Iulia. L’installazione ha portato colore in una strada tra le piazze. Nel museo dondoliamo piano; in città la presenza e l’aspetto della decorazione possono cambiare nel tempo.",
      "fr": "Levez les yeux ! Nous sommes inspirés des parapluies suspendus de la rue Alba Iulia. Cette installation a coloré une rue entre les places. Au musée nous oscillons doucement ; en ville, la présence et l’aspect du décor peuvent changer.",
      "es": "¡Mira arriba! Nos inspiran los paraguas suspendidos de la calle Alba Iulia. La instalación dio color a una calle que une las plazas. Aquí nos balanceamos suavemente; en la ciudad, la presencia y el aspecto de la decoración pueden cambiar.",
      "zh-Hans": "抬头看！我们的灵感来自 Alba Iulia 街上悬挂的彩色雨伞。那项装置为连接广场的街道带来色彩。在博物馆里，我们轻轻摇摆；真实街道上的装饰是否出现、如何布置，则可能随着时间变化。"
    },
    "voice": "bright, curious; short lively phrases",
    "sources": [
      "https://www.radiotimisoara.ro/agenda-evenimente/sute-de-umbrele-colorate-vor-acoperi-din-nou-strada-alba-iulia-din-timisoara?mo=10&yr=2024",
      "https://www.opiniatimisoarei.ro/decizie-de-ultima-ora-in-privinta-acoperisului-de-umbrele-colorate-din-centrul-timisoarei-ce-se-intampla-pe-strada-alba-iulia-foto/12/06/2014"
    ]
  },
  {
    "id": "beer",
    "name": {
      "ro": "Halba și fabrica",
      "en": "The mug and the brewery",
      "it": "Il boccale e il birrificio",
      "fr": "La chope et la brasserie",
      "es": "La jarra y la fábrica",
      "zh-Hans": "啤酒杯与酿酒厂"
    },
    "text": {
      "ro": "Eu păstrez o poveste despre meșteșug, nu o invitație la consum. Fabrica de bere a Timișoarei a fost înființată în 1718, iar aici s-a produs pentru prima dată Timișoreana. Bulele mele amintesc de o tradiție industrială a cartierului Fabric.",
      "en": "I hold a story about craft, not an invitation to drink. Timișoara’s brewery was founded in 1718, and Timișoreana was first produced here. My bubbles recall an industrial tradition of Fabric, a neighbourhood whose name itself speaks of making things.",
      "it": "Custodisco una storia di mestiere, non un invito a bere. Il birrificio di Timișoara fu fondato nel 1718 e qui nacque Timișoreana. Le mie bolle ricordano una tradizione industriale di Fabric, un quartiere dal nome legato al lavoro.",
      "fr": "Je garde une histoire de savoir-faire, sans inviter à boire. La brasserie de Timișoara fut fondée en 1718 et produisit ici la première Timișoreana. Mes bulles rappellent une tradition industrielle de Fabric, quartier dont le nom évoque la fabrication.",
      "es": "Guardo una historia de oficio, sin invitar al consumo. La fábrica de cerveza de Timișoara se fundó en 1718 y aquí nació Timișoreana. Mis burbujas recuerdan una tradición industrial de Fabric, un barrio cuyo nombre habla de fabricar.",
      "zh-Hans": "我盛着一个关于工艺的故事，并不劝人饮酒。蒂米什瓦拉的酿酒厂创立于 1718 年，Timișoreana 最初就在这里酿造。我的气泡让人想起 Fabric 街区的工业传统，也想起那些世代积累的手艺。"
    },
    "voice": "grounded, companionable; warm low register, no advertising tone",
    "sources": [
      "https://ursus-breweries.ro/ursus-breweries/locatiile-ursus-brewries/fabrica-din-timisoara/",
      "https://visit-timisoara.com/ro/o-zi-in-timisoara/"
    ]
  }
];
const narrationIndex=narrationData as Record<string,Partial<Record<Lang,{audio:string;cues:CaptionCue[]}>>>;
for(const story of stories){
 story.audio={};story.captions={};
 for(const lang of LANGS){const track=narrationIndex[story.id]?.[lang];if(track){story.audio[lang]=track.audio;story.captions[lang]=track.cues;}}
}

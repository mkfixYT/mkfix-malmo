// src/data/products.ts

export interface ProductSpec {
  label: string;
  value: string;
}

export type ProductCategory = 'kontroller' | 'reservdelar' | 'konsoler' | 'tillbehor';

export type ProductStatus = 'in_stock' | 'few_left' | 'made_to_order' | 'sold_out';

export interface Product {
  slug: string;             // URL-slug, t.ex. "ps5-dualsense-white-tmr-174" -> /produkter/ps5-dualsense-white-tmr-174
  title: string;            // Produktens fulla namn
  price: number;            // Pris i SEK (t.ex. 699)
  originalPrice?: number;   // Ev. tidigare pris / ordinarie pris för att visa rabatt (t.ex. 899)
  category: ProductCategory;// Kategori för filtrering i butiken
  status: ProductStatus;    // Lagerstatus
  badge?: string;           // Visas som tagg över bilden, t.ex. "🧲 TMR Elektromagnetisk", "⚡ Retro med TMR"
  condition: string;        // T.ex. "Professionellt renoverad & TMR-uppgraderad"
  warranty: string;         // T.ex. "6 månaders full funktionsgaranti"
  shortDescription: string; // Kort ingress till produktkortet i galleriet
  description: string[];    // Stycken med utförlig beskrivning på produktsidan
  features: string[];       // Punktlista med egenskaper/vad som ingår
  specs: ProductSpec[];     // Specifikationstabell
  images: string[];         // Flera bilder stöds! Första bilden visas som huvudbild
}

export const products: Product[] = [
  // --- 126: Xbox One Wireless Controller (Model 1708) White ---
  {
    slug: 'xbox-wireless-controller-white-tmr-126',
    title: 'Xbox Trådlös Handkontroll (Model 1708) – Vit – TMR (#126)',
    price: 449,
    category: 'kontroller',
    status: 'in_stock',
    badge: '🧲 TMR Elektromagnetisk',
    condition: 'Professionellt renoverad & TMR-uppgraderad',
    warranty: '6 månaders full funktionsgaranti från mkFix',
    shortDescription: 'Klassisk vit Xbox One trådlös handkontroll (Modell 1708) uppgraderad i verkstaden med elektromagnetiska TMR-joysticks. Helt immun mot stick drift!',
    description: [
      'En professionellt genomgången och uppgraderad Xbox trådlös handkontroll (Modell 1708) i stilrent vitt utförande (märkt #126 i vårt inventarium).',
      'De gamla fabrikspotentiometrarna har bytts ut mot moderna elektromagnetiska TMR-joysticks (Tunneling Magnetoresistive). TMR läser av spakarnas rörelser helt utan mekanisk friktion och slits därför inte ut som traditionella spakar gör.',
      'Kontrollen är hårdvarukalibrerad i testbänk för perfekt centreringsrespons och hög precision. Redo för Xbox eller trådlöst PC-spelande!'
    ],
    features: [
      'Splitternya elektromagnetiska TMR-joysticks installerade',
      'Helt immun mot mekanisk förslitning och stick drift',
      'Modell 1708 med inbyggd Bluetooth för Xbox, PC, Mac och mobil',
      '3.5 mm stereoljudsuttag för gamingheadset',
      'Hårdvarukalibrerad och testad i gamepad-mjukvara',
      '6 månaders full funktionsgaranti från mkFix'
    ],
    specs: [
      { label: 'Plattform', value: 'Xbox Series X/S, Xbox One, Windows PC, iOS, Android' },
      { label: 'Sensor-teknik', value: 'TMR (Tunneling Magnetoresistive)' },
      { label: 'Modell', value: 'Microsoft Model 1708 (#126)' },
      { label: 'Färg', value: 'Robot White (Vit)' },
      { label: 'Anslutning', value: 'Bluetooth, Xbox Wireless & Micro-USB' },
      { label: 'Headsetuttag', value: '3.5 mm standardjack' },
      { label: 'Batterityp', value: '2x AA-batterier eller uppladdningsbart batteripaket' },
      { label: 'Skick', value: 'Mycket fint skick / Nyskick i spakar' }
    ],
    images: [
      '/img/products/126/PXL_20260925_143439032.MP.jpg',
      '/img/products/126/PXL_20260925_143453505.MP.jpg',
      '/img/products/126/PXL_20260925_143507418.MP.jpg',
      '/img/products/126/PXL_20260925_143515061.MP.jpg',
      '/img/products/126/Screenshot 2026-09-25 162509.png'
    ]
  },

  // --- 159: Xbox 360 Wireless Controller White #159 ---
  {
    slug: 'xbox-360-wireless-white-HE-159',
    title: 'Xbox 360 Trådlös Handkontroll – Vit – TMR (#159)',
    price: 399,
    category: 'kontroller',
    status: 'in_stock',
    badge: '⚡ Retro med Hall Effect',
    condition: 'Professionellt renoverad & Hall Effect-uppgraderad',
    warranty: '6 månaders full funktionsgaranti från mkFix',
    shortDescription: 'Äkta retrokänsla med modern precision! Klassisk vit trådlös Xbox 360-kontroll (#159) helrenoverad och uppgraderad med Hall Effect-spakar. Perfekt cirkuläritet och noll stick drift.',
    description: [
      'Ge ditt Xbox 360-spelande nytt liv med en äkta originalkontroll som presterar bättre än när den rullade av fabriksbandet! Denna kontroll (#159) har fått båda sina analogspakar utbytta mot moderna Hall Effect-sensorer.',
      'Hall Effect-tekniken använder magnetfält istället för kolbanor vilket eliminerar slitage och ger överlägsen precision i klassiker som Halo 3, Gears of War och Forza Motorsport.',
      'Knappmembran har inspekterats och spakarna är hårdvarukalibrerade till enastående ~9% felmarginal i testbänk.'
    ],
    features: [
      'Dubbla Hall Effect magnetiska sensorer installerade',
      'Hårdvarukalibrerad till imponerande 9.3% / 9.0% felmarginal',
      'Inspektion av kretskort',
      'Perfekt taktil känsla i knappar, triggers och d-pad',
      'Kompatibel med alla Xbox 360-modeller och PC (via trådlös adapter)',
      '6 månaders full funktionsgaranti från mkFix'
    ],
    specs: [
      { label: 'Plattform', value: 'Xbox 360, PC (kräver trådlös USB-adapter)' },
      { label: 'Sensor-teknik', value: 'Hall Effect' },
      { label: 'Modell', value: 'Microsoft Xbox 360 Wireless (#159)' },
      { label: 'Färg', value: 'Klassisk Vit' },
      { label: 'Kalibrering', value: '9.3% vänster / 9.0% höger felmarginal' },
      { label: 'Batterifack', value: 'Original AA-batterihållare ingår' },
      { label: 'Skick', value: 'Renoverad originalkontroll / Hall Effect-uppgraderad' }
    ],
    images: [
      '/img/products/159/PXL_20260919_102451182.MP.jpg',
      '/img/products/159/PXL_20260919_102457318.MP.jpg',
      '/img/products/159/PXL_20260919_102510134.MP.jpg',
      '/img/products/159/PXL_20260919_102515424.MP.jpg',
      '/img/products/159/PXL_20260919_101327798.MP.jpg',
      '/img/products/159/Screenshot 2026-09-19 122204.png'
    ]
  },

  // --- 161: Xbox 360 Wireless Controller Black #161 ---
  {
    slug: 'xbox-360-wireless-black-tmr-161',
    title: 'Xbox 360 Trådlös Handkontroll – Mattsvart – Hall Effect (#161)',
    price: 399,
    category: 'kontroller',
    status: 'in_stock',
    badge: '⚡ Retro med Hall Effect',
    condition: 'Professionellt renoverad & Hall Effect-uppgraderad',
    warranty: '6 månaders full funktionsgaranti från mkFix',
    shortDescription: 'Stilren mattsvart trådlös Xbox 360-kontroll (#161), servad och uppgraderad med Hall Effect magnetiska sensorer. Garanterat fri från stick drift!',
    description: [
      'En snygg mattsvart Xbox 360 trådlös originalkontroll (#161) som genomgått en omfattande modernisering i verkstaden.',
      'Spakmekanismerna har ersatts av Hall Effect magnetiska sensorer som eliminerar allt framtida slitage på potentiometrar.',
      'Spakarna är hårdvarukalibrerade och ger en extremt jämn och följsam rörelsekurva. Perfekt för gaming på både Xbox 360 och PC via trådlös adapter.'
    ],
    features: [
      'Hall Effect-teknik för maximal precision och livslängd',
      'Slitstark mattsvart finish i mycket fint skick',
      'Hårdvarukalibrerad med testrapport (9.1% / 12.9%)',
      '6 månaders full funktionsgaranti från mkFix'
    ],
    specs: [
      { label: 'Plattform', value: 'Xbox 360, PC (kräver trådlös mottagare)' },
      { label: 'Sensor-teknik', value: 'Hall Effect' },
      { label: 'Modell', value: 'Microsoft Xbox 360 Wireless (#161)' },
      { label: 'Färg', value: 'Mattsvart (Matte Black)' },
      { label: 'Kalibrering', value: '9.1% vänster / 12.9% höger felmarginal' },
      { label: 'Batterifack', value: 'Original AA-batterihållare ingår' },
      { label: 'Skick', value: 'Professionellt renoverad & TMR-uppgraderad' }
    ],
    images: [
      '/img/products/161/PXL_20260919_181706978.MP.jpg',
      '/img/products/161/PXL_20260919_181711066.MP.jpg',
      '/img/products/161/PXL_20260919_181716650.MP.jpg',
      '/img/products/161/PXL_20260919_181719897.MP.jpg',
      '/img/products/161/PXL_20260919_180440806.MP.jpg',
      '/img/products/161/Screenshot 2026-09-19 201600.png'
    ]
  },

  // --- 162: Xbox 360 Wireless Controller Black #162 ---
  {
    slug: 'xbox-360-wireless-black-tmr-162',
    title: 'Xbox 360 Trådlös Handkontroll – Mattsvart – Hall effect (#162)',
    price: 399,
    category: 'kontroller',
    status: 'in_stock',
    badge: '⚡ Retro med Hall Effect',
    condition: 'Professionellt renoverad & Hall Effect-uppgraderad',
    warranty: '6 månaders full funktionsgaranti från mkFix',
    shortDescription: 'Mattsvart trådlös Xbox 360-kontroll (#162) med suverän kalibrering (7.9% / 8.8%) och Hall Effect elektromagnetiska joysticks. Oslagbar känsla!',
    description: [
      'Denna mattsvarta Xbox 360-kontroll (#162) har fått våra finaste Hall Effect-sensorer installerade med mikrometer-passning och hårdvarutrimning.',
      'Kalibreringstestet uppvisar exceptionellt låg felmarginal på endast 7.9% på vänster och 8.8% på höger spak – betydligt bättre än vad dessa kontroller presterade från fabrik!',
      'Funktionstestad på samtliga knappar, analoga triggers och rumble-motorer.'
    ],
    features: [
      'Hall Effect-spakar med noll mekanisk friktion',
      'Fantastisk precision och centreringsrespons (7.9% / 8.8%)',
      'Nya spakhattar med optimalt grepp och motstånd',
      'Kompatibel med alla Xbox 360-modeller samt PC',
      '6 månaders full funktionsgaranti från mkFix'
    ],
    specs: [
      { label: 'Plattform', value: 'Xbox 360, PC (kräver trådlös mottagare)' },
      { label: 'Sensor-teknik', value: 'Hall Effect' },
      { label: 'Modell', value: 'Microsoft Xbox 360 Wireless (#162)' },
      { label: 'Färg', value: 'Mattsvart (Matte Black)' },
      { label: 'Kalibrering', value: '7.9% vänster / 8.8% höger felmarginal' },
      { label: 'Batterifack', value: 'Original AA-batterihållare ingår' },
      { label: 'Skick', value: 'Toppskick / Hall Effect-uppgraderad' }
    ],
    images: [
      '/img/products/162/PXL_20260920_120538488.MP.jpg',
      '/img/products/162/PXL_20260920_120543876.MP.jpg',
      '/img/products/162/PXL_20260920_120547841.MP.jpg',
      '/img/products/162/PXL_20260920_120552245.MP.jpg',
      '/img/products/162/PXL_20260920_115721801.MP.jpg',
      '/img/products/162/Screenshot 2026-09-20 140951.png'
    ]
  },

  // --- 171: Xbox Series Wireless Controller (Model 1914) Carbon Black #171 ---
  {
    slug: 'xbox-series-controller-carbon-black-tmr-171',
    title: 'Xbox Series X/S Trådlös Handkontroll (Model 1914) – Carbon Black – TMR (#171)',
    price: 599,
    category: 'kontroller',
    status: 'in_stock',
    badge: '🧲 TMR Elektromagnetisk',
    condition: 'Professionellt renoverad & TMR-uppgraderad',
    warranty: '6 månaders full funktionsgaranti från mkFix',
    shortDescription: 'Senaste generationens Xbox Series X/S-kontroll (Modell 1914) i Carbon Black med USB-C, hybrid-styrkors och installerade TMR-joysticks. Driftfri för evigt!',
    description: [
      'Microsofts moderna flaggskeppskontroll för Xbox Series X|S och PC (Modell 1914, märkt #171 i vårt inventarium) uppgraderad i vår Malmö-verkstad med banbrytande TMR-joysticks.',
      'Utrustad med Microsofts hyllade hybrid-styrkors, texturerat grepp på triggers och baksida, USB-C-laddningsport och dedikerad Dela-knapp.',
      'Med TMR-teknik förvandlas denna moderna kontroll till ett precisionsverktyg som är 100% säkrat mot all framtida stick drift i FPS, racing och sportspel.'
    ],
    features: [
      'Splitternya TMR-joysticks installerade via mikrolödning',
      'Modell 1914 med USB-C, texturerade grepp och hybrid-D-pad',
      'Dedikerad Dela-knapp för snabba skärmdumpar och videoklipp',
      '3.5 mm stereoljudsuttag för gamingheadset',
      'Bluetooth Low Energy & Xbox Wireless för sömlös koppling',
      '6 månaders full funktionsgaranti från mkFix'
    ],
    specs: [
      { label: 'Plattform', value: 'Xbox Series X/S, Xbox One, Windows PC, Android, iOS' },
      { label: 'Sensor-teknik', value: 'TMR (Tunneling Magnetoresistive)' },
      { label: 'Modell', value: 'Microsoft Model 1914 (#171)' },
      { label: 'Färg', value: 'Carbon Black (Svart)' },
      { label: 'Anslutning', value: 'USB-C, Bluetooth & Xbox Wireless' },
      { label: 'Headsetuttag', value: '3.5 mm stereojack' },
      { label: 'Skick', value: 'Mycket fint skick / Nyuppgraderad med TMR' }
    ],
    images: [
      '/img/products/171/PXL_20260925_160451227.MP.jpg',
      '/img/products/171/PXL_20260925_160504367.MP.jpg',
      '/img/products/171/PXL_20260925_160519071.MP.jpg',
      '/img/products/171/PXL_20260925_160526633.MP.jpg',
      '/img/products/171/PXL_20260925_154715435.MP.jpg'
    ]
  },

  // --- 173: PS5 DualSense Midnight Black #173 ---
  {
    slug: 'ps5-dualsense-midnight-black-tmr-173',
    title: 'Sony PS5 DualSense – Midnight Black – TMR-Joysticks (#173)',
    price: 599,
    category: 'kontroller',
    status: 'in_stock',
    badge: '🧲 TMR Elektromagnetisk',
    condition: 'Professionellt renoverad & TMR-uppgraderad',
    warranty: '6 månaders full funktionsgaranti från mkFix',
    shortDescription: 'Stilren svart PS5 DualSense (#173) utrustad med elektromagnetiska K-Silver TMR-joysticks. Sluta oroa dig för stick drift och dominera i alla spel!',
    description: [
      'En helsvart PlayStation 5 DualSense i läcker Midnight Black-design (märkt #173), förädlad i verkstaden med marknadens ledande TMR-sensorer.',
      'De sårbara originalpotentiometrarna har lötts loss och ersatts av K-Silver TMR-moduler. Genom kvantmekanisk resistansavläsning i magnetfält elimineras mekaniskt slitage helt.',
      'Alla avancerade PS5-funktioner är 100% intakta: haptisk feedback, adaptiva triggers och inbyggd mikrofon. Hårdvarukalibrerad för minimal dödzon och hög stabilitet.'
    ],
    features: [
      'Splitternya K-Silver TMR elektromagnetiska joysticks',
      'Hårdvarukalibrerad och testad i gamepad-mjukvara (11.97% / 12.17%)',
      'Original haptisk feedback och adaptiva triggers fullt bevarade',
      'Trådlös Bluetooth & USB-C anslutning',
      'Testad och kvalitetssäkrad i Malmö-verkstaden',
      '6 månaders full funktionsgaranti från mkFix'
    ],
    specs: [
      { label: 'Plattform', value: 'PlayStation 5, PC, Mac, iOS, Android' },
      { label: 'Sensor-teknik', value: 'K-Silver TMR (Tunneling Magnetoresistive)' },
      { label: 'Färg', value: 'Midnight Black (#173)' },
      { label: 'Anslutning', value: 'USB-C & Bluetooth 5.1' },
      { label: 'Kalibrering', value: '11.97% vänster / 12.17% höger felmarginal' },
      { label: 'Skick', value: 'Mycket fint skick / Nyuppgraderad med TMR' }
    ],
    images: [
      '/img/products/173/PXL_20260925_173422314.MP.jpg',
      '/img/products/173/PXL_20260925_173428011.MP.jpg',
      '/img/products/173/PXL_20260925_173432273.MP.jpg',
      '/img/products/173/PXL_20260925_173440095.MP.jpg',
      '/img/products/173/PXL_20260925_172456805.MP.jpg',
      '/img/products/173/Screenshot 2026-09-25 193548.png'
    ]
  },

  // --- 174: PS5 DualSense White #174 ---
  {
    slug: 'ps5-dualsense-white-tmr-174',
    title: 'Sony PS5 DualSense – Original Vit – TMR-Joysticks (#174)',
    price: 599,
    category: 'kontroller',
    status: 'in_stock',
    badge: '🧲 TMR Elektromagnetisk',
    condition: 'Professionellt renoverad & TMR-uppgraderad',
    warranty: '6 månaders full funktionsgaranti från mkFix',
    shortDescription: 'Klassisk vit PS5 DualSense (#174) med elektromagnetiska TMR-sensorer och utmärkt kalibrering (9.4% / 9.6%). Glöm stick drift för gott!',
    description: [
      'Original PlayStation 5 DualSense i klassiskt vit/svart tvåtonat utförande (inventarienummer #174).',
      'Uppgraderad med K-Silver TMR-joysticks som ger silkeslen styrning och garanterat skydd mot stick drift. Kalibrerad i testrigg till imponerande under 10% felmarginal på båda spakar.',
      'Levereras helservad med perfekt motstånd i spakarna och full funktionalitet i alla adaptiva trigger-lägen.'
    ],
    features: [
      'TMR-teknik för evig hållbarhet och noll spakdrift',
      'Högkalibrerad till 9.40% / 9.61% felmarginal',
      'Full haptik, gyro, mikrofon och adaptiva triggers',
      'Nyrengjorda knappsatser och greppytor',
      '6 månaders full funktionsgaranti från mkFix'
    ],
    specs: [
      { label: 'Plattform', value: 'PlayStation 5, PC, Mac, iOS, Android' },
      { label: 'Sensor-teknik', value: 'K-Silver TMR (Tunneling Magnetoresistive)' },
      { label: 'Färg', value: 'Original Vit / Svart (#174)' },
      { label: 'Anslutning', value: 'USB-C & Bluetooth' },
      { label: 'Kalibrering', value: '9.40% vänster / 9.61% höger felmarginal' },
      { label: 'Skick', value: 'Toppskick / TMR-customiserad' }
    ],
    images: [
      '/img/products/174/PXL_20260926_185814334.MP.jpg',
      '/img/products/174/PXL_20260926_185823153.MP.jpg',
      '/img/products/174/PXL_20260926_185827923.MP.jpg',
      '/img/products/174/PXL_20260926_185835076.MP.jpg',
      '/img/products/174/PXL_20260926_185029564.jpg',
      '/img/products/174/Screenshot 2026-09-26 205945.png'
    ]
  },

  // --- 201: PS5 DualSense White #201 ---
  {
    slug: 'ps5-dualsense-white-tmr-201',
    title: 'Sony PS5 DualSense – Original Vit – TMR-Joysticks (#201)',
    price: 599,
    category: 'kontroller',
    status: 'in_stock',
    badge: '🧲 TMR Elektromagnetisk',
    condition: 'Professionellt renoverad & TMR-uppgraderad',
    warranty: '6 månaders full funktionsgaranti från mkFix',
    shortDescription: 'Klassisk vit PS5 DualSense (#201) med splitternya TMR-joysticks och suverän kalibrering (8.7% / 8.5%). Byggd för att hålla i åratal!',
    description: [
      'Original PlayStation 5 DualSense i vitt utförande (#201 i inventariet), förädlad i verkstaden med elektromagnetiska TMR-spakar.',
      'Med 8.7% och 8.5% felmarginal i kalibreringstestet får du en kontroller som reagerar blixtsnabbt med perfekt centreringsrespons och helt utan dödzonsglapp.',
      'Fullständig service har genomförts på hela enheten. Levereras rengjord, testad och redo för tusentals timmars intensiv gaming.'
    ],
    features: [
      'Avancerade K-Silver TMR-sensorer utan mekanisk friktion',
      'Finjusterad hårdvara med 8.7% / 8.5% felmarginal',
      'Alla originalfunktioner intakta: haptik, mikrofon och triggers',
      'Garanterad immunitet mot spakdrift',
      '6 månaders full funktionsgaranti från mkFix'
    ],
    specs: [
      { label: 'Plattform', value: 'PlayStation 5, PC, Mac, iOS, Android' },
      { label: 'Sensor-teknik', value: 'K-Silver TMR (Tunneling Magnetoresistive)' },
      { label: 'Färg', value: 'Original Vit / Svart (#201)' },
      { label: 'Anslutning', value: 'USB-C & Bluetooth' },
      { label: 'Kalibrering', value: '8.7% vänster / 8.5% höger felmarginal' },
      { label: 'Skick', value: 'Toppskick / TMR-customiserad' }
    ],
    images: [
      '/img/products/201/PXL_20261006_190115455.MP.jpg',
      '/img/products/201/PXL_20261006_190124086.MP.jpg',
      '/img/products/201/PXL_20261006_190129185.MP.jpg',
      '/img/products/201/PXL_20261006_190137220.MP.jpg',
      '/img/products/201/PXL_20261006_175243372.MP.jpg',
      '/img/products/201/Screenshot 2026-10-06 205440.png'
    ]
  },

  //TODO : 
  // Lägg till
  // - ps5, ps4, xbox one/sieries joysticks. 
  // - switch joysticks. 
  // - annar!

  // {
  //   slug: 'k-silver-tmr-joystick-par',
  //   title: 'K-Silver TMR Joysticks för PS5 / PS4 / Xbox (2-pack)',
  //   price: 149,
  //   category: 'reservdelar',
  //   status: 'in_stock',
  //   badge: '🔧 Gör det själv',
  //   condition: 'Fabriksnya komponenter',
  //   warranty: 'Funktionsgaranti vid mottagande',
  //   shortDescription: 'Original K-Silver TMR joysticks för dig som löder själv. Den bästa lösningen mot stick drift på marknaden.',
  //   description: [
  //     'Ett par (2 st) K-Silver TMR analoga sensor-joysticks för mikrolödning. Passar DualSense (PS5), DualShock 4 samt Xbox Series & One kontroller.',
  //     'TMR-tekniken ger ännu högre precision och lägre energiförbrukning än traditionell Hall Effect, med samma mekaniska motstånd och feeling som original.',
  //     'Observera: Kräver lödkunskap och kalibrering efter installation.'
  //   ],
  //   features: [
  //     '2 st äkta K-Silver TMR sensorer ingår',
  //     'Perfekt passform för PS5, PS4 och Xbox Series',
  //     'Garanterat fria från stick drift',
  //     'Vi bistår gärna med tips och kalibreringslänkar'
  //   ],
  //   specs: [
  //     { label: 'Antal', value: '2 st (1 par)' },
  //     { label: 'Typ', value: 'TMR Analog Joystick' },
  //     { label: 'Resistans', value: '2.1k - 2.3k Ohm nominal' },
  //     { label: 'Kompatibilitet', value: 'PS5 (BDM-010-050), PS4, Xbox Series X/S' }
  //   ],
  //   images: [
  //     '/img/2026/0505/tmr 5.jpg',
  //     '/img/2026/0405/joystick swap.jpg'
  //   ]
  // },

  // {
  //   slug: 'cartridge-sparbatterier-cr2025-cr1616',
  //   title: 'Sparbatterier med Lödöron för Game Boy & Pokémon (5-pack)',
  //   price: 99,
  //   category: 'reservdelar',
  //   status: 'in_stock',
  //   badge: '💾 Rädda din sparfil',
  //   condition: 'Nya färska celler (3V)',
  //   warranty: 'Håller i 15-20 år',
  //   shortDescription: 'Fabriksnya CR2025 och CR1616 litiumbatterier med punktsvetsade stift för Game Boy, GBA och SNES kassetter.',
  //   description: [
  //     'Klassiska Game Boy- och Pokémon-spel (Red, Blue, Gold, Silver, Crystal, Ruby, Sapphire) tappar förmågan att spara spelet när det interna batteriet dör.',
  //     'Dessa batterier har fabriksmonterade och punktsvetsade lödstift som passar perfekt i kassetternas kretskort utan att skada banorna.',
  //     'Välj mellan CR2025 (Game Boy/Color/SNES) eller CR1616 (Game Boy Advance). Levereras i 5-pack.'
  //   ],
  //   features: [
  //     '5 st fabriksnya 3V litiumceller med stift',
  //     'Korrekt polaritet och exakt stiftavstånd för Nintendo-kassetter',
  //     'Minst 10-15 års batteritid för dina sparfiler'
  //   ],
  //   specs: [
  //     { label: 'Spänning', value: '3.0 Volt' },
  //     { label: 'Storlekar', value: 'CR2025 / CR1616 med lödstift' },
  //     { label: 'Kompatibilitet', value: 'Game Boy, Game Boy Color, Game Boy Advance, SNES, N64' }
  //   ],
  //   images: [
  //     '/img/2026/0526/20260521_122446.jpg',
  //     '/img/2026/0526/20260521_122549.jpg'
  //   ]
  // }
];

// Helper functions för att hämta produkter
export function getAllProducts(): Product[] {
  return products;
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: ProductCategory): Product[] {
  return products.filter((p) => p.category === category);
}

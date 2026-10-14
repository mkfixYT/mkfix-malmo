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

  {
    slug: 'xbox-360-wireless-black-HE-205',
    title: 'Xbox 360 Trådlös Handkontroll – Svart – Hall Effect (#205)',
    price: 399,
    category: 'kontroller',
    status: 'in_stock',
    badge: '⚡ Retro med Hall Effect',
    condition: 'Professionellt renoverad & Hall Effect-uppgraderad',
    warranty: '6 månaders full funktionsgaranti från mkFix',
    shortDescription: 'Äkta retrokänsla med modern precision! Klassisk svart trådlös Xbox 360-kontroll (#205) helrenoverad och uppgraderad med Hall Effect-spakar. Perfekt cirkuläritet och noll stick drift.',
    description: [
      'Ge ditt Xbox 360-spelande nytt liv med en äkta originalkontroll som presterar bättre än när den rullade av fabriksbandet! Denna kontroll (#205) har fått båda sina analogspakar utbytta mot moderna Hall Effect-sensorer.',
      'Hall Effect-tekniken använder magnetfält istället för kolbanor vilket eliminerar slitage och ger överlägsen precision i klassiker som Halo 3, Gears of War och Forza Motorsport.',
      'Knappmembran har inspekterats och spakarna är hårdvarukalibrerade till enastående precision i testbänk.'
    ],
    features: [
      'Dubbla Hall Effect magnetiska sensorer installerade',
      'Hårdvarukalibrerad till 9.4% / 11.2% felmarginal',
      'Inspektion av kretskort',
      'Perfekt taktil känsla i knappar, triggers och d-pad',
      'Kompatibel med alla Xbox 360-modeller och PC (via trådlös adapter)',
      '6 månaders full funktionsgaranti från mkFix'
    ],
    specs: [
      { label: 'Plattform', value: 'Xbox 360, PC (kräver trådlös USB-adapter)' },
      { label: 'Sensor-teknik', value: 'Hall Effect' },
      { label: 'Modell', value: 'Microsoft Xbox 360 Wireless (#205)' },
      { label: 'Färg', value: 'Klassisk Svart' },
      { label: 'Kalibrering', value: '9.4% vänster / 11.2% höger felmarginal' },
      { label: 'Batterifack', value: 'Original AA-batterihållare ingår' },
      { label: 'Skick', value: 'Renoverad originalkontroll / Hall Effect-uppgraderad' }
    ],
    images: [
      '/img/products/205/PXL_20261013_075713885.MP.jpg',
      '/img/products/205/PXL_20261013_075720125.MP.jpg',
      '/img/products/205/PXL_20261013_075725987.MP.jpg',
      '/img/products/205/PXL_20261013_075735445.MP.jpg',
      '/img/products/205/PXL_20261013_075852365.MP.jpg',
      '/img/products/205/PXL_20261012_192015532.MP.jpg',
      '/img/products/205/Screenshot 2026-10-13 100205.png'
    ]
  },

  // --- 189: PS5 DualSense White #189 ---
  {
    slug: 'ps5-dualsense-white-tmr-189',
    title: 'Sony PS5 DualSense – Original Vit – TMR-Joysticks (#189)',
    price: 599,
    category: 'kontroller',
    status: 'in_stock',
    badge: '🧲 TMR Elektromagnetisk',
    condition: 'Professionellt renoverad & TMR-uppgraderad',
    warranty: '6 månaders full funktionsgaranti från mkFix',
    shortDescription: 'Klassisk vit PS5 DualSense (#189) med splitternya TMR-joysticks och suverän kalibrering (8.7% / 8.5%). Byggd för att hålla i åratal!',
    description: [
      'Original PlayStation 5 DualSense i vitt utförande (#189 i inventariet), förädlad i verkstaden med elektromagnetiska TMR-spakar.',
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
      { label: 'Kalibrering', value: '8.7% vänster / 9.4% höger felmarginal' },
      { label: 'Skick', value: 'Toppskick / TMR-customiserad' }
    ],
    images: [
      '/img/products/189/PXL_20261014_161621778.MP.jpg',
      '/img/products/189/PXL_20260925_172456805.MP.jpg',
      '/img/products/189/PXL_20261014_161627894.MP.jpg',
      '/img/products/189/PXL_20261014_161633996.MP.jpg',
      '/img/products/189/PXL_20261014_161638851.MP.jpg',
      '/img/products/189/Screenshot 2026-10-14 181418.png',
    ]
  },

  // --- Reservdel 1: K-Silver PS5 TMR Joysticks (2-pack) ---
  {
    slug: 'k-silver-ps5-tmr-joysticks',
    title: 'K-Silver TMR Joysticks för PlayStation 5 DualSense (2-pack)',
    price: 120,
    category: 'reservdelar',
    status: 'in_stock',
    badge: '🧲 TMR Elektromagnetisk',
    condition: 'Fabriksnya komponenter (OEM-kvalitet)',
    warranty: 'Funktionsgaranti från mkFix',
    shortDescription: 'Ett par (2 st) original K-Silver TMR elektromagnetiska analoga joysticks för PS5 DualSense. Den bästa och mest permanenta lösningen mot stick drift.',
    description: [
      'Splitternya K-Silver TMR-joysticks (Tunneling Magnetoresistive) för PlayStation 5 DualSense-kontroller. TMR-tekniken använder magnetiska fält istället för fysiska kolbanor, vilket gör spakarna helt immuna mot mekaniskt slitage och stick drift.',
      'TMR är den senaste generationens magnetiska sensorteknik som ger snabbare sampling, lägre strömförbrukning och ännu bättre cirkularitet än konventionella Hall Effect-sensorer.',
      'Passar samtliga DualSense-moderkortsrevisioner (BDM-010, BDM-020, BDM-030, BDM-040 och BDM-050). Kräver avlödning av gamla spakar, mikrolödning och mjukvarukalibrering. Önskar du hjälp med professionell montering i Malmö-verkstaden? Kontakta oss!'
    ],
    features: [
      '2 st (1 par) äkta K-Silver TMR-joystickmoduler',
      'Permanent lösning mot mekanisk stick drift och slitage',
      'Optimerad motståndskurva för DualSense',
      'Behåller originalets följsamma och taktila spakkänsla',
      'Kompatibel med alla DualSense BDM-revisioner',
      'Kan monteras av mkFix i Malmö om du inte vill löda själv'
    ],
    specs: [
      { label: 'Antal', value: '2 st (1 par)' },
      { label: 'Sensorteknik', value: 'TMR (Tunneling Magnetoresistive)' },
      { label: 'Varumärke', value: 'K-Silver' },
      { label: 'Kompatibilitet', value: 'PS5 DualSense (BDM-010, 020, 030, 040, 050)' },
      { label: 'Installation', value: 'Kräver mikrolödning & kalibrering' }
    ],
    images: [
      '/img/products/parts/K-silver Playstation 5 TMR joysticks/PXL_20261012_161021252.MP.jpg'
    ]
  },

  // --- Reservdel 2: K-Silver PS4 TMR Joysticks (2-pack) ---
  {
    slug: 'k-silver-ps4-tmr-joysticks',
    title: 'K-Silver TMR Joysticks för PlayStation 4 DualShock 4 (2-pack)',
    price: 120,
    category: 'reservdelar',
    status: 'in_stock',
    badge: '🧲 TMR Elektromagnetisk',
    condition: 'Fabriksnya komponenter (OEM-kvalitet)',
    warranty: 'Funktionsgaranti från mkFix',
    shortDescription: 'Ett par (2 st) K-Silver TMR elektromagnetiska joysticks för Sony DualShock 4 (PS4). Byt ut slitna analoga spakar och slipp drift för all framtid.',
    description: [
      'Uppgradera din DualShock 4 med marknadens modernaste joystickteknik! K-Silver TMR (Tunneling Magnetoresistive) ersätter de sårbara kolbanorna med beröringsfria magnetiska sensorer.',
      'TMR-tekniken levererar exceptionell precision i mikrorörelser och eliminerar det klassiska problemet där slitna potentiometrar börjar vandra eller rycka.',
      'Passar alla versioner av DualShock 4 (både tidiga V1 och senare V2). Kräver lödning och kalibrering. Vill du ha hjälp med installationen? mkFix monterar och kalibrerar gärna i verkstaden!'
    ],
    features: [
      '2 st (1 par) K-Silver TMR-joysticks för PS4',
      'Helt kontaktlös avläsning utan mekanisk friktion',
      'Fullständigt immun mot stick drift',
      'Passar DualShock 4 V1 (JDM-001 till JDM-030) och V2 (JDM-040 till JDM-055)',
      'Perfekt centreringsrespons och distinkt klickknapp (L3/R3)'
    ],
    specs: [
      { label: 'Antal', value: '2 st (1 par)' },
      { label: 'Sensorteknik', value: 'TMR (Tunneling Magnetoresistive)' },
      { label: 'Varumärke', value: 'K-Silver' },
      { label: 'Kompatibilitet', value: 'Sony DualShock 4 (V1 & V2)' },
      { label: 'Installation', value: 'Kräver mikrolödning & kalibrering' }
    ],
    images: [
      '/img/products/parts/K-silver Playstation 4 TMR joysticks/PXL_20261012_161044263.MP.jpg'
    ]
  },

  // --- Reservdel 3: K-Silver Xbox Series & Xbox One TMR Joysticks (2-pack) ---
  {
    slug: 'k-silver-xbox-tmr-joysticks',
    title: 'K-Silver TMR Joysticks för Xbox Series X/S & Xbox One (2-pack)',
    price: 120,
    category: 'reservdelar',
    status: 'in_stock',
    badge: '🧲 TMR Elektromagnetisk',
    condition: 'Fabriksnya komponenter (OEM-kvalitet)',
    warranty: 'Funktionsgaranti från mkFix',
    shortDescription: 'Ett par (2 st) K-Silver TMR elektromagnetiska analoga joysticks för Xbox Series X/S och Xbox One kontroller. Gör din handkontroll helt fri från spakdrift.',
    description: [
      'Original K-Silver TMR elektromagnetiska joysticks anpassade för Microsoft Xbox Series X/S och Xbox One trådlösa handkontroller. Sluta bekymra dig för stick drift en gång för alla.',
      'TMR-tekniken mäter magnetiska motståndsförändringar istället för att skrapa mekaniska kolbanor. Resultatet är extrem livslängd, hög precision och minimal dödzon.',
      'Kompatibel med Xbox One (Model 1537, 1697, 1708) samt Xbox Series X/S (Model 1914). Kräver mikrolödning. Finns även som färdig monteringstjänst hos oss på mkFix i Malmö.'
    ],
    features: [
      '2 st (1 par) K-Silver TMR-joystickmoduler',
      'Speciellt anpassade för Xbox-kretskort och resistansvärden',
      'Eliminerar stick drift permanent',
      'Optimal centreringsrespons och hållbar klickbrytare',
      'Kompatibel med Xbox Series och Xbox One handkontroller'
    ],
    specs: [
      { label: 'Antal', value: '2 st (1 par)' },
      { label: 'Sensorteknik', value: 'TMR (Tunneling Magnetoresistive)' },
      { label: 'Varumärke', value: 'K-Silver' },
      { label: 'Kompatibilitet', value: 'Xbox Series X/S (1914), Xbox One (1537, 1697, 1708)' },
      { label: 'Installation', value: 'Kräver mikrolödning & kalibrering' }
    ],
    images: [
      '/img/products/parts/K-silver Xbox One or series TMR joystick/PXL_20261012_161108685.MP.jpg'
    ]
  },

  // --- Reservdel 4: K-Silver TMR Joystick för Nintendo Switch Joy-Con & Lite ---
  {
    slug: 'k-silver-nintendo-switch-joycon-tmr',
    title: 'K-Silver TMR Joystick Modul för Nintendo Switch Joy-Con & Lite',
    price: 80,
    category: 'reservdelar',
    status: 'in_stock',
    badge: '🧲 TMR Elektromagnetisk',
    condition: 'Fabriksny komponent',
    warranty: 'Funktionsgaranti från mkFix',
    shortDescription: 'Elektromagnetisk K-Silver TMR joystick-modul för Nintendo Switch Joy-Con och Switch Lite. Helt lödfri installation – den ultimata kuren mot Joy-Con drift!',
    description: [
      'Den permanenta lösningen på Nintendos mest ökända problem: Joy-Con stick drift! K-Silver TMR joystickmodul för Nintendo Switch ersätter de ömtåliga originalspakarna med beröringsfri magnetisk TMR-teknik.',
      'Eftersom avläsningen sker magnetiskt utan fysisk nötning kommer spaken aldrig att börja drifta. Den ger dessutom samma mjuka rörelse, perfekta klick och exakta styrning som originalet.',
      'Ingen lödning krävs! Modulen ansluts med flatkabel (ribbon cable) och skruvas fast på plats. Kalibreras enkelt via Nintendos inbyggda systeminställningar. Passar både vänster och höger Joy-Con samt Nintendo Switch Lite.'
    ],
    features: [
      '1 st K-Silver TMR joystickmodul med flatkabel och svart gummihatt',
      'Elektromagnetisk TMR-sensor – 100% fri från Joy-Con drift',
      'Lödfri installation (plug-and-play via flexkabel)',
      'Passar vänster och höger Joy-Con samt Switch Lite',
      'Enkel kalibrering direkt i konsolens inställningsmeny'
    ],
    specs: [
      { label: 'Typ', value: 'Komplett joystickmodul med spakhatt & flatkabel' },
      { label: 'Sensorteknik', value: 'TMR (Tunneling Magnetoresistive)' },
      { label: 'Varumärke', value: 'K-Silver' },
      { label: 'Kompatibilitet', value: 'Nintendo Switch Joy-Con (L/R), Nintendo Switch Lite' },
      { label: 'Installation', value: 'Lödfri (tri-wing & stjärnmejsel behövs)' }
    ],
    images: [
      '/img/products/parts/Nintendo switch k-silver TMR joycons/PXL_20261012_161639434.MP.jpg',
      '/img/products/parts/Nintendo switch k-silver TMR joycons/PXL_20261012_161645605.MP.jpg'
    ]
  },

  // --- Reservdel 5: Analoga Joysticks för PlayStation 1, PS2 & Xbox Original (2-pack) ---
  {
    slug: 'retro-joysticks-ps1-ps2-xbox-original',
    title: 'Analoga Joysticks för PlayStation 1, PS2 & Xbox Original (2-pack)',
    price: 99,
    category: 'reservdelar',
    status: 'in_stock',
    badge: '⚡ Retro Reservdel',
    condition: 'Fabriksnya komponenter',
    warranty: 'Funktionsgaranti från mkFix',
    shortDescription: 'Ett par (2 st) högkvalitativa analoga potentiometerspakar för klassiska retrokontroller: Sony PS1 DualShock, PS2 DualShock 2 och Microsoft Xbox Original.',
    description: [
      'Rädda dina klassiska retrokontroller! Med tiden blir analoga spakar på PS1, PS2 och första generationens Xbox slappa, glappa eller drabbas av oregelbunden signalrespons.',
      'Dessa fabriksnya analoga joystickmekanismer har korrekta motståndsvärden och spänstiga returfjädrar som återställer kontrollernas respons till precis som de kändes när de packades upp ur kartongen på 90- och 00-talet.',
      'Perfekt passform för genomhålslödning på kretskortet. Passar Sony PlayStation 1 DualShock, PlayStation 2 DualShock 2 samt original Microsoft Xbox (både Duke och Controller S).'
    ],
    features: [
      '2 st (1 par) analoga joystickmekanismer för retrokontroller',
      'Högkvalitativa potentiometrar med korrekt resistans och kurva',
      'Kraftig centreringsfjäder som eliminerar glapp och dödzoner',
      'Taktil och distinkt L3/R3-klickfunktion',
      'Passar PS1 DualShock, PS2 DualShock 2 och Xbox Original'
    ],
    specs: [
      { label: 'Antal', value: '2 st (1 par)' },
      { label: 'Typ', value: 'Analog potentiometerspak' },
      { label: 'Kompatibilitet', value: 'Sony PS1 DualShock, PS2 DualShock 2, Xbox Original (Duke / S)' },
      { label: 'Installation', value: 'Kräver lödning (genomhålslödning)' }
    ],
    images: [
      '/img/products/parts/Playstation 1 playstation 2 and xbox original joysticks/PXL_20261012_161545078.MP.jpg'
    ]
  },

  // --- Reservdel 6: Thumbsticks / Spakhattar för PlayStation 1 & PlayStation 2 – Mörkgrå (2-pack) ---
  {
    slug: 'thumbcaps-ps1-ps2',
    title: 'Thumbsticks / Spakhattar för PlayStation 1 & PS2 – Mörkgrå (2-pack)',
    price: 39,
    category: 'reservdelar',
    status: 'in_stock',
    badge: '🕹️ Spakhattar Retro',
    condition: 'Fabriksnya komponenter',
    warranty: 'Passformsgaranti från mkFix',
    shortDescription: 'Ett par (2 st) klassiska mörkgrå spakhattar för Sony PlayStation 1 och PlayStation 2 DualShock-kontroller. Klassisk konvex rundad kupol med knottrigt grepp.',
    description: [
      'Har gummit på dina gamla PS1- eller PS2-spakar blivit klibbigt, sprucket eller nedslitet efter åratal av intensivt spelande? Dessa fabriksnya spakhattar ger kontrollen ett rejält lyft.',
      'Tillverkade med originalmått och den klassiska konvexa (utåtbuktande) formen med knottrig texturyta som kännetecknar Sonys ikoniska retrokontroller.',
      'Enkla att byta: öppna kontrollens hölje och tryck fast de nya spakhattarna direkt på joystickaxlarna. Ingen lödning behövs.'
    ],
    features: [
      '2 st (1 par) spakhattar i klassisk mörkgrå retrolansering',
      'Autentisk konvex formfaktor med halkfri knottrad yta',
      'Exakt OEM-fattning för standard joystickaxlar',
      'Passar PlayStation 1 DualShock och PlayStation 2 DualShock 2',
      'Enkel montering utan lödning'
    ],
    specs: [
      { label: 'Antal', value: '2 st (1 par)' },
      { label: 'Färg', value: 'Mörkgrå / Koksgrå (Original-look)' },
      { label: 'Profil', value: 'Konvex kupol med texturerat grepp' },
      { label: 'Kompatibilitet', value: 'Sony PS1 DualShock, Sony PS2 DualShock 2' },
      { label: 'Installation', value: 'Tryckmontering på spakaxel' }
    ],
    images: [
      '/img/products/parts/Playstation 1 playstation 2 thumbcaps/PXL_20261012_161605160.MP.jpg'
    ]
  },

  // --- Reservdel 7: Thumbsticks / Spakhattar för PlayStation 4 DualShock 4 – Svart (2-pack) ---
  {
    slug: 'thumbcaps-ps4-dualshock-4',
    title: 'Thumbsticks / Spakhattar för PlayStation 4 DualShock 4 – Svart (2-pack)',
    price: 39,
    category: 'reservdelar',
    status: 'in_stock',
    badge: '🕹️ Spakhattar PS4',
    condition: 'Fabriksnya komponenter',
    warranty: 'Passformsgaranti från mkFix',
    shortDescription: 'Ett par (2 st) svarta spakhattar för Sony PlayStation 4 DualShock 4. Skålad mitt med mönstrad greppkant i slitstark gummiblandning.',
    description: [
      'Ett mycket vanligt problem på PS4 DualShock 4 är att originalgummit på spakarna slits sönder, spricker eller fläks av vid tummarna. Här är den perfekta och prisvärda ersättningen.',
      'Dessa spakhattar har Sonys karakteristiska konkava (skålade) centrum med en förhöjd greppkant runt om, vilket ger suveränt fäste och precision i alla typer av spel.',
      'Passar alla modeller av DualShock 4 (både tidiga V1 och senare V2). Trycks smidigt på plats på joystickaxeln.'
    ],
    features: [
      '2 st (1 par) svarta spakhattar för PS4 DualShock 4',
      'Slitstark gummiblandning med högt grepp och lång livslängd',
      'Klassisk konkav design med markerad greppkant',
      'OEM-precision på infästningen',
      'Passar DualShock 4 V1 & V2'
    ],
    specs: [
      { label: 'Antal', value: '2 st (1 par)' },
      { label: 'Färg', value: 'Matt svart' },
      { label: 'Profil', value: 'Konkav med texturerad greppkant' },
      { label: 'Kompatibilitet', value: 'PlayStation 4 DualShock 4 (alla versioner)' },
      { label: 'Installation', value: 'Push-fit montering på spakaxeln' }
    ],
    images: [
      '/img/products/parts/Playstation 4 thumbcaps/PXL_20261012_161357051.MP.jpg'
    ]
  },

  // --- Reservdel 8: Thumbsticks / Spakhattar för PlayStation 5 DualSense – Svart (2-pack) ---
  {
    slug: 'thumbcaps-ps5-dualsense',
    title: 'Thumbsticks / Spakhattar för PlayStation 5 DualSense – Svart (2-pack)',
    price: 39,
    category: 'reservdelar',
    status: 'in_stock',
    badge: '🕹️ Spakhattar PS5',
    condition: 'Fabriksnya komponenter',
    warranty: 'Passformsgaranti från mkFix',
    shortDescription: 'Ett par (2 st) originaldesignade spakhattar för Sony PlayStation 5 DualSense. Perfekt passform, mikrotexturerat grepp och OEM-kvalitet.',
    description: [
      'Fräscha upp din PlayStation 5 DualSense med nya spakhattar! Oavsett om gummit börjat slitas ner, blivit blankt eller om du byter joysticks och vill ha fabriksfräsch känsla är detta det rätta valet.',
      'Formgjutna med exakt samma profil, höjd och micro-texture som Sonys originalhattar för att ge maximal ergonomi och komfort under långa spelsessioner.',
      'Passar samtliga DualSense-kontroller på marknaden (alla BDM-modeller).'
    ],
    features: [
      '2 st (1 par) svarta spakhattar för PS5 DualSense',
      'OEM-profil med mikrotextur för optimalt tumgrepp',
      'Högkvalitativ gummikant som motstår slitage och handsvett',
      'Passar perfekt på K-Silver TMR, Hall Effect och originalspakar',
      'Enkel montering vid renovering eller underhåll'
    ],
    specs: [
      { label: 'Antal', value: '2 st (1 par)' },
      { label: 'Färg', value: 'Svart' },
      { label: 'Profil', value: 'DualSense OEM-profil med texturerad ring' },
      { label: 'Kompatibilitet', value: 'PlayStation 5 DualSense (alla modeller)' },
      { label: 'Installation', value: 'Tryckmontering på spakaxel' }
    ],
    images: [
      '/img/products/parts/Playstation 5 thumbcaps/PXL_20261012_161200488.MP.jpg'
    ]
  },

  // --- Reservdel 9: Hall Effect Magnetiska Joysticks för Xbox 360 (2-pack) ---
  {
    slug: 'xbox-360-hall-effect-joysticks',
    title: 'Hall Effect Magnetiska Joysticks för Xbox 360 (2-pack)',
    price: 99,
    category: 'reservdelar',
    status: 'in_stock',
    badge: '🧲 Hall Effect Retro',
    condition: 'Fabriksnya komponenter',
    warranty: 'Funktionsgaranti från mkFix',
    shortDescription: 'Ett par (2 st) moderna Hall Effect magnetiska analoga joysticks för Microsoft Xbox 360 kontroller. Förvandla din favoritkontroll till en driftfri precisionsmaskin.',
    description: [
      'Ge din trogna Xbox 360-kontroll evigt liv med kontaktlösa Hall Effect-sensorer! Traditionella Xbox 360-kontroller använder mekaniska potentiometrar som med åren utvecklar stick drift, dödzoner eller hackig respons.',
      'Hall Effect-tekniken läser av spakarnas position med magneter istället för slitande metallborstar mot kolbanor. Det ger överlägsen precision, exceptionell hållbarhet och silkesmjuk rörelse.',
      'Passar både trådlösa och trådbundna Xbox 360-originalkontroller. Kräver mikrolödning och kalibrering. Vi på mkFix kan självklart också utföra bytet och kalibreringen åt dig i vår Malmö-verkstad!'
    ],
    features: [
      '2 st (1 par) Hall Effect magnetiska joystickmoduler',
      'Eliminerar stick drift helt och hållet på Xbox 360',
      'Garanterar lång livslängd för retro- och speedrun-gaming',
      'Distinkt klick i spakknapparna (LS / RS)',
      'Passar alla officiella Microsoft Xbox 360-kontroller'
    ],
    specs: [
      { label: 'Antal', value: '2 st (1 par)' },
      { label: 'Sensorteknik', value: 'Hall Effect (Magnetisk kontaktlös)' },
      { label: 'Kompatibilitet', value: 'Xbox 360 Trådlös & Trådbunden kontroller' },
      { label: 'Installation', value: 'Kräver mikrolödning & kalibrering' }
    ],
    images: [
      '/img/products/parts/Xbox 360 hall effect joysticks/PXL_20261012_161137438.MP.jpg'
    ]
  },

  // --- Reservdel 10: Thumbsticks / Spakhattar för Xbox 360 – Svart (2-pack) ---
  {
    slug: 'thumbcaps-xbox-360-black',
    title: 'Thumbsticks / Spakhattar för Xbox 360 – Svart (2-pack)',
    price: 39,
    category: 'reservdelar',
    status: 'in_stock',
    badge: '🕹️ Spakhattar Xbox',
    condition: 'Fabriksnya komponenter',
    warranty: 'Passformsgaranti från mkFix',
    shortDescription: 'Ett par (2 st) svarta spakhattar för Xbox 360 med de klassiska fyra grepprickarna. Perfekt för att fräscha upp slitna eller klibbiga spakar.',
    description: [
      'Klassiska svarta spakhattar för Microsoft Xbox 360 handkontroller. Efter åratal av spelande brukar gummit på 360-spakarna nötas ner tills bara den hårda plasten återstår.',
      'Dessa nya ersättningshattar har den autentiska konkava toppen med fyra taktila grepprickar som ger det karakteristiska och fasta Xbox 360-greppet.',
      'Passar alla officiella Microsoft Xbox 360-kontroller (både svarta, färgade och specialutgåvor). Tryckmonteras direkt på joystickaxlarna.'
    ],
    features: [
      '2 st (1 par) svarta spakhattar för Xbox 360',
      'Klassisk design med de fyra upphöjda grepprickarna',
      'Fräscht grepp och behaglig gummikänsla',
      'Exakt passform på Xbox 360 joystickaxlar',
      'Enkel montering utan lödning'
    ],
    specs: [
      { label: 'Antal', value: '2 st (1 par)' },
      { label: 'Färg', value: 'Svart' },
      { label: 'Design', value: 'Konkav topp med 4 taktila grepprickar' },
      { label: 'Kompatibilitet', value: 'Microsoft Xbox 360 (Trådlös & Trådbunden)' },
      { label: 'Installation', value: 'Tryckmontering på spakaxel' }
    ],
    images: [
      '/img/products/parts/Xbox 360 thumbcaps black/PXL_20261012_161520716.MP.jpg'
    ]
  },

  // --- Reservdel 11: Thumbsticks / Spakhattar för Xbox 360 – Grå (2-pack) ---
  {
    slug: 'thumbcaps-xbox-360-gray',
    title: 'Thumbsticks / Spakhattar för Xbox 360 – Grå (2-pack)',
    price: 39,
    category: 'reservdelar',
    status: 'in_stock',
    badge: '🕹️ Spakhattar Xbox',
    condition: 'Fabriksnya komponenter',
    warranty: 'Passformsgaranti från mkFix',
    shortDescription: 'Ett par (2 st) originalgrå spakhattar för vita Xbox 360-handkontroller. Autentisk retrolook med de fyra karakteristiska grepprickarna.',
    description: [
      'Den klassiska vita Xbox 360-kontrollen kom från början med ljusgrå spakhattar. Om dina originalspakar blivit missfärgade, smutsiga eller nedslitna är dessa spakhattar den perfekta restaureringen.',
      'Exakt färgton och formfaktor som matchar originalet från Microsoft, komplett med den konkava skålningen och de fyra distinkta grepprickarna.',
      'Ger din vita eller silverfärgade Xbox 360-kontroll ett helfräscht fabriksnytt utseende och perfekt tumfäste.'
    ],
    features: [
      '2 st (1 par) ljusgrå spakhattar för Xbox 360',
      'Autentisk retrolook anpassad för vita originalkontroller',
      'Klassisk konkav skålning med fyra grepprickar',
      'Slitstark gummibelagd ovansida',
      'Exakt passform på 360-joystickmekanismer'
    ],
    specs: [
      { label: 'Antal', value: '2 st (1 par)' },
      { label: 'Färg', value: 'Ljusgrå (Original Xbox 360 White look)' },
      { label: 'Design', value: 'Konkav topp med 4 taktila grepprickar' },
      { label: 'Kompatibilitet', value: 'Microsoft Xbox 360 (Trådlös & Trådbunden)' },
      { label: 'Installation', value: 'Tryckmontering på spakaxel' }
    ],
    images: [
      '/img/products/parts/xbox 360 thumbcaps gray/PXL_20261012_161620315.MP.jpg'
    ]
  },

  // --- Reservdel 12: Thumbsticks / Spakhattar för Xbox Series X/S & Xbox One – Svart (2-pack) ---
  {
    slug: 'thumbcaps-xbox-series-xbox-one',
    title: 'Thumbsticks / Spakhattar för Xbox Series X/S & Xbox One – Svart (2-pack)',
    price: 39,
    category: 'reservdelar',
    status: 'in_stock',
    badge: '🕹️ Spakhattar Xbox',
    condition: 'Fabriksnya komponenter',
    warranty: 'Passformsgaranti från mkFix',
    shortDescription: 'Ett par (2 st) svarta spakhattar med mönstrad ytterkant för Xbox Series X/S och Xbox One kontroller. Maximalt grepp och ergonomisk precision.',
    description: [
      'Originaldesignade spakhattar för moderna Xbox-kontroller. Den räfflade greppkanten runt den skålade toppen ger optimalt fäste även under svettiga och intensiva spelmoment.',
      'Perfekt när originalgummit börjat släppa, slitits ner eller om du vill ge din Xbox One eller Series X/S-kontroll ett nytt liv i samband med joystickbyte.',
      'Kompatibel med alla Xbox One-kontroller (modell 1537, 1697, 1708) samt de senaste Xbox Series X/S-kontrollerna (modell 1914). Trycks enkelt på spakaxeln.'
    ],
    features: [
      '2 st (1 par) svarta spakhattar för Xbox Series & One',
      'Ergonomisk skålad mitt med diamantmönstrad greppkant',
      'OEM-kvalitet och slittålig gummiblandning',
      'Passar både Xbox One och Xbox Series X/S handkontroller',
      'Lätt att montera utan lödning'
    ],
    specs: [
      { label: 'Antal', value: '2 st (1 par)' },
      { label: 'Färg', value: 'Svart' },
      { label: 'Design', value: 'Skålad mitt med diamantmönstrad ytterkant' },
      { label: 'Kompatibilitet', value: 'Xbox Series X/S (1914), Xbox One (1537, 1697, 1708)' },
      { label: 'Installation', value: 'Tryckmontering på spakaxel' }
    ],
    images: [
      '/img/products/parts/Xbox series or xbox one thumbcaps/PXL_20261012_161448704.MP.jpg'
    ]
  },

  // // --- Reservdel: Sparbatterier för Game Boy & Pokémon (5-pack) ---
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

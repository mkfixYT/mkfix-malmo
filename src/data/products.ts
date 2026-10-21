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
  // --- 159: Xbox 360 Wireless Controller White #159 ---
  {
    slug: 'xbox-360-wireless-black-HE-207',
    title: 'Xbox 360 Trådlös Handkontroll – Svart – TMR (#207)',
    price: 399,
    category: 'kontroller',
    status: 'in_stock',
    badge: '⚡ Retro med Hall Effect',
    condition: 'Professionellt renoverad & Hall Effect-uppgraderad',
    warranty: '6 månaders full funktionsgaranti från mkFix',
    shortDescription: 'Äkta retrokänsla med modern precision! Klassisk svart trådlös Xbox 360-kontroll (#207) helrenoverad och uppgraderad med Hall Effect-spakar. Perfekt cirkuläritet och noll stick drift.',
    description: [
      'Ge ditt Xbox 360-spelande nytt liv med en äkta originalkontroll som presterar bättre än när den rullade av fabriksbandet! Denna kontroll (#207) har fått båda sina analogspakar utbytta mot moderna Hall Effect-sensorer.',
      'Hall Effect-tekniken använder magnetfält istället för kolbanor vilket eliminerar slitage och ger överlägsen precision i klassiker som Halo 3, Gears of War och Forza Motorsport.',
      'Knappmembran har inspekterats och spakarna är hårdvarukalibrerade i testbänk.'
    ],
    features: [
      'Dubbla Hall Effect magnetiska sensorer installerade',
      'Inspektion av kretskort',
      'Perfekt taktil känsla i knappar, triggers och d-pad',
      'Kompatibel med alla Xbox 360-modeller och PC (via trådlös adapter)',
      '6 månaders full funktionsgaranti från mkFix'
    ],
    specs: [
      { label: 'Plattform', value: 'Xbox 360, PC (kräver trådlös USB-adapter)' },
      { label: 'Sensor-teknik', value: 'Hall Effect' },
      { label: 'Modell', value: 'Microsoft Xbox 360 Wireless (#207)' },
      { label: 'Färg', value: 'Klassisk Svart' },
      { label: 'Kalibrerad', value: '✅ Ja' },
      { label: 'Batterifack', value: 'Original AA-batterihållare ingår' },
      { label: 'Skick', value: 'Renoverad originalkontroll / Hall Effect-uppgraderad' }
    ],
    images: [
      '/img/products/207/PXL_20261015_164353923.MP.jpg',
      '/img/products/207/PXL_20261015_163708027.MP.jpg',
      '/img/products/207/PXL_20261015_164405401.MP.jpg',
      '/img/products/207/PXL_20261015_164410080.MP.jpg',
      '/img/products/207/PXL_20261015_164415958.MP.jpg',
      '/img/products/207/Screenshot 2026-10-16 160153.png'
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

  // --- 174: PS5 DualSense White #174 ---
  {
    slug: 'ps5-dualsense-white-tmr-clicky-mod-174',
    title: 'Sony PS5 DualSense – Original Vit – TMR-Joysticks och clicky button mod från extreme rate (#174)',
    price: 899,
    category: 'kontroller',
    status: 'in_stock',
    badge: '🧲 TMR Elektromagnetisk',
    condition: 'Professionellt renoverad & TMR-uppgraderad',
    warranty: '6 månaders full funktionsgaranti från mkFix',
    shortDescription: 'Klassisk vit PS5 DualSense (#174) med elektromagnetiska TMR-sensorer och utmärkt kalibrering (9.4% / 9.6%). Glöm stick drift för gott!',
    description: [
      'Original PlayStation 5 DualSense i klassiskt vit/svart tvåtonat utförande (inventarienummer #174).',
      'Uppgraderad med K-Silver TMR-joysticks som ger silkeslen styrning och garanterat skydd mot stick drift. Kalibrerad i testrigg till imponerande under 10% felmarginal på båda spakar.',
      'Extremerå rate clicky button mod har installerats i denna kontroll vilket innebär att X,O,Triangle,Square knapparna har en "clicky" mekanisk känsla istället för den orginala mjuka känslan. Gäller även L1, R1, L2, R2.',
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
      { label: 'Button Mod', value: 'ExtremeRate Clicky Button Mod' },
      { label: 'Färg', value: 'Original Vit / Svart (#174)' },
      { label: 'Anslutning', value: 'USB-C & Bluetooth' },
      { label: 'Kalibrering', value: '9.40% vänster / 9.61% höger felmarginal' },
      { label: 'Skick', value: 'Toppskick / TMR-customiserad' }
    ],
    images: [
      '/img/products/174/PXL_20260926_185814334.MP.jpg',
      '/img/products/174/663186886_f8e3146a-865b-4b0b-83a0-356c72d93667.webp',
      '/img/products/174/663186886_abd45e11-77d2-446f-baa1-4756ee8bfc2a.webp',
      '/img/products/174/PXL_20260926_185823153.MP.jpg',
      '/img/products/174/PXL_20260926_185827923.MP.jpg',
      '/img/products/174/PXL_20260926_185835076.MP.jpg',
      '/img/products/174/PXL_20260926_185029564.jpg',
      '/img/products/174/Screenshot 2026-09-26 205945.png'
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

  // --- 201: PS5 DualSense White #201 ---
  {
    slug: 'ps5-dualsense-white-tmr-188',
    title: 'Sony PS5 DualSense – Original Vit – TMR-Joysticks (#188)',
    price: 599,
    category: 'kontroller',
    status: 'in_stock',
    badge: '🧲 TMR Elektromagnetisk',
    condition: 'Professionellt renoverad & TMR-uppgraderad',
    warranty: '6 månaders full funktionsgaranti från mkFix',
    shortDescription: 'Klassisk vit PS5 DualSense (#188) med splitternya TMR-joysticks och suverän kalibrering (8.7% / 8.5%). Byggd för att hålla i åratal!',
    description: [
      'Original PlayStation 5 DualSense i vitt utförande (#188 i inventariet), förädlad i verkstaden med elektromagnetiska TMR-spakar.',
      'Med 8.7% och 8.5% felmarginal i kalibreringstestet får du en kontroller som reagerar blixtsnabbt med perfekt centreringsrespons och helt utan dödzonsglapp.',
      'Fullständig service har genomförts på hela enheten. Levereras rengjord, testad och redo för tusentals timmars intensiv gaming.'
    ],
    features: [
      'Avancerade K-Silver TMR-sensorer utan mekanisk friktion',
      'Finjusterad hårdvara med 8.5% / 7.8% felmarginal',
      'Alla originalfunktioner intakta: haptik, mikrofon och triggers',
      'Garanterad immunitet mot spakdrift',
      '6 månaders full funktionsgaranti från mkFix'
    ],
    specs: [
      { label: 'Plattform', value: 'PlayStation 5, PC, Mac, iOS, Android' },
      { label: 'Sensor-teknik', value: 'K-Silver TMR (Tunneling Magnetoresistive)' },
      { label: 'Färg', value: 'Original Vit / Svart (#188)' },
      { label: 'Anslutning', value: 'USB-C & Bluetooth' },
      { label: 'Kalibrering', value: '8.5% vänster / 7.8% höger felmarginal' },
      { label: 'Skick', value: 'Toppskick / TMR-customiserad' }
    ],
    images: [
      '/img/products/188/PXL_20261014_182530473.MP.jpg',
      '/img/products/188/PXL_20261014_180214469.MP.jpg',
      '/img/products/188/PXL_20261014_182544385.MP.jpg',
      '/img/products/188/Screenshot 2026-10-14 202111.png',
      '/img/products/188/PXL_20261014_182537123.MP.jpg',
      '/img/products/188/PXL_20261014_182540402.MP.jpg'
    ]
  },

  // --- 206: PS2 DualShock 2 Satin Silver #206 ---
  {
    slug: 'ps2-dualshock-2-satin-silver-206',
    title: 'Sony PlayStation 2 DualShock 2 – Satin Silver (#206)',
    price: 399,
    category: 'kontroller',
    status: 'in_stock',
    badge: '⚡ Helrenoverad Klassiker',
    condition: 'Professionellt helrenoverad med nya komponenter',
    warranty: '6 månaders full funktionsgaranti från mkFix',
    shortDescription: 'Äkta PlayStation 2 DualShock 2 i eftertraktat Satin Silver-utförande (#206). Helrenoverad i Malmö med splitternya analoga joysticks, nya spakhattar, nytt flex-kretskort och fullständig invändig samt utvändig rengöring.',
    description: [
      'En klassisk Sony DualShock 2 i stilrent Satin Silver-utförande (#206 i vårt inventarium), professionellt genomgången och återställd till toppskick.',
      'Kontrollen har fått båda analoga joysticks utbytta mot nya precisionsmoduler med perfekt motstånd och centreringsrespons. Samtidigt har slitna spakhattar ersatts av splitternya originalprofilhattar med rent och fräscht grepp.',
      'För att säkerställa 100% pålitlig kontakt i alla knappsatser och tryckkänsliga knappar har ett helt nytt flex-kretskort (Flex PCB) monterats. Hela kontrollen har dessutom plockats isär, rengjorts grundligt både in- och utvändigt samt hårdvarutestats inför försäljning.'
    ],
    features: [
      'Splitternya analoga joystickmoduler installerade',
      'Nytt flex-kretskort (Flex PCB) för garanterad knapprespons',
      'Nya fräscha spakhattar (thumbcaps) med optimalt grepp',
      'Total invändig och utvändig rengöring av skal och knappar',
      'Full vibrationsfeedback och tryckkänsliga analoga knappar',
      'Kompatibel med PlayStation 2 samt PlayStation 1',
      '6 månaders full funktionsgaranti från mkFix'
    ],
    specs: [
      { label: 'Plattform', value: 'PlayStation 2, PlayStation 1' },
      { label: 'Modell', value: 'Sony DualShock 2 (SCPH-10010, #206)' },
      { label: 'Färg', value: 'Satin Silver' },
      { label: 'Anslutning', value: 'Kabel (original PS2-kontakt)' },
      { label: 'Åtgärder', value: 'Nya joysticks, nytt flex-PCB, nya spakhattar, helrengjord' },
      { label: 'Skick', value: 'Mycket fint skick / Nyrenoverad mekanik' }
    ],
    images: [
      '/img/products/206/PXL_20261014_195905995.MP.jpg',
      '/img/products/206/PXL_20261014_195914967.MP.jpg',
      '/img/products/206/PXL_20261014_195927599.MP.jpg',
      '/img/products/206/PXL_20261014_195934810.MP.jpg',
      '/img/products/206/PXL_20261014_194827173.MP.jpg',
      '/img/products/206/PXL_20261014_194608228.MP.jpg'
    ]
  },

  // --- 190: PS4 DualShock 4 Jet Black – TMR #190 ---
  {
    slug: 'ps4-dualshock-4-jet-black-tmr-190',
    title: 'Sony PlayStation 4 DualShock 4 V2 – Jet Black – TMR (#190)',
    price: 499,
    category: 'kontroller',
    status: 'in_stock',
    badge: '🧲 TMR Elektromagnetisk',
    condition: 'Professionellt renoverad & TMR-uppgraderad',
    warranty: '6 månaders full funktionsgaranti från mkFix',
    shortDescription: 'Klassisk Sony PlayStation 4 DualShock 4 V2 i Jet Black (#190). Uppgraderad med elektromagnetiska K-Silver TMR-joysticks och hårdvarukalibrerad till fantastiska 5.1% / 5.6% felmarginal. Helt immun mot stick drift!',
    description: [
      'Original Sony PlayStation 4 DualShock 4 V2 i stilrent Jet Black-utförande (inventarienummer #190), professionellt genomgången och förädlad i vår Malmö-verkstad.',
      'Kontrollen har fått båda sina analoga spakar utbytta mot banbrytande K-Silver TMR-joysticks (Tunneling Magnetoresistive). TMR är marknadens mest avancerade sensorteknik som läser av spakrörelser kontaktlöst via magnetfält istället för fysiska kolbanor. Detta ger silkeslen precision och gör kontrollen fullständigt immun mot mekaniskt slitage och stick drift.',
      'Spakarna är hårdvarukalibrerade i testbänk till exceptionella 5.1% (vänster) och 5.6% (höger) cirkuläritetsfelmarginal med perfekt återgång till center (grön centrering). Kontrollen har genomgått full service, rengjorts grundligt och hårdvarutestats inför försäljning.'
    ],
    features: [
      'Splitternya elektromagnetiska K-Silver TMR-joysticks installerade via mikrolödning',
      'Helt immun mot framtida stick drift och mekaniskt slitage',
      'Hårdvarukalibrerad till enastående 5.1% / 5.6% felmarginal',
      'DualShock 4 V2-modell (CUH-ZCT2E) med ljuslist i touchplattan',
      'Full funktionalitet: Touchpad, gyro/rörelsesensor, 3.5 mm headsetuttag och vibration',
      'Total invändig och utvändig rengöring samt funktionskontroll',
      'Kompatibel med PlayStation 4, PC (Steam/Windows), Mac, iOS och Android',
      '6 månaders full funktionsgaranti från mkFix'
    ],
    specs: [
      { label: 'Plattform', value: 'PlayStation 4, PC (Steam/Windows), Mac, iOS, Android' },
      { label: 'Sensor-teknik', value: 'K-Silver TMR (Tunneling Magnetoresistive)' },
      { label: 'Modell', value: 'Sony DualShock 4 V2 (CUH-ZCT2E, #190)' },
      { label: 'Färg', value: 'Jet Black (Svart)' },
      { label: 'Kalibrering', value: '5.1% vänster / 5.6% höger felmarginal' },
      { label: 'Anslutning', value: 'Bluetooth & Micro-USB' },
      { label: 'Headsetuttag', value: '3.5 mm stereojack' },
      { label: 'Skick', value: 'Mycket fint skick / Nyuppgraderad med TMR' }
    ],
    images: [
      '/img/products/190/PXL_20261020_170742833.MP.jpg',
      '/img/products/190/PXL_20261020_170750103.MP.jpg',
      '/img/products/190/PXL_20261020_170753761.MP.jpg',
      '/img/products/190/PXL_20261020_170758960.MP.jpg',
      '/img/products/190/PXL_20261020_164659906.MP.jpg',
      '/img/products/190/Screenshot 2026-10-20 190711.png'
    ]
  },

  // --- 208: PS4 DualShock 4 Wave Blue – TMR + USB-C + 2500mAh #208 ---
  {
    slug: 'ps4-dualshock-4-wave-blue-tmr-usbc-208',
    title: 'Sony PlayStation 4 DualShock 4 – Wave Blue – TMR, USB-C & 2500mAh (#208)',
    price: 899,
    category: 'kontroller',
    status: 'in_stock',
    badge: '🧲 TMR & USB-C Mod',
    condition: 'Professionellt ombyggd & TMR-uppgraderad',
    warranty: '6 månaders full funktionsgaranti från mkFix',
    shortDescription: 'Specialbyggd Sony PlayStation 4 DualShock 4 i läcker Wave Blue (#208). Uppgraderad med elektromagnetiska TMR-joysticks (4.6% / 4.0% felmarginal), modern USB-C laddningsport samt ett nytt 2500mAh högkapacitetsbatteri!',
    description: [
      'En unik och kraftigt uppgraderad Sony PlayStation 4 DualShock 4 i snyggt Wave Blue-utförande (#208 i vårt inventarium), skräddarsydd och förädlad i vår Malmö-verkstad.',
      'Kontrollen har fått den gamla slitkänsliga Micro-USB-porten utbytt mot en modern USB-C-laddningsport. Nu slipper du krångla med förlegade sladdar och kan ladda kontrollen med samma moderna USB-C-kabel som du använder till mobilen, datorn eller PS5.',
      'För att maximera speltiden har originalbatteriet ersatts av ett splitternytt högkapacitetsbatteri på hela 2500mAh (LIP1522). Det är mer än dubbelt så stor kapacitet jämfört med Sonys originalbatteri (som oftast ligger på 800–1000mAh), vilket ger dig oerhört många timmars trådlös gaming på en enda laddning.',
      'Båda analogspakarna har bytts ut mot banbrytande K-Silver TMR-joysticks (Tunneling Magnetoresistive). TMR är marknadens mest avancerade sensorteknik och läser av spakrörelser kontaktlöst via magnetfält istället för fysiska kolbanor. Den är hårdvarukalibrerad i testbänk till fantastiska 4.6% (vänster) och 4.0% (höger) felmarginal – 100% säkrad mot framtida stick drift!'
    ],
    features: [
      'Splitternya elektromagnetiska TMR-joysticks installerade via mikrolödning',
      'Helt immun mot framtida stick drift och mekaniskt slitage',
      'Hårdvarukalibrerad till imponerande 4.6% / 4.0% felmarginal',
      'Anpassad USB-C laddningsport (ersätter gamla Micro-USB)',
      'Nytt 2500mAh Li-ion högkapacitetsbatteri (över 2.5x originalkapacitet)',
      'Full funktionalitet: Touchpad, gyro, 3.5mm ljuduttag, ljusramp och vibration',
      'Kompatibel med PlayStation 4, PC, Mac, iOS och Android',
      '6 månaders full funktionsgaranti från mkFix'
    ],
    specs: [
      { label: 'Plattform', value: 'PlayStation 4, PC (Steam/Windows), Mac, iOS, Android' },
      { label: 'Sensor-teknik', value: 'K-Silver TMR (Tunneling Magnetoresistive)' },
      { label: 'Modell', value: 'Sony DualShock 4 V2 (#208)' },
      { label: 'Färg', value: 'Wave Blue (Blå / Svart)' },
      { label: 'Laddningsport', value: 'USB-C (custom modifikation)' },
      { label: 'Batterikapacitet', value: '2500mAh Li-ion (nytt högkapacitetsbatteri)' },
      { label: 'Kalibrering', value: '4.6% vänster / 4.0% höger felmarginal' },
      { label: 'Anslutning', value: 'Bluetooth & USB-C' },
      { label: 'Headsetuttag', value: '3.5 mm stereojack' },
      { label: 'Skick', value: 'Mycket fint skick / Custom-modifierad' }
    ],
    images: [
      '/img/products/208/20261016_193734.jpg',
      '/img/products/208/20261016_193742.jpg',
      '/img/products/208/20261016_193706.jpg',
      '/img/products/208/20261016_193522.jpg',
      '/img/products/208/20261016_180222.jpg',
      '/img/products/208/Screenshot 2026-10-16 194012.png'
    ]
  },

  // --- 190: PS4 DualShock 4 Jet Black – TMR #190 ---
  {
    slug: 'ps4-dualshock-4-jet-black-tmr-209',
    title: 'Sony PlayStation 4 DualShock 4 V2 – Jet Black – TMR (#209)',
    price: 499,
    category: 'kontroller',
    status: 'in_stock',
    badge: '🧲 TMR Elektromagnetisk',
    condition: 'Professionellt renoverad & TMR-uppgraderad',
    warranty: '6 månaders full funktionsgaranti från mkFix',
    shortDescription: 'Klassisk Sony PlayStation 4 DualShock 4 V2 i Jet Black (#209). Uppgraderad med elektromagnetiska K-Silver TMR-joysticks och hårdvarukalibrerad. Helt immun mot stick drift!',
    description: [
      'Original Sony PlayStation 4 DualShock , professionellt genomgången och förädlad i vår Malmö-verkstad.',
      'Kontrollen har fått båda sina analoga spakar utbytta mot banbrytande K-Silver TMR-joysticks (Tunneling Magnetoresistive). TMR är marknadens mest avancerade sensorteknik som läser av spakrörelser kontaktlöst via magnetfält istället för fysiska kolbanor. Detta ger silkeslen precision och gör kontrollen fullständigt immun mot mekaniskt slitage och stick drift.',
      'Spakarna är hårdvarukalibrerade i testbänk med perfekt återgång till center (grön centrering). Kontrollen har genomgått full service, rengjorts grundligt och hårdvarutestats inför försäljning.'
    ],
    features: [
      'Splitternya elektromagnetiska K-Silver TMR-joysticks installerade via mikrolödning',
      'Helt immun mot framtida stick drift och mekaniskt slitage',
      'DualShock 4 V2-modell (CUH-ZCT2E) med ljuslist i touchplattan',
      'Full funktionalitet: Touchpad, gyro/rörelsesensor, 3.5 mm headsetuttag och vibration',
      'Total invändig och utvändig rengöring samt funktionskontroll',
      'Kompatibel med PlayStation 4, PC (Steam/Windows), Mac, iOS och Android',
      '6 månaders full funktionsgaranti från mkFix'
    ],
    specs: [
      { label: 'Plattform', value: 'PlayStation 4, PC (Steam/Windows), Mac, iOS, Android' },
      { label: 'Sensor-teknik', value: 'K-Silver TMR (Tunneling Magnetoresistive)' },
      { label: 'Färg', value: 'Jet Black (Svart)' },
      { label: 'Anslutning', value: 'Bluetooth & Micro-USB' },
      { label: 'Headsetuttag', value: '3.5 mm stereojack' },
      { label: 'Skick', value: 'Mycket fint skick / Nyuppgraderad med TMR' }
    ],
    images: [
      '/img/products/209/PXL_20261020_181532153.MP.jpg',
      '/img/products/209/PXL_20261020_180500904.MP.jpg',
      '/img/products/209/PXL_20261020_181539717.MP.jpg',
      '/img/products/209/PXL_20261020_181547445.MP.jpg',
      '/img/products/209/PXL_20261020_181551802.MP.jpg',
      '/img/products/209/Screenshot 2026-10-20 201431.png'
    ]
  },

  /**RESERVDELAR VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV */
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

  // --- Reservdel 6: Thumbsticks / Spakhattar för PlayStation 1, PS2 & PS3 – Mörkgrå (2-pack) ---
  {
    slug: 'thumbcaps-ps1-ps2',
    title: 'Thumbsticks / Spakhattar för PlayStation 1, PS2 & PS3 – Mörkgrå (2-pack)',
    price: 39,
    category: 'reservdelar',
    status: 'in_stock',
    badge: '🕹️ Spakhattar Retro',
    condition: 'Fabriksnya komponenter',
    warranty: 'Passformsgaranti från mkFix',
    shortDescription: 'Ett par (2 st) klassiska mörkgrå spakhattar för Sony PlayStation 1, PS2 och PS3 DualShock-kontroller. Klassisk konvex rundad kupol med knottrigt grepp.',
    description: [
      'Har gummit på dina gamla PS1-, PS2- eller PS3-spakar blivit klibbigt, sprucket eller nedslitet efter åratal av intensivt spelande? Dessa fabriksnya spakhattar ger kontrollen ett rejält lyft.',
      'Tillverkade med originalmått och den klassiska konvexa (utåtbuktande) formen med knottrig texturyta som kännetecknar Sonys ikoniska retrokontroller.',
      'Enkla att byta: öppna kontrollens hölje och tryck fast de nya spakhattarna direkt på joystickaxlarna. Ingen lödning behövs.',
      'Vill du hellre att vi utför bytet åt dig? Vi erbjuder professionellt thumbcap-byte i Malmö eller via PostNord för endast 99 kr inklusive nya spakhattar!'
    ],
    features: [
      '2 st (1 par) spakhattar i klassisk mörkgrå retrolansering',
      'Autentisk konvex formfaktor med halkfri knottrad yta',
      'Exakt OEM-fattning för standard joystickaxlar',
      'Passar PlayStation 1 DualShock, PS2 DualShock 2 och PS3 DualShock 3',
      'Enkel montering utan lödning',
      'Monteringstjänst tillgänglig: Vi byter dem åt dig i vår Malmö-verkstad för endast 99 kr!'
    ],
    specs: [
      { label: 'Antal', value: '2 st (1 par)' },
      { label: 'Färg', value: 'Mörkgrå / Koksgrå (Original-look)' },
      { label: 'Profil', value: 'Konvex kupol med texturerat grepp' },
      { label: 'Kompatibilitet', value: 'Sony PS1 DualShock, Sony PS2 DualShock 2, Sony PS3 DualShock 3' },
      { label: 'Installation', value: 'Tryckmontering på spakaxel (eller byte hos oss för 99 kr)' }
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
      'Passar DualShock 4 V1 & V2',
      'Monteringstjänst i verkstad: Vi byter dina spakhattar för 99 kr inkl. delar!'
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
      'Enkel montering vid renovering eller underhåll',
      'Monteringstjänst i verkstad: Vi byter dina spakhattar för 99 kr inkl. delar!'
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
      'Enkel montering utan lödning',
      'Monteringstjänst i verkstad: Vi byter dina spakhattar för 99 kr inkl. delar!'
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
      'Exakt passform på 360-joystickmekanismer',
      'Monteringstjänst i verkstad: Vi byter dina spakhattar för 99 kr inkl. delar!'
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
      'Lätt att montera utan lödning',
      'Monteringstjänst i verkstad: Vi byter dina spakhattar för 99 kr inkl. delar!'
    ],
    specs: [
      { label: 'Antal', value: '2 st (1 par)' },
      { label: 'Färg', value: 'Svart' },
      { label: 'Design', value: 'Skålad mitt med diamantmönstrad ytterkant' },
      { label: 'Kompatibilitet', value: 'Xbox Series X/S (1914), Xbox One (1537, 1697, 1708)' },
      { label: 'Installation', value: 'Tryckmontering på spakaxel (eller byte hos oss för 99 kr)' }
    ],
    images: [
      '/img/products/parts/Xbox series or xbox one thumbcaps/PXL_20261012_161448704.MP.jpg'
    ]
  },

  // --- Tjänst / Byte 13: Thumbcap-byte för PlayStation (PS1, PS2, PS3, PS4, PS5) ---
  {
    slug: 'thumbcap-byte-playstation',
    title: 'Thumbcap-byte – PlayStation 1, 2, 3, 4 & 5 Handkontroll',
    price: 99,
    category: 'reservdelar',
    status: 'in_stock',
    badge: '🛠️ Byte & Montering',
    condition: 'Fabriksnya delar + Professionell montering',
    warranty: 'Passforms- & funktionsgaranti från mkFix',
    shortDescription: 'Slitna, spruckna eller klibbiga spakhattar på din PlayStation-kontroll? Vi byter båda spakhattarna till fabriksnya OEM-thumbcaps i vår Malmö-verkstad eller via PostNord.',
    description: [
      'Är spakarna på din PlayStation-kontroll utslitna, hala eller har gummit börjat lossna och bli klibbigt? Med vårt thumbcap-byte får din favoritkontroll fabriksfräscht grepp och full precision igen.',
      'Vi demonterar din kontroll varsamt i vår Malmö-verkstad, rengör spakaxlarna och monterar ett par splitternya spakhattar av OEM-kvalitet med perfekt passform.',
      'Gäller alla generationer av PlayStation: PS1 DualShock, PS2 DualShock 2, PS3 DualShock 3, PS4 DualShock 4 samt PlayStation 5 DualSense. Lämna in i Malmö eller skicka in via PostNord från hela Sverige!'
    ],
    features: [
      'Komplett byte av båda spakhattarna (vänster & höger analogspak)',
      'Fabriksnya spakhattar i originalkvalitet och OEM-profil ingår',
      'Professionell och skonsam demontering och montering i verkstad',
      'Passar PlayStation 1, PlayStation 2, PlayStation 3, PlayStation 4 och PlayStation 5',
      'Snabb hantering – klart på ca 15–30 minuter vid inlämning i Malmö',
      'Kan även skickas in spårbart via PostNord'
    ],
    specs: [
      { label: 'Tjänst', value: 'Thumbcap-byte / Montering av nya spakhattar' },
      { label: 'Pris', value: '99 kr (inklusive nya spakhattar & arbete)' },
      { label: 'Kompatibilitet', value: 'PS1, PS2, PS3, PS4 & PS5 DualSense' },
      { label: 'Leveranstid', value: 'Ca 15–30 min i Malmö / Samma dag vid post' },
      { label: 'Inlämning', value: 'Verkstad i Malmö eller spårbart via PostNord' }
    ],
    images: [
      '/img/products/parts/Playstation 5 thumbcaps/PXL_20261012_161200488.MP.jpg',
      '/img/products/parts/Playstation 4 thumbcaps/PXL_20261012_161357051.MP.jpg',
      '/img/products/parts/Playstation 1 playstation 2 thumbcaps/PXL_20261012_161605160.MP.jpg'
    ]
  },

  // --- Tjänst / Byte 14: Thumbcap-byte för Xbox (Xbox 360, Xbox One, Xbox Series) ---
  {
    slug: 'thumbcap-byte-xbox',
    title: 'Thumbcap-byte – Xbox 360, Xbox One & Xbox Series Handkontroll',
    price: 99,
    category: 'reservdelar',
    status: 'in_stock',
    badge: '🛠️ Byte & Montering',
    condition: 'Fabriksnya delar + Professionell montering',
    warranty: 'Passforms- & funktionsgaranti från mkFix',
    shortDescription: 'Har gummit eller grepprickarna på din Xbox-kontroll slitits ut? Vi byter ut båda spakhattarna mot fabriksnya thumbcaps för Xbox 360, One eller Series för 99 kr.',
    description: [
      'Slitna analogspakar är ett av de vanligaste problemen på Xbox-kontroller. På Xbox 360 nöts de fyra grepprickarna snabbt ner till hårdplast, och på Xbox One & Series X/S fläks den räfflade ytterringen ofta av.',
      'Vi byter ut båda dina slitna spakhattar mot helt nya OEM-spakhattar i vår Malmö-verkstad så att du återfår det fasta och sköna greppet under intensiva spelsessioner.',
      'Gäller samtliga Xbox-generationer: Microsoft Xbox 360 (svarta eller grå hattar), Xbox One (modell 1537, 1697, 1708) samt Xbox Series X/S (modell 1914). Lämna in på plats i Malmö eller skicka via PostNord!'
    ],
    features: [
      'Komplett byte av båda spakhattarna (vänster & höger analogspak)',
      'Nya fabriksnya spakhattar av OEM-kvalitet ingår i priset',
      'Valmöjlighet: Klassiska svarta eller grå spakhattar för Xbox 360',
      'Texturerade OEM-spakhattar för Xbox One & Xbox Series X/S',
      'Professionell demontering och återmontering utan att skada skalet',
      'Kan kombineras med service, rengöring eller TMR/Hall Effect-uppgradering'
    ],
    specs: [
      { label: 'Tjänst', value: 'Thumbcap-byte / Montering av nya spakhattar' },
      { label: 'Pris', value: '99 kr (inklusive nya spakhattar & arbete)' },
      { label: 'Kompatibilitet', value: 'Xbox 360, Xbox One, Xbox Series X/S' },
      { label: 'Leveranstid', value: 'Ca 15–30 min i Malmö / Samma dag vid post' },
      { label: 'Inlämning', value: 'Verkstad i Malmö eller spårbart via PostNord' }
    ],
    images: [
      '/img/products/parts/Xbox series or xbox one thumbcaps/PXL_20261012_161448704.MP.jpg',
      '/img/products/parts/Xbox 360 thumbcaps black/PXL_20261012_161520716.MP.jpg',
      '/img/products/parts/xbox 360 thumbcaps gray/PXL_20261012_161620315.MP.jpg'
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

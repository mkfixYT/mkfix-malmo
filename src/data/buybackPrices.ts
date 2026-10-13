// src/data/buybackPrices.ts

export type BuybackCategory = 'ps5' | 'xbox' | 'switch' | 'ps4' | 'scuf-aim' | 'retro' | 'other';

export interface BuybackItem {
  id: string;
  category: BuybackCategory;
  categoryTitle: string;
  model: string;
  platform: string;
  icon: string;
  brokenPrice: number | string;    // Pris för defekt kontroll i SEK eller '?'
  workingPrice: number | string;   // Pris för fullt fungerande kontroll i SEK eller '?'
  tradeInValue: number | string;   // Inbytesvärde i butiken i SEK eller '?'
  notes: string;
  popular?: boolean;
}

export const buybackCategories: { id: BuybackCategory; label: string; icon: string }[] = [
  { id: 'ps5', label: 'PlayStation 5', icon: '🎮' },
  { id: 'xbox', label: 'Xbox Series & One', icon: '🟢' },
  { id: 'switch', label: 'Nintendo Switch', icon: '🔴' },
  { id: 'ps4', label: 'PlayStation 4', icon: '🟦' },
  { id: 'scuf-aim', label: 'Scuf & Aim', icon: '⚡' },
  { id: 'retro', label: 'Retro & Klassiker', icon: '🕹️' }
];

export const buybackItems: BuybackItem[] = [
  // --- PlayStation 5 ---
  {
    id: 'ps5-dualsense',
    category: 'ps5',
    categoryTitle: 'PlayStation 5',
    model: 'Sony DualSense Wireless Controller',
    platform: 'PlayStation 5',
    icon: '🎮',
    brokenPrice: 125,
    workingPrice: 150,
    tradeInValue: 175,
    notes: '',
    popular: true
  },
  {
    id: 'ps5-dualsense-edge',
    category: 'ps5',
    categoryTitle: 'PlayStation 5',
    model: 'Sony DualSense Edge Pro Controller',
    platform: 'PlayStation 5',
    icon: '⚡',
    brokenPrice: 300,
    workingPrice: 400,
    tradeInValue: 450,
    notes: '',
    popular: true
  },

  // --- Xbox ---
  {
    id: 'xbox-series',
    category: 'xbox',
    categoryTitle: 'Xbox Series & One',
    model: 'Xbox Trådlös Handkontroll (Modell 1914)',
    platform: 'Xbox Series X/S & PC',
    icon: '🟢',
    brokenPrice: 125,
    workingPrice: 150,
    tradeInValue: 175,
    notes: '',
    popular: true
  },
  {
    id: 'xbox-one',
    category: 'xbox',
    categoryTitle: 'Xbox Series & One',
    model: 'Xbox One Trådlös Kontroll (Modell 1708)',
    platform: 'Xbox One & PC',
    icon: '🟢',
    brokenPrice: 100,
    workingPrice: 125,
    tradeInValue: 150,
    notes: 'Modellen med inbyggd Bluetooth och 3.5mm-jack. Batterilucka krävs för fullt pris.',
    popular: false
  },
  {
    id: 'xbox-elite-1',
    category: 'xbox',
    categoryTitle: 'Xbox Series & One',
    model: 'Xbox Elite Wireless Controller Series 1',
    platform: 'Xbox & PC Pro',
    icon: '🏆',
    brokenPrice: 250,
    workingPrice: 350,
    tradeInValue: 400,
    notes: '',
    popular: false
  },
  {
    id: 'xbox-elite-2',
    category: 'xbox',
    categoryTitle: 'Xbox Series & One',
    model: 'Xbox Elite Wireless Controller Series 2',
    platform: 'Xbox & PC Pro',
    icon: '🏆',
    brokenPrice: 300,
    workingPrice: 400,
    tradeInValue: 450,
    notes: '',
    popular: true
  },

  // --- Nintendo Switch ---
  {
    id: 'switch-joycon-pair',
    category: 'switch',
    categoryTitle: 'Nintendo Switch',
    model: 'Joy-Con Par (Vänster + Höger)',
    platform: 'Nintendo Switch',
    icon: '🔴',
    brokenPrice: 100,
    workingPrice: 150,
    tradeInValue: 200,
    notes: 'Klassisk Joy-Con drift eller glappande spärrar. Måste vara äkta Nintendo.',
    popular: false
  },
  {
    id: 'switch-joycon-single',
    category: 'switch',
    categoryTitle: 'Nintendo Switch',
    model: 'Enkel Joy-Con (Vänster eller Höger)',
    platform: 'Nintendo Switch',
    icon: '🔴',
    brokenPrice: 50,
    workingPrice: 75,
    tradeInValue: 100,
    notes: 'Sälj bara den defekta sidan om du vill behålla den andra.',
    popular: false
  },
  {
    id: 'switch-pro',
    category: 'switch',
    categoryTitle: 'Nintendo Switch',
    model: 'Nintendo Switch Pro Controller',
    platform: 'Nintendo Switch',
    icon: '🕹️',
    brokenPrice: 125,
    workingPrice: 150,
    tradeInValue: 175,
    notes: 'Original Nintendo trådlös Pro Controller. Ej tredjepartskopior.',
    popular: false
  },

  // --- PlayStation 4 ---
  {
    id: 'ps4-dualshock-4',
    category: 'ps4',
    categoryTitle: 'PlayStation 4',
    model: 'Sony DualShock 4 (V1 / V2)',
    platform: 'PlayStation 4',
    icon: '🟦',
    brokenPrice: 100,
    workingPrice: 125,
    tradeInValue: 150,
    notes: 'Stick drift, utslitna spakar eller dåligt batteri. Måste vara original Sony.',
    popular: true
  },

  // --- Scuf & Aim (Pro) ---
  {
    id: 'scuf-ps5',
    category: 'scuf-aim',
    categoryTitle: 'Scuf & Aim',
    model: 'Scuf Reflex / Pro Kontroll (PS5)',
    platform: 'PlayStation 5 & PC',
    icon: '⚡',
    brokenPrice: 250,
    workingPrice: 350,
    tradeInValue: 400,
    notes: 'Scuf Reflex med bakpaddlar. Även med stick drift eller slitna spakar.',
    popular: true
  },
  {
    id: 'scuf-xbox',
    category: 'scuf-aim',
    categoryTitle: 'Scuf & Aim',
    model: 'Scuf Instinct / Pro Kontroll (Xbox)',
    platform: 'Xbox Series & PC',
    icon: '⚡',
    brokenPrice: 250,
    workingPrice: 350,
    tradeInValue: 400,
    notes: 'Scuf Instinct eller Instinct Pro med bakpaddlar och trigger stops.',
    popular: false
  },
  {
    id: 'aim-ps5-xbox',
    category: 'scuf-aim',
    categoryTitle: 'Scuf & Aim',
    model: 'AimControllers (PS5 / Xbox Series)',
    platform: 'PS5 & Xbox Series',
    icon: '🎯',
    brokenPrice: 250,
    workingPrice: 350,
    tradeInValue: 400,
    notes: 'Original AimControllers med bakpaddlar och smart triggers.',
    popular: true
  },
  {
    id: 'scuf-aim-ps4',
    category: 'scuf-aim',
    categoryTitle: 'Scuf & Aim',
    model: 'Scuf / Aim Pro Kontroll (PS4)',
    platform: 'PlayStation 4 & PC',
    icon: '⚡',
    brokenPrice: 150,
    workingPrice: 225,
    tradeInValue: 250,
    notes: 'Scuf Infinity 4PS, Scuf Impact eller Aim PS4.',
    popular: false
  },

  // --- Retro & Klassiker ---
  {
    id: 'retro-gamecube',
    category: 'retro',
    categoryTitle: 'Retro & Klassiker',
    model: 'Nintendo GameCube Kontroll (Original)',
    platform: 'GameCube / Wii / Smash',
    icon: '🟣',
    brokenPrice: 75,
    workingPrice: 100,
    tradeInValue: 125,
    notes: 'Original trådbunden med Nintendo-logotyp. Defekta spakar/sladdar välkomna.',
    popular: true
  },
  {
    id: 'retro-n64',
    category: 'retro',
    categoryTitle: 'Retro & Klassiker',
    model: 'Nintendo 64 Kontroll (Original)',
    platform: 'Nintendo 64',
    icon: '🕹️',
    brokenPrice: 75,
    workingPrice: 100,
    tradeInValue: 125,
    notes: 'Även med helt slapp eller glapp joystick – vi renoverar och bygger om dem!',
    popular: false
  },
  {
    id: 'retro-ps2-ps1',
    category: 'retro',
    categoryTitle: 'Retro & Klassiker',
    model: 'PlayStation 2 DualShock 2 (Original Sony)',
    platform: 'PlayStation 2',
    icon: '🖤',
    brokenPrice: 50,
    workingPrice: 75,
    tradeInValue: 100,
    notes: 'Även med defekt flexkrets eller spakar. Svart eller specialfärger.',
    popular: false
  },
  {
    id: 'retro-xbox-360',
    category: 'retro',
    categoryTitle: 'Retro & Klassiker',
    model: 'Xbox 360 Trådlös Handkontroll',
    platform: 'Xbox 360 & PC',
    icon: '⚪',
    brokenPrice: 50,
    workingPrice: 75,
    tradeInValue: 100,
    notes: 'Original Microsoft trådlös. Slitna spakar eller drift gör ingenting.',
    popular: false
  },

  {
    id: 'other',
    category: 'other',
    categoryTitle: 'Övrigt & Samlingar',
    model: 'Annat / Övriga enheter & Samlingar',
    platform: 'Konsoler, specialkontroller & retro',
    icon: '❓',
    brokenPrice: '?',
    workingPrice: '?',
    tradeInValue: '?',
    notes: 'Har du en annan handkontroll, konsol eller tillbehör som inte finns med i listan? Hör av dig med bilder och info så diskuterar vi fram ett bra pris tillsammans!',
    popular: false
  }
];

export const buybackFaq = [
  {
    question: "Hur säljer jag mina kontroller till mkFix?",
    answer: "Det är superenkelt! 1) Kolla prislistan ovan. 2) Ta en bild på kontrollen och skicka via SMS till 079-032 06 05 eller vårt kontaktformulär. 3) Lämna in direkt i Malmö eller skicka med PostNord (spårbart). Vi testar och swishar pengarna direkt!"
  },
  {
    question: "Hur fungerar inbytesvärde i butiken (Trade-in)?",
    answer: "Om du vill köpa en färdigmoddad TMR-kontroll eller reservdelar i vår butik får du ett extra högt värde för din gamla kontroll (ofta 50–100 kr mer än kontantpriset). Du får ett avdrag direkt på ditt köp!"
  },
  {
    question: "Vad menas med en 'defekt' kontroll?",
    answer: "Defekt avser vanliga ålders- och slitagefel som stick drift, glappande knappar, slitna spakhattar, glappande bumpers eller dålig batteritid. Kontrollen måste vara ett intakt original som inte utsatts för grova vätskeskador eller hemmagjorda lödningsförsök."
  },
  {
    question: "Köper ni kontroller som blivit vätskeskadade eller hemmalödda?",
    answer: "Kontroller som dränkts i kaffe, läsk eller öl, eller där någon bränt kretskortet med hemmalödning, nekas oftast eller köps in till ett reducerat reservdelspris (30–50 kr) efter individuell bedömning."
  },
  {
    question: "Köper ni piratkopior eller tredjepartskontroller?",
    answer: "Nej, vi köper endast originalkontroller från de stora tillverkarna (Sony, Microsoft, Nintendo). Vi köper ej billiga kopior från Wish/Temu eller enkla tredjepartsmärken."
  },
  {
    question: "Jag bor inte i Malmö – hur gör jag med frakten?",
    answer: "Du kan skicka dina kontroller till oss med PostNord (vi rekommenderar 'Skicka Lätt' som är spårbart för ca 59–69 kr). Säljer du 3 eller fler kontroller, eller byter in mot en ny TMR-kontroll, kan vi ofta bjuda på eller subventionera frakten!"
  },
  {
    question: "Hur snabbt får jag betalt via Swish?",
    answer: "Vid personlig inlämning i Malmö testar vi kontrollen snabbt och swishar ofta inom 15–30 minuter. Vid postförsändelse swishar vi samma dag som paketet anländer och testas i verkstaden."
  }
];

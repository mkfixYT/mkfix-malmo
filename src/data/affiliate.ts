// src/data/affiliate.ts

export type SupportedCountryCode = "se" | "uk" | "us" | "ca" | "pl";
export type SupportedLanguage = "sv" | "en" | "pl";

export interface CountryInfo {
  code: SupportedCountryCode;
  lang: SupportedLanguage;
  name: string;
  flagEmoji: string;
  amazonDomain: string;
  aliExpressDomain: string;
  svgFlag: string;
}

export const SUPPORTED_COUNTRIES: CountryInfo[] = [
  {
    code: "se",
    lang: "sv",
    name: "Sverige",
    flagEmoji: "🇸🇪",
    amazonDomain: "Amazon.se",
    aliExpressDomain: "AliExpress",
    svgFlag: `<svg viewBox="0 0 16 10" width="28" height="18" class="flag-vector" aria-hidden="true"><rect width="16" height="10" fill="#006aa7"/><rect x="5" width="2" height="10" fill="#fecc00"/><rect y="4" width="16" height="2" fill="#fecc00"/></svg>`,
  },
  {
    code: "uk",
    lang: "en",
    name: "England (UK)",
    flagEmoji: "🇬🇧",
    amazonDomain: "Amazon.co.uk",
    aliExpressDomain: "AliExpress UK",
    svgFlag: `<svg viewBox="0 0 60 30" width="28" height="18" class="flag-vector" aria-hidden="true"><clipPath id="uk-clip"><path d="M0 0v30h60V0z"/></clipPath><g clip-path="url(#uk-clip)"><path d="M0 0v30h60V0z" fill="#012169"/><path d="M0 0l60 30m0-30L0 30" stroke="#fff" stroke-width="6"/><path d="M0 0l60 30m0-30L0 30" stroke="#c8102e" stroke-width="4"/><path d="M30 0v30M0 15h60" stroke="#fff" stroke-width="10"/><path d="M30 0v30M0 15h60" stroke="#c8102e" stroke-width="6"/></g></svg>`,
  },
  {
    code: "us",
    lang: "en",
    name: "USA",
    flagEmoji: "🇺🇸",
    amazonDomain: "Amazon.com",
    aliExpressDomain: "AliExpress US",
    svgFlag: `<svg viewBox="0 0 741 390" width="28" height="18" class="flag-vector" aria-hidden="true"><rect width="741" height="390" fill="#b22234"/><path d="M0 30h741M0 90h741M0 150h741M0 210h741M0 270h741M0 330h741" stroke="#fff" stroke-width="30"/><rect width="296" height="210" fill="#3c3b6e"/><g fill="#fff"><circle cx="50" cy="40" r="10"/><circle cx="100" cy="40" r="10"/><circle cx="150" cy="40" r="10"/><circle cx="200" cy="40" r="10"/><circle cx="250" cy="40" r="10"/><circle cx="75" cy="75" r="10"/><circle cx="125" cy="75" r="10"/><circle cx="175" cy="75" r="10"/><circle cx="225" cy="75" r="10"/><circle cx="50" cy="110" r="10"/><circle cx="100" cy="110" r="10"/><circle cx="150" cy="110" r="10"/><circle cx="200" cy="110" r="10"/><circle cx="250" cy="110" r="10"/><circle cx="75" cy="145" r="10"/><circle cx="125" cy="145" r="10"/><circle cx="175" cy="145" r="10"/><circle cx="225" cy="145" r="10"/><circle cx="50" cy="180" r="10"/><circle cx="100" cy="180" r="10"/><circle cx="150" cy="180" r="10"/><circle cx="200" cy="180" r="10"/><circle cx="250" cy="180" r="10"/></g></svg>`,
  },
  {
    code: "ca",
    lang: "en",
    name: "Canada",
    flagEmoji: "🇨🇦",
    amazonDomain: "Amazon.ca",
    aliExpressDomain: "AliExpress CA",
    svgFlag: `<svg viewBox="0 0 1000 500" width="28" height="18" class="flag-vector" aria-hidden="true"><rect width="250" height="500" fill="#d80621"/><rect x="250" width="500" height="500" fill="#ffffff"/><rect x="750" width="250" height="500" fill="#d80621"/><path d="M500 100l25 60 45-20-15 50 60 20-30 45 45 35-65 15 5 65-65-35-5 65h-10l-5-65-65 35 5-65-65-15 45-35-30-45 60-20-15-50 45 20z" fill="#d80621"/></svg>`,
  },
  {
    code: "pl",
    lang: "pl",
    name: "Polen",
    flagEmoji: "🇵🇱",
    amazonDomain: "Amazon.pl",
    aliExpressDomain: "AliExpress PL",
    svgFlag: `<svg viewBox="0 0 16 10" width="28" height="18" class="flag-vector" aria-hidden="true"><rect width="16" height="5" fill="#ffffff"/><rect y="5" width="16" height="5" fill="#dc143c"/></svg>`,
  },
];

export interface CountryLinkSet {
  amazon?: string;
  aliExpress?: string;
}

export interface ProductLocalization {
  name: string;
  description: string;
  tip?: string;
  recommendedFor?: string;
}

export interface AffiliateProduct {
  id: string;
  category: string;
  image: string;
  
  // Grundtext (Svenska som standard):
  name: string;
  description: string;
  tip?: string;
  recommendedFor?: string;

  // Översättningar för Engelska (UK, US, CA) och Polska (PL):
  i18n?: {
    en?: ProductLocalization;
    pl?: ProductLocalization;
    sv?: ProductLocalization;
  };
  
  // Standardlänkar
  aliExpressUrl?: string;
  amazonUrl?: string;

  // Länkar per land (Sverige, England, USA, Canada, Polen):
  countries?: {
    se?: CountryLinkSet; // Sverige
    uk?: CountryLinkSet; // England / Storbritannien
    us?: CountryLinkSet; // USA
    ca?: CountryLinkSet; // Canada
    pl?: CountryLinkSet; // Polen
  };
}

// UI-översättningar för rubriker, knappar och informationstexter
export const UI_TRANSLATIONS: Record<SupportedLanguage, any> = {
  sv: {
    heroBadge: "MKFIX VERKSTADSGUIDE",
    heroBadgeSub: "Testat & beprövat i Malmö",
    heroTitle: "Rekommenderade",
    heroTitleHighlight: "Verktyg & Utrustning",
    heroLead: "Här samlar vi de mikroskop, lödstationer, flussmedel och handverktyg vi själva använder dagligen i verkstaden. Välj ditt land nedan för att få rätt butikslänkar och valutor för din region.",
    perk1: "Samma utrustning som i våra YouTube-videos",
    perk2: "Landsspecifika länkar (Sverige, UK, USA, CA, PL)",
    perk3: "Noggrant testat i verklig verkstadsmiljö",
    activeCountryBar: "Aktuellt land för affiliatelänkar:",
    changeCountryBtn: "🔄 Byt land",
    searchPlaceholder: "Sök verktyg (t.ex. mikroskop, fluss, lödstation)...",
    searchAria: "Sök bland verktyg",
    clearSearchAria: "Rensa sökning",
    showingCount: "Visar",
    ofTotal: "av",
    toolsUnit: "verktyg",
    disclosureTitle: "Transparens & Affiliate-information",
    disclosureText: "Länkarna på denna sida är affiliatelänkar. Om du väljer att köpa via länkarna får mkFix en liten provision från butiken (AliExpress eller Amazon) utan någon som helst extra kostnad för dig. Detta hjälper oss att driva verkstan, köpa in nya testkomponenter och producera gratis reparationsguider på YouTube. Vi rekommenderar uteslutande verktyg vi själva litar på.",
    tipLabel: "mkFix Tips:",
    selectCountryPrompt: "📍 Välj land för att se butikslänkar",
    noResultsTitle: "Inga verktyg matchade din sökning",
    noResultsDesc: "Testa att söka på något annat eller rensa filtret.",
    resetFilterBtn: "Återställ filter & sökning",
    ctaTitle: "Saknar du något verktyg i listan?",
    ctaDesc: "Har du sett mig använda ett specifikt verktyg i en video och undrar vad det heter, eller söker du tips för just din löduppsättning? Hör gärna av dig eller joina vår Discord!",
    ctaDiscord: "💬 Fråga i mkFix Discord",
    ctaContact: "Kontakta verkstaden →",
    modalTitle: "Välj ditt land / Select Country",
    modalSubtitle: "Välj det land du handlar ifrån för att få rätt affiliatelänkar för AliExpress och Amazon med lokal valuta och frakt.",
    modalWhyTitle: "Varför måste du välja land?",
    modalWhyText: "Både Amazon och AliExpress använder olika regionala sidor och affiliate-system (t.ex. Amazon.se, Amazon.co.uk, Amazon.com, Amazon.ca och Amazon.pl). För att länkarna ska öppna rätt butik med rätt valuta, lokal frakt och korrekt lagerstatus behöver vi veta vilket land du handlar ifrån.",
    modalPrivacyTitle: "100% anonymt – Vi spårar ingenting",
    modalPrivacyText: "Ditt val sparas uteslutande lokalt i din egen webbläsare (localStorage) så att du slipper välja om varje gång du besöker sidan. mkFix sparar inga personuppgifter, använder inga spårningscookies och skickar ingen data om dig till någon server.",
    modalConfirmBtn: "Klar & Visa verktyg →",
    allCategory: "Alla",
    categories: {
      "mikroskop": "Mikroskop",
      "lödstationer": "Lödstationer",
      "kemi & fluss": "Kemi & Fluss",
      "handverktyg": "Handverktyg",
      "förbrukning": "Förbrukning"
    }
  },
  en: {
    heroBadge: "MKFIX WORKSHOP GUIDE",
    heroBadgeSub: "Tested & proven in Malmö",
    heroTitle: "Recommended",
    heroTitleHighlight: "Tools & Equipment",
    heroLead: "Here we gather the microscopes, soldering stations, flux, and hand tools we use daily in our workshop. Select your country below to get the right store links and currencies for your region.",
    perk1: "Same equipment as seen in our YouTube videos",
    perk2: "Country-specific links (Sweden, UK, US, CA, PL)",
    perk3: "Thoroughly tested in a real repair workshop environment",
    activeCountryBar: "Active country for affiliate links:",
    changeCountryBtn: "🔄 Change country",
    searchPlaceholder: "Search tools (e.g. microscope, flux, soldering station)...",
    searchAria: "Search tools",
    clearSearchAria: "Clear search",
    showingCount: "Showing",
    ofTotal: "of",
    toolsUnit: "tools",
    disclosureTitle: "Transparency & Affiliate Information",
    disclosureText: "The links on this page are affiliate links. If you choose to purchase through these links, mkFix receives a small commission from the retailer (AliExpress or Amazon) at no extra cost to you. This helps support our workshop, purchase new test components, and produce free repair guides on YouTube. We only recommend tools we personally trust and use.",
    tipLabel: "mkFix Tip:",
    selectCountryPrompt: "📍 Select country to view store links",
    noResultsTitle: "No tools matched your search",
    noResultsDesc: "Try searching for something else or reset the filter.",
    resetFilterBtn: "Reset filters & search",
    ctaTitle: "Missing a tool from the list?",
    ctaDesc: "Seen me use a specific tool in a video and wondering what it's called, or looking for advice on your own soldering setup? Feel free to reach out or join our Discord community!",
    ctaDiscord: "💬 Ask in mkFix Discord",
    ctaContact: "Contact the workshop →",
    modalTitle: "Select Country / Wybierz kraj",
    modalSubtitle: "Choose the country you are shopping from to get the correct affiliate links for AliExpress and Amazon with local currency and shipping.",
    modalWhyTitle: "Why do you need to select a country?",
    modalWhyText: "Both Amazon and AliExpress operate separate regional storefronts and affiliate programs (e.g. Amazon.se, Amazon.co.uk, Amazon.com, Amazon.ca, and Amazon.pl). To ensure links direct to the right marketplace with local currency, shipping rates, and correct stock status, we need to know your shopping region.",
    modalPrivacyTitle: "100% Anonymous – No Tracking",
    modalPrivacyText: "Your choice is stored strictly locally in your browser (localStorage) so you don't have to select it again on your next visit. mkFix does not collect personal data, uses no tracking cookies, and sends no information about you to any server.",
    modalConfirmBtn: "Done & View Tools →",
    allCategory: "All",
    categories: {
      "mikroskop": "Microscopes",
      "lödstationer": "Soldering Stations",
      "kemi & fluss": "Chemicals & Flux",
      "handverktyg": "Hand Tools",
      "förbrukning": "Consumables"
    }
  },
  pl: {
    heroBadge: "PRZEWODNIK WARSZTATOWY MKFIX",
    heroBadgeSub: "Przetestowane w warsztacie w Malmö",
    heroTitle: "Polecane",
    heroTitleHighlight: "Narzędzia i Sprzęt",
    heroLead: "Tutaj zbieramy mikroskopy, stacje lutownicze, topniki i narzędzia ręczne, których używamy na co dzień w naszym warsztacie. Wybierz swój kraj poniżej, aby otrzymać właściwe linki i waluty dla Twojego regionu.",
    perk1: "Ten sam sprzęt, co w naszych filmach na YouTube",
    perk2: "Linki dopasowane do kraju (Szwecja, UK, USA, Kanada, Polska)",
    perk3: "Dokładnie przetestowane w warunkach prawdziwego warsztatu",
    activeCountryBar: "Aktualny kraj dla linków partnerskich:",
    changeCountryBtn: "🔄 Zmień kraj",
    searchPlaceholder: "Szukaj narzędzi (np. mikroskop, topnik, stacja lutownicza)...",
    searchAria: "Szukaj narzędzi",
    clearSearchAria: "Wyczyść wyszukiwanie",
    showingCount: "Wyświetlanie",
    ofTotal: "z",
    toolsUnit: "narzędzi",
    disclosureTitle: "Przejrzystość i Informacje o Linkach Partnerskich",
    disclosureText: "Linki na tej stronie to linki afiliacyjne. Jeśli zdecydujesz się na zakup za ich pośrednictwem, mkFix otrzymuje niewielką prowizję od sklepu (AliExpress lub Amazon) bez żadnych dodatkowych kosztów dla Ciebie. Pomaga to utrzymać warsztat, kupować nowe części do testów i tworzyć darmowe poradniki napraw na YouTube. Polecamy wyłącznie narzędzia, którym sami ufamy.",
    tipLabel: "Wskazówka mkFix:",
    selectCountryPrompt: "📍 Wybierz kraj, aby zobaczyć linki do sklepów",
    noResultsTitle: "Brak narzędzi pasujących do Twojego wyszukiwania",
    noResultsDesc: "Spróbuj wyszukać coś innego lub zresetuj filtr.",
    resetFilterBtn: "Zresetuj filtry i wyszukiwanie",
    ctaTitle: "Brakuje jakiegoś narzędzia na liście?",
    ctaDesc: "Widziałeś, jak używam konkretnego narzędzia w filmie i zastanawiasz się, jak się nazywa, a może szukasz porady dotyczącej własnego stanowiska lutowniczego? Dołącz do naszego Discorda lub skontaktuj się z nami!",
    ctaDiscord: "💬 Zapytaj na Discordzie mkFix",
    ctaContact: "Skontaktuj się z warsztatem →",
    modalTitle: "Wybierz swój kraj / Select Country",
    modalSubtitle: "Wybierz kraj, z którego robisz zakupy, aby otrzymać właściwe linki do AliExpress i Amazon z lokalną walutą i dostawą.",
    modalWhyTitle: "Dlaczego musisz wybrać kraj?",
    modalWhyText: "Zarówno Amazon, jak i AliExpress posiadają oddzielne regionalne platformy i programy partnerskie (np. Amazon.se, Amazon.co.uk, Amazon.com, Amazon.ca i Amazon.pl). Aby linki otwierały właściwy sklep z odpowiednią walutą, lokalną dostawą i stanem magazynowym, musimy wiedzieć, z jakiego kraju zamawiasz.",
    modalPrivacyTitle: "100% anonimowo – Nie śledzimy Cię",
    modalPrivacyText: "Twój wybór jest zapisywany wyłącznie lokalnie w Twojej przeglądarce (localStorage), dzięki czemu nie musisz wybierać go ponownie przy kolejnych odwiedzinach. mkFix nie gromadzi danych osobowych, nie używa ciasteczek śledzących i nie wysyła żadnych danych na żaden serwer.",
    modalConfirmBtn: "Gotowe & Pokaż narzędzia →",
    allCategory: "Wszystkie",
    categories: {
      "mikroskop": "Mikroskopy",
      "lödstationer": "Stacje lutownicze",
      "kemi & fluss": "Chemia i topniki",
      "handverktyg": "Narzędzia ręczne",
      "förbrukning": "Materiały eksploatacyjne"
    }
  }
};

/*
========================================================================================
💡 BORTKOMMENTERAD MALL FÖR NYTT AFFILIATE-KORT MED SPRÅK (SVENSKA, ENGELSKA, POLSKA):
Kopiera blocket nedan, klistra in bland objekten i "affiliateProducts"-listan,
ta bort kommentarstecknen och fyll i:

  {
    id: "mikroskop-stereo",
    category: "Mikroskop", // Kategori: "Mikroskop", "Lödstationer", "Kemi & Fluss", "Handverktyg", "Förbrukning"
    image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=600&auto=format&fit=crop&q=80",
    
    // Svenska (Standard):
    name: "Trinokulärt Stereo Mikroskop",
    description: "Kort svensk sammanfattning av vad saken är och vad den används till.",
    tip: "Svenskt tips från verkstan.",
    recommendedFor: "Mikrolödning & SMD",

    // Översättningar för Engelska (UK, USA, Canada) och Polska (Polen):
    i18n: {
      en: {
        name: "Trinocular Stereo Microscope",
        description: "Essential microscope for micro-soldering, board diagnostics, and HDMI port replacement.",
        tip: "Combine with a 0.5x Barlow lens for optimal working distance to your soldering iron.",
        recommendedFor: "Micro-soldering & SMD"
      },
      pl: {
        name: "Trójokularowy Mikroskop Stereoskopowy",
        description: "Niezbędny mikroskop do mikrolutowania, diagnostyki płyt głównych i wymiany portów HDMI.",
        tip: "Połącz z soczewką Barlowa 0.5x, aby uzyskać optymalną odległość roboczą od grota lutownicy.",
        recommendedFor: "Mikrolutowanie i SMD"
      }
    },
    
    // Standardlänkar:
    aliExpressUrl: "https://s.click.aliexpress.com/e/_c31dhgCB",
    amazonUrl: "https://amzn.to/3UEtMQ5",

    // Länkar per land:
    countries: {
      se: { amazon: "https://amzn.to/3UEtMQ5", aliExpress: "https://s.click.aliexpress.com/e/_c31dhgCB" },
      uk: { amazon: "https://amzn.to/3UEtMQ5", aliExpress: "https://s.click.aliexpress.com/e/_c31dhgCB" },
      us: { amazon: "https://amzn.to/3UEtMQ5", aliExpress: "https://s.click.aliexpress.com/e/_c31dhgCB" },
      ca: { amazon: "https://amzn.to/3UEtMQ5", aliExpress: "https://s.click.aliexpress.com/e/_c31dhgCB" },
      pl: { amazon: "https://amzn.to/3UEtMQ5", aliExpress: "https://s.click.aliexpress.com/e/_c31dhgCB" },
    }
  },
========================================================================================
*/

export const affiliateProducts: AffiliateProduct[] = [
  {
    id: "mikroskop-stereo-trinokulart",
    category: "Mikroskop",
    image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=600&auto=format&fit=crop&q=80",
    name: "Trinokulärt Stereo Mikroskop",
    description: "Oumbärligt mikroskop för mikrolödning, felsökning av kretskort och byte av HDMI-portar. Ger kristallklar optisk förstoring och bra skärpedjup.",
    tip: "Kombinera med en 0.5x Barlow-lins för optimalt arbetsavstånd till lödspetsen och varmluftspennan.",
    recommendedFor: "Mikrolödning & SMD",
    i18n: {
      en: {
        name: "Trinocular Stereo Microscope",
        description: "Essential microscope for micro-soldering, board diagnostics, and HDMI port replacement. Offers crystal clear optical magnification and great depth of field.",
        tip: "Combine with a 0.5x Barlow lens for optimal working distance to your soldering tip and hot air wand.",
        recommendedFor: "Micro-soldering & SMD"
      },
      pl: {
        name: "Trójokularowy Mikroskop Stereoskopowy",
        description: "Niezbędny mikroskop do mikrolutowania, diagnostyki płyt głównych i wymiany portów HDMI. Zapewnia krystalicznie czyste powiększenie optyczne i dużą głębię ostrości.",
        tip: "Połącz z soczewką Barlowa 0.5x, aby uzyskać optymalną odległość roboczą od grota lutownicy i dyszy gorącego powietrza.",
        recommendedFor: "Mikrolutowanie i SMD"
      }
    },
    aliExpressUrl: "https://s.click.aliexpress.com/e/_c31dhgCB",
    amazonUrl: "https://amzn.to/3UEtMQ5",
    countries: {
      se: { amazon: "https://amzn.to/3UEtMQ5", aliExpress: "https://s.click.aliexpress.com/e/_c31dhgCB" },
      uk: { amazon: "https://amzn.to/3UEtMQ5", aliExpress: "https://s.click.aliexpress.com/e/_c31dhgCB" },
      us: { amazon: "https://amzn.to/3UEtMQ5", aliExpress: "https://s.click.aliexpress.com/e/_c31dhgCB" },
      ca: { amazon: "https://amzn.to/3UEtMQ5", aliExpress: "https://s.click.aliexpress.com/e/_c31dhgCB" },
      pl: { amazon: "https://amzn.to/3UEtMQ5", aliExpress: "https://s.click.aliexpress.com/e/_c31dhgCB" },
    }
  },
  {
    id: "smart-lodstation-t12",
    category: "Lödstationer",
    image: "https://images.unsplash.com/photo-1597424214723-5e9e0499e71e?w=600&auto=format&fit=crop&q=80",
    name: "Smart Lödstation (Snabbvärmande T12/JBC)",
    description: "Värmer upp till 350°C på bara ett par sekunder. Mycket stabil temperaturkontroll och smidiga integrerade spetsar som gör lödning till en fröjd.",
    tip: "En böjd 'knife tip' (knivspets) är helt oslagbar för att rengöra och jämna till gamla lödpads.",
    recommendedFor: "Verkstad & Hemmaproffs",
    i18n: {
      en: {
        name: "Smart Soldering Station (Rapid-Heating T12/JBC)",
        description: "Heats up to 350°C in just a few seconds. Highly stable temperature control and integrated tips that make soldering effortless.",
        tip: "A curved knife tip is unbeatable for cleaning and leveling old solder pads.",
        recommendedFor: "Workshop & Hobbyists"
      },
      pl: {
        name: "Inteligentna Stacja Lutownicza (Szybkie nagrzewanie T12/JBC)",
        description: "Nagrzewa się do 350°C w zaledwie kilka sekund. Bardzo stabilna kontrola temperatury i zintegrowane groty, które sprawiają, że lutowanie to czysta przyjemność.",
        tip: "Zakrzywiony grot typu 'knife tip' (nóż) jest bezkonkurencyjny do czyszczenia i wyrównywania starych padów lutowniczych.",
        recommendedFor: "Warsztat i Pasjonaci"
      }
    },
    aliExpressUrl: "https://s.click.aliexpress.com/e/_c3x6LELH",
    amazonUrl: "https://amzn.to/4ywSTTj",
    countries: {
      se: { amazon: "https://amzn.to/4ywSTTj", aliExpress: "https://s.click.aliexpress.com/e/_c3x6LELH" },
      uk: { amazon: "https://amzn.to/4ywSTTj", aliExpress: "https://s.click.aliexpress.com/e/_c3x6LELH" },
      us: { amazon: "https://amzn.to/4ywSTTj", aliExpress: "https://s.click.aliexpress.com/e/_c3x6LELH" },
      ca: { amazon: "https://amzn.to/4ywSTTj", aliExpress: "https://s.click.aliexpress.com/e/_c3x6LELH" },
      pl: { amazon: "https://amzn.to/4ywSTTj", aliExpress: "https://s.click.aliexpress.com/e/_c3x6LELH" },
    }
  },
  {
    id: "varmluftsstation-smd",
    category: "Lödstationer",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&auto=format&fit=crop&q=80",
    name: "Digital Varmluftsstation för SMD",
    description: "Krävs för att avlöda HDMI-portar, minneskretsar, switchar och USB-C kontakter utan att slita loss kopparbanor från moderkortet.",
    tip: "Använd alltid aluminiumtejp för att skärma av och skydda närliggande plastkontakter från värmen.",
    recommendedFor: "Portbyten & Chipreparation",
    i18n: {
      en: {
        name: "Digital Hot Air Rework Station for SMD",
        description: "Required for desoldering HDMI ports, memory chips, switches, and USB-C connectors without damaging PCB copper traces.",
        tip: "Always use aluminum shielding tape to protect nearby plastic connectors from high heat.",
        recommendedFor: "Port Replacements & SMD Rework"
      },
      pl: {
        name: "Cyfrowa Stacja na Gorące Powietrze (Hot Air SMD)",
        description: "Niezbędna do wylutowywania portów HDMI, układów pamięci, przełączników i złączy USB-C bez ryzyka uszkodzenia ścieżek na płycie.",
        tip: "Zawsze używaj aluminiowej taśmy termicznej, aby zabezpieczyć sąsiednie plastikowe złącza przed wysoką temperaturą.",
        recommendedFor: "Wymiana portów i regeneracja SMD"
      }
    },
    aliExpressUrl: "https://s.click.aliexpress.com/e/_c4ocvABN",
    amazonUrl: "https://amzn.to/4xLQHHE",
    countries: {
      se: { amazon: "https://amzn.to/4xLQHHE", aliExpress: "https://s.click.aliexpress.com/e/_c4ocvABN" },
      uk: { amazon: "https://amzn.to/4xLQHHE", aliExpress: "https://s.click.aliexpress.com/e/_c4ocvABN" },
      us: { amazon: "https://amzn.to/4xLQHHE", aliExpress: "https://s.click.aliexpress.com/e/_c4ocvABN" },
      ca: { amazon: "https://amzn.to/4xLQHHE", aliExpress: "https://s.click.aliexpress.com/e/_c4ocvABN" },
      pl: { amazon: "https://amzn.to/4xLQHHE", aliExpress: "https://s.click.aliexpress.com/e/_c4ocvABN" },
    }
  },
  {
    id: "flussmedel-no-clean",
    category: "Kemi & Fluss",
    image: "https://images.unsplash.com/photo-1617791160505-6f00b51616ec?w=600&auto=format&fit=crop&q=80",
    name: "Högpresterande Flussmedel (No-Clean Flux)",
    description: "Fluss är hemligheten bakom varje perfekt lödning. Det bryter ytoxiden, leder värmen och gör att lödtennet flyter ut jämnt och blankt.",
    tip: "Snåla aldrig med flussmedel vid finlödning. Det förhindrar tenbryggor mellan mikroskopiska ben.",
    recommendedFor: "All typ av elektronikreparation",
    i18n: {
      en: {
        name: "High-Performance No-Clean Flux",
        description: "Flux is the true secret behind every perfect solder joint. Breaks oxide layers, transfers heat, and makes solder flow smoothly and shiny.",
        tip: "Never skimp on flux during micro-soldering. It prevents solder bridges between microscopic pins.",
        recommendedFor: "All Electronic Repairs"
      },
      pl: {
        name: "Wysokiej Jakości Topnik (No-Clean Flux)",
        description: "Topnik to prawdziwy sekret każdego idealnego lutowania. Usuwa tlenki, wspomaga przepływ ciepła i sprawia, że cyna rozpływa się gładko i błyszcząco.",
        tip: "Nigdy nie oszczędzaj na topniku przy mikrolutowaniu. Skutecznie zapobiega powstawaniu zwarć między mikro-nóżkami.",
        recommendedFor: "Wszelkie naprawy elektroniki"
      }
    },
    aliExpressUrl: "https://s.click.aliexpress.com/e/_c36oSknb",
    amazonUrl: "https://amzn.to/4h30d21",
    countries: {
      se: { amazon: "https://amzn.to/4h30d21", aliExpress: "https://s.click.aliexpress.com/e/_c36oSknb" },
      uk: { amazon: "https://amzn.to/4h30d21", aliExpress: "https://s.click.aliexpress.com/e/_c36oSknb" },
      us: { amazon: "https://amzn.to/4h30d21", aliExpress: "https://s.click.aliexpress.com/e/_c36oSknb" },
      ca: { amazon: "https://amzn.to/4h30d21", aliExpress: "https://s.click.aliexpress.com/e/_c36oSknb" },
      pl: { amazon: "https://amzn.to/4h30d21", aliExpress: "https://s.click.aliexpress.com/e/_c36oSknb" },
    }
  },
  {
    id: "precisionsskruvmejselsats",
    category: "Handverktyg",
    image: "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?w=600&auto=format&fit=crop&q=80",
    name: "Precisionsskruvmejselsats för Konsoler",
    description: "Komplett bitsats med alla säkerhetsbits: Torx Security (TR8, TR9, TR10 för PS5/Xbox), Tri-Wing för Nintendo Switch samt Philips och prying tools.",
    tip: "Härdade S2-stålbits förhindrar att du slinter och skadar de känsliga skruvskallarna i konsolen.",
    recommendedFor: "Konsolöppning & Moddning",
    i18n: {
      en: {
        name: "Precision Screwdriver Kit for Game Consoles",
        description: "Comprehensive bit set including all security bits: Torx Security (TR8, TR9, TR10 for PS5/Xbox), Tri-Wing for Nintendo Switch, plus Philips and prying tools.",
        tip: "Hardened S2 steel bits prevent stripping delicate console screws.",
        recommendedFor: "Console Teardowns & Modding"
      },
      pl: {
        name: "Precyzyjny Zestaw Wkrętaków do Konsol",
        description: "Kompletny zestaw bitów zawierający wszystkie końcówki zabezpieczające: Torx Security (TR8, TR9, TR10 do PS5/Xbox), Tri-Wing do Nintendo Switch oraz Philips i narzędzia do otwierania.",
        tip: "Bity z hartowanej stali S2 zapobiegają obrabianiu delikatnych łbów śrub w konsolach.",
        recommendedFor: "Rozbieranie i modyfikacje konsol"
      }
    },
    aliExpressUrl: "https://s.click.aliexpress.com/e/_c3Jgv3D9",
    amazonUrl: "https://amzn.to/4xNEO3T",
    countries: {
      se: { amazon: "https://amzn.to/4xNEO3T", aliExpress: "https://s.click.aliexpress.com/e/_c3Jgv3D9" },
      uk: { amazon: "https://amzn.to/4xNEO3T", aliExpress: "https://s.click.aliexpress.com/e/_c3Jgv3D9" },
      us: { amazon: "https://amzn.to/4xNEO3T", aliExpress: "https://s.click.aliexpress.com/e/_c3Jgv3D9" },
      ca: { amazon: "https://amzn.to/4xNEO3T", aliExpress: "https://s.click.aliexpress.com/e/_c3Jgv3D9" },
      pl: { amazon: "https://amzn.to/4xNEO3T", aliExpress: "https://s.click.aliexpress.com/e/_c3Jgv3D9" },
    }
  },
  {
    id: "avlodningsflata-koppar",
    category: "Förbrukning",
    image: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=600&auto=format&fit=crop&q=80",
    name: "Avlödningsfläta av Ren Koppar (Solder Wick)",
    description: "Tätt vävd kopparfläta som suger upp gammalt lödtenn från hålmonterade komponenter och pads som en svamp.",
    tip: "Applicera lite extra färskt flussmedel direkt på flätan innan du sätter lödkolven emot för blixtsnabb absorption.",
    recommendedFor: "Rengöring av moderkort & pads",
    i18n: {
      en: {
        name: "Pure Copper Desoldering Braid (Solder Wick)",
        description: "Dense weave copper braid that draws up old solder from through-hole joints and surface pads like a sponge.",
        tip: "Apply a little fresh flux onto the wick before touching it with your iron for rapid solder absorption.",
        recommendedFor: "Pad & PCB Cleaning"
      },
      pl: {
        name: "Miedziana Plecionka Rozlutownicza (Solder Wick)",
        description: "Gęsto pleciona miedziana taśma, która wciąga starą cynę z padów i otworów montażowych niczym gąbka.",
        tip: "Nałóż odrobinę świeżego topnika bezpośrednio na taśmę przed przyłożeniem lutownicy, aby uzyskać błyskawiczne wchłanianie.",
        recommendedFor: "Czyszczenie padów i płyt głównych"
      }
    },
    aliExpressUrl: "https://s.click.aliexpress.com/e/_c31UQP2J",
    amazonUrl: "https://amzn.to/3UQAUZA",
    countries: {
      se: { amazon: "https://amzn.to/3UQAUZA", aliExpress: "https://s.click.aliexpress.com/e/_c31UQP2J" },
      uk: { amazon: "https://amzn.to/3UQAUZA", aliExpress: "https://s.click.aliexpress.com/e/_c31UQP2J" },
      us: { amazon: "https://amzn.to/3UQAUZA", aliExpress: "https://s.click.aliexpress.com/e/_c31UQP2J" },
      ca: { amazon: "https://amzn.to/3UQAUZA", aliExpress: "https://s.click.aliexpress.com/e/_c31UQP2J" },
      pl: { amazon: "https://amzn.to/3UQAUZA", aliExpress: "https://s.click.aliexpress.com/e/_c31UQP2J" },
    }
  },
  {
    id: "esd-precisionspincetter",
    category: "Handverktyg",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&auto=format&fit=crop&q=80",
    name: "ESD-säkra Precisionspincetter",
    description: "Ultrafina pincetter med hög precision för att hantera 0402/0201 SMD-motstånd, kondensatorer och hålla byglingstråd.",
    tip: "Ha alltid en rak och en böjd pincett redo vid mikroskopet för bästa grepp i trånga utrymmen.",
    recommendedFor: "Mikrokomponenter & Felsökning",
    i18n: {
      en: {
        name: "ESD-Safe Precision Tweezers",
        description: "Ultra-fine precision tweezers for handling 0402/0201 SMD resistors, capacitors, and jumper wires.",
        tip: "Always keep one straight and one curved tweezer ready at your microscope station for tight spaces.",
        recommendedFor: "Micro-Components & Jumper Wires"
      },
      pl: {
        name: "Precyzyjne Pęsety Antystatyczne ESD",
        description: "Niezwykle precyzyjne pęsety do manipulowania rezystorami SMD 0402/0201, kondensatorami i układania mikroskopijnych krosówek (jumperów).",
        tip: "Zawsze miej pod mikroskopem jedną prostą i jedną zakrzywioną pęsetę, aby wygodnie sięgać w ciasne miejsca.",
        recommendedFor: "Mikroelementy i regeneracja ścieżek"
      }
    },
    aliExpressUrl: "https://s.click.aliexpress.com/e/_c2yKS1rP",
    amazonUrl: "https://amzn.to/4xXuhTW",
    countries: {
      se: { amazon: "https://amzn.to/4xXuhTW", aliExpress: "https://s.click.aliexpress.com/e/_c2yKS1rP" },
      uk: { amazon: "https://amzn.to/4xXuhTW", aliExpress: "https://s.click.aliexpress.com/e/_c2yKS1rP" },
      us: { amazon: "https://amzn.to/4xXuhTW", aliExpress: "https://s.click.aliexpress.com/e/_c2yKS1rP" },
      ca: { amazon: "https://amzn.to/4xXuhTW", aliExpress: "https://s.click.aliexpress.com/e/_c2yKS1rP" },
      pl: { amazon: "https://amzn.to/4xXuhTW", aliExpress: "https://s.click.aliexpress.com/e/_c2yKS1rP" },
    }
  },
  {
    id: "kretskortshallare-fixture",
    category: "Handverktyg",
    image: "https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?w=600&auto=format&fit=crop&q=80",
    name: "Magnetisk Kretskortshållare (PCB Fixture)",
    description: "Stabil metallhållare som håller kontrollkretskortet eller konsolmoderkortet orörligt när du löder.",
    tip: "En tung basplatta gör att kortet inte glider iväg när du trycker med varmluftspennan.",
    recommendedFor: "Stabilitet vid verkstadsbänken",
    i18n: {
      en: {
        name: "Magnetic PCB Holder / Board Fixture",
        description: "Heavy-duty metal fixture that holds controller boards or console motherboards rock-solid during soldering.",
        tip: "A heavy base plate ensures the PCB never shifts or slides when applying hot air pressure.",
        recommendedFor: "Workbench Stability"
      },
      pl: {
        name: "Magnetyczny Uchwyt do Płyt PCB",
        description: "Stabilny, solidny metalowy uchwyt, który pewnie trzyma płytę kontrolera lub konsoli podczas precyzyjnego lutowania.",
        tip: "Ciężka podstawa zapobiega przesuwaniu się płyty pod wpływem podmuchu gorącego powietrza ze stacji.",
        recommendedFor: "Stabilność na stanowisku roboczym"
      }
    },
    aliExpressUrl: "https://s.click.aliexpress.com/e/_c3PG0bfp",
    amazonUrl: "https://amzn.to/4h1JM5Z",
    countries: {
      se: { amazon: "https://amzn.to/4h1JM5Z", aliExpress: "https://s.click.aliexpress.com/e/_c3PG0bfp" },
      uk: { amazon: "https://amzn.to/4h1JM5Z", aliExpress: "https://s.click.aliexpress.com/e/_c3PG0bfp" },
      us: { amazon: "https://amzn.to/4h1JM5Z", aliExpress: "https://s.click.aliexpress.com/e/_c3PG0bfp" },
      ca: { amazon: "https://amzn.to/4h1JM5Z", aliExpress: "https://s.click.aliexpress.com/e/_c3PG0bfp" },
      pl: { amazon: "https://amzn.to/4h1JM5Z", aliExpress: "https://s.click.aliexpress.com/e/_c3PG0bfp" },
    }
  }
];

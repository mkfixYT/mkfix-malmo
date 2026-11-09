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
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S71ceff0736244f708b24a4a4c57a8e04X.jpg?has_lang=1&ver=2_960x960q75.jpg_.avif",
    name: "Trinokulärt Stereo Mikroskop - Eakins",
    description: "Oumbärligt mikroskop för mikrolödning, felsökning av kretskort och byte av HDMI-portar. Ger kristallklar optisk förstoring och bra skärpedjup.",
    tip: "Kombinera med en 0.5x Barlow-lins (medföljer) för optimalt arbetsavstånd till lödspetsen och varmluftspennan.",
    recommendedFor: "Mikrolödning & SMD",
    i18n: {
      en: {
        name: "Trinocular Stereo Microscope - Eakins",
        description: "Essential microscope for micro-soldering, board diagnostics, and HDMI port replacement. Offers crystal clear optical magnification and great depth of field.",
        tip: "Combine with a 0.5x Barlow lens (included) for optimal working distance to your soldering tip and hot air wand.",
        recommendedFor: "Micro-soldering & SMD"
      },
      pl: {
        name: "Trójokularowy Mikroskop Stereoskopowy - Eakins",
        description: "Niezbędny mikroskop do mikrolutowania, diagnostyki płyt głównych i wymiany portów HDMI. Zapewnia krystalicznie czyste powiększenie optyczne i dużą głębię ostrości.",
        tip: "Połącz z soczewką Barl (w zestawie) owa 0.5x, aby uzyskać optymalną odległość roboczą od grota lutownicy i dyszy gorącego powietrza.",
        recommendedFor: "Mikrolutowanie i SMD"
      }
    },
    aliExpressUrl: "https://s.click.aliexpress.com/e/_c31a1rLd",
    amazonUrl: "https://link.amazon/B0eb9hiKS",
    countries: {
      se: { amazon: "https://amzn.to/3UEtMQ5", aliExpress: "https://s.click.aliexpress.com/e/_c31dhgCB" },
      uk: { amazon: "https://amzn.to/3UEtMQ5", aliExpress: "https://s.click.aliexpress.com/e/_c31dhgCB" },
      us: { amazon: "https://amzn.to/3UEtMQ5", aliExpress: "https://s.click.aliexpress.com/e/_c31dhgCB" },
      ca: { amazon: "https://amzn.to/3UEtMQ5", aliExpress: "https://s.click.aliexpress.com/e/_c31dhgCB" },
      pl: { amazon: "https://amzn.to/3UEtMQ5", aliExpress: "https://s.click.aliexpress.com/e/_c31dhgCB" },
    }
  },
  {
    id: "digitalt-mikroskop",
    category: "Mikroskop",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sfcba6306ede14847a86d855f27f1b5b2j.jpg?has_lang=1&ver=2_960x960q75.jpg_.avif",
    name: "Digitalt mikroskop",
    description: "Visar förstorad bild på skärmen för lättare lödning",
    tip: "Kan kombineras med trinokulärt mikroskop för smidig översiktsbild.",
    recommendedFor: "Inspektion & Enkel Lödning",
    i18n: {
      en: {
        name: "Digital microscope",
        description: "Displays a magnified image on the screen for easier soldering",
        tip: "Can be combined with a trinocular microscope.",
        recommendedFor: "PCB Inspection & Soldering"
      },
      pl: {
        name: "Mikroskop cyfrowy",
        description: "Wyświetla powiększony obraz na ekranie, ułatwiając lutowanie",
        tip: "Można go połączyć z mikroskopem trinokularowym.",
        recommendedFor: "Inspekcja PCB i lutowanie"
      }
    },
    aliExpressUrl: "https://s.click.aliexpress.com/e/_c3wy8U95",
    amazonUrl: "https://link.amazon/B0g9PmKO2",
    countries: {
      // se: { amazon: "https://amzn.to/3UQAUZA", aliExpress: "https://s.click.aliexpress.com/e/_c31UQP2J" },
      // uk: { amazon: "https://amzn.to/3UQAUZA", aliExpress: "https://s.click.aliexpress.com/e/_c31UQP2J" },
      // us: { amazon: "https://amzn.to/3UQAUZA", aliExpress: "https://s.click.aliexpress.com/e/_c31UQP2J" },
      // ca: { amazon: "https://amzn.to/3UQAUZA", aliExpress: "https://s.click.aliexpress.com/e/_c31UQP2J" },
      // pl: { amazon: "https://amzn.to/3UQAUZA", aliExpress: "https://s.click.aliexpress.com/e/_c31UQP2J" },
    }
  },
  {
    id: "smart-lodstation-t12",
    category: "Lödstationer",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/H417122ded6a9456faba039b3922ce931J.jpg?has_lang=1&ver=2_960x960q75.jpg_.avif",
    name: "Smart Lödstation KSGER T12",
    description: "Värmer upp till 450°C på bara ett par sekunder. Mycket stabil temperaturkontroll och smidiga integrerade spetsar som gör lödning till en fröjd.",
    tip: "Köp olika T12-spetsar för att klara olika typer av jobb.",
    recommendedFor: "Allround Lödning & Precision",
    i18n: {
      en: {
        name: "Smart Soldering station KSGER T12",
        description: "Heats up to 450°C in just a couple of seconds. Highly stable temperature control and convenient integrated tips that make soldering a pleasure.",
        tip: "Buy different T12 tips to handle various types of jobs.",
        recommendedFor: "Allround Soldering & Precision"
      },
      pl: {
        name: "Inteligentna Stacja Lutownicza KSGER T12",
        description: "Nagrzewa się do 450°C w zaledwie kilka sekund. Bardzo stabilna kontrola temperatury i wygodne, zintegrowane groty, które sprawiają, że lutowanie staje się prawdziwą przyjemnością.",
        tip: "Kup różne groty T12, aby poradzić sobie z różnymi rodzajami prac.",
        recommendedFor: "Uniwersalne lutowanie i precyzja"
      }
    },
    aliExpressUrl: "https://s.click.aliexpress.com/e/_c43qccvV",
    amazonUrl: "https://link.amazon/B0inmywHs",
    countries: {
      // se: { amazon: "https://amzn.to/4ywSTTj", aliExpress: "https://s.click.aliexpress.com/e/_c3x6LELH" },
      // uk: { amazon: "https://amzn.to/4ywSTTj", aliExpress: "https://s.click.aliexpress.com/e/_c3x6LELH" },
      // us: { amazon: "https://amzn.to/4ywSTTj", aliExpress: "https://s.click.aliexpress.com/e/_c3x6LELH" },
      // ca: { amazon: "https://amzn.to/4ywSTTj", aliExpress: "https://s.click.aliexpress.com/e/_c3x6LELH" },
      // pl: { amazon: "https://amzn.to/4ywSTTj", aliExpress: "https://s.click.aliexpress.com/e/_c3x6LELH" },
    }
  },
  {
    id: "t12-Lodkolvshandtag",
    category: "Lödstationer",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S67b65e46fd4b4ce6b0101fcd82d56b70D.jpg_960x960q75.jpg_.avif",
    name: "T12 Lödkolvshandtag",
    description: "Ett ergonomiskt och värmebeständigt T12-handtag med snabbfäste för lödspetsar.",
    recommendedFor: "T12 Lödstationer & Handtagsbyte",
    i18n: {
      en: {
        name: "T12 Soldering Iron Handle",
        description: "A great ergonomic T12 soldering iron handle.",
        recommendedFor: "T12 Soldering Stations & Replacement"
      },
      pl: {
        name: "Rączka lutownicy T12",
        description: "Świetna, ergonomiczna rączka lutownicy T12.",
        recommendedFor: "Stacje lutownicze T12 i wymiana kolby"
      }
    },
    aliExpressUrl: "https://s.click.aliexpress.com/e/_c4t6nfRH",
    amazonUrl: "https://link.amazon/B0bpvCf1A",
    countries: {
      // se: { amazon: "https://amzn.to/3UQAUZA", aliExpress: "https://s.click.aliexpress.com/e/_c31UQP2J" },
      // uk: { amazon: "https://amzn.to/3UQAUZA", aliExpress: "https://s.click.aliexpress.com/e/_c31UQP2J" },
      // us: { amazon: "https://amzn.to/3UQAUZA", aliExpress: "https://s.click.aliexpress.com/e/_c31UQP2J" },
      // ca: { amazon: "https://amzn.to/3UQAUZA", aliExpress: "https://s.click.aliexpress.com/e/_c31UQP2J" },
      // pl: { amazon: "https://amzn.to/3UQAUZA", aliExpress: "https://s.click.aliexpress.com/e/_c31UQP2J" },
    }
  },
  {
    id: "varmluftsstation-smd",
    category: "Lödstationer",
    image: "https://m.media-amazon.com/images/I/618Kl2eNOPL._AC_SX522_.jpg",
    name: "BST-863 Digital Varmluftsstation för SMD",
    description: "Krävs för att avlöda HDMI-portar, minneskretsar, switchar och USB-C kontakter utan att slita loss kopparbanor från moderkortet.",
    tip: "Använd alltid aluminiumtejp för att skärma av och skydda närliggande plastkontakter från värmen.",
    recommendedFor: "Portbyten & Chipreparation",
    i18n: {
      en: {
        name: "BST-863 Digital Hot Air Rework Station for SMD",
        description: "Required for desoldering HDMI ports, memory chips, switches, and USB-C connectors without damaging PCB copper traces.",
        tip: "Always use aluminum shielding tape to protect nearby plastic connectors from high heat.",
        recommendedFor: "Port Replacements & SMD Rework"
      },
      pl: {
        name: "BST-863 Cyfrowa Stacja na Gorące Powietrze (Hot Air SMD)",
        description: "Niezbędna do wylutowywania portów HDMI, układów pamięci, przełączników i złączy USB-C bez ryzyka uszkodzenia ścieżek na płycie.",
        tip: "Zawsze używaj aluminiowej taśmy termicznej, aby zabezpieczyć sąsiednie plastikowe złącza przed wysoką temperaturą.",
        recommendedFor: "Wymiana portów i regeneracja SMD"
      }
    },
    aliExpressUrl: "https://s.click.aliexpress.com/e/_c43D1MSR",
    amazonUrl: "https://link.amazon/B05hOjLbs",
    countries: {
      // se: { amazon: "https://amzn.to/4xLQHHE", aliExpress: "https://s.click.aliexpress.com/e/_c4ocvABN" },
      // uk: { amazon: "https://amzn.to/4xLQHHE", aliExpress: "https://s.click.aliexpress.com/e/_c4ocvABN" },
      // us: { amazon: "https://amzn.to/4xLQHHE", aliExpress: "https://s.click.aliexpress.com/e/_c4ocvABN" },
      // ca: { amazon: "https://amzn.to/4xLQHHE", aliExpress: "https://s.click.aliexpress.com/e/_c4ocvABN" },
      // pl: { amazon: "https://amzn.to/4xLQHHE", aliExpress: "https://s.click.aliexpress.com/e/_c4ocvABN" },
    }
  },
  {
    id: "flussmedel-no-clean",
    category: "Kemi & Fluss",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S58891193d8f6433398db78955c259f89X.jpg_960x960q75.jpg_.avif",
    name: "Högpresterande Flussmedel (No-Clean Flux)",
    description: "Fluss är hemligheten bakom varje perfekt lödning. Det bryter ytoxiden, leder värmen och gör att lödtennet flyter ut jämnt och blankt.",
    tip: "Snåla aldrig med flussmedel vid finlödning. Det förhindrar tenbryggor mellan mikroskopiska ben.",
    recommendedFor: "Mikrolödning & Ren Flytbarhet",
    i18n: {
      en: {
        name: "High-Performance No-Clean Flux",
        description: "Flux is the true secret behind every perfect solder joint. Breaks oxide layers, transfers heat, and makes solder flow smoothly and shiny.",
        tip: "Never skimp on flux during micro-soldering. It prevents solder bridges between microscopic pins.",
        recommendedFor: "Micro-soldering & Clean Flow"
      },
      pl: {
        name: "Wysokiej Jakości Topnik (No-Clean Flux)",
        description: "Topnik to prawdziwy sekret każdego idealnego lutowania. Usuwa tlenki, wspomaga przepływ ciepła i sprawia, że cyna rozpływa się gładko i błyszcząco.",
        tip: "Nigdy nie oszczędzaj na topniku przy mikrolutowaniu. Skutecznie zapobiega powstawaniu zwarć między mikro-nóżkami.",
        recommendedFor: "Mikrolutowanie i czysty rozpływ"
      }
    },
    aliExpressUrl: "https://s.click.aliexpress.com/e/_c4cLxypl",
    amazonUrl: "https://link.amazon/B0bsU1wH3",
    countries: {
      // se: { amazon: "https://amzn.to/4h30d21", aliExpress: "https://s.click.aliexpress.com/e/_c36oSknb" },
      // uk: { amazon: "https://amzn.to/4h30d21", aliExpress: "https://s.click.aliexpress.com/e/_c36oSknb" },
      // us: { amazon: "https://amzn.to/4h30d21", aliExpress: "https://s.click.aliexpress.com/e/_c36oSknb" },
      // ca: { amazon: "https://amzn.to/4h30d21", aliExpress: "https://s.click.aliexpress.com/e/_c36oSknb" },
      // pl: { amazon: "https://amzn.to/4h30d21", aliExpress: "https://s.click.aliexpress.com/e/_c36oSknb" },
    }
  },
  {
    id: "precisionsskruvmejselsats",
    category: "Handverktyg",
    image: "https://m.media-amazon.com/images/I/81knjlTFivL._AC_SL1500_.jpg",
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
    aliExpressUrl: "https://s.click.aliexpress.com/e/_c3cD5Maf",
    amazonUrl: "https://link.amazon/B0cedbePZ",
    countries: {
      // se: { amazon: "https://amzn.to/4xNEO3T", aliExpress: "https://s.click.aliexpress.com/e/_c3Jgv3D9" },
      // uk: { amazon: "https://amzn.to/4xNEO3T", aliExpress: "https://s.click.aliexpress.com/e/_c3Jgv3D9" },
      // us: { amazon: "https://amzn.to/4xNEO3T", aliExpress: "https://s.click.aliexpress.com/e/_c3Jgv3D9" },
      // ca: { amazon: "https://amzn.to/4xNEO3T", aliExpress: "https://s.click.aliexpress.com/e/_c3Jgv3D9" },
      // pl: { amazon: "https://amzn.to/4xNEO3T", aliExpress: "https://s.click.aliexpress.com/e/_c3Jgv3D9" },
    }
  },
  {
    id: "avlodningsflata-koppar",
    category: "Förbrukning",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sc4b8ae91f79d4efb99c1979d2770c24cm.jpg_960x960q75.jpg_.avif",
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
    aliExpressUrl: "https://s.click.aliexpress.com/e/_c2y2JNi7",
    amazonUrl: "https://link.amazon/B0hRPg2Lw",
    countries: {
      // se: { amazon: "https://amzn.to/3UQAUZA", aliExpress: "https://s.click.aliexpress.com/e/_c31UQP2J" },
      // uk: { amazon: "https://amzn.to/3UQAUZA", aliExpress: "https://s.click.aliexpress.com/e/_c31UQP2J" },
      // us: { amazon: "https://amzn.to/3UQAUZA", aliExpress: "https://s.click.aliexpress.com/e/_c31UQP2J" },
      // ca: { amazon: "https://amzn.to/3UQAUZA", aliExpress: "https://s.click.aliexpress.com/e/_c31UQP2J" },
      // pl: { amazon: "https://amzn.to/3UQAUZA", aliExpress: "https://s.click.aliexpress.com/e/_c31UQP2J" },
    }
  },
  {
    id: "t12-set",
    category: "Lödstationer",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sb3d06192a9254e55b40d07e686b5d6cdo.jpeg_960x960q75.jpeg_.avif",
    name: "Set av T12 Lödspetsar",
    description: "Ett set av olika typer av T12-lödspetsar (knivspets, mejsel och konisk).",
    tip: "Olika lödspetsar är bra för olika typer av jobb: knivspets (K) är suverän för draglödning.",
    recommendedFor: "Precision & Hålmonterat (T12)",
    i18n: {
      en: {
        name: "T12 Soldering Tip Set",
        description: "A set of different types of T12 soldering tips (knife, chisel, and conical).",
        tip: "Different soldering tips are suitable for different types of jobs.",
        recommendedFor: "Precision & Through-hole (T12)"
      },
      pl: {
        name: "Zestaw grotów lutowniczych T12",
        description: "Zestaw różnych rodzajów grotów lutowniczych T12 (ścięte, dłuto i stożkowe).",
        tip: "Różne groty lutownicze nadają się do różnych rodzajów prac.",
        recommendedFor: "Precyzja i montaż przewlekany (T12)"
      }
    },
    aliExpressUrl: "https://s.click.aliexpress.com/e/_c4W7nvqb",
    amazonUrl: "https://link.amazon/B0j1b36QX",
    countries: {
      // se: { amazon: "https://amzn.to/3UQAUZA", aliExpress: "https://s.click.aliexpress.com/e/_c31UQP2J" },
      // uk: { amazon: "https://amzn.to/3UQAUZA", aliExpress: "https://s.click.aliexpress.com/e/_c31UQP2J" },
      // us: { amazon: "https://amzn.to/3UQAUZA", aliExpress: "https://s.click.aliexpress.com/e/_c31UQP2J" },
      // ca: { amazon: "https://amzn.to/3UQAUZA", aliExpress: "https://s.click.aliexpress.com/e/_c31UQP2J" },
      // pl: { amazon: "https://amzn.to/3UQAUZA", aliExpress: "https://s.click.aliexpress.com/e/_c31UQP2J" },
    }
  },
  {
    id: "lodtenn",
    category: "Förbrukning",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S787c3118c53446eaa4a75394ccdc4ebeg.jpg_960x960q75.jpg_.avif",
    name: "Lödtenn",
    description: "Kvalitativ lödtråd med flusskärna för pålitliga lödfogar på kretskort.",
    recommendedFor: "Kretskortslödning & Montering",
    i18n: {
      en: {
        name: "Solder Wire",
        description: "Quality rosin-core solder wire for reliable circuit board joints.",
        recommendedFor: "Circuit Board Soldering & Assembly"
      },
      pl: {
        name: "Cyna lutownicza z topnikiem",
        description: "Wysokiej jakości cyna z rdzeniem topnikowym do niezawodnych połączeń lutowanych.",
        recommendedFor: "Lutowanie płytek drukowanych i montaż"
      }
    },
    aliExpressUrl: "https://s.click.aliexpress.com/e/_c3ObAiMj",
    amazonUrl: "https://link.amazon/B0hzAOIaH",
    countries: {
      // se: { amazon: "https://amzn.to/3UQAUZA", aliExpress: "https://s.click.aliexpress.com/e/_c31UQP2J" },
      // uk: { amazon: "https://amzn.to/3UQAUZA", aliExpress: "https://s.click.aliexpress.com/e/_c31UQP2J" },
      // us: { amazon: "https://amzn.to/3UQAUZA", aliExpress: "https://s.click.aliexpress.com/e/_c31UQP2J" },
      // ca: { amazon: "https://amzn.to/3UQAUZA", aliExpress: "https://s.click.aliexpress.com/e/_c31UQP2J" },
      // pl: { amazon: "https://amzn.to/3UQAUZA", aliExpress: "https://s.click.aliexpress.com/e/_c31UQP2J" },
    }
  },

  {
    id: "nosponge",
    category: "Förbrukning",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S0947064e7b8a49a9949f62ea557ac34bF.jpg_960x960q75.jpg_.avif",
    name: "Nanosponge (Rengöringssvamp)",
    description: "Utmärkta för att rengöra kretskort samt ta bort använt flussmedel.",
    tip: "Häll lite isopropanol alkohol på nanospongen för ännu bättre rengöringseffekt.",
    recommendedFor: "Kretskortsrengöring & Flussborttagning",
    i18n: {
      en: {
        name: "Nanosponge PCB Cleaner",
        description: "Excellent for cleaning circuit boards and removing burnt flux residue.",
        tip: "Pour a little isopropyl alcohol onto the nano sponge for even better cleaning performance.",
        recommendedFor: "PCB Cleaning & Flux Removal"
      },
      pl: {
        name: "Nanogąbka do czyszczenia PCB",
        description: "Doskonale nadaje się do czyszczenia płytek drukowanych oraz usuwania zużytego topnika.",
        tip: "Nalej odrobinę alkoholu izopropylowego na nanogąbkę, aby uzyskać jeszcze lepszy efekt czyszczenia.",
        recommendedFor: "Czyszczenie PCB i usuwanie topnika"
      }
    },
    aliExpressUrl: "https://s.click.aliexpress.com/e/_c436remR",
    amazonUrl: "https://link.amazon/B00K4zdIf",
    countries: {
      // se: { amazon: "https://amzn.to/3UQAUZA", aliExpress: "https://s.click.aliexpress.com/e/_c31UQP2J" },
      // uk: { amazon: "https://amzn.to/3UQAUZA", aliExpress: "https://s.click.aliexpress.com/e/_c31UQP2J" },
      // us: { amazon: "https://amzn.to/3UQAUZA", aliExpress: "https://s.click.aliexpress.com/e/_c31UQP2J" },
      // ca: { amazon: "https://amzn.to/3UQAUZA", aliExpress: "https://s.click.aliexpress.com/e/_c31UQP2J" },
      // pl: { amazon: "https://amzn.to/3UQAUZA", aliExpress: "https://s.click.aliexpress.com/e/_c31UQP2J" },
    }
  },
  {
    id: "aluminium-tejp",
    category: "Förbrukning",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/H77e863a5c82c430c85277c012e477f10e.jpg_960x960q75.jpg_.avif",
    name: "Aluminiumtejp (Värmesköld)",
    description: "Högtemperaturbeständig tejp som skyddar känsliga komponenter från intensiv värme.",
    tip: "Sätt aluminiumtejp över plastkontakter när du använder varmluft så smälter de inte.",
    recommendedFor: "Värmeskydd vid Varmluft",
    i18n: {
      en: {
        name: "Heat-Resistant Aluminium Tape",
        description: "Used to shield sensitive components and plastic connectors from intense heat.",
        tip: "Place aluminium tape over plastic components when using hot air to prevent them from melting.",
        recommendedFor: "Heat Shielding for Hot Air Rework"
      },
      pl: {
        name: "Taśma aluminiowa termoodporna",
        description: "Służy do ochrony delikatnych komponentów i plastików przed wysoką temperaturą.",
        tip: "Umieść taśmę aluminiową na plastikowych komponentach podczas korzystania z gorącego powietrza, aby zapobiec ich stopieniu.",
        recommendedFor: "Ochrona termiczna przy gorącym powietrzu"
      }
    },
    aliExpressUrl: "https://s.click.aliexpress.com/e/_c2v2y8V9",
    amazonUrl: "https://link.amazon/B0hl9qQSW",
    countries: {
      // se: { amazon: "https://amzn.to/3UQAUZA", aliExpress: "https://s.click.aliexpress.com/e/_c31UQP2J" },
      // uk: { amazon: "https://amzn.to/3UQAUZA", aliExpress: "https://s.click.aliexpress.com/e/_c31UQP2J" },
      // us: { amazon: "https://amzn.to/3UQAUZA", aliExpress: "https://s.click.aliexpress.com/e/_c31UQP2J" },
      // ca: { amazon: "https://amzn.to/3UQAUZA", aliExpress: "https://s.click.aliexpress.com/e/_c31UQP2J" },
      // pl: { amazon: "https://amzn.to/3UQAUZA", aliExpress: "https://s.click.aliexpress.com/e/_c31UQP2J" },
    }
  },
  {
    id: "plastöppnare",
    category: "Handverktyg",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S2a4ab61b2a4b48f79df9641b2b7b5f54E.jpg?has_lang=1&ver=1_960x960q75.jpg_.avif",
    name: "Plastöppnare (Pry Tools)",
    description: "Set av slitstarka plastverktyg för att bända upp konsolskal och kontroller utan märken.",
    tip: "Plast mot plast är mycket skonsammare än metall och förhindrar fula brytmärken i chassit.",
    recommendedFor: "Skonsam Konsol- & Skalöppning",
    i18n: {
      en: {
        name: "Plastic Pry Tools",
        description: "A set of plastic pry tools for opening electronic devices without scratching.",
        tip: "Plastic against plastic is much gentler than metal against plastic.",
        recommendedFor: "Gentle Console & Shell Opening"
      },
      pl: {
        name: "Narzędzia do otwierania obudów (Spudgery)",
        description: "Zestaw plastikowych narzędzi do otwierania konsol i kontrolerów bez pozostawiania śladów.",
        tip: "Plastik o plastik jest znacznie delikatniejszy niż plastik o metal.",
        recommendedFor: "Bezpieczne otwieranie obudów i konsol"
      }
    },
    aliExpressUrl: "https://s.click.aliexpress.com/e/_c3DqhEEP",
    amazonUrl: "https://link.amazon/B0cLW1SMD",
    countries: {
      // se: { amazon: "https://amzn.to/3UQAUZA", aliExpress: "https://s.click.aliexpress.com/e/_c31UQP2J" },
      // uk: { amazon: "https://amzn.to/3UQAUZA", aliExpress: "https://s.click.aliexpress.com/e/_c31UQP2J" },
      // us: { amazon: "https://amzn.to/3UQAUZA", aliExpress: "https://s.click.aliexpress.com/e/_c31UQP2J" },
      // ca: { amazon: "https://amzn.to/3UQAUZA", aliExpress: "https://s.click.aliexpress.com/e/_c31UQP2J" },
      // pl: { amazon: "https://amzn.to/3UQAUZA", aliExpress: "https://s.click.aliexpress.com/e/_c31UQP2J" },
    }
  },

  {
    id: "spetstang",
    category: "Handverktyg",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sf5917e1e77ba4122a3bf0324ba283141x.jpg_960x960q75.jpg_.avif",
    name: "Spetstång",
    description: "Perfekt för att greppa och avlägsna hålmonterade komponenter under värmepåverkan.",
    tip: "Fantastisk för att hålla och dra ut joystick-potentiometrar ur kretskortet.",
    recommendedFor: "Joystickbyten & Komponentborttagning",
    i18n: {
      en: {
        name: "Needle-Nose Pliers",
        description: "Ideal for gripping and removing through-hole components under heat.",
        tip: "Excellent for replacing joysticks in controllers.",
        recommendedFor: "Joystick Swaps & Component Removal"
      },
      pl: {
        name: "Szczypce precyzyjne długie",
        description: "Do chwytania i demontażu elementów przewlekanych podczas podgrzewania.",
        tip: "Świetnie sprawdzają się przy wymianie joysticków w kontrolerach.",
        recommendedFor: "Wymiana joysticków i demontaż elementów"
      }
    },
    aliExpressUrl: "https://s.click.aliexpress.com/e/_c3qgpmb1",
    amazonUrl: "https://link.amazon/B0asRNAjb",
    countries: {
      // se: { amazon: "https://amzn.to/3UQAUZA", aliExpress: "https://s.click.aliexpress.com/e/_c31UQP2J" },
      // uk: { amazon: "https://amzn.to/3UQAUZA", aliExpress: "https://s.click.aliexpress.com/e/_c31UQP2J" },
      // us: { amazon: "https://amzn.to/3UQAUZA", aliExpress: "https://s.click.aliexpress.com/e/_c31UQP2J" },
      // ca: { amazon: "https://amzn.to/3UQAUZA", aliExpress: "https://s.click.aliexpress.com/e/_c31UQP2J" },
      // pl: { amazon: "https://amzn.to/3UQAUZA", aliExpress: "https://s.click.aliexpress.com/e/_c31UQP2J" },
    }
  },
  {
    id: "rokutsug",
    category: "Lödstationer",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S5141db3864274115bf02de2a2b130c01v.jpg_960x960q75.jpg_.avif",
    name: "Rökutsug för Lödbordet",
    description: "Kompakt rökutsug med aktivt kolfilter som effektivt suger upp skadlig lödrök och flussångor.",
    tip: "Placera rökutsuget så nära kretskortet som möjligt för maximal sugeffekt.",
    recommendedFor: "Lödrök & Hälsosam Arbetsmiljö",
    i18n: {
      en: {
        name: "Soldering Fume Extractor",
        description: "Compact workbench fume extractor with carbon filter to capture soldering and flux smoke.",
        tip: "Keep the fume extractor as close to the circuit board as possible.",
        recommendedFor: "Solder Fumes & Workshop Health"
      },
      pl: {
        name: "Pochłaniacz oparów lutowniczych",
        description: "Kompaktowy pochłaniacz oparów z filtrem węglowym chroniący przed dymem z cyny i topnika.",
        tip: "Umieść pochłaniacz oparów jak najbliżej płytki drukowanej.",
        recommendedFor: "Pochłanianie oparów i czyste stanowisko"
      }
    },
    aliExpressUrl: "https://s.click.aliexpress.com/e/_c3Q7zVyJ",
    amazonUrl: "https://s.click.aliexpress.com/e/_c3Q7zVyJ",
    countries: {
      // se: { amazon: "https://amzn.to/3UQAUZA", aliExpress: "https://s.click.aliexpress.com/e/_c31UQP2J" },
      // uk: { amazon: "https://amzn.to/3UQAUZA", aliExpress: "https://s.click.aliexpress.com/e/_c31UQP2J" },
      // us: { amazon: "https://amzn.to/3UQAUZA", aliExpress: "https://s.click.aliexpress.com/e/_c31UQP2J" },
      // ca: { amazon: "https://amzn.to/3UQAUZA", aliExpress: "https://s.click.aliexpress.com/e/_c31UQP2J" },
      // pl: { amazon: "https://amzn.to/3UQAUZA", aliExpress: "https://s.click.aliexpress.com/e/_c31UQP2J" },
    }
  },
  {
    id: "kretskortshallare",
    category: "Handverktyg",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S86424e06d8134fd88e8c521a8fdf52715.jpg_960x960q75.jpg_.avif",
    name: "Kretskortshållare (PCB-fixtur)",
    description: "Justerbar fixtur som håller kontrollerkretskort och moderkort stabilt under lödning.",
    tip: "Utmärkt att använda vid joystickbyten så kortet inte rör sig när du värmer stiften.",
    recommendedFor: "Stabil PCB-fixtur & Joystickbyten",
    i18n: {
      en: {
        name: "Adjustable PCB Holder Fixture",
        description: "Adjustable fixture holding controller boards and motherboards rock-solid during soldering.",
        tip: "Excellent for use when desoldering and installing joysticks.",
        recommendedFor: "Stable PCB Fixture & Joystick Swaps"
      },
      pl: {
        name: "Regulowany uchwyt do płytek PCB",
        description: "Regulowany statyw utrzymujący stabilnie płytki kontrolerów i płyt głównych podczas lutowania.",
        tip: "Doskonale sprawdza się podczas wymiany joysticków w padach.",
        recommendedFor: "Stabilne mocowanie PCB i wymiana joysticków"
      }
    },
    aliExpressUrl: "https://s.click.aliexpress.com/e/_c3sLePQL",
    amazonUrl: "https://link.amazon/B01n4buxg",
    countries: {
      // se: { amazon: "https://amzn.to/3UQAUZA", aliExpress: "https://s.click.aliexpress.com/e/_c31UQP2J" },
      // uk: { amazon: "https://amzn.to/3UQAUZA", aliExpress: "https://s.click.aliexpress.com/e/_c31UQP2J" },
      // us: { amazon: "https://amzn.to/3UQAUZA", aliExpress: "https://s.click.aliexpress.com/e/_c31UQP2J" },
      // ca: { amazon: "https://amzn.to/3UQAUZA", aliExpress: "https://s.click.aliexpress.com/e/_c31UQP2J" },
      // pl: { amazon: "https://amzn.to/3UQAUZA", aliExpress: "https://s.click.aliexpress.com/e/_c31UQP2J" },
    }
  },

  {
    id: "lodsug",
    category: "Handverktyg",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S2576f431f1264a66aae0b4de6c68073by.jpg_960x960q75.jpg_.avif",
    name: "Lödsug (Vakuumpump)",
    description: "Effektiv manuell vakuumpump för att snabbt suga rent lödhål från smält tenn.",
    tip: "Blanda in lite färskt blyat tenn på gamla lödpunkter innan du suger för ett renare resultat.",
    recommendedFor: "Avlödning av Hålmonterat & Spakar",
    i18n: {
      en: {
        name: "Desoldering Vacuum Pump",
        description: "High-suction desoldering pump to quickly clear through-hole solder pins.",
        tip: "Add some fresh solder first for even better desoldering suction.",
        recommendedFor: "Through-Hole Desoldering & Thumbsticks"
      },
      pl: {
        name: "Odsysacz próżniowy do cyny",
        description: "Wysokiej mocy odsysacz do szybkiego oczyszczania otworów lutowniczych z cyny.",
        tip: "Dodaj odrobinę świeżej cyny ołowiowej, aby uzyskać czystszy rezultat.",
        recommendedFor: "Odsysanie cyny z otworów i joysticków"
      }
    },
    aliExpressUrl: "https://s.click.aliexpress.com/e/_c43szfOj",
    amazonUrl: "https://link.amazon/B0aMu0ozm",
    countries: {
      // se: { amazon: "https://amzn.to/3UQAUZA", aliExpress: "https://s.click.aliexpress.com/e/_c31UQP2J" },
      // uk: { amazon: "https://amzn.to/3UQAUZA", aliExpress: "https://s.click.aliexpress.com/e/_c31UQP2J" },
      // us: { amazon: "https://amzn.to/3UQAUZA", aliExpress: "https://s.click.aliexpress.com/e/_c31UQP2J" },
      // ca: { amazon: "https://amzn.to/3UQAUZA", aliExpress: "https://s.click.aliexpress.com/e/_c31UQP2J" },
      // pl: { amazon: "https://amzn.to/3UQAUZA", aliExpress: "https://s.click.aliexpress.com/e/_c31UQP2J" },
    }
  },
  {
    id: "pincetter",
    category: "Handverktyg",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S0d4eefa47a214b43b07751ee2fc50e50Y.jpg?has_lang=1&ver=1_960x960q75.jpg_.avif",
    name: "ESD Precisionspincetter",
    description: "Antistatiska pincetter med ultrafina spetsar för hantering av små SMD-komponenter och byglingstråd.",
    tip: "Ha både en rak och en böjd pincett redo vid mikroskopet för olika arbetsvinklar.",
    recommendedFor: "SMD & Finmekanik",
    i18n: {
      en: {
        name: "ESD Precision Tweezers",
        description: "Anti-static tweezers with ultra-fine tips for SMD component handling and jumper wires.",
        tip: "A set of curved tweezers and a set of straight tweezers are recommended for different jobs.",
        recommendedFor: "SMD & Precision Mechanics"
      },
      pl: {
        name: "Precyzyjne pęsety ESD",
        description: "Antystatyczne pęsety o bardzo cienkich końcówkach do manipulacji elementami SMD i krosówkami.",
        tip: "Zaleca się posiadanie zestawu zakrzywionych i prostych pęset do różnych rodzajów prac.",
        recommendedFor: "Precyzyjny montaż SMD i mikromechanika"
      }
    },
    aliExpressUrl: "https://s.click.aliexpress.com/e/_c3yzWBUr",
    amazonUrl: "https://link.amazon/B09lbUinK",
    countries: {
      // se: { amazon: "https://amzn.to/3UQAUZA", aliExpress: "https://s.click.aliexpress.com/e/_c31UQP2J" },
      // uk: { amazon: "https://amzn.to/3UQAUZA", aliExpress: "https://s.click.aliexpress.com/e/_c31UQP2J" },
      // us: { amazon: "https://amzn.to/3UQAUZA", aliExpress: "https://s.click.aliexpress.com/e/_c31UQP2J" },
      // ca: { amazon: "https://amzn.to/3UQAUZA", aliExpress: "https://s.click.aliexpress.com/e/_c31UQP2J" },
      // pl: { amazon: "https://amzn.to/3UQAUZA", aliExpress: "https://s.click.aliexpress.com/e/_c31UQP2J" },
    }
  },
  {
    id: "ipa-flaska",
    category: "Kemi & Fluss",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S2374e0025ac9440fb0317fbd3a930516V.jpg_960x960q75.jpg_.avif",
    name: "Flaska för Isopropanol (Pumpflaska)",
    description: "ESD-säker dispenserflaska med tryckpump för enkel dosering av isopropanol på tops och svampar.",
    recommendedFor: "Kretskortsrengöring med IPA",
    i18n: {
      en: {
        name: "Isopropyl Alcohol Dispenser Bottle",
        description: "ESD-safe push-down pump dispenser bottle for easy application of isopropyl alcohol (IPA).",
        recommendedFor: "PCB Cleaning with IPA"
      },
      pl: {
        name: "Dozownik z pompką na alkohol izopropylowy",
        description: "Bezpieczna butelka z pompką dociskową do łatwego dozowania alkoholu izopropylowego (IPA).",
        recommendedFor: "Czyszczenie PCB za pomocą IPA"
      }
    },
    aliExpressUrl: "https://s.click.aliexpress.com/e/_c3I9CLvh",
    amazonUrl: "https://link.amazon/B0jk2sc5k",
    countries: {
      // se: { amazon: "https://amzn.to/3UQAUZA", aliExpress: "https://s.click.aliexpress.com/e/_c31UQP2J" },
      // uk: { amazon: "https://amzn.to/3UQAUZA", aliExpress: "https://s.click.aliexpress.com/e/_c31UQP2J" },
      // us: { amazon: "https://amzn.to/3UQAUZA", aliExpress: "https://s.click.aliexpress.com/e/_c31UQP2J" },
      // ca: { amazon: "https://amzn.to/3UQAUZA", aliExpress: "https://s.click.aliexpress.com/e/_c31UQP2J" },
      // pl: { amazon: "https://amzn.to/3UQAUZA", aliExpress: "https://s.click.aliexpress.com/e/_c31UQP2J" },
    }
  },
  {
    id: "slippenna",
    category: "Handverktyg",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sb930f343b6a54a6889eed4adf6ba98a24.jpg_960x960q75.jpg_.avif",
    name: "Slippenna (Glasfiber/Skrappenna)",
    description: "För att skrapa fram kopparbanor på kretskort eller rengöra oxiderade kontaktytor.",
    recommendedFor: "Kopparblottning & Trace Repair",
    i18n: {
      en: {
        name: "PCB Scratch & Abrasive Pen",
        description: "For exposing copper traces on circuit boards and cleaning oxidized contacts.",
        recommendedFor: "Copper Exposure & Trace Repair"
      },
      pl: {
        name: "Pisak ścierny do PCB",
        description: "Do odsłaniania miedzianych ścieżek na płytkach drukowanych oraz usuwania utlenień.",
        recommendedFor: "Odsłanianie miedzi i regeneracja ścieżek"
      }
    },
    aliExpressUrl: "https://s.click.aliexpress.com/e/_c4LW5HDh",
    countries: {
      // se: { amazon: "https://amzn.to/3UQAUZA", aliExpress: "https://s.click.aliexpress.com/e/_c31UQP2J" },
      // uk: { amazon: "https://amzn.to/3UQAUZA", aliExpress: "https://s.click.aliexpress.com/e/_c31UQP2J" },
      // us: { amazon: "https://amzn.to/3UQAUZA", aliExpress: "https://s.click.aliexpress.com/e/_c31UQP2J" },
      // ca: { amazon: "https://amzn.to/3UQAUZA", aliExpress: "https://s.click.aliexpress.com/e/_c31UQP2J" },
      // pl: { amazon: "https://amzn.to/3UQAUZA", aliExpress: "https://s.click.aliexpress.com/e/_c31UQP2J" },
    }
  },
  {
    id: "joystick-avlodningsverktyg",
    category: "Handverktyg",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S3769671a6d194a568aa21a9e6855f619p.jpg_960x960q75.jpg_.avif",
    name: "Joystick-avlödningsverktyg",
    description: "Suveränt specialmunstycke/verktyg för att snabbt avlöda alla stick-ben samtidigt utan att skada kretskortet.",
    tip: "Se till att välja rätt modell för DualSense (PS5), Xbox eller Switch Pro joysticks.",
    recommendedFor: "Snabba Joystickbyten på Kontroller",
    i18n: {
      en: {
        name: "Joystick Desoldering Tool",
        description: "An excellent specialized tool for desoldering all joystick pins simultaneously without board damage.",
        tip: "Make sure to purchase the correct size depending on the controller joystick type.",
        recommendedFor: "Rapid Controller Joystick Swaps"
      },
      pl: {
        name: "Narzędzie do wylutowywania joysticków",
        description: "Specjalistyczne narzędzie do szybkiego wylutowywania wszystkich pinów joysticka naraz bez uszkadzania laminatu.",
        tip: "Upewnij się, że wybierasz odpowiedni model pod kontroler PS5, Xbox lub Switch.",
        recommendedFor: "Szybka wymiana joysticków w padach"
      }
    },
    aliExpressUrl: "https://s.click.aliexpress.com/e/_c3vfNnwx",
    amazonUrl: "https://link.amazon/B0edS6Rju",
    countries: {
      // se: { amazon: "https://amzn.to/3UQAUZA", aliExpress: "https://s.click.aliexpress.com/e/_c31UQP2J" },
      // uk: { amazon: "https://amzn.to/3UQAUZA", aliExpress: "https://s.click.aliexpress.com/e/_c31UQP2J" },
      // us: { amazon: "https://amzn.to/3UQAUZA", aliExpress: "https://s.click.aliexpress.com/e/_c31UQP2J" },
      // ca: { amazon: "https://amzn.to/3UQAUZA", aliExpress: "https://s.click.aliexpress.com/e/_c31UQP2J" },
      // pl: { amazon: "https://amzn.to/3UQAUZA", aliExpress: "https://s.click.aliexpress.com/e/_c31UQP2J" },
    }
  },
  // {
  //   id: "esd-precisionspincetter",
  //   category: "Handverktyg",
  //   image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&auto=format&fit=crop&q=80",
  //   name: "ESD-säkra Precisionspincetter",
  //   description: "Ultrafina pincetter med hög precision för att hantera 0402/0201 SMD-motstånd, kondensatorer och hålla byglingstråd.",
  //   tip: "Ha alltid en rak och en böjd pincett redo vid mikroskopet för bästa grepp i trånga utrymmen.",
  //   recommendedFor: "Mikrokomponenter & Felsökning",
  //   i18n: {
  //     en: {
  //       name: "ESD-Safe Precision Tweezers",
  //       description: "Ultra-fine precision tweezers for handling 0402/0201 SMD resistors, capacitors, and jumper wires.",
  //       tip: "Always keep one straight and one curved tweezer ready at your microscope station for tight spaces.",
  //       recommendedFor: "Micro-Components & Jumper Wires"
  //     },
  //     pl: {
  //       name: "Precyzyjne Pęsety Antystatyczne ESD",
  //       description: "Niezwykle precyzyjne pęsety do manipulowania rezystorami SMD 0402/0201, kondensatorami i układania mikroskopijnych krosówek (jumperów).",
  //       tip: "Zawsze miej pod mikroskopem jedną prostą i jedną zakrzywioną pęsetę, aby wygodnie sięgać w ciasne miejsca.",
  //       recommendedFor: "Mikroelementy i regeneracja ścieżek"
  //     }
  //   },
  //   aliExpressUrl: "https://s.click.aliexpress.com/e/_c2yKS1rP",
  //   amazonUrl: "https://amzn.to/4xXuhTW",
  //   countries: {
  //     se: { amazon: "https://amzn.to/4xXuhTW", aliExpress: "https://s.click.aliexpress.com/e/_c2yKS1rP" },
  //     uk: { amazon: "https://amzn.to/4xXuhTW", aliExpress: "https://s.click.aliexpress.com/e/_c2yKS1rP" },
  //     us: { amazon: "https://amzn.to/4xXuhTW", aliExpress: "https://s.click.aliexpress.com/e/_c2yKS1rP" },
  //     ca: { amazon: "https://amzn.to/4xXuhTW", aliExpress: "https://s.click.aliexpress.com/e/_c2yKS1rP" },
  //     pl: { amazon: "https://amzn.to/4xXuhTW", aliExpress: "https://s.click.aliexpress.com/e/_c2yKS1rP" },
  //   }
  // },
  // {
  //   id: "kretskortshallare-fixture",
  //   category: "Handverktyg",
  //   image: "https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?w=600&auto=format&fit=crop&q=80",
  //   name: "Magnetisk Kretskortshållare (PCB Fixture)",
  //   description: "Stabil metallhållare som håller kontrollkretskortet eller konsolmoderkortet orörligt när du löder.",
  //   tip: "En tung basplatta gör att kortet inte glider iväg när du trycker med varmluftspennan.",
  //   recommendedFor: "Stabilitet vid verkstadsbänken",
  //   i18n: {
  //     en: {
  //       name: "Magnetic PCB Holder / Board Fixture",
  //       description: "Heavy-duty metal fixture that holds controller boards or console motherboards rock-solid during soldering.",
  //       tip: "A heavy base plate ensures the PCB never shifts or slides when applying hot air pressure.",
  //       recommendedFor: "Workbench Stability"
  //     },
  //     pl: {
  //       name: "Magnetyczny Uchwyt do Płyt PCB",
  //       description: "Stabilny, solidny metalowy uchwyt, który pewnie trzyma płytę kontrolera lub konsoli podczas precyzyjnego lutowania.",
  //       tip: "Ciężka podstawa zapobiega przesuwaniu się płyty pod wpływem podmuchu gorącego powietrza ze stacji.",
  //       recommendedFor: "Stabilność na stanowisku roboczym"
  //     }
  //   },
  //   aliExpressUrl: "https://s.click.aliexpress.com/e/_c3PG0bfp",
  //   amazonUrl: "https://amzn.to/4h1JM5Z",
  //   countries: {
  //     se: { amazon: "https://amzn.to/4h1JM5Z", aliExpress: "https://s.click.aliexpress.com/e/_c3PG0bfp" },
  //     uk: { amazon: "https://amzn.to/4h1JM5Z", aliExpress: "https://s.click.aliexpress.com/e/_c3PG0bfp" },
  //     us: { amazon: "https://amzn.to/4h1JM5Z", aliExpress: "https://s.click.aliexpress.com/e/_c3PG0bfp" },
  //     ca: { amazon: "https://amzn.to/4h1JM5Z", aliExpress: "https://s.click.aliexpress.com/e/_c3PG0bfp" },
  //     pl: { amazon: "https://amzn.to/4h1JM5Z", aliExpress: "https://s.click.aliexpress.com/e/_c3PG0bfp" },
  //   }
  // }
];

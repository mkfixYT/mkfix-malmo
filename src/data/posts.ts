// src/data/posts.ts
import type { ImageMetadata } from 'astro';
import { resolveImage } from '../utils/images';

export interface PostImage {
  src: string | ImageMetadata;
  alt?: string;
  caption?: string;
}

export interface PostSection {
  title?: string;
  content?: string | string[]; // Can be a string or string[] (supports HTML tags like <strong>, <em>, <a>)
  expertTip?: string;           // Highlighted expert tip box
  bullets?: string[];           // Bullet points list
  images?: (string | PostImage)[]; // Image URLs or objects with custom alt text
}

export interface RawBlogPost {
  slug: string;
  title: string;
  description: string;
  pubDate: string;              // e.g. "05 Maj, 2026"
  badge?: string;               // e.g. "Case study #2", "Guide"
  categories?: string;          // e.g. "case study, guider, tmr uppgradering" (filters: all, tmr, retro, guide, tips)
  isLatest?: boolean;
  ogTitle?: string;
  ogDescription?: string;
  keywords?: string;
  canonicalUrl?: string;
  intro?: string | string[];    // Lead intro text before sections
  sections: PostSection[];
}

export interface ResolvedPostImage {
  src: ImageMetadata | string;
  alt: string;
  caption?: string;
}

export interface ResolvedPostSection {
  title?: string;
  content?: string[];
  expertTip?: string;
  bullets?: string[];
  images?: ResolvedPostImage[];
}

export interface BlogPost extends Omit<RawBlogPost, 'sections' | 'intro'> {
  intro?: string[];
  sections: ResolvedPostSection[];
  heroImage?: ImageMetadata | string;
}

function resolveSectionImages(
  images?: (string | PostImage)[],
  defaultAlt?: string
): ResolvedPostImage[] | undefined {
  if (!images || images.length === 0) return undefined;
  return images.map((img, idx) => {
    if (typeof img === 'string') {
      return {
        src: resolveImage(img),
        alt: defaultAlt ? `${defaultAlt} bild ${idx + 1}` : `Bild ${idx + 1}`,
      };
    }
    return {
      src: resolveImage(img.src),
      alt: img.alt || (defaultAlt ? `${defaultAlt} bild ${idx + 1}` : `Bild ${idx + 1}`),
      caption: img.caption,
    };
  });
}

// ============================================================================
// ALL BLOG POSTS ARE DEFINED HERE
// To add a new post, just add a new object to this array with text & image URLs!
// ============================================================================
export const rawPosts: RawBlogPost[] = [
  // --- Case Study #2: TMR, Game Gear, Mac, etc. ---
  {
    slug: 'tmr-gamegear-mm',
    title: 'Case Study: TMR-sticks, game gear, game cube, mac, nintendo switch och blu ray | mkFix Malmö',
    description: 'Se våra reparationer denna veckan!',
    ogTitle: 'Case Study: TMR-sticks, game gear, game cube, mac, nintendo switch och blu ray | mkFix Malmö',
    ogDescription: 'Vi visar hur vi räddar kontroller och konsoler i verkstaden. Kolla in TMR och switch reparationerna!',
    keywords: 'TMR sticks case study, game gear recap, Nintendo switch laddar ej joycons, laga handkontroll Malmö, K-Silver TMR, blu ray reparation',
    canonicalUrl: 'https://mkfix.se/blog/tmr-gamegear-mm/',
    badge: 'Case study #2',
    categories: 'case study, guider, tmr uppgradering',
    pubDate: '05 Maj, 2026',
    isLatest: false,
    intro: 'Nu har jag inte varit så superbra på att hålla bloggen uppdaterad ofta, men detta har hänt sedan sist!',
    sections: [
      {
        title: '🕹️ TMR-Uppgradering: K-Silver',
        content: 'Vi bytte ut slitna, driftande joysticks till splitternya <strong>K-Silver TMR sticks</strong>. Det här är den ultimata lösningen för dig som vill slippa stick drift permanent! 🧲✨. Som ni ser så var det en del kontroller som blev fixade',
        images: [
          { src: '/img/2026/0505/tmr 1.jpg', alt: 'Gammla joysticks och nya Malmö' },
          { src: '/img/2026/0505/tmr 2.jpg', alt: 'TMR uppgradering Malmö' },
          { src: '/img/2026/0505/tmr 3.jpg', alt: 'Två lagade playstation 5 kontroller Malmö' },
          { src: '/img/2026/0505/tmr 4.jpg', alt: 'Tre lagade PS5 kontroller Malmö' },
          { src: '/img/2026/0505/tmr 5.jpg', alt: 'Närbild nya TMR sticks Malmö' },
        ],
      },
      {
        title: 'Mac som inte startade',
        content: 'Vi gav oss på en lite äldre macbook air som inte alls ville starta, visade sig vara touchpaden som spökade och nu är den tillbaka till sitt vanliga jag.',
        images: [
          { src: '/img/2026/0505/mac.jpg', alt: 'Reparation av Macbook air Malmö' },
        ],
      },
      {
        title: 'Glömsk Nintendo Gamecube',
        content: 'Denna Nintendo Gamecube glömde hela tiden sina inställningar. Visade sig att den behövde ett nytt batteri och nu kommer den ihåg allt!',
        images: [
          { src: '/img/2026/0505/gamecube.jpg', alt: 'Reparation av Nintendo Game cube Malmö' },
        ],
      },
      {
        title: 'Blu ray spelare med dålig lucka',
        content: 'En blu ray spelare som inte kan öppna sin lucka är inget att ha. Vi fixade den genom att ersätta ett gummiband vid motorn samt ge den nytt plastfett.',
        images: [
          { src: '/img/2026/0505/bluray.jpg', alt: 'Reparation av Blu ray spelare Malmö' },
        ],
      },
      {
        title: '🕹️ Fishy Sega Game gear!',
        content: 'Detta var ett projekt. En Game gear som hade kommit in. Problemet? Samma som vanligt. Alla kondensatorer hade läckt och luktade fisk, skärmen startade inte alls. Vi tog av dem gamla, rensade kretskortet som lyckligtvis nog inte hade blivit skadat och installerade nya kondensatorer. Nu funkar den exakt som ny!',
        images: [
          { src: '/img/2026/0505/gamegear1.jpg', alt: 'Game gear som inte fungerade Malmö' },
          { src: '/img/2026/0505/gamegear2.jpg', alt: 'Gamegear fungerar igen Malmö' },
        ],
      },
      {
        title: '🕹️ Nintendo switch som inte laddade joycons',
        content: 'Visade sig att en diod hade dött och blev ersatt. Kunden ville också ha service så den fick konsolen rengjord samt ny kylarpasta.',
        images: [
          { src: '/img/2026/0505/switch1.jpg', alt: 'Gammal kylarpasta Malmö' },
          { src: '/img/2026/0505/switch2.jpg', alt: 'nintendo switch reparation Malmö' },
          { src: '/img/2026/0505/switch3.jpg', alt: 'Nintendo switch ny kylarpasta Malmö' },
        ],
      },
    ],
  },

  // --- Case Study #1: TMR & Shell Swap ---
  {
    slug: 'tmr-och-shellswap',
    title: 'Case Study: TMR-sticks & Nintendo DS Renovering | mkFix Malmö',
    description: 'Se hur vi åtgärdade stick drift permanent med K-Silver TMR-sticks och utförde ett komplett skärm- och skalbyte på en klassisk Nintendo DS. Läs vår case study!',
    ogTitle: 'Case Study: Från Stick Drift till TMR-precision | mkFix',
    ogDescription: 'Vi visar hur vi räddar kontroller och konsoler i verkstaden. Kolla in gårdagens jobb på TMR-sticks och Nintendo DS!',
    keywords: 'TMR sticks case study, Nintendo DS skärmbyte, Nintendo DS shell swap, laga handkontroll Malmö, K-Silver TMR, reparera Nintendo DS',
    canonicalUrl: 'https://mkfix.se/blog/tmr-och-shellswap/',
    badge: 'Case study #1',
    categories: 'case study',
    pubDate: '01 April, 2026',
    isLatest: false,
    intro: 'Igår var en produktiv dag i verkstaden! Vi fick in både moderna pro-kontroller och en riktig Nintendo-klassiker för lite välbehövlig kärlek.',
    sections: [
      {
        title: '🕹️ TMR-Uppgradering: K-Silver',
        content: 'Vi bytte ut slitna, driftande joysticks till splitternya <strong>K-Silver TMR sticks</strong>. Det här är den ultimata lösningen för dig som vill slippa stick drift permanent! 🧲✨',
        images: [
          { src: '/img/2026/0405/joystick swap.webp', alt: 'kontrollreparation Malmö' },
          { src: '/img/2026/0405/tmr upgradering.webp', alt: 'TMR uppgradering Malmö' },
        ],
      },
      {
        title: '👾 Nintendo DS: Skärmbyte & Shell Swap',
        content: 'Vi gav också en klassisk Nintendo DS nytt liv med en ny skärm och en fräsch "shell swap". Det är alltid tillfredsställande att se en gammal trotjänare se ut som ny igen. Blev ganska snyggt, eller vad tycker ni? 💎',
        images: [
          { src: '/img/2026/0405/skalbyte.jpg', alt: 'Reparation av Nintendo DS Malmö' },
        ],
      },
    ],
  },

  // --- Guide: Undvik Stick Drift ---
  {
    slug: 'undvik-stickdrift',
    title: '3 tips för att undvika Stick Drift',
    description: 'Små enkla knep som gör att din handkontroll håller betydligt längre...',
    ogTitle: 'Slipp Stick Drift: 3 tips som faktiskt fungerar | mkFix',
    ogDescription: 'Vi delar med oss av våra bästa expertknep för att hålla dina analoga spakar i toppskick.',
    keywords: 'stick drift, förebygga stick drift, laga handkontroll Malmö, DualSense reparation, Xbox Elite drift, rengöra joystick, hall effect, mkFix',
    canonicalUrl: 'https://mkfix.se/blog/undvik-stickdrift/',
    badge: 'Guide',
    categories: 'guide tips underhåll',
    pubDate: '05 April, 2026',
    isLatest: false,
    intro: 'Det finns inget mer frustrerande än en joystick som lever sitt eget liv mitt i en intensiv match. <strong>Stick drift</strong> är det vanligaste problemet för moderna kontroller som DualSense och Xbox Elite, men med rätt skötsel kan du faktiskt fördröja (och ibland helt undvika) att problemet uppstår. Här är våra tre bästa tips från verkstaden!',
    sections: [
      {
        title: '1. Förvara din kontroll rätt 📦',
        content: 'Många låter handkontrollen ligga löst i soffan eller nerklämd i en låda. Om joysticken ligger under press åt ett håll under lång tid tröttas de interna fjädrarna ut, vilket leder till att spaken inte återgår till nollpunkten.',
        expertTip: 'Investera i ett <em>hard case</em> eller ett snyggt ställ där spakarna får vila helt fritt när de inte används.',
      },
      {
        title: '2. Håll rent från "plast-damm" 🧼',
        content: 'Har du märkt det där fina vita pulvret runt joystickens hals? Det är plast som skavs av när du rör spaken. Detta damm faller ner i <strong>potentiometern</strong> (sensorn) och stör de elektriska signalerna, vilket orsakar drift.',
        expertTip: 'Torka av spakens hals regelbundet med en mikrofiberduk. Om du vill gå steget längre kan "precision rings" minska friktionen och hindra skräp från att falla ner i kontrollen.',
      },
      {
        title: '3. Skippa huskurer – Använd rätt kemikalier ⚠️',
        content: 'Vi ser ofta kontroller som förstörts av WD-40 eller matolja. Det kan fungera i fem minuter, men det lämnar rester som förstör kretskortet på sikt. Om du absolut vill rengöra själv, använd endast tryckluft eller 99% Isopropanol.',
        expertTip: 'Kom ihåg att rengöring bara är en tillfällig fix om spaken redan börjat drifta. Den enda permanenta lösningen mot mekaniskt slitage är att uppgradera till magnetiska <strong>TMR Sticks</strong>.',
      },
    ],
  },
];

// Resolved posts exported for pages & components to consume
export const posts: BlogPost[] = rawPosts.map((post) => {
  const resolvedSections: ResolvedPostSection[] = post.sections.map((section) => ({
    ...section,
    content: Array.isArray(section.content)
      ? section.content
      : section.content
        ? [section.content]
        : undefined,
    images: resolveSectionImages(section.images, section.title || post.title),
  }));

  const firstImg = resolvedSections.find((s) => s.images && s.images.length > 0)?.images?.[0]?.src;

  return {
    ...post,
    intro: Array.isArray(post.intro) ? post.intro : post.intro ? [post.intro] : undefined,
    sections: resolvedSections,
    heroImage: firstImg,
  };
});

// Helper functions (mirrors products.ts)
export function getAllPosts(): BlogPost[] {
  return posts;
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getPostsByCategory(category: string): BlogPost[] {
  return posts.filter((p) => p.categories && p.categories.includes(category));
}


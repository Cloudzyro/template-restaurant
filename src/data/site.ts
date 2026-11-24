// Everything on the site comes from this file. Change the text, hours, menu and
// links here; the pages update on the next build.

export const site = {
  name: "Fig & Ember",
  tagline: "Wood-fired cooking from the farms around us",
  description:
    "Fig & Ember is a neighborhood restaurant cooking seasonal plates over an open hearth. Dinner Tuesday to Sunday, brunch on weekends.",
  // The time zone your hours are in, so "Open today" is right for every visitor.
  timeZone: "America/Chicago",
  reservationUrl: "https://example.com/reservations",
  reservationLabel: "Reserve a table",
  phone: "(555) 014-2290",
  email: "hello@figandember.example",
  address: {
    street: "418 Wren Street",
    city: "Riverton",
    region: "IL",
    postal: "60412",
  },
  // Any maps link works: Google Maps, Apple Maps, OpenStreetMap.
  mapsUrl: "https://www.openstreetmap.org/search?query=418%20Wren%20Street",
  social: [
    { label: "Instagram", url: "https://instagram.com/" },
    { label: "Facebook", url: "https://facebook.com/" },
  ],
};

// 0 = Sunday ... 6 = Saturday. Use "closed: true" for days you're closed.
// Times are 24-hour "HH:MM". A day can have more than one service.
export type Service = { label: string; open: string; close: string };
export type Day = { day: number; name: string; closed?: boolean; services: Service[] };

export const hours: Day[] = [
  { day: 1, name: "Monday", closed: true, services: [] },
  { day: 2, name: "Tuesday", services: [{ label: "Dinner", open: "17:00", close: "22:00" }] },
  { day: 3, name: "Wednesday", services: [{ label: "Dinner", open: "17:00", close: "22:00" }] },
  { day: 4, name: "Thursday", services: [{ label: "Dinner", open: "17:00", close: "22:00" }] },
  { day: 5, name: "Friday", services: [{ label: "Dinner", open: "17:00", close: "23:00" }] },
  {
    day: 6,
    name: "Saturday",
    services: [
      { label: "Brunch", open: "10:00", close: "14:30" },
      { label: "Dinner", open: "17:00", close: "23:00" },
    ],
  },
  {
    day: 0,
    name: "Sunday",
    services: [
      { label: "Brunch", open: "10:00", close: "14:30" },
      { label: "Dinner", open: "17:00", close: "21:00" },
    ],
  },
];

export const home = {
  heroTitle: "Slow fire, honest food",
  heroText:
    "Seasonal plates cooked over oak and cherry wood, natural wines by the glass, and a dining room that feels like a friend's kitchen.",
  highlights: [
    {
      title: "From the hearth",
      text: "Everything that can meet the fire does: breads, greens, whole fish, and our slow-roasted short rib.",
    },
    {
      title: "Grown nearby",
      text: "We buy from eleven farms within ninety miles, so the menu changes with what's ready in the fields.",
    },
    {
      title: "Small, on purpose",
      text: "Forty-two seats, a six-seat counter facing the kitchen, and a garden patio from May to October.",
    },
  ],
};

export const about = {
  title: "Meet the kitchen",
  chefName: "Chef Renata Okafor-Hale",
  chefRole: "Chef and co-owner",
  paragraphs: [
    "Renata grew up cooking over open fire at her grandmother's farm, then spent twelve years in kitchens from New Orleans to Lyon before coming home to open Fig & Ember in 2019.",
    "Her menu starts with whatever the farmers bring through the back door on Tuesday morning. Nothing is fussy, everything is seasoned with care, and most of it gets a kiss of smoke.",
  ],
  quote: "Fire is the oldest seasoning there is. I just try not to get in its way.",
};

export type Dish = {
  name: string;
  description: string;
  price: number;
  tags?: Array<"V" | "VG" | "GF" | "DF" | "N">;
};
export type MenuSection = { title: string; note?: string; dishes: Dish[] };

export const dietaryTags: Record<string, string> = {
  V: "Vegetarian",
  VG: "Vegan",
  GF: "Gluten free",
  DF: "Dairy free",
  N: "Contains nuts",
};

export const menuIntro =
  "Our menu changes with the seasons. Tell your server about any allergies and we'll gladly adjust a dish where we can.";

export const menu: MenuSection[] = [
  {
    title: "To start",
    dishes: [
      {
        name: "Hearth bread",
        description: "Sourdough baked in the wood oven, cultured butter, flaky salt.",
        price: 7,
        tags: ["V"],
      },
      {
        name: "Charred carrots",
        description: "Whipped feta, hot honey, toasted pistachio, dill.",
        price: 13,
        tags: ["V", "GF", "N"],
      },
      {
        name: "Ember-roasted beets",
        description: "Smoked yogurt, blood orange, sorrel, sunflower seed crunch.",
        price: 12,
        tags: ["V", "GF"],
      },
      {
        name: "Grilled oysters",
        description: "Half dozen, garlic and herb butter, lemon.",
        price: 21,
        tags: ["GF"],
      },
    ],
  },
  {
    title: "From the fire",
    note: "Cooked over oak and cherry wood",
    dishes: [
      {
        name: "Whole grilled trout",
        description: "Brown butter, capers, charred lemon, little gem salad.",
        price: 32,
        tags: ["GF"],
      },
      {
        name: "Slow-roasted short rib",
        description: "Twelve-hour braise, smoked onion jus, crispy shallot, horseradish cream.",
        price: 38,
        tags: ["GF"],
      },
      {
        name: "Half chicken",
        description: "Brined and grilled, salsa verde, fire-blistered potatoes.",
        price: 29,
        tags: ["GF", "DF"],
      },
      {
        name: "Hearth squash",
        description: "Miso glaze, chili crisp, black garlic, puffed rice.",
        price: 24,
        tags: ["VG", "GF", "DF"],
      },
    ],
  },
  {
    title: "Sides",
    dishes: [
      {
        name: "Blistered greens",
        description: "Garlic, chili, lemon.",
        price: 9,
        tags: ["VG", "GF", "DF"],
      },
      {
        name: "Smashed potatoes",
        description: "Rosemary salt, aioli.",
        price: 9,
        tags: ["V", "GF", "DF"],
      },
    ],
  },
  {
    title: "Dessert",
    dishes: [
      {
        name: "Roasted figs",
        description: "Honey mascarpone, walnut crumble, thyme.",
        price: 12,
        tags: ["V", "N"],
      },
      {
        name: "Dark chocolate tart",
        description: "Smoked sea salt, crème fraîche.",
        price: 11,
        tags: ["V"],
      },
      {
        name: "Seasonal sorbet",
        description: "Ask your server for today's flavors.",
        price: 8,
        tags: ["VG", "GF", "DF"],
      },
    ],
  },
];

// Gallery tiles are illustrated placeholders. Replace them with your own photos
// by putting images in src/assets and swapping the tiles in src/pages/index.astro.
export const gallery = [
  { caption: "The hearth at full flame", art: "flame" },
  { caption: "Our garden patio in early summer", art: "leaf" },
  { caption: "Fresh figs from Alder Creek Farm", art: "fig" },
  { caption: "The chef's counter", art: "plate" },
  { caption: "Natural wines by the glass", art: "glass" },
  { caption: "Bread from the wood oven", art: "bread" },
] as const;

export const events = {
  title: "Private dining and events",
  text: "Our garden room seats up to 24 guests for dinners, rehearsal parties and celebrations. We can also take over the whole restaurant for up to 60. Tell us what you're planning and we'll reply within two business days.",
  points: [
    "Family-style or plated menus from the hearth",
    "Wine pairings chosen with our sommelier",
    "Garden room for up to 24, full buyout for up to 60",
  ],
};

/*
 * ============================================================
 *  CONTENT FOR learn-russian.html (Russian lessons, written in English).
 *  Edit this file to change what that website says.
 *  See README.md for a guide to every field.
 * ============================================================
 */
const SITE_DATA = {
  site: {
    name: "Boqkova Teach",
    title: "Boqkova Teach · learn Russian",
    lang: "en", // language the page is written in
    footerText: "Boqkova Teach, no rights reserved, only russian lessons",
  },

  // Small words used on buttons and labels around the site.
  ui: {
    readMore: "Read More",
    whatWeCover: "What we cover",
    bookLesson: "Book a lesson",
    contactMe: "Contact me",
    close: "Close",
    packPrefix: "Pack: ", // shown before each pack name, e.g. "Pack: base"
    units: { hour: "hr", hours: "hrs", minute: "min" },
  },

  // Menu links. "target" scrolls to a section: home, courses, lessons, contacts.
  // "href" opens another page instead (here: the other language version of the site).
  nav: [
    { label: "Home", target: "home" },
    { label: "Courses", target: "courses" },
    { label: "Contacts", target: "contacts" },
    { label: "EN ↔ RU", href: "learn-english.html", transition: "погнали ✦" }, // transition = text on the page wipe
  ],

  hero: {
    greeting: "yo",
    text: "You can check my prices and courses here. That's pretty much it<3",
    // Leave photo empty ("") to show a letter avatar instead.
    photo: "assets/images/teacher.jpg",
    photoAlt: "The teacher in an art gallery, pulling a face and making rock-on hands",
  },

  // Words scrolling in the black ticker band under the greeting.
  marquee: ["online russian lessons", "RM70 / hr", "yandex telemost", "google meet", "dm to book"],

  courses: {
    heading: "Courses",

    packsHeading: "the big four:",
    packs: [
      {
        name: "base",
        color: "#fe98c0",
        image: "assets/images/packs/russian/base.png",
        summary: "The foundation: read, pronounce and say your first real sentences.",
        details: [
          "The Cyrillic alphabet and reading",
          "Pronunciation and word stress",
          "Greetings, numbers and everyday phrases",
        ],
      },
      {
        name: "tourist",
        color: "#80eb3d",
        image: "assets/images/packs/russian/tourist.png",
        summary: "Survival Russian for travelling: get around, order, ask and understand.",
        details: [
          "Directions, transport and hotels",
          "Cafés, shops and paying",
          "Small talk with locals",
        ],
      },
      {
        name: "cases",
        color: "#3dd0eb",
        image: "assets/images/packs/russian/cases.png",
        summary: "All six Russian cases, explained clearly and practised until they click.",
        details: [
          "What each case is for",
          "Noun and adjective endings",
          "Prepositions and which case they take",
        ],
      },
      {
        name: "grammar",
        color: "#eb583d",
        image: "assets/images/packs/russian/grammar.png",
        summary: "The rest of the grammar you need to speak correctly and confidently.",
        details: [
          "Verb conjugation and tenses",
          "Perfective and imperfective aspect",
          "Verbs of motion",
        ],
      },
    ],
  },

  lessons: {
    heading: "About my lessons:",
    platforms: ["Yandex Telemost", "Google Meet"],
    price: { amount: 70, currency: "RM" },
    durationMinutes: 60,
    // {platforms}, {price} and {minutes} are filled in automatically.
    platformText: "I provide online lessons using various Russian meeting websites ({platforms}).",
    priceText: "The lessons cost {price} for {minutes} minutes.",
    bookingText: "To book a lesson and check my schedule please DM me on any social media<3",
  },

  contacts: {
    heading: "Contacts",
    text: "DM me on any social media to book a lesson<3",
    // Links with an empty url are hidden automatically.
    links: [
      { platform: "Instagram", handle: "@Boqkova_teach", url: "https://www.instagram.com/boqkova_teach" },
      { platform: "WhatsApp", handle: "+7 965 750-65-98", url: "https://wa.me/79657506598" },
      { platform: "Telegram", handle: "", url: "" },
      { platform: "YouTube", handle: "", url: "" },
    ],
  },
};

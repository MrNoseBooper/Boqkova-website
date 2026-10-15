/*
 * ============================================================
 *  SITE CONTENT — edit this file to change what the website says.
 *  You do not need to touch any other JavaScript file.
 *  See README.md for a guide to every field.
 * ============================================================
 */
const SITE_DATA = {
  site: {
    name: "Boqkova Teach",
    footerText: "Boqkova Teach, no rights reserved, only russian lessons",
  },

  // Menu links. "target" must match a section id: home, packs, lessons, courses, contacts
  nav: [
    { label: "Home", target: "home" },
    { label: "Courses", target: "courses" },
    { label: "Contacts", target: "contacts" },
  ],

  hero: {
    greeting: "yo",
    text: "You can check my prices and courses here. That's pretty much it<3",
    // Put a photo in assets/images/ and write its path here, e.g. "assets/images/me.jpg".
    // Leave empty ("") to show a letter avatar instead.
    photo: "assets/images/teacher.jpg",
    photoAlt: "The teacher in an art gallery, pulling a face and making rock-on hands",
  },

  // Words scrolling in the black ticker band under the greeting.
  marquee: ["online russian lessons", "RM70 / hr", "yandex telemost", "google meet", "dm to book"],

  packs: {
    heading: "the big four:",
    items: [
      {
        name: "base",
        color: "#fe98c0",
        image: "assets/images/packs/base.png",
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
        image: "assets/images/packs/tourist.png",
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
        image: "assets/images/packs/cases.png",
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
        image: "assets/images/packs/grammar.png",
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
    bookingText: "To book a lesson and check my schedule please DM me on any social media<3",
  },

  courses: {
    heading: "Courses",
    items: [
      {
        title: "Introductory Lesson",
        tagline: "Start Speaking Russian Confidently",
        price: { amount: 30, currency: "RM" },
        durationMinutes: 60,
        status: "open", // "open" or "ended"
        url: "", // booking link; leave empty to send people to Contacts
      },
      {
        title: "Russian Basics Course",
        tagline: "Speak Russian with Ease: Level A1",
        price: { amount: 200, currency: "RM" },
        durationMinutes: null,
        status: "ended",
        url: "",
      },
      {
        title: "Interactive Russian Class",
        tagline: "Engage in Dynamic Learning Sessions",
        price: { amount: 25, currency: "RM" },
        durationMinutes: null,
        status: "open",
        url: "",
      },
    ],
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

/*
 * ============================================================
 *  CONTENT FOR index.html — the intro page where visitors pick a language.
 * ============================================================
 */
const INTRO_DATA = {
  name: "Boqkova Teach",
  title: "Boqkova Teach · Russian & English lessons",
  greeting: "yo",
  text: "Online language lessons · Онлайн-уроки языков",
  photo: "assets/images/teacher.jpg",
  photoAlt: "The teacher in an art gallery, pulling a face and making rock-on hands",
  sticker: "RU ✦ EN",

  // One big button per website.
  choices: [
    {
      tag: "RU",
      label: "I want to learn Russian",
      sublabel: "Russian lessons, explained in English",
      href: "learn-russian.html",
      lang: "en",
      color: "#fe98c0",
    },
    {
      tag: "EN",
      label: "Я хочу учить английский",
      sublabel: "Уроки английского на русском",
      href: "learn-english.html",
      lang: "ru",
      color: "#80eb3d",
    },
  ],

  marquee: ["russian lessons", "уроки английского", "online", "онлайн", "dm to book", "пиши в директ"],
  footerText: "Boqkova Teach, no rights reserved · никакие права не защищены",
};

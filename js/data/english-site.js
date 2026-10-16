/*
 * ============================================================
 *  CONTENT FOR learn-english.html (English lessons, written in Russian).
 *  Edit this file to change what that website says.
 *  See README.md for a guide to every field.
 * ============================================================
 */
const SITE_DATA = {
  site: {
    name: "Boqkova Teach",
    title: "Boqkova Teach · английский",
    lang: "ru", // language the page is written in
    footerText: "Boqkova Teach, никакие права не защищены, только английский<3",
  },

  // Small words used on buttons and labels around the site.
  ui: {
    readMore: "Подробнее",
    whatWeCover: "Что проходим",
    bookLesson: "Записаться",
    contactMe: "Написать мне",
    close: "Закрыть",
    packPrefix: "Pack: ", // shown before each pack name, e.g. "Pack: tourist"
    units: { hour: "ч", hours: "ч", minute: "мин" },
  },

  // Menu links. "target" scrolls to a section: home, courses, lessons, contacts.
  // "href" opens another page instead (here: the other language version of the site).
  nav: [
    { label: "Главная", target: "home" },
    { label: "Курсы", target: "courses" },
    { label: "Контакты", target: "contacts" },
    { label: "EN ↔ RU", href: "learn-russian.html", transition: "let's go ✦" }, // transition = text on the page wipe
  ],

  hero: {
    greeting: "yo",
    text: "Здесь можно посмотреть мои цены и курсы. Вот и всё<3",
    photo: "assets/images/teacher.jpg",
    photoAlt: "Фото в музее: рожица и «коза» руками",
  },

  // Words scrolling in the black ticker band under the greeting.
  marquee: ["онлайн уроки английского", "1500 ₽ / час", "яндекс телемост", "google meet", "пиши в директ"],

  courses: {
    heading: "Курсы",

    packsHeading: "the big four:",
    packs: [
      {
        name: "tourist",
        color: "#80eb3d",
        image: "assets/images/packs/english/tourist.png",
        summary: "Английский для путешествий: аэропорт, отель, кафе и small talk без паники.",
        details: [
          "Аэропорт, транспорт и отели",
          "Кафе, магазины и оплата",
          "Small talk с местными",
        ],
      },
      {
        name: "grammar glow up",
        color: "#eb583d",
        image: "assets/images/packs/english/grammar-glow-up.png",
        summary: "Прокачаем грамматику: времена, артикли и всё, что вечно путается.",
        details: [
          "Все времена — без зубрёжки",
          "Артикли a / an / the",
          "Модальные глаголы и условные предложения",
        ],
      },
      {
        name: "accent",
        color: "#fe98c0",
        image: "assets/images/packs/english/accent.png",
        summary: "Ставим произношение, чтобы звучать естественно и уверенно.",
        details: [
          "Звуки, которых нет в русском: th, w, r",
          "Ударение и интонация",
          "Британский vs американский акцент",
        ],
      },
      {
        name: "slang",
        color: "#3dd0eb",
        image: "assets/images/packs/english/slang.png",
        summary: "Живой английский: сленг, мемы и фразы, которых нет в учебниках.",
        details: [
          "Сленг из сериалов, TikTok и соцсетей",
          "Идиомы и фразовые глаголы",
          "Как переписываться как носитель",
        ],
      },
    ],
  },

  lessons: {
    heading: "О моих уроках:",
    platforms: ["Яндекс Телемост", "Google Meet"],
    price: { amount: 1500, currency: "₽", currencyAfter: true },
    durationMinutes: 60,
    // {platforms}, {price} and {minutes} are filled in automatically.
    platformText: "Провожу онлайн-уроки на разных платформах ({platforms}).",
    priceText: "Урок длится {minutes} минут и стоит {price}.",
    bookingText: "Чтобы записаться на урок и узнать расписание, пиши мне в любую соцсеть<3",
  },

  contacts: {
    heading: "Контакты",
    text: "Пиши в любую соцсеть, чтобы записаться на урок<3",
    // Links with an empty url are hidden automatically.
    links: [
      { platform: "Instagram", handle: "@Boqkova_teach", url: "https://www.instagram.com/boqkova_teach" },
      { platform: "WhatsApp", handle: "+7 965 750-65-98", url: "https://wa.me/79657506598" },
      { platform: "Telegram", handle: "", url: "" },
      { platform: "YouTube", handle: "", url: "" },
    ],
  },
};

# Boqkova-website

Website for Boqkova Teach, which offers online language lessons. It's really two sites that share one design:

| Page | Who it's for | Written in |
|------|--------------|------------|
| `index.html` | Intro page: pick a language | English + Russian |
| `learn-russian.html` | People learning **Russian** | English |
| `learn-english.html` | Russians learning **English** | Russian |

It's a static site written in plain HTML, CSS and object-oriented JavaScript, with no frameworks and no build step. Both language sites run on the **same code**; only their content files differ.

## Running the site

Double-click `index.html` to open it in your browser. That's all you need.

To publish it, upload the whole folder to any static host, such as GitHub Pages, Netlify or Vercel. Visitors land on `index.html`.

## Folder structure

```
Boqkova-website/
├── index.html                  # Intro page with the two language buttons
├── learn-russian.html          # Russian-learning site (loads russian-site.js)
├── learn-english.html          # English-learning site (loads english-site.js)
├── README.md
├── assets/
│   └── images/
│       ├── teacher.jpg         # Black & white photo (4:5 portrait, 600×750), used on all pages
│       └── packs/              # Pack banner images (1920×1080)
│           ├── russian/        #   base, tourist, cases, grammar
│           └── english/        #   tourist, grammar-glow-up, accent, slang
├── tools/
│   └── banner-maker.html       # Open in a browser to make new pack banners in the same style
├── css/
│   └── styles.css              # All styling: colours, fonts, layout, mobile rules
└── js/
    ├── data/                   # ★ ALL WEBSITE TEXT, PRICES AND LINKS: edit these files
    │   ├── intro-data.js       #   Intro page (index.html)
    │   ├── russian-site.js     #   learn-russian.html
    │   └── english-site.js     #   learn-english.html
    ├── utils/
    │   └── Template.js         # Fills {placeholders} in texts, e.g. "{price}"
    ├── models/                 # Classes that hold and format the data
    │   ├── Price.js            #   An amount + currency: "RM70" or "1500 ₽"
    │   ├── Duration.js         #   Minutes, formatted as "1 hr" / "1 ч"
    │   ├── Offering.js         #   Abstract base class for things you can sign up for
    │   ├── Pack.js             #   extends Offering: one of "the big four" packs
    │   ├── Course.js           #   extends Offering: a bookable class with a price
    │   ├── LessonInfo.js       #   Platforms, lesson price, booking text
    │   ├── SocialLink.js       #   A contact link (hidden if it has no URL)
    │   └── LanguageChoice.js   #   One button on the intro page
    ├── components/             # Classes that turn models into HTML on the page
    │   ├── Component.js        #   Base class: render() + mount() + el() helper
    │   ├── Section.js          #   extends Component: a <section> with a heading
    │   ├── Header.js           #   Site name + menu (+ EN ↔ RU switch)
    │   ├── HeroSection.js      #   "yo" greeting + photo + price sticker
    │   ├── Marquee.js          #   Scrolling black ticker band
    │   ├── CourseSection.js    #   Courses: the big four packs + other classes
    │   ├── PackCard.js         #   One pack card
    │   ├── PackDetail.js       #   Pack details shown in the pop-up
    │   ├── CourseCard.js       #   One class card
    │   ├── LessonSection.js    #   "About my lessons"
    │   ├── ContactSection.js   #   Social media links
    │   ├── Footer.js
    │   ├── Modal.js            #   Pop-up window used by "Read More"
    │   ├── IntroBanner.js      #   Intro page: the big banner
    │   └── ChoiceButton.js     #   Intro page: one language button
    ├── App.js                  # Builds a language site from SITE_DATA
    ├── IntroApp.js             # Builds the intro page from INTRO_DATA
    ├── main.js                 # Entry point for the two language sites
    └── intro-main.js           # Entry point for the intro page
```

## How to change the information on the website

**All text, prices and links live in [`js/data/`](js/data/)**, one file per page:

- [`intro-data.js`](js/data/intro-data.js): the intro page and its two buttons
- [`russian-site.js`](js/data/russian-site.js): the Russian-learning site
- [`english-site.js`](js/data/english-site.js): the English-learning site

Open a file in any text editor, change the text between the quotes, save, and refresh the browser. The two site files have exactly the same shape, so everything below applies to both.

> Things to watch out for when editing:
> - Keep text inside quotes: `"like this"`. If the text contains a `"`, write it as `\"`.
> - Keep the comma at the end of every line and after every `}` in a list.
> - If the page goes blank after an edit, you probably broke the syntax. Press F12 and check the Console tab for the line number.
> - Things that appear on **both** sites (contacts, the photo) have to be changed in **both** files.

### Site name, tab title and footer

```js
site: {
  name: "Boqkova Teach",                     // shown in the header
  title: "Boqkova Teach · learn Russian",    // shown in the browser tab
  lang: "en",                                // language the page is written in: "en" or "ru"
  footerText: "Boqkova Teach, no rights reserved, only russian lessons",
},
```

### Button and label words (`ui`)

Small words used around the site, such as buttons and badges. This is how the English-learning site shows "Подробнее" where the Russian-learning site shows "Read More":

```js
ui: {
  readMore: "Read More",        // button on each pack
  whatWeCover: "What we cover", // heading in the pop-up
  bookLesson: "Book a lesson",  // button in the pop-up
  bookNow: "Book Now",          // button on each class
  notAvailable: "Not available",
  ended: "Ended",               // badge on finished classes
  contactMe: "Contact me",
  close: "Close",               // pop-up close button (read by screen readers)
  packPrefix: "Pack: ",         // put before each pack name
  units: { hour: "hr", hours: "hrs", minute: "min" }, // e.g. Russian: "ч", "ч", "мин"
},
```

### Menu

`target` scrolls to a section on the same page: `home`, `courses`, `lessons` or `contacts`. `href` opens another page instead. The green **EN ↔ RU** button uses it to go back to the intro page.

```js
nav: [
  { label: "Home", target: "home" },
  { label: "Courses", target: "courses" },
  { label: "Contacts", target: "contacts" },
  { label: "EN ↔ RU", href: "index.html" },
],
```

### Greeting and photo

```js
hero: {
  greeting: "yo",
  text: "You can check my prices and courses here. That's pretty much it<3",
  photo: "assets/images/teacher.jpg",     // "" shows a letter avatar instead
  photoAlt: "The teacher in an art gallery, ...", // describes the photo for screen readers
},
```

To change the photo, replace `assets/images/teacher.jpg`. The same file is used on all three pages. The frame is a **4:5 portrait** (e.g. 600×750), and anything outside that shape gets cropped. The current photo was converted to black and white before it was saved, so a new photo should be converted too if you want to keep the look.

The tilted sticker on the photo (e.g. "RM70 / 1 hr") is generated automatically from the lesson price and duration (see below).

### Scrolling ticker

The black band under the greeting scrolls these words. Add, remove or reorder them as you like:

```js
marquee: ["online russian lessons", "RM70 / hr", "yandex telemost", "google meet", "dm to book"],
```

The ticker does **not** update itself when the price changes, so remember to edit the price here too.

### Courses: the big four packs

The Courses section shows the four packs first, then any other classes. Each pack is one `{ ... }` block in `courses.packs`. To add a pack, copy a whole block. To remove one, delete its block.

```js
courses: {
  heading: "Courses",
  packsHeading: "the big four:",
  packs: [
    {
      name: "base",                 // shown as "Pack: base" (title / image alt text)
      color: "#fe98c0",             // used when there's no image; match it to the image background
      image: "assets/images/packs/russian/base.png", // banner picture; "" shows a coloured title instead
      summary: "Short text on the card.",
      details: [                    // bullet list in the "Read More" pop-up
        "The Cyrillic alphabet and reading",
        "Pronunciation and word stress",
      ],
    },
    ...
  ],
```

To change a pack picture, replace the file in `assets/images/packs/russian/` or `.../english/` (keep the same name), or point `image` at a new file. Use a 16:9 image, such as 1920×1080. The picture appears on the card and at the top of the "Read More" pop-up.

**Making a new banner:** open [`tools/banner-maker.html`](tools/banner-maker.html) in your browser. Type the word, pick the colour and click **Download PNG**, then move the file into the right `packs/` folder. For a long name, type `|` where the second line should start, e.g. `Grammar|glow up`. The tool uses the same font, size and layout as the existing banners, so new packs will match.

### Courses: other classes

Shown under the packs, under `extraHeading`. The English-learning site has none (`items: []`), so this block is hidden there.

```js
  extraHeading: "more classes:",
  items: [
    {
      title: "Introductory Lesson",
      tagline: "Start Speaking Russian Confidently",
      price: { amount: 30, currency: "RM" },
      durationMinutes: 60,          // null hides the duration
      status: "open",               // "open" shows the booking button; "ended" greys the card out
      url: "",                      // booking link; "" makes the button scroll to Contacts
    },
  ],
},
```

### Lesson price and platforms

```js
lessons: {
  heading: "About my lessons:",
  platforms: ["Yandex Telemost", "Google Meet"],
  price: { amount: 70, currency: "RM" },  // shown as "RM70"
  durationMinutes: 60,
  platformText: "I provide online lessons using various Russian meeting websites ({platforms}).",
  priceText: "The lessons cost {price} for {minutes} minutes.",
  bookingText: "To book a lesson and check my schedule please DM me on any social media<3",
},
```

- **Currency:** put `currencyAfter: true` in `price` to write the currency after the number. The English-learning site uses `{ amount: 1500, currency: "₽", currencyAfter: true }`, which shows as "1500 ₽".
- **Placeholders:** `{platforms}`, `{price}` and `{minutes}` in the texts are filled in automatically.
- **Pop-ups:** changing the price here also updates the price shown in each pack's "Read More" pop-up.

### Contacts / social media

A link with an empty `url` is hidden automatically. To show Telegram, fill in its handle and URL (in **both** site files):

```js
{ platform: "Telegram", handle: "@your_username", url: "https://t.me/your_username" },
```

Useful URL formats:

| Platform  | URL format                          |
|-----------|-------------------------------------|
| Instagram | `https://www.instagram.com/username` |
| WhatsApp  | `https://wa.me/79657506598` (digits only, with country code) |
| Telegram  | `https://t.me/username`             |
| YouTube   | `https://www.youtube.com/@channel`  |

### Intro page

[`intro-data.js`](js/data/intro-data.js) holds the greeting, the line under it, the photo sticker, the ticker words and the footer. It also holds the two buttons:

```js
choices: [
  {
    tag: "RU",                               // small black label
    label: "I want to learn Russian",        // big text
    sublabel: "Russian lessons, explained in English",
    href: "learn-russian.html",              // page it opens
    lang: "en",                              // language of the label
    color: "#fe98c0",                        // button colour
  },
  ...
],
```

### Colours and fonts

These are in [`css/styles.css`](css/styles.css). The look is "neo-brutalist": thick black outlines, hard offset shadows and loud colours. Everything is controlled by variables at the top of the file:

```css
:root {
  --bg: #fffaf7;        /* page background (warm off-white) */
  --ink: #0d0d0d;       /* text, outlines and shadows */
  --muted: #4d4a4b;     /* secondary text */
  /* These four match the backgrounds of the pack images: */
  --pink: #fe98c0;      /* buttons, logo, price box, ticker + footer text */
  --green: #80eb3d;     /* price sticker, EN ↔ RU button */
  --blue: #3dd0eb;      /* platform chips */
  --red: #eb583d;       /* ✦ stars */

  --border: 3px solid var(--ink);    /* outline thickness */
  --shadow: 6px 6px 0 var(--ink);    /* the hard "sticker" shadow */
  --radius: 18px;                    /* corner roundness */

  --font-display: "Bricolage Grotesque", "Golos Text", ...;  /* big headings */
  --font-body: "DM Sans", "Golos Text", ...;                 /* normal text */
}
```

The fonts come from Google Fonts and are loaded in the `<head>` of each of the three HTML pages. If you change a font, change it in all three, and also change `--font-display` or `--font-body`.

Bricolage Grotesque and DM Sans don't include Cyrillic letters. Russian text therefore falls back to **Golos Text**, the Cyrillic-friendly font the pack banners are drawn in, so both alphabets look bold.

The pack colours aren't set here. They come from each pack's `color` in the data files. The contact cards cycle through pink, green, blue and red.

## How the code is organised (for developers)

The JavaScript follows a simple object-oriented design:

- **One codebase, two sites.** `learn-russian.html` and `learn-english.html` load identical scripts and differ only in their content file. Each content file defines `SITE_DATA`, and `main.js` runs `new App(SITE_DATA)`. Every visible word, including button labels (`ui`) and sentence templates, comes from the data, so the classes are language-neutral.
- **Data → Models → Components.** `App` wraps the plain data in model classes (`Pack`, `Course`, `LessonInfo`, `SocialLink`). Components receive those models and render them. `IntroApp` does the same for the intro page with `LanguageChoice`.
- **Inheritance.**
  - `Pack` and `Course` extend the abstract `Offering`.
  - Every UI piece extends `Component`. Page sections extend `Section`, which supplies the `<section>` wrapper and heading (a template method) and calls each subclass's `renderContent()`.
- **Encapsulation.**
  - Display logic lives on the models: `Price#toString()`, `Duration#toString()`, `LessonInfo#priceText`, `Course#isOpen` and `SocialLink#isAvailable`. Components never format values themselves.
  - The `Component#el()` helper builds DOM nodes with `textContent`, never `innerHTML`, so any text in the data files is displayed safely.
- **Composition.** `CourseSection` creates `PackCard`s and `CourseCard`s and opens a shared `Modal`, which can display any `Component`. Here it shows a `PackDetail`. The intro page reuses `Marquee` and `Footer`.

**Adding a new section:**
1. Create `js/components/MySection.js` with `class MySection extends Section { renderContent() { return [...]; } }`.
2. Add a `<script defer>` tag for it in **both** `learn-russian.html` and `learn-english.html`, after `Section.js` and before `App.js`.
3. Mount it in the list in `App#start()`, and add its text to both site data files.

The scripts are plain (non-module) scripts loaded with `defer`, so the site works when opened straight from disk. Their order in the HTML matters: a class must be loaded before any class that extends or uses it.

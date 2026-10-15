# Boqkova-website

Website for Boqkova Teach, which offers online Russian lessons. It's a static site written in plain HTML, CSS and object-oriented JavaScript, with no frameworks and no build step.

## Running the site

Double-click `index.html` to open it in your browser. That's all you need.

To publish it, upload the whole folder to any static host, such as GitHub Pages, Netlify or Vercel.

## Folder structure

```
Boqkova-website/
├── index.html                  # Page shell; loads the CSS and every script in order
├── README.md
├── assets/
│   └── images/
│       ├── teacher.jpg         # Black & white hero photo (4:5 portrait, 600×750)
│       └── packs/              # Pack banner images (1920×1080): base, tourist, cases, grammar
├── tools/
│   └── banner-maker.html       # Open in a browser to make new pack banners in the same style
├── css/
│   └── styles.css              # All styling: colours, layout, mobile rules
└── js/
    ├── data/
    │   └── site-data.js        # ★ ALL WEBSITE TEXT, PRICES AND LINKS: edit this file
    ├── models/                 # Classes that hold and format the data
    │   ├── Price.js            #   An amount + currency, e.g. "RM70"
    │   ├── Duration.js         #   Minutes, formatted as "1 hr" / "45 min"
    │   ├── Offering.js         #   Abstract base class for things you can sign up for
    │   ├── Pack.js             #   extends Offering: one of "the big four" packs
    │   ├── Course.js           #   extends Offering: a bookable course with a price
    │   ├── LessonInfo.js       #   Platforms, lesson price, booking text
    │   └── SocialLink.js       #   A contact link (hidden if it has no URL)
    ├── components/             # Classes that turn models into HTML on the page
    │   ├── Component.js        #   Base class: render() + mount() + el() helper
    │   ├── Section.js          #   extends Component: a <section> with a heading
    │   ├── Header.js           #   Site name + menu
    │   ├── HeroSection.js      #   "yo" greeting + photo + price sticker
    │   ├── Marquee.js          #   Scrolling black ticker band
    │   ├── PackSection.js      #   Grid of packs
    │   ├── PackCard.js         #   One coloured pack card
    │   ├── PackDetail.js       #   Pack details shown in the pop-up
    │   ├── LessonSection.js    #   "About my lessons"
    │   ├── CourseSection.js    #   Grid of courses
    │   ├── CourseCard.js       #   One course card
    │   ├── ContactSection.js   #   Social media links
    │   ├── Footer.js
    │   └── Modal.js            #   Pop-up window used by "Read More"
    ├── App.js                  # Builds models from SITE_DATA and mounts the components
    └── main.js                 # Entry point: new App(SITE_DATA).start(...)
```

## How to change the information on the website

**Almost everything is in [`js/data/site-data.js`](js/data/site-data.js).** Open it in any text editor, change the text between the quotes, save, and refresh the browser.

> Things to watch out for when editing:
> - Keep text inside quotes: `"like this"`. If the text contains a `"`, write it as `\"`.
> - Keep the comma at the end of every line and after every `}` in a list.
> - If the page goes blank after an edit, you probably broke the syntax. Press F12 and check the Console tab for the line number.

### Site name and footer

```js
site: {
  name: "Boqkova Teach",                  // shown in the header and browser tab
  footerText: "Boqkova Teach, no rights reserved, only russian lessons",
},
```

### Menu

Each `target` must be one of the section ids: `home`, `packs`, `lessons`, `courses`, `contacts`.

```js
nav: [
  { label: "Home", target: "home" },
  { label: "Packs", target: "packs" },    // ← example: add a new menu item
  ...
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

To change the photo, replace `assets/images/teacher.jpg` or copy a new image into `assets/images/` and put its path in `photo`. The frame is a **4:5 portrait** (e.g. 600×750), and anything outside that shape gets cropped. The current photo was converted to black and white before it was saved, so a new photo should be converted too if you want to keep the look.

The tilted sticker on the photo (e.g. "RM70 / 1 hr") is generated automatically from the lesson price and duration (see below).

### Scrolling ticker

The black band under the greeting scrolls these words. Add, remove or reorder them as you like:

```js
marquee: ["online russian lessons", "RM70 / hr", "yandex telemost", "google meet", "dm to book"],
```

The ticker does **not** update itself when the price changes, so remember to edit `"RM70 / hr"` here too.

### Lesson price and platforms

```js
lessons: {
  heading: "About my lessons:",
  platforms: ["Yandex Telemost", "Google Meet"],
  price: { amount: 70, currency: "RM" },  // shown as "RM70"
  durationMinutes: 60,
  bookingText: "To book a lesson and check my schedule please DM me on any social media<3",
},
```

Changing the price here also updates the price shown in each pack's "Read More" pop-up.

### Packs ("the big four")

Each pack is one `{ ... }` block in `packs.items`. To add a pack, copy a whole block. To remove one, delete its block.

```js
{
  name: "base",                 // used as "Pack: base" (title / image alt text)
  color: "#fe98c0",             // pack colour, used when there's no image; match it to the image background
  image: "assets/images/packs/base.png", // banner picture; "" shows the coloured title instead
  summary: "Short text on the card.",
  details: [                    // bullet list in the "Read More" pop-up
    "The Cyrillic alphabet and reading",
    "Pronunciation and word stress",
  ],
},
```

To change a pack picture, replace the file in `assets/images/packs/` (keep the same name) or point `image` at a new file. Use a 16:9 image, such as 1920×1080. The picture appears on the card and at the top of the "Read More" pop-up.

**Making a new banner:** open [`tools/banner-maker.html`](tools/banner-maker.html) in your browser. Type the word, pick the colour and click **Download PNG**, then move the file into `assets/images/packs/`. It uses the same font, size and layout as the existing banners, so new packs will match.

### Courses

```js
{
  title: "Introductory Lesson",
  tagline: "Start Speaking Russian Confidently",
  price: { amount: 30, currency: "RM" },
  durationMinutes: 60,          // null hides the duration
  status: "open",               // "open" shows "Book Now"; "ended" greys the card out
  url: "",                      // booking link; "" makes "Book Now" scroll to Contacts
},
```

### Contacts / social media

A link with an empty `url` is hidden automatically. To show Telegram, fill in its handle and URL:

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

### Colours and fonts

These are in [`css/styles.css`](css/styles.css). The look is "neo-brutalist": thick black outlines, hard offset shadows and loud colours. Everything is controlled by variables at the top of the file:

```css
:root {
  --bg: #fffaf7;        /* page background (warm off-white) */
  --ink: #0d0d0d;       /* text, outlines and shadows */
  --muted: #4d4a4b;     /* secondary text */
  /* These four match the backgrounds of the pack images: */
  --pink: #fe98c0;      /* buttons, logo, price box, ticker + footer text */
  --green: #80eb3d;     /* price sticker */
  --blue: #3dd0eb;      /* platform chips */
  --red: #eb583d;       /* ✦ stars */

  --border: 3px solid var(--ink);    /* outline thickness */
  --shadow: 6px 6px 0 var(--ink);    /* the hard "sticker" shadow */
  --radius: 18px;                    /* corner roundness */

  --font-display: "Bricolage Grotesque", ...;  /* big headings */
  --font-body: "DM Sans", ...;                 /* normal text */
}
```

The fonts come from Google Fonts and are loaded in the `<head>` of `index.html`. If you change a font there, also change `--font-display` or `--font-body`.

Bricolage Grotesque doesn't include Cyrillic letters. Russian text in a heading therefore falls back to **Golos Text** (weight 900), the heavy, Cyrillic-friendly font the pack banners are drawn in, so both alphabets look bold.

The pack colours aren't set here. They come from each pack's `color` in `site-data.js`. The contact cards cycle through pink, green, blue and red. If you replace the pack images with new colours, update these variables too so the site still matches.

## How the code is organised (for developers)

The JavaScript follows a simple object-oriented design:

- **Data → Models → Components.** `App` reads the plain `SITE_DATA` object and wraps it in model classes (`Pack`, `Course`, `LessonInfo`, `SocialLink`). Components receive those models and render them.
- **Inheritance.**
  - `Pack` and `Course` extend the abstract `Offering`.
  - Every UI piece extends `Component`. Page sections extend `Section`, which supplies the `<section>` wrapper and heading (a template method) and calls each subclass's `renderContent()`.
- **Encapsulation.**
  - Display logic lives on the models: `Price#toString()`, `Duration#toString()`, `Course#isOpen`, `Course#bookingHref` and `SocialLink#isAvailable`. Components never format values themselves.
  - The `Component#el()` helper builds DOM nodes with `textContent`, never `innerHTML`, so any text in the data file is displayed safely.
- **Composition.** `PackSection` creates `PackCard`s and opens a shared `Modal`, which can display any `Component`. Here it shows a `PackDetail`.

**Adding a new section:**
1. Create `js/components/MySection.js` with `class MySection extends Section { renderContent() { return [...]; } }`.
2. Add a `<script defer>` tag for it in `index.html`, after `Section.js` and before `App.js`.
3. Mount it in the list in `App#start()`.

The scripts are plain (non-module) scripts loaded with `defer`, so the site works when opened straight from disk. Their order in `index.html` matters: a class must be loaded before any class that extends or uses it.

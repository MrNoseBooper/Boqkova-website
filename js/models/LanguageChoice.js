/** One button on the intro page that opens a language version of the site. */
class LanguageChoice {
  constructor({ label, sublabel = "", tag, href, lang, color }) {
    this.label = label;
    this.sublabel = sublabel;
    this.tag = tag;
    this.href = href;
    this.lang = lang;
    this.color = color;
  }
}

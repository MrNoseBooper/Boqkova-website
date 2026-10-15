/** Fills {placeholders} in a text, e.g. Template.fill("costs {price}", { price: "RM70" }). */
class Template {
  static fill(text, values) {
    return text.replace(/\{(\w+)\}/g, (match, key) => (key in values ? String(values[key]) : match));
  }
}

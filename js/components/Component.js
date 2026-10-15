/**
 * Base class for every piece of the page.
 * Subclasses implement render(), which returns a DOM element.
 */
class Component {
  constructor() {
    this.element = null;
  }

  render() {
    throw new Error(`${this.constructor.name} must implement render()`);
  }

  mount(parent) {
    this.element = this.render();
    parent.appendChild(this.element);
    return this;
  }

  /**
   * Small helper for building elements without innerHTML (text is always escaped).
   * this.el("a", { className: "btn", text: "Hi", attrs: { href: "#" }, on: { click: fn } }, [children])
   */
  el(tag, { className, text, attrs = {}, style = {}, on = {} } = {}, children = []) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    for (const [name, value] of Object.entries(attrs)) {
      if (value !== undefined && value !== null && value !== false) node.setAttribute(name, value);
    }
    for (const [name, value] of Object.entries(style)) node.style.setProperty(name, value);
    for (const [event, handler] of Object.entries(on)) node.addEventListener(event, handler);
    for (const child of children) {
      if (child !== null && child !== undefined && child !== false) node.append(child);
    }
    return node;
  }
}

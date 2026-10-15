/**
 * Base class for a page section: wraps content in <section id> with an optional heading.
 * Subclasses implement renderContent(), which returns an array of elements.
 */
class Section extends Component {
  constructor(id, heading = "") {
    super();
    this.id = id;
    this.heading = heading;
  }

  render() {
    return this.el("section", { className: `section section--${this.id}`, attrs: { id: this.id } }, [
      this.el("div", { className: "container" }, [
        this.heading ? this.el("h2", { className: "section__heading", text: this.heading }) : null,
        ...this.renderContent(),
      ]),
    ]);
  }

  renderContent() {
    throw new Error(`${this.constructor.name} must implement renderContent()`);
  }
}

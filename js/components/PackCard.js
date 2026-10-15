/** A card for one pack: its banner image (or coloured title), summary and "Read More". */
class PackCard extends Component {
  constructor(pack, ui, onReadMore) {
    super();
    this.pack = pack;
    this.ui = ui;
    this.onReadMore = onReadMore;
  }

  render() {
    return this.el("article", { className: "pack-card", style: { "--pack-color": this.pack.color } }, [
      this.renderBanner(),
      this.el("p", { className: "pack-card__summary", text: this.pack.description }),
      this.el("button", {
        className: "btn btn--ghost",
        text: this.ui.readMore,
        attrs: { type: "button" },
        on: { click: () => this.onReadMore(this.pack) },
      }),
    ]);
  }

  /** The image replaces the visible title; its alt text keeps the heading readable to screen readers. */
  renderBanner() {
    if (this.pack.hasImage) {
      return this.el("h4", { className: "pack-card__banner pack-card__banner--image" }, [
        this.el("img", { className: "pack-card__image", attrs: { src: this.pack.image, alt: this.pack.title } }),
      ]);
    }
    return this.el("div", { className: "pack-card__banner" }, [
      this.el("h4", { className: "pack-card__title", text: this.pack.title }),
    ]);
  }
}

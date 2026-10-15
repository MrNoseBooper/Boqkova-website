/** Full description of a pack, shown inside the Modal. */
class PackDetail extends Component {
  constructor(pack, lessonInfo) {
    super();
    this.pack = pack;
    this.lessonInfo = lessonInfo;
  }

  render() {
    return this.el("div", { className: "pack-detail", style: { "--pack-color": this.pack.color } }, [
      this.renderTitle(),
      this.el("p", { text: this.pack.description }),
      this.el("h4", { text: "What we cover" }),
      this.el("ul", { className: "pack-detail__list" },
        this.pack.details.map((item) => this.el("li", { text: item }))
      ),
      this.el("p", { className: "muted", text: `${this.lessonInfo.priceText} ${this.lessonInfo.bookingText}` }),
      this.el("a", { className: "btn", text: "Book a lesson", attrs: { href: "#contacts", "data-close-modal": "" } }),
    ]);
  }

  renderTitle() {
    if (this.pack.hasImage) {
      return this.el("h3", { className: "pack-detail__media" }, [
        this.el("img", { className: "pack-detail__image", attrs: { src: this.pack.image, alt: this.pack.title } }),
      ]);
    }
    return this.el("h3", { className: "pack-detail__title", text: this.pack.title });
  }
}

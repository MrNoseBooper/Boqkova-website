/** Scrolling ticker band. The track is drawn twice so the loop is seamless. */
class Marquee extends Component {
  constructor(items, repeat = 3) {
    super();
    this.items = items;
    this.repeat = repeat;
  }

  render() {
    return this.el("div", { className: "marquee" }, [this.renderTrack(false), this.renderTrack(true)]);
  }

  renderTrack(hidden) {
    const words = [];
    for (let i = 0; i < this.repeat; i++) {
      for (const item of this.items) {
        words.push(this.el("span", { text: item }));
        words.push(this.el("span", { className: "marquee__star", text: "✦", attrs: { "aria-hidden": "true" } }));
      }
    }
    return this.el("div", { className: "marquee__track", attrs: { "aria-hidden": hidden ? "true" : null } }, words);
  }
}

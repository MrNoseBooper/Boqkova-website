/** Page footer. */
class Footer extends Component {
  constructor(site) {
    super();
    this.site = site;
  }

  render() {
    return this.el("footer", { className: "footer" }, [
      this.el("div", { className: "container", text: this.site.footerText }),
    ]);
  }
}

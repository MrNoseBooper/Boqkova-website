/** Top bar with the site name and menu. */
class Header extends Component {
  constructor(site, navItems) {
    super();
    this.site = site;
    this.navItems = navItems;
  }

  render() {
    const links = this.navItems.map((item) =>
      this.el("a", { className: "nav__link", text: item.label, attrs: { href: `#${item.target}` } })
    );

    return this.el("header", { className: "header" }, [
      this.el("div", { className: "container header__inner" }, [
        this.el("a", { className: "header__brand", text: this.site.name, attrs: { href: "#home" } }),
        this.el("nav", { className: "nav", attrs: { "aria-label": "Main" } }, links),
      ]),
    ]);
  }
}

/** Top bar with the site name and menu. */
class Header extends Component {
  constructor(site, navItems) {
    super();
    this.site = site;
    this.navItems = navItems;
  }

  render() {
    // An item with "href" links to another page (e.g. the language switch); otherwise it scrolls to a section.
    const links = this.navItems.map((item) =>
      this.el("a", {
        className: item.href ? "nav__link nav__link--switch" : "nav__link",
        text: item.label,
        attrs: { href: item.href || `#${item.target}` },
      })
    );

    return this.el("header", { className: "header" }, [
      this.el("div", { className: "container header__inner" }, [
        this.el("a", { className: "header__brand", text: this.site.name, attrs: { href: "#home" } }),
        this.el("nav", { className: "nav", attrs: { "aria-label": "Main" } }, links),
      ]),
    ]);
  }
}

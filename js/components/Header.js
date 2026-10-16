/** Top bar with the site name and menu. */
class Header extends Component {
  constructor(site, navItems, transition) {
    super();
    this.site = site;
    this.navItems = navItems;
    this.transition = transition;
  }

  render() {
    // An item with "href" links to another page (the language switch); otherwise it scrolls to a section.
    const links = this.navItems.map((item) =>
      item.href
        ? this.el("a", {
            className: "nav__link nav__link--switch",
            text: item.label,
            attrs: { href: item.href },
            on: { click: (event) => this.switchPage(event, item) },
          })
        : this.el("a", { className: "nav__link", text: item.label, attrs: { href: `#${item.target}` } })
    );

    return this.el("header", { className: "header" }, [
      this.el("div", { className: "container header__inner" }, [
        this.el("a", { className: "header__brand", text: this.site.name, attrs: { href: "#home" } }),
        this.el("nav", { className: "nav", attrs: { "aria-label": "Main" } }, links),
      ]),
    ]);
  }

  mount(parent) {
    super.mount(parent);
    this.syncScrollPadding();
    window.addEventListener("resize", () => this.syncScrollPadding());
    return this;
  }

  /** Jumping to a section should stop exactly under the sticky header, whose height changes when the menu wraps. */
  syncScrollPadding() {
    document.documentElement.style.scrollPaddingTop = `${this.element.offsetHeight}px`;
  }

  /**
   * Opens the other language version at the section you were looking at, with the page wipe.
   * Both sites use the same section ids (home, courses, lessons, contacts), so the anchor carries over.
   */
  switchPage(event, item) {
    if (!PageTransition.shouldHandle(event)) return; // e.g. Ctrl+click: let the browser open a new tab
    event.preventDefault();
    const section = this.currentSectionId();
    this.transition.leave(section ? `${item.href}#${section}` : item.href, item.transition);
  }

  /** Id of the section being read: the last one whose top has passed a line a third of the way down the screen. */
  currentSectionId() {
    const readingLine = window.innerHeight / 3;
    let current = null;
    for (const section of document.querySelectorAll("main section[id]")) {
      if (section.getBoundingClientRect().top <= readingLine) current = section.id;
    }
    return current;
  }
}

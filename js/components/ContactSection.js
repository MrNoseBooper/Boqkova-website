/** Social media / contact links. */
class ContactSection extends Section {
  constructor(heading, text, socialLinks) {
    super("contacts", heading);
    this.text = text;
    this.socialLinks = socialLinks;
  }

  renderContent() {
    return [
      this.el("p", { className: "section__lead", text: this.text }),
      this.el("ul", { className: "contact-list" }, this.socialLinks.map((link) => this.renderLink(link))),
    ];
  }

  renderLink(link) {
    return this.el("li", {}, [
      this.el("a", {
        className: "contact-card",
        attrs: { href: link.url, target: "_blank", rel: "noopener" },
      }, [
        this.el("span", { className: "contact-card__platform", text: link.platform }),
        this.el("span", { className: "contact-card__handle", text: link.label }),
      ]),
    ]);
  }
}

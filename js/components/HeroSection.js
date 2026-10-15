/** Greeting at the top of the page, with a photo (or letter avatar) and a price sticker. */
class HeroSection extends Section {
  constructor(hero, siteName, lessonInfo) {
    super("home");
    this.hero = hero;
    this.siteName = siteName;
    this.lessonInfo = lessonInfo;
  }

  renderContent() {
    return [
      this.el("div", { className: "hero" }, [
        this.el("div", { className: "hero__media" }, [
          this.renderAvatar(),
          this.el("span", {
            className: "hero__sticker",
            text: `${this.lessonInfo.price} / ${this.lessonInfo.duration}`,
          }),
        ]),
        this.el("div", { className: "hero__text" }, [
          this.el("h1", { className: "hero__greeting", text: this.hero.greeting }),
          this.el("p", { className: "hero__lead", text: this.hero.text }),
        ]),
      ]),
    ];
  }

  renderAvatar() {
    if (this.hero.photo) {
      return this.el("img", {
        className: "hero__avatar",
        attrs: { src: this.hero.photo, alt: this.hero.photoAlt },
      });
    }
    return this.el("div", {
      className: "hero__avatar hero__avatar--letter",
      text: this.siteName.charAt(0),
      attrs: { "aria-hidden": "true" },
    });
  }
}

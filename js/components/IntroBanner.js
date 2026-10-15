/** The big banner on the intro page: photo, greeting and the language buttons. */
class IntroBanner extends Component {
  constructor(intro, choices) {
    super();
    this.intro = intro;
    this.choices = choices;
  }

  render() {
    const choiceList = this.el("div", { className: "intro-banner__choices" });
    this.choices.forEach((choice) => new ChoiceButton(choice).mount(choiceList));

    return this.el("section", { className: "intro-banner" }, [
      this.el("div", { className: "hero__media intro-banner__media" }, [
        this.el("img", { className: "hero__avatar", attrs: { src: this.intro.photo, alt: this.intro.photoAlt } }),
        this.el("span", { className: "hero__sticker", text: this.intro.sticker }),
      ]),
      this.el("div", { className: "intro-banner__content" }, [
        this.el("span", { className: "header__brand intro-banner__brand", text: this.intro.name }),
        this.el("h1", { className: "hero__greeting", text: this.intro.greeting }),
        this.el("p", { className: "hero__lead", text: this.intro.text }),
        choiceList,
      ]),
    ]);
  }
}

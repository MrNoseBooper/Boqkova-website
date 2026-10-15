/** A big coloured button on the intro page that opens one language version of the site. */
class ChoiceButton extends Component {
  constructor(choice) {
    super();
    this.choice = choice;
  }

  render() {
    const { choice } = this;
    return this.el("a", {
      className: "choice",
      attrs: { href: choice.href, lang: choice.lang, hreflang: choice.lang },
      style: { "--choice-color": choice.color },
    }, [
      this.el("span", { className: "choice__tag", text: choice.tag }),
      this.el("span", { className: "choice__label", text: choice.label }),
      choice.sublabel ? this.el("span", { className: "choice__sub", text: choice.sublabel }) : null,
      this.el("span", { className: "choice__arrow", text: "→", attrs: { "aria-hidden": "true" } }),
    ]);
  }
}

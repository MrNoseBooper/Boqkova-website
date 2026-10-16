/** Builds the intro page (language chooser) from INTRO_DATA. */
class IntroApp {
  constructor(data) {
    this.data = data;
    this.choices = data.choices.map((item) => new LanguageChoice(item));
  }

  start(root) {
    document.title = this.data.title;

    const transition = new PageTransition().mount(root);
    transition.enter();

    const main = document.createElement("main");
    main.className = "intro container";
    root.appendChild(main);

    new IntroBanner(this.data, this.choices, transition).mount(main);
    new Marquee(this.data.marquee).mount(root);
    new Footer({ footerText: this.data.footerText }).mount(root);
  }
}

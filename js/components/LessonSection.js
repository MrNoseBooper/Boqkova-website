/** "About my lessons" — platforms, price and how to book. */
class LessonSection extends Section {
  constructor(heading, lessonInfo) {
    super("lessons", heading);
    this.lessonInfo = lessonInfo;
  }

  renderContent() {
    const info = this.lessonInfo;
    return [
      this.el("div", { className: "lesson-info" }, [
        this.el("div", { className: "lesson-info__price" }, [
          this.el("span", { className: "lesson-info__amount", text: info.price.toString() }),
          this.el("span", { className: "lesson-info__per", text: `/ ${info.duration.minutes} min` }),
        ]),
        this.el("div", { className: "lesson-info__text" }, [
          this.el("p", { text: info.platformText }),
          this.el("ul", { className: "chips" },
            info.platforms.map((name) => this.el("li", { className: "chip", text: name }))
          ),
          this.el("p", { text: info.bookingText }),
          this.el("a", { className: "btn", text: "Contact me", attrs: { href: "#contacts" } }),
        ]),
      ]),
    ];
  }
}

/** One course with its price, duration and a booking button. */
class CourseCard extends Component {
  constructor(course, ui) {
    super();
    this.course = course;
    this.ui = ui;
  }

  render() {
    const course = this.course;
    const meta = [course.duration.toString(), course.price.toString()].filter(Boolean).join(" · ");

    return this.el("article", { className: `course-card${course.isOpen ? "" : " course-card--ended"}` }, [
      course.isOpen ? null : this.el("span", { className: "badge", text: this.ui.ended }),
      this.el("h4", { className: "course-card__title", text: course.title }),
      this.el("p", { className: "course-card__tagline", text: course.description }),
      this.el("p", { className: "course-card__meta", text: meta }),
      this.renderButton(),
    ]);
  }

  renderButton() {
    if (!this.course.isOpen) {
      return this.el("span", { className: "btn btn--disabled", text: this.ui.notAvailable, attrs: { "aria-disabled": "true" } });
    }
    const external = Boolean(this.course.url);
    return this.el("a", {
      className: "btn",
      text: this.ui.bookNow,
      attrs: {
        href: this.course.bookingHref,
        target: external ? "_blank" : null,
        rel: external ? "noopener" : null,
      },
    });
  }
}

/** One course with its price, duration and a booking button. */
class CourseCard extends Component {
  constructor(course) {
    super();
    this.course = course;
  }

  render() {
    const course = this.course;
    const meta = [course.duration.toString(), course.price.toString()].filter(Boolean).join(" · ");

    return this.el("article", { className: `course-card${course.isOpen ? "" : " course-card--ended"}` }, [
      course.isOpen ? null : this.el("span", { className: "badge", text: "Ended" }),
      this.el("h3", { className: "course-card__title", text: course.title }),
      this.el("p", { className: "course-card__tagline", text: course.description }),
      this.el("p", { className: "course-card__meta", text: meta }),
      this.renderButton(),
    ]);
  }

  renderButton() {
    if (!this.course.isOpen) {
      return this.el("span", { className: "btn btn--disabled", text: "Not available", attrs: { "aria-disabled": "true" } });
    }
    const external = Boolean(this.course.url);
    return this.el("a", {
      className: "btn",
      text: "Book Now",
      attrs: {
        href: this.course.bookingHref,
        target: external ? "_blank" : null,
        rel: external ? "noopener" : null,
      },
    });
  }
}

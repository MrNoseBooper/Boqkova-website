/** List of courses. */
class CourseSection extends Section {
  constructor(heading, courses) {
    super("courses", heading);
    this.courses = courses;
  }

  renderContent() {
    const list = this.el("div", { className: "course-grid" });
    this.courses.forEach((course) => new CourseCard(course).mount(list));
    return [list];
  }
}

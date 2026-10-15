/**
 * The Courses section: "the big four" packs first, then any other classes.
 * Either list may be empty, in which case its block is left out.
 */
class CourseSection extends Section {
  constructor({ heading, packsHeading, extraHeading, packs, courses, lessonInfo, ui, modal }) {
    super("courses", heading);
    this.packsHeading = packsHeading;
    this.extraHeading = extraHeading;
    this.packs = packs;
    this.courses = courses;
    this.lessonInfo = lessonInfo;
    this.ui = ui;
    this.modal = modal;
  }

  renderContent() {
    return [...this.renderPacks(), ...this.renderCourses()];
  }

  renderPacks() {
    if (this.packs.length === 0) return [];
    const grid = this.el("div", { className: "pack-grid" });
    this.packs.forEach((pack) => new PackCard(pack, this.ui, (p) => this.showPack(p)).mount(grid));
    return [this.renderSubheading(this.packsHeading), grid];
  }

  renderCourses() {
    if (this.courses.length === 0) return [];
    const grid = this.el("div", { className: "course-grid" });
    this.courses.forEach((course) => new CourseCard(course, this.ui).mount(grid));
    return [this.renderSubheading(this.extraHeading), grid];
  }

  renderSubheading(text) {
    return text ? this.el("h3", { className: "section__subheading", text }) : null;
  }

  showPack(pack) {
    this.modal.open(new PackDetail(pack, this.lessonInfo, this.ui));
  }
}

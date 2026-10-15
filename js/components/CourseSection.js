/** The Courses section: "the big four" packs. "Read More" opens the pack in the modal. */
class CourseSection extends Section {
  constructor({ heading, packsHeading, packs, lessonInfo, ui, modal }) {
    super("courses", heading);
    this.packsHeading = packsHeading;
    this.packs = packs;
    this.lessonInfo = lessonInfo;
    this.ui = ui;
    this.modal = modal;
  }

  renderContent() {
    const grid = this.el("div", { className: "pack-grid" });
    this.packs.forEach((pack) => new PackCard(pack, this.ui, (p) => this.showPack(p)).mount(grid));
    return [
      this.packsHeading ? this.el("h3", { className: "section__subheading", text: this.packsHeading }) : null,
      grid,
    ];
  }

  showPack(pack) {
    this.modal.open(new PackDetail(pack, this.lessonInfo, this.ui));
  }
}

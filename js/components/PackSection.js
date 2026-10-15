/** "the big four" — grid of pack cards; "Read More" opens the modal. */
class PackSection extends Section {
  constructor(heading, packs, lessonInfo, modal) {
    super("packs", heading);
    this.packs = packs;
    this.lessonInfo = lessonInfo;
    this.modal = modal;
  }

  renderContent() {
    const grid = this.el("div", { className: "pack-grid" });
    this.packs.forEach((pack) => new PackCard(pack, (p) => this.showPack(p)).mount(grid));
    return [grid];
  }

  showPack(pack) {
    this.modal.open(new PackDetail(pack, this.lessonInfo));
  }
}

/** Turns SITE_DATA into model objects and assembles a language site from components. */
class App {
  constructor(data) {
    this.data = data;
    const { ui, courses, lessons, contacts } = data;
    this.packs = courses.packs.map((item) => new Pack(item, ui.packPrefix));
    this.courses = courses.items.map((item) => new Course(item, ui.units));
    this.lessonInfo = new LessonInfo(lessons, ui.units);
    this.socialLinks = contacts.links.map((item) => new SocialLink(item)).filter((link) => link.isAvailable);
  }

  start(root) {
    const { site, ui, nav, hero, marquee, lessons, courses, contacts } = this.data;
    document.title = site.title || site.name;
    document.documentElement.lang = site.lang || "en";

    const modal = new Modal(ui.close);
    const main = document.createElement("main");

    new Header(site, nav).mount(root);
    root.appendChild(main);

    [
      new HeroSection(hero, site.name, this.lessonInfo),
      new Marquee(marquee),
      new CourseSection({
        heading: courses.heading,
        packsHeading: courses.packsHeading,
        extraHeading: courses.extraHeading,
        packs: this.packs,
        courses: this.courses,
        lessonInfo: this.lessonInfo,
        ui,
        modal,
      }),
      new LessonSection(lessons.heading, this.lessonInfo, ui),
      new ContactSection(contacts.heading, contacts.text, this.socialLinks),
    ].forEach((section) => section.mount(main));

    new Footer(site).mount(root);
    modal.mount(root);
  }
}

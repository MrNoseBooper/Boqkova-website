/** Turns SITE_DATA into model objects and assembles the page from components. */
class App {
  constructor(data) {
    this.data = data;
    this.packs = data.packs.items.map((item) => new Pack(item));
    this.courses = data.courses.items.map((item) => new Course(item));
    this.lessonInfo = new LessonInfo(data.lessons);
    this.socialLinks = data.contacts.links.map((item) => new SocialLink(item)).filter((link) => link.isAvailable);
  }

  start(root) {
    const { site, nav, hero, marquee, packs, lessons, courses, contacts } = this.data;
    document.title = site.name;

    const modal = new Modal();
    const main = document.createElement("main");

    new Header(site, nav).mount(root);
    root.appendChild(main);

    [
      new HeroSection(hero, site.name, this.lessonInfo),
      new Marquee(marquee),
      new PackSection(packs.heading, this.packs, this.lessonInfo, modal),
      new LessonSection(lessons.heading, this.lessonInfo),
      new CourseSection(courses.heading, this.courses),
      new ContactSection(contacts.heading, contacts.text, this.socialLinks),
    ].forEach((section) => section.mount(main));

    new Footer(site).mount(root);
    modal.mount(root);
  }
}

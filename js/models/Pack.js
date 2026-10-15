/** One of "the big four" lesson packs. */
class Pack extends Offering {
  constructor({ name, color, image = "", summary, details = [] }) {
    super({ title: `Pack: ${name}`, description: summary });
    this.name = name;
    this.color = color;
    this.image = image;
    this.details = details;
  }

  get hasImage() {
    return Boolean(this.image);
  }
}

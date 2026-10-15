/** One of "the big four" lesson packs. */
class Pack extends Offering {
  constructor({ name, color, image = "", summary, details = [] }, titlePrefix = "Pack: ") {
    super({ title: `${titlePrefix}${name}`, description: summary });
    this.name = name;
    this.color = color;
    this.image = image;
    this.details = details;
  }

  get hasImage() {
    return Boolean(this.image);
  }
}

/** Base class for anything a student can sign up for (packs, courses). */
class Offering {
  constructor({ title, description = "" }) {
    if (new.target === Offering) {
      throw new Error("Offering is abstract; use a subclass such as Pack.");
    }
    this.title = title;
    this.description = description;
  }

  /** URL-friendly id built from the title, e.g. "Pack: base" -> "pack-base". */
  get slug() {
    return this.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  }
}

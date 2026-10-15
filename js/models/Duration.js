/** A length of time in minutes, formatted for display. */
class Duration {
  constructor(minutes) {
    this.minutes = minutes;
  }

  get isKnown() {
    return typeof this.minutes === "number" && this.minutes > 0;
  }

  toString() {
    if (!this.isKnown) return "";
    if (this.minutes % 60 === 0) {
      const hours = this.minutes / 60;
      return `${hours} hr${hours > 1 ? "s" : ""}`;
    }
    return `${this.minutes} min`;
  }
}

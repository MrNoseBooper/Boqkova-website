/** A length of time in minutes, formatted for display in the site's language. */
class Duration {
  constructor(minutes, units = { hour: "hr", hours: "hrs", minute: "min" }) {
    this.minutes = minutes;
    this.units = units;
  }

  get isKnown() {
    return typeof this.minutes === "number" && this.minutes > 0;
  }

  toString() {
    if (!this.isKnown) return "";
    if (this.minutes % 60 === 0) {
      const hours = this.minutes / 60;
      return `${hours} ${hours > 1 ? this.units.hours : this.units.hour}`;
    }
    return `${this.minutes} ${this.units.minute}`;
  }
}

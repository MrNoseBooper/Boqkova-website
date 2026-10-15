/** A bookable course or class with a price. */
class Course extends Offering {
  constructor({ title, tagline, price, durationMinutes = null, status = "open", url = "" }, units) {
    super({ title, description: tagline });
    this.price = new Price(price);
    this.duration = new Duration(durationMinutes, units);
    this.status = status;
    this.url = url;
  }

  get isOpen() {
    return this.status !== "ended";
  }

  /** Where the booking button goes: the course link, or the Contacts section. */
  get bookingHref() {
    return this.url || "#contacts";
  }
}

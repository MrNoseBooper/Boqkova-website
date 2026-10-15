/** General information about private lessons: platforms, price and booking. */
class LessonInfo {
  constructor({ platforms = [], price, durationMinutes, bookingText = "" }) {
    this.platforms = platforms;
    this.price = new Price(price);
    this.duration = new Duration(durationMinutes);
    this.bookingText = bookingText;
  }

  get platformText() {
    return `I provide online lessons using various Russian meeting websites (${this.platforms.join(", ")}).`;
  }

  get priceText() {
    return `The lessons cost ${this.price} for ${this.duration.minutes} minutes.`;
  }
}

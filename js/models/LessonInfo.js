/** General information about private lessons: platforms, price and booking. */
class LessonInfo {
  constructor({ platforms = [], price, durationMinutes, platformText = "", priceText = "", bookingText = "" }, units) {
    this.platforms = platforms;
    this.price = new Price(price);
    this.duration = new Duration(durationMinutes, units);
    this.platformTemplate = platformText;
    this.priceTemplate = priceText;
    this.bookingText = bookingText;
  }

  get platformText() {
    return Template.fill(this.platformTemplate, { platforms: this.platforms.join(", ") });
  }

  get priceText() {
    return Template.fill(this.priceTemplate, { price: this.price, minutes: this.duration.minutes });
  }
}

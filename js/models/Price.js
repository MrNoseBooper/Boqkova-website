/** A money amount, e.g. RM70. */
class Price {
  constructor({ amount, currency }) {
    this.amount = amount;
    this.currency = currency;
  }

  toString() {
    return `${this.currency}${this.amount}`;
  }
}

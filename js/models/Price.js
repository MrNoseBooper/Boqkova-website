/** A money amount, e.g. "RM70" or "1500 ₽". */
class Price {
  constructor({ amount, currency, currencyAfter = false }) {
    this.amount = amount;
    this.currency = currency;
    this.currencyAfter = currencyAfter;
  }

  toString() {
    return this.currencyAfter ? `${this.amount} ${this.currency}` : `${this.currency}${this.amount}`;
  }
}

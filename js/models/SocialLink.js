/** A contact / social media link. */
class SocialLink {
  constructor({ platform, handle = "", url = "" }) {
    this.platform = platform;
    this.handle = handle;
    this.url = url;
  }

  /** Links without a URL are hidden from the page. */
  get isAvailable() {
    return Boolean(this.url);
  }

  get label() {
    return this.handle || this.platform;
  }
}

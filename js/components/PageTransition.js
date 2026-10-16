/**
 * Full-screen wipe between pages: coloured stripes sweep in, the next page loads underneath,
 * then the stripes sweep out. The text shown on the wipe is handed to the next page via sessionStorage.
 */
class PageTransition extends Component {
  constructor() {
    super();
    this.storageKey = "boqkova:transition";
    this.panelCount = 4; // pink, green, blue, black (colours are set in CSS)
    this.duration = 760; // ms: 520ms per stripe + 80ms stagger between stripes
    this.reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }

  render() {
    this.label = this.el("span", { className: "page-transition__label" });
    const panels = [];
    for (let i = 0; i < this.panelCount; i++) {
      panels.push(this.el("div", {
        className: "page-transition__panel",
        style: { "--i": i, "--rev": this.panelCount - 1 - i },
      }));
    }
    panels[panels.length - 1].append(this.label); // the text rides on the top (black) stripe

    // Coming back with the browser's Back button can restore this page mid-wipe; clear it.
    window.addEventListener("pageshow", (event) => {
      if (event.persisted) this.setState(null);
    });

    return this.el("div", { className: "page-transition", attrs: { "aria-hidden": "true" } }, panels);
  }

  /** Cover the screen, then open href. */
  leave(href, text = "") {
    if (this.reducedMotion) {
      window.location.href = href;
      return;
    }
    this.save(text);
    this.label.textContent = text;
    this.setState("cover");
    setTimeout(() => { window.location.href = href; }, this.duration);
  }

  /** If the previous page started a wipe, start covered and sweep away to reveal this page. */
  enter() {
    const text = this.take();
    if (text === null || this.reducedMotion) return;
    this.label.textContent = text;
    this.setState("covered");
    // Wait two frames so the page underneath is painted before the stripes move.
    requestAnimationFrame(() => requestAnimationFrame(() => this.setState("reveal")));
    setTimeout(() => this.setState(null), this.duration + 100);
  }

  /**
   * Whether a click should run the wipe. Ctrl/Cmd/Shift/middle clicks are left alone,
   * so opening a link in a new tab keeps working.
   */
  static shouldHandle(event) {
    return event.button === 0 && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey;
  }

  setState(state) {
    if (state) this.element.dataset.state = state;
    else delete this.element.dataset.state;
  }

  save(text) {
    try { sessionStorage.setItem(this.storageKey, text); } catch (error) { /* storage blocked: next page just appears */ }
  }

  take() {
    try {
      const text = sessionStorage.getItem(this.storageKey);
      sessionStorage.removeItem(this.storageKey);
      return text;
    } catch (error) {
      return null;
    }
  }
}

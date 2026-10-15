/** Pop-up window (native <dialog>) that can show any Component. */
class Modal extends Component {
  render() {
    this.body = this.el("div", { className: "modal__body" });

    const dialog = this.el("dialog", {
      className: "modal",
      on: {
        click: (event) => {
          // Close when clicking the backdrop or any link marked data-close-modal.
          if (event.target === dialog || event.target.closest("[data-close-modal]")) this.close();
        },
      },
    }, [
      this.el("div", { className: "modal__inner" }, [
        this.el("button", {
          className: "modal__close",
          text: "×",
          attrs: { type: "button", "aria-label": "Close" },
          on: { click: () => this.close() },
        }),
        this.body,
      ]),
    ]);
    return dialog;
  }

  open(component) {
    this.body.replaceChildren();
    component.mount(this.body);
    this.element.showModal();
  }

  close() {
    this.element.close();
  }
}

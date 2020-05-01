class MenuToogle extends HTMLAnchorElement {
  constructor(...args) {
    super(args);
    this.innerText = "Filter";
  }

  connectedCallback() {
    this.addEventListener("click", e => {
      e.preventDefault();
      const filterMenu = document.getElementById("main-div");
      if (filterMenu.style.display === "block") {
        filterMenu.style.display = "none";
      } else {
        filterMenu.style.display = "block";
      }
    });
  }
}

customElements.define("menu-toggle-component", MenuToogle, { extends: "a" });
export default MenuToogle;

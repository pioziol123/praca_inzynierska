import getKeyWords from "./KeyWordsRepository";

const template = `
    <a class="tag affect create" style="margin-rigth:10px;">
        <p class="inlblk"></p>
        <i class="fa fa-times red" style="margin-left:5px;"></i>
    </a>
`;

class KeyWord extends HTMLDivElement {
  constructor() {
    super();
    this.classList.add("inlblk");
    this.innerHTML = template;
    this.querySelector("p").innerText = this.dataset.name;
    const closeIcon = this.querySelector("i");
    closeIcon.addEventListener("click", () => {
      getKeyWords().delete(closeIcon.parentElement.innerText.trim());
      closeIcon.parentElement.parentElement.remove();
    });
  }
}

customElements.define("keyword-component", KeyWord, { extends: "div" });
export default KeyWord;

import { getDetected } from '../classes/Repository'

const template = `
    <a class="tag affect create" style="margin-rigth:10px;">
        <p class="inlblk"></p>
    </a>
`;

class Detected extends HTMLDivElement {
  constructor() {
    super();
    this.classList.add("inlblk");
    this.innerHTML = template;
    this.querySelector("p").innerText = this.dataset.name;
    const detectedWord = this.querySelector("p");
    detectedWord.addEventListener("click", () => {
      getDetected().delete(detectedWord.innerText.trim());
      detectedWord.parentElement.remove();
    });
  }
}

customElements.define("detected-component", Detected, { extends: "div" });
export default Detected;

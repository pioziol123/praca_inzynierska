import { getDetected } from "../classes/Repository";
import Detected from "./detected.component"

const template = `
<div style="padding: 15px; border-bottom: 1px solid grey;">
<h3 style="margin-bottom: 5px">Sugerowane słowa</h3>
<div id="detected-list" class="inlblk vertical-top m-reset-width"></div>
</div>
`;

class DetectedList extends HTMLLIElement {
  constructor() {
    super();
    getDetected().subscribe(this);
    this.innerHTML = template;

    this.reload = () => {
      this.parentElement.replaceChild(
        document.createElement("li", { is: "detected-list-component" }),
        this
      );
    }

    this.notify =  ({event}) => {
      if (event !== 'loaded2') return;
      this.reload();
    }
  }

  connectedCallback() {
    const detecteds = getDetected().list ||  [];
    const list = this.querySelector("#detected-list");
    list.innerHTML = detecteds
      .map(detected => `<div is="detected-component" data-name="${detected}"></div>`)
      .join("");
  }
}

customElements.define("detected-list-component", DetectedList, { extends: "li" });
export default DetectedList;

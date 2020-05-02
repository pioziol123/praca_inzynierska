import {getKeyWords} from "../classes/Repository";
import KeyWord from "./keyword.component";

const template = `
<div>
    <ul class="newregister-drop">
    <li>
                <div  id="add-keyword-button" class="inlblk vertical-top m-reset-width">
                   <input /><input type="button" value="Dodaj">
                </div>
            <div id="keyword-list" class="inlblk vertical-top m-reset-width"></div>
        </li>
    </ul>
</div>
`;

class WordList extends HTMLDivElement {
  constructor() {
    super();
    this.id = "main-div";
    this.setAttribute("class", "dropdown right");
    this.style = `margin-left:-230px;display:block;`;
    this.innerHTML = template;
  }

  connectedCallback() {
    const keywords = getKeyWords();
    const list = this.querySelector("#keyword-list");
    list.innerHTML = keywords.list
      .map(keyword => `<div is="keyword-component" data-name="${keyword}"></div>`)
      .join("");
    this.handleAddWordList = () => {
      const regex = /[^\w\.!@#$%^&*()\[\]{};:'",<>]/;
      const word = this.querySelector(
        "#add-keyword-button input"
      ).value.replace(regex, "");
      if (word.length === 0) return;
      this.querySelector("#add-keyword-button input").value = "";
      getKeyWords().add(word);
      this.parentElement.replaceChild(
        document.createElement("div", { is: "word-list-component" }),
        this
      );
    };

    document
      .querySelector("#add-keyword-button")
      .addEventListener("click", () => this.handleAddWordList());
    document
      .querySelector("#add-keyword-button")
      .addEventListener(
        "keydown",
        e => e.keyCode === 13 && this.handleAddWordList()
      );
  }
}

customElements.define("word-list-component", WordList, { extends: "div" });
export default WordList;

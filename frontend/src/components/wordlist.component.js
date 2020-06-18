import {getKeyWords} from "../classes/Repository";
import KeyWord from "./keyword.component";

const template = `
<div  id="add-keyword-button" class="inlblk vertical-top m-reset-width">
    <input  /><input type="button" value="Dodaj">
</div>
<div id="keyword-list" class="inlblk vertical-top m-reset-width"></div>
`;

class WordList extends HTMLLIElement {
  constructor() {
    super();
    getKeyWords().subscribe(this);
    this.innerHTML = template;

    this.reload = () => {
      this.parentElement.replaceChild(
        document.createElement("li", { is: "word-list-component" }),
        this
      );
    }

    this.handleAddWordList = () => {
      const regex = /[^\w\.!@#$%^&*()\[\]{};:'",<>]/;
      const word = this.querySelector(
        "#add-keyword-button input"
      ).value.replace(regex, "");
      if (word.length === 0) return;
      this.querySelector("#add-keyword-button input").value = "";
      getKeyWords().add(word).then(() => this.reload());
    };

    this.notify =  ({event}) => {
      if (event !== 'loaded') return;
      this.reload();
    }

    getKeyWords().load();
  }

  connectedCallback() {
    const keywords = getKeyWords();
    
    const list = this.querySelector("#keyword-list");
    list.innerHTML = keywords.list
      .map(keyword => `<div is="keyword-component" data-name="${keyword}"></div>`)
      .join("");
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

customElements.define("word-list-component", WordList, { extends: "li" });
export default WordList;

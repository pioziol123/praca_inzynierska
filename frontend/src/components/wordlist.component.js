const template2 = `
<div>
    <ul class="newregister-drop">
    <li>
                <div  id="keyword-list" class="inlblk vertical-top m-reset-width">
                   <input /><input type="button" value="Dodaj">
                </div>
            <div id="keyword-list" class="inlblk vertical-top m-reset-width"></div>
        </li>
    </ul>
</div>
`;

class WordList extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = template2;
  }
}
export default WordList;
import { getUsersList } from '../classes/Repository'
import User from "./user.component"

const template = `
<div style="padding: 15px; border-bottom: 1px solid grey;">
<h3 style="margin-bottom: 5px">Bloked users</h3>
<div  id="add-user-button" class="inlblk vertical-top m-reset-width">
    <input style="margin-bottom: 2px;" /><input type="button" value="Dodaj">
</div>
<div id="user-list" class="inlblk vertical-top m-reset-width"></div>
</div>
`;

class UserList extends HTMLLIElement {
  constructor() {
    super();
    this.innerHTML = template;
    getUsersList().subscribe(this);

    this.reload = () => {
      this.parentElement.replaceChild(
        document.createElement("li", { is: "user-list-component" }),
        this
      );
    }

    this.handleAddUser = () => {
      const regex = /[^\w\.!@#$%^&*()\[\]{};:'",<>]/;
      const user = this.querySelector(
        "#add-user-button input"
      ).value.replace(regex, "");
      if (user.length === 0) return;
      this.querySelector("#add-user-button input").value = "";
      getUsersList().add(user).then(() => this.reload());
    };

    this.notify =  ({event}) => {
      if (event !== 'loaded') return;
      this.reload();
    }

   getUsersList().load();
  }

  connectedCallback() {
    const users = getUsersList();
    const list = this.querySelector("#user-list");
    list.innerHTML = users.list
      .map(user => `<div is="user-component" data-name="${user}"></div>`)
      .join("");
    document
      .querySelector("#add-user-button")
      .addEventListener("click", () => {
        this.handleAddUser();
      });
    document
      .querySelector("#add-user-button")
      .addEventListener(
        "keydown",
        e => e.keyCode === 13 && this.handleAddUser()
      );
  }
}

customElements.define("user-list-component", UserList, { extends: "li" });
export default UserList;

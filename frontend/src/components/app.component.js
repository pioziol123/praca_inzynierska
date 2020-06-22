import MenuToggle from "./menutoggle.component";
import WordList from "./wordlist.component";
import UserList from "./userlist.component";
import Login from "./login.component";
import Logout from "./logout.component"
import { getApi } from "./../classes/Repository"

const template = `
<div id="main-div" class="dropdown right" style="margin-left:-230px;">
  <div>
    <ul id="filter-components" class="newregister-drop">
    </ul>
  <div>
</div>
`;

class App extends HTMLLIElement {
  constructor() {
    super();
    this.innerHTML = template;
    this.appendChild(
      document.createElement("a", { is: "menu-toggle-component" })
    );
    this.notify = ({event}) => {
      this.parentElement.replaceChild(
        document.createElement("li", { is: "filter-app-component" }),
        this
      );
    }
  }

  connectedCallback() {
    getApi().isLogged().then(success => {
      if (success) {
        this.querySelector('#filter-components').appendChild(
          document.createElement('li', { is: 'word-list-component'})
        );

        this.querySelector('#filter-components').appendChild(
          document.createElement('li', { is: 'user-list-component'})
        );
        const logoutComponent = document.createElement('li', { is: 'logout-component'});
        logoutComponent.subscribe(this);
        this.querySelector('#filter-components').appendChild(logoutComponent);
      } else {
        const loginComponent = document.createElement('li', { is: "login-component" });
        loginComponent.subscribe(this);
        this.querySelector('#filter-components').appendChild(loginComponent);
      }
    });
  }
}
customElements.define("filter-app-component", App, { extends: "li" });
export default App;

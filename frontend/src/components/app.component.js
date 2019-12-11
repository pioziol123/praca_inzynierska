import MenuToggle from "./menutoggle.component";
import WordList from "./wordlist.component";
import Login from "./login.component";

class App extends HTMLLIElement {
  constructor() {
    super();
    this.appendChild(
      document.createElement("a", { is: "menu-toggle-component" })
    );
    this.loginForm = document.createElement("div", { is: "login-component" });
    this.wordList = document.createElement("div", {
      is: "word-list-component"
    });
    this.isLogged = function() {
      return Boolean(
        document.cookie
          .split(";")
          .map(cookie => cookie.split("=")[0])
          .find(e => e === "filter-account-cookie")
      );
    };
    this.appendChild(this.isLogged() ? this.wordList : this.loginForm);
  }
}
customElements.define("filter-app-component", App, { extends: "li" });
export default App;

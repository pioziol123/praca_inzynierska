import WordList from "./wordlist.component";

const template = `
<div>
	<ul class="newregister-drop">
   <li>
      <form id="filterLoginForm">
				<div>
				<label for="newregister-login">Login</label>
					<input type="text" name="user[username]" id="newregister-login">
        </div>
        <div>
          <label for="newregister-pass">Hasło</label>
          <input type="password" name="user[password]" id="newregister-pass">
        </div>
        <fieldset class="row buttons">
          <p>
            <input type="submit" value="Zaloguj się">
          </p>
        </fieldset>
      </form>
		</li>
	</ul>
</div>
`;
class Login extends HTMLDivElement {
  constructor() {
    super();
    this.id = "main-div";
    this.setAttribute("class", "dropdown right");
    this.style = "margin-left:-230px;";
    this.innerHTML = template;
  }

  connectedCallback() {
    this.querySelector("#filterLoginForm").addEventListener("submit", e => {
      e.preventDefault();
      document.cookie = `filter-account-cookie=filter-cookie-hash; expires=Thu, 01 Jan 2200 00:00:00 UTC;`;
      this.parentElement.replaceChild(
        document.createElement("div", { is: "word-list-component" }),
        this
      );
    });
  }
}

customElements.define("login-component", Login, { extends: "div" });
export default Login;

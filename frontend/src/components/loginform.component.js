import WordList from "./wordlist.component";
import RegisterForm from './registerform.component';

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
      <a id="filterRegister">Rejestracja</a>
		</li>
	</ul>
</div>
`;
class LoginForm extends HTMLDivElement {
  constructor() {
    super();
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
    this.querySelector("#filterRegister").addEventListener("click", e => {
        e.preventDefault();
        this.parentElement.replaceChild(
          document.createElement("div", { is: "registerform-component" }),
          this
        );
      });
  }
}

customElements.define("loginform-component", LoginForm, { extends: "div" });
export default LoginForm;

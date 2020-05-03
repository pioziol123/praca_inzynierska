import WordList from "./wordlist.component";
import RegisterForm from './registerform.component';
import { getApi } from "../classes/Repository";

const template = `
<div>
	<ul class="newregister-drop">
   <li>
      <form id="filterLoginForm">
				<div>
				<label for="newregister-login">Login</label>
					<input type="text" name="username" id="newregister-login">
        </div>
        <div>
          <label for="newregister-pass">Hasło</label>
          <input type="password" name="password" id="newregister-pass">
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
      const username = e.target['username'].value;
      const password = e.target['password'].value;
      getApi().login(username, password).then(result => {
        if (!result.success) return;
        this.parentElement.replaceChild(
          document.createElement("div", { is: "word-list-component" }),
          this
        );
      });
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

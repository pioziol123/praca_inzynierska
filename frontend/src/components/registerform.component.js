import {getApi} from './../classes/Repository'

const template = `
<div>
	<ul class="newregister-drop">
   <li>
      <form id="filterRegisterForm">
				<div>
				<label for="newregister-login">Username</label>
					<input type="text" name="username" id="newregister-login">
        </div>
        <div>
          <label for="newregister-pass">Hasło</label>
          <input type="password" name="password" id="newregister-pass">
        </div>
        <div>
          <label for="newregister-pass-repeat">Powtórz hasło</label>
          <input type="password" name="repeat_password" id="newregister-pass-repeat">
        </div>
        <fieldset class="row buttons">
          <p> 
            <input type="submit" value="Rejestruj">
          </p>
        </fieldset>
      </form>
      <a id="filterBack">Powrót</a>
		</li>
	</ul>
</div>
`;

const templateSuccess = `
<div><ul class="newregister-drop"><li style="margin-top:10px;margin-bottom:10px;text-align: center; font-size: 30px;><span"><span class="results hot"><i class="icon tiny hot"></i>  <strong>Pomyślnie zarejestrowano!</strong></span></span></li><li><a id="filterBack">Powrót</a></li></ul></div>
`;
class RegisterForm extends HTMLDivElement {
  constructor() {
    super();
    this.innerHTML = template;
    this.addReturnToButton = e => {
      this.querySelector("#filterBack").addEventListener("click", e => {
        e.preventDefault();
        document.cookie = `filter-account-cookie=filter-cookie-hash; expires=Thu, 01 Jan 2200 00:00:00 UTC;`;
        this.parentElement.replaceChild(
          document.createElement("div", { is: "loginform-component" }),
          this
        );
      });
    }
  }

  connectedCallback() {
    this.addReturnToButton();
    this.querySelector('#filterRegisterForm').addEventListener('submit', e => {
      e.preventDefault();
      const username = e.target['username'].value,
      password = e.target['password'].value,
      repeat_password = e.target['repeat_password'].value;
      getApi().register(username, password, repeat_password).then(result => {
        if (result.data.status && result.data.status === 'success') {
          this.innerHTML = templateSuccess;
          this.addReturnToButton();
        }
      });
    });
  }
}

customElements.define("registerform-component", RegisterForm, { extends: "div" });
export default RegisterForm;

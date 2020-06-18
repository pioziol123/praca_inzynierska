import {getApi} from '../classes/Repository'

const template = `
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
`;

const templateSuccess = `
<div style="margin-top:10px;margin-bottom:10px;text-align: center; font-size: 30px;">
  <span class="results hot">
    <i class="icon tiny hot"></i>
    <strong>Pomyślnie zarejestrowano!</strong>
  </span>
</div>
<a id="filterBack">Powrót</a>
`;
class Register extends HTMLLIElement {
  constructor() {
    super();
    this.innerHTML = template;
    this.addReturnToButton = e => {
      this.querySelector("#filterBack").addEventListener("click", e => {
        e.preventDefault();
        this.parentElement.replaceChild(
          document.createElement("li", { is: "login-component" }),
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

customElements.define("register-component", Register, { extends: "li" });
export default Register;

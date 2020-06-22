import Register from './register.component';
import { getApi } from "../classes/Repository";
import Logout from "./logout.component"

const template = `
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
`;

class Login extends HTMLLIElement {
  constructor() {
    super();
    this.innerHTML = template; 
    this.subscribers = [];
    this.subscribe = (subscriber) => {
      this.subscribers.push(subscriber);
    }
  
    this.notifyAll = (event) => {
      this.subscribers.forEach(subscriber => {
        subscriber.notify({event: event})
      });
    }
  }

  connectedCallback() {
    this.querySelector("#filterLoginForm").addEventListener("submit", e => {
      e.preventDefault();
      const username = e.target['username'].value;
      const password = e.target['password'].value;
      getApi().login(username, password).then(result => {
        if (!result.success) return;
        this.notifyAll('loggedIn');
      });
    });
    this.querySelector("#filterRegister").addEventListener("click", e => {
        e.preventDefault();
        this.parentElement.replaceChild(
          document.createElement("li", { is: "register-component" }),
          this
        );
      });
  }
}

customElements.define("login-component", Login, { extends: "li" });
export default Login;

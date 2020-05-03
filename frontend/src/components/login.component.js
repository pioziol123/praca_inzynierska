import WordList from "./wordlist.component";
import LoginForm from "./loginform.component";
const template = `
<div>
	<div is="loginform-component" />
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

  connectedCallback() {}
}

customElements.define("login-component", Login, { extends: "div" });
export default Login;

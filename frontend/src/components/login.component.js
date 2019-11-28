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

class Login extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = template;
  }
}

export default Login;

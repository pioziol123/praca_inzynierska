const keywords = ['bzdury', 'Zanim', 'do'];
const menu = document.getElementById("openNaturalSearch");
document.cookie = `filter-account-cookie=filter-cookie-hash; expires=Thu, 01 Jan 1970 00:00:00 UTC;`


const loginElement = `
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

const wordListElement = `
<div>
	<ul class="newregister-drop">
   	<li>
<div class="width-one-third inlblk vertical-top m-reset-width m-set-fullwidth">
		<h4>Chmura tagów</h4>
		<div>
			<a class="x-small tag create" href="https://www.wykop.pl/tag/hardware/" title="hardware">hardware</a> <a class="x-small tag create" href="https://www.wykop.pl/tag/humor/" title="humor">humor</a> <a class="normal tag create" href="https://www.wykop.pl/tag/internet/" title="internet">internet</a> <a class="large tag create" href="https://www.wykop.pl/tag/technologia/" title="technologia">technologia</a> <a class="xx-large tag create" href="https://www.wykop.pl/tag/rozrywka/" title="rozrywka">rozrywka</a> <a class="normal tag create" href="https://www.wykop.pl/tag/nauka/" title="nauka">nauka</a> <a class="normal tag create" href="https://www.wykop.pl/tag/programowanie/" title="programowanie">programowanie</a> <a class="x-small tag create" href="https://www.wykop.pl/tag/software/" title="software">software</a> <a class="normal tag create" href="https://www.wykop.pl/tag/sztuka/" title="sztuka">sztuka</a> <a class="x-small tag create" href="https://www.wykop.pl/tag/4konserwy/" title="4konserwy">4konserwy</a> <a class="x-small tag create" href="https://www.wykop.pl/tag/bekazpisu/" title="bekazpisu">bekazpisu</a> <a class="x-big tag create" href="https://www.wykop.pl/tag/ciekawostki/" title="ciekawostki">ciekawostki</a> <a class="large tag create" href="https://www.wykop.pl/tag/ekonomia/" title="ekonomia">ekonomia</a> <a class="xx-large tag create" href="https://www.wykop.pl/tag/europa/" title="europa">europa</a> <a class="x-small tag create" href="https://www.wykop.pl/tag/finanse/" title="finanse">finanse</a> <a class="x-small tag create" href="https://www.wykop.pl/tag/gospodarka/" title="gospodarka">gospodarka</a> <a class="x-small tag create" href="https://www.wykop.pl/tag/gry/" title="gry">gry</a> <a class="normal tag create" href="https://www.wykop.pl/tag/hahard/" title="hahard">hahard</a> <a class="large tag create" href="https://www.wykop.pl/tag/heheszki/" title="heheszki">heheszki</a> <a class="large tag create" href="https://www.wykop.pl/tag/historia/" title="historia">historia</a> <a class="normal tag create" href="https://www.wykop.pl/tag/kultura/" title="kultura">kultura</a> <a class="normal tag create" href="https://www.wykop.pl/tag/motoryzacja/" title="motoryzacja">motoryzacja</a> <a class="x-small tag create" href="https://www.wykop.pl/tag/pieniadze/" title="pieniadze">pieniadze</a> <a class="x-small tag create" href="https://www.wykop.pl/tag/pilkanozna/" title="pilkanozna">pilkanozna</a> <a class="x-small tag create" href="https://www.wykop.pl/tag/policja/" title="policja">policja</a> <a class="xx-large tag create" href="https://www.wykop.pl/tag/polityka/" title="polityka">polityka</a> <a class="xx-big tag create" href="https://www.wykop.pl/tag/polska/" title="polska">polska</a> <a class="x-small tag create" href="https://www.wykop.pl/tag/prawo/" title="prawo">prawo</a> <a class="x-small tag create" href="https://www.wykop.pl/tag/rosja/" title="rosja">rosja</a> <a class="normal tag create" href="https://www.wykop.pl/tag/samochody/" title="samochody">samochody</a> <a class="normal tag create" href="https://www.wykop.pl/tag/sport/" title="sport">sport</a> <a class="x-big tag create" href="https://www.wykop.pl/tag/swiat/" title="swiat">swiat</a> <a class="normal tag create" href="https://www.wykop.pl/tag/usa/" title="usa">usa</a> <a class="x-small tag create" href="https://www.wykop.pl/tag/wykop/" title="wykop">wykop</a> <a class="large tag create" href="https://www.wykop.pl/tag/zainteresowania/" title="zainteresowania">zainteresowania</a> <a class="x-small tag create" href="https://www.wykop.pl/tag/zdrowie/" title="zdrowie">zdrowie</a> 		</div>
	</div>
</li>
	</ul>
</div>
`;

const menuElement = document.createElement("li");
menuElement.innerHTML = `
<a id="filterMenuLink">Filter</a>
<div id="filterMenu" class="dropdown right" style="margin-left:-230px;" />
`;
menu.parentNode.parentNode.appendChild(menuElement);



function isLogged () {
	return Boolean(document.cookie.split(';')
    .map(cookie => cookie.split("=")[0])
    .find(e => e === "filter-account-cookie"));
}

function appendLoginForm() {
	if (isLogged()) return;
	const filterMenu = document.getElementById("filterMenu");
  filterMenu.innerHTML = loginElement;
  const loginForm = document.getElementById("filterLoginForm");
  loginForm.addEventListener("submit", (e) => {
  	e.preventDefault();
    console.info("login");
		document.cookie = `filter-account-cookie=filter-cookie-hash; expires=Thu, 01 Jan 2200 00:00:00 UTC;`
    filterMenu.innerHTML = wordListElement;
  });
}

function toggleMenu(e) {
	const filterMenu = document.getElementById("filterMenu");
  if (filterMenu.style.display === "block") {
    filterMenu.style.display = "none";
  } else {
  	filterMenu.style.display = "block"; 
  }
};

function init() {
	const link = document.getElementById("filterMenuLink");
  link.addEventListener("click", toggleMenu);
	appendLoginForm();
}
init();


const elements = [...document.getElementsByClassName("text")]
	.filter(e => e.localName !== 'p')
	.filter(e => !e.classList.contains("embed-youtube"))
	.filter(e => !e.classList.contains("embed-streamable"));

elements.forEach(element => {
  keywords.forEach(kw => {
  	if (element.innerText.includes(kw)) {
    	element.innerHTML = 'Ten komentarz został zablokowany';
    }
  });
});

const addPicker = function (e) {
  const color = e.style.color;
	e.parentNode.addEventListener('mouseover', function () {
  	e.style.color = 'red'; 
  });
  e.parentNode.addEventListener('mouseout', function () {
    e.style.color = color; 
  });
  e.parentNode.addEventListener('click', function () {
    e.innerHTML = 'Ten komentarz został zablokowany';
  });
}

elements.forEach(addPicker);

// ==UserScript==
// @name     FilterApp
// @version  1
// @grant    none
// ==/UserScript==

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

let keywords = ['bzdury', 'Zanim', 'do'];
const menu = document.getElementById("openNaturalSearch");
document.cookie = `filter-account-cookie=filter-cookie-hash; expires=Thu, 01 Jan 1970 00:00:00 UTC;`



const wordListElement = `
<div>
	<ul class="newregister-drop">
   	<li>

<div  id="keyword-list" class="inlblk vertical-top m-reset-width">
<input /><input type="button" value="Dodaj">
</div>
<div id="keyword-list" class="inlblk vertical-top m-reset-width"></div>
</li>
	</ul>
</div>
`;

const keyWordElementTemplate = `
<div class="inlblk">
	<a class="tag affect create" style="margin-rigth:10px;"><p style="display:inline;">Test dddd</p><i class="fa fa-times red" style="margin-left:5px;"></i></a>
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

function addKeyWordsMenu() {
	const filterMenu = document.getElementById("filterMenu");
  filterMenu.innerHTML = wordListElement;
  const list = document.getElementById("keyword-list");
  keywords.forEach((keyword) => {
    const element = document.createElement("div");
    element.classList.add("inlblk");
    element.innerHTML = `<a class="tag affect create" style="margin-rigth:10px;"><p style="display:inline;"></p><i class="fa fa-times red" style="margin-left:5px;"></i></a>`;
    list.appendChild(element);
    [...list.getElementsByTagName("p")].pop().innerText = keyword;
  });
  [...list.getElementsByTagName("i")].forEach((closeButton) => {
  	closeButton.addEventListener("click", () => {
    	const removedKeyWord = closeButton.parentNode.innerText;
      closeButton.parentNode.parentNode.remove();
      keywords = keywords.filter(kw => kw !== removedKeyWord);
    });
  });
}
function appendLoginForm() {
	if (isLogged()) return;
	const filterMenu = document.getElementById("filterMenu");
  filterMenu.innerHTML = loginElement;
  const loginForm = document.getElementById("filterLoginForm");
  loginForm.addEventListener("submit", (e) => {
  	e.preventDefault();
		document.cookie = `filter-account-cookie=filter-cookie-hash; expires=Thu, 01 Jan 2200 00:00:00 UTC;`;
    addKeyWordsMenu();
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

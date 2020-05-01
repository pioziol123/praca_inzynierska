/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/components/KeyWords.js
class KeyWords {
  constructor(api) {
    this.api = api;
    this.list = [];
    //this.list = this.api.getUserWordsList();
  }

  add(word) {
    if (this.list.find(kw => kw === word)) return;
    this.list.push(word);
    // this.api.addWordToList(list);
  }

  delete(word) {
    if (!this.list.find(kw => kw === word)) return;
    this.list = this.list.filter(kw => kw !== word);
    // this.api.deleteWordFromList(word);
  }
}

/* harmony default export */ var components_KeyWords = (KeyWords);

// CONCATENATED MODULE: ./src/components/KeyWordsRepository.js
// import config from "./config";

let KeyWordsRepository_keywords = null;
function getKeyWords() {
    if (!KeyWordsRepository_keywords) {
        KeyWordsRepository_keywords = new components_KeyWords();
    }
    return KeyWordsRepository_keywords;

}

/* harmony default export */ var KeyWordsRepository = (getKeyWords);
// CONCATENATED MODULE: ./src/components/menutoggle.component.js
class MenuToogle extends HTMLAnchorElement {
  constructor(...args) {
    super(args);
    this.innerText = "Filter";
  }

  connectedCallback() {
    this.addEventListener("click", e => {
      e.preventDefault();
      const filterMenu = document.getElementById("main-div");
      if (filterMenu.style.display === "block") {
        filterMenu.style.display = "none";
      } else {
        filterMenu.style.display = "block";
      }
    });
  }
}

customElements.define("menu-toggle-component", MenuToogle, { extends: "a" });
/* harmony default export */ var menutoggle_component = (MenuToogle);

// CONCATENATED MODULE: ./src/components/keyword.component.js


const template = `
    <a class="tag affect create" style="margin-rigth:10px;">
        <p class="inlblk"></p>
        <i class="fa fa-times red" style="margin-left:5px;"></i>
    </a>
`;

class keyword_component_KeyWord extends HTMLDivElement {
  constructor() {
    super();
    this.classList.add("inlblk");
    this.innerHTML = template;
    this.querySelector("p").innerText = this.dataset.name;
    const closeIcon = this.querySelector("i");
    closeIcon.addEventListener("click", () => {
      KeyWordsRepository().delete(closeIcon.parentElement.innerText.trim());
      closeIcon.parentElement.parentElement.remove();
    });
  }
}

customElements.define("keyword-component", keyword_component_KeyWord, { extends: "div" });
/* harmony default export */ var keyword_component = (keyword_component_KeyWord);

// CONCATENATED MODULE: ./src/components/wordlist.component.js



const wordlist_component_template = `
<div>
    <ul class="newregister-drop">
    <li>
                <div  id="add-keyword-button" class="inlblk vertical-top m-reset-width">
                   <input /><input type="button" value="Dodaj">
                </div>
            <div id="keyword-list" class="inlblk vertical-top m-reset-width"></div>
        </li>
    </ul>
</div>
`;

class wordlist_component_WordList extends HTMLDivElement {
  constructor() {
    super();
    this.id = "main-div";
    this.setAttribute("class", "dropdown right");
    this.style = `margin-left:-230px;display:block;`;
    this.innerHTML = wordlist_component_template;
  }

  connectedCallback() {
    const keywords = KeyWordsRepository();
    const list = this.querySelector("#keyword-list");
    list.innerHTML = keywords.list
      .map(keyword => `<div is="keyword-component" data-name="${keyword}"></div>`)
      .join("");
    this.handleAddWordList = () => {
      const regex = /[^\w\.!@#$%^&*()\[\]{};:'",<>]/;
      const word = this.querySelector(
        "#add-keyword-button input"
      ).value.replace(regex, "");
      if (word.length === 0) return;
      this.querySelector("#add-keyword-button input").value = "";
      KeyWordsRepository().add(word);
      this.parentElement.replaceChild(
        document.createElement("div", { is: "word-list-component" }),
        this
      );
    };

    document
      .querySelector("#add-keyword-button")
      .addEventListener("click", () => this.handleAddWordList());
    document
      .querySelector("#add-keyword-button")
      .addEventListener(
        "keydown",
        e => e.keyCode === 13 && this.handleAddWordList()
      );
  }
}

customElements.define("word-list-component", wordlist_component_WordList, { extends: "div" });
/* harmony default export */ var wordlist_component = (wordlist_component_WordList);

// CONCATENATED MODULE: ./src/components/login.component.js


const login_component_template = `
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
    this.innerHTML = login_component_template;
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
/* harmony default export */ var login_component = (Login);

// CONCATENATED MODULE: ./src/components/app.component.js




class App extends HTMLLIElement {
  constructor() {
    super();
    this.appendChild(
      document.createElement("a", { is: "menu-toggle-component" })
    );
    this.loginForm = document.createElement("div", { is: "login-component" });
    this.wordList = document.createElement("div", {
      is: "word-list-component"
    });
    this.isLogged = function() {
      return Boolean(
        document.cookie
          .split(";")
          .map(cookie => cookie.split("=")[0])
          .find(e => e === "filter-account-cookie")
      );
    };
    this.appendChild(this.isLogged() ? this.wordList : this.loginForm);
  }
}
customElements.define("filter-app-component", App, { extends: "li" });
/* harmony default export */ var app_component = (App);

// CONCATENATED MODULE: ./src/app.js
// ==UserScript==
// @name     FilterApp
// @version  1
// @grant    none
// ==/UserScript==



const app_keywords = KeyWordsRepository();
app_keywords.add("bzdury");
app_keywords.add("do");
app_keywords.add("Zanim");

const menu = document.getElementById("openNaturalSearch");
document.cookie = `filter-account-cookie=filter-cookie-hash; expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
const menuElement = document.createElement("li", {
  is: "filter-app-component"
});
menu.parentNode.parentNode.appendChild(menuElement);
const app_elements = [...document.getElementsByClassName("text")]
  .filter(e => e.localName !== "p")
  .filter(e => !e.classList.contains("embed-youtube"))
  .filter(e => !e.classList.contains("embed-streamable"));

app_elements.forEach(element => {
  app_keywords.list.forEach(kw => {
    if (element.innerText.includes(kw)) {
      element.innerHTML = "Ten komentarz został zablokowany";
    }
  });
});

const addPicker = function(e) {
  const color = e.style.color;
  e.parentNode.addEventListener("mouseover", function() {
    e.style.color = "red";
  });
  e.parentNode.addEventListener("mouseout", function() {
    e.style.color = color;
  });
  e.parentNode.addEventListener("click", function() {
    e.innerHTML = "Ten komentarz został zablokowany";
  });
};

app_elements.forEach(addPicker);


/***/ })
/******/ ]);
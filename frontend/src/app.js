// ==UserScript==
// @name     FilterApp
// @version  1
// @grant    none
// ==/UserScript==
import {getKeyWords} from "./classes/Repository";
import App from "./components/app.component";
import {CommentsList} from './classes/CommentsList';
import parse from './parsers/wykop-parser.js';

const menu = document.getElementById("openNaturalSearch");
document.cookie = `filter-account-cookie=filter-cookie-hash; expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
const menuElement = document.createElement("li", {
  is: "filter-app-component"
});
menu.parentNode.parentNode.appendChild(menuElement);

const list = new CommentsList();
parse(list);


const keywords = getKeyWords(list);
keywords.add("bzdury");
keywords.add("do");
keywords.add("Zanim");

// ==UserScript==
// @name     FilterApp
// @version  1
// @grant    none
// ==/UserScript==
import App from "./components/app.component";
import {CommentsList} from './classes/CommentsList';
import parse from './parsers/wykop-parser.js';
import {getKeyWords} from './classes/Repository'

const list = new CommentsList();
parse(list);

const wordList = getKeyWords(list);

const menu = document.getElementById("openNaturalSearch");
const menuElement = document.createElement("li", {
  is: "filter-app-component"
});
menu.parentNode.parentNode.appendChild(menuElement);

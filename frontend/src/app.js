// ==UserScript==
// @name     FilterApp
// @version  1
// @grant    none
// ==/UserScript==
import getKeyWords from "./components/KeyWordsRepository";
import App from "./components/app.component";

const keywords = getKeyWords();
keywords.add("bzdury");
keywords.add("do");
keywords.add("Zanim");

const menu = document.getElementById("openNaturalSearch");
document.cookie = `filter-account-cookie=filter-cookie-hash; expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
const menuElement = document.createElement("li", {
  is: "filter-app-component"
});
menu.parentNode.parentNode.appendChild(menuElement);
const elements = [...document.getElementsByClassName("text")]
  .filter(e => e.localName !== "p")
  .filter(e => !e.classList.contains("embed-youtube"))
  .filter(e => !e.classList.contains("embed-streamable"));

elements.forEach(element => {
  keywords.list.forEach(kw => {
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

elements.forEach(addPicker);

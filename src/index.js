import "./style.css";
import { initialPageLoad } from "./initial-page-load.js"; //single named
import loadMenuPage from "./load-menu.js"; // default
import loadAboutPage from "./about.js";

(function addButtons() {
  const homeButton = document.querySelector("#home");
  const menuButton = document.querySelector("#menu");
  const aboutButton = document.querySelector("#about");

  homeButton.addEventListener("click", () => {
    wipeContent();
    initialPageLoad();
  });

  menuButton.addEventListener("click", () => {
    wipeContent();
    loadMenuPage();
  });

  aboutButton.addEventListener("click", () => {
    wipeContent();
    loadAboutPage();
  });

  function wipeContent() {
    document.querySelector("div#content").textContent = "";
    document.body.style.backgroundColor = "white";
  }
})();

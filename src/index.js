import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadAbout from "./about.js";
import "./styles.css";

loadHome();

const contentDiv = document.querySelector("#content");

const homeButton = document.querySelector("#home");
homeButton.addEventListener("click", () => {
    cleanPage();
    loadHome();
})

const aboutButton = document.querySelector("#about");
aboutButton.addEventListener("click", () => {
    cleanPage();
    loadAbout();
})

const menuButton = document.querySelector("#menu");
menuButton.addEventListener("click", () => {
    cleanPage();
    loadMenu();
})

function cleanPage(){
    let keepGoing = true;
    while(keepGoing) {
        if(contentDiv.firstChild) {
            contentDiv.removeChild(contentDiv.firstChild);
        }
        else keepGoing = false;
    }
}
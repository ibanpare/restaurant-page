import img from "./cafe.png";
export function pageload() {
  const contentDiv = document.querySelector("#content");

  const title = document.createElement("h1");
  title.innerText = "Iban's Hut";
  contentDiv.appendChild(title);

  const description = document.createElement("p");
  description.innerText = `Fresh, healthy food served steps from the sea. At our cozy beach café, we mix rustic vibes with local ingredients for simple, feel-good meals. Come relax, eat well, and enjoy the ocean breeze.`
  contentDiv.appendChild(description);

  const homeImg = document.createElement("img");
  homeImg.src = img;
  homeImg.alt = "Picture of Iban's hut";
  contentDiv.appendChild(homeImg);
}
export default function loadMenu() {

function createMenuItem(name, description) {
    const itemDiv = document.createElement("div");

    const itemTitle = document.createElement("strong");
    itemTitle.innerText = name;

    const itemDescription = document.createElement("p");
    itemDescription.innerText = description;

    itemDiv.appendChild(itemTitle);
    itemDiv.appendChild(itemDescription);

    return itemDiv;
}
  const contentDiv = document.querySelector("#content");

  const lunchMenuTitle = document.createElement("h1");
  lunchMenuTitle.innerText = "Lunch Menu";
  contentDiv.appendChild(lunchMenuTitle);

  const bowlSection = document.createElement("div");
  contentDiv.appendChild(bowlSection);

  const lunchMenuBowls = document.createElement("h2");
  lunchMenuBowls.innerText = "Bowls";
  bowlSection.appendChild(lunchMenuBowls);

  bowlSection.appendChild(createMenuItem("Mango Glow Bowl", `Sweet mango, coconut rice, pickled ginger, fresh mint, and toasted sesame. A light, refreshing boost perfect for seaside afternoons.`));

}

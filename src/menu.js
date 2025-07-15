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

  //devo fare refactoring, deve accettare un secondo paramnetro con array di menu items, e chiamare createMenuItem su ognuno

  function createMenuSection(title, items) {
    const menuSection = document.createElement("div");
    const sectionTitle = document.createElement("h2");
    sectionTitle.innerText = title;
    menuSection.appendChild(sectionTitle);

    items.forEach((element) => {
      menuSection.appendChild(
        createMenuItem(element.name, element.description)
      );
    });
    return menuSection;
  }

  //Lunch menu
  const bowls = [
    {
      name: "Mango Glow Bowl",
      description:
        "Sweet mango, coconut rice, pickled ginger, fresh mint, and toasted sesame. A light, refreshing boost perfect for seaside afternoons.",
    },
    {
      name: "Tropical Quinoa Bowl",
      description:
        "Warm quinoa, grilled pineapple, avocado, lime-dressed greens, and spicy cashew drizzle.",
    },
    {
      name: "Citrus Energy Bowl",
      description:
        "Zesty oranges, cucumber ribbons, mixed grains, edamame, and sunflower seeds, tossed in a ginger-lime dressing.",
    },
  ];

  const toasts = [
    {
      name: "Avocado Citrus Toast",
      description:
        "Smashed avocado, pink grapefruit segments, chili flakes, and pumpkin seeds on rustic sourdough.",
    },
    {
      name: "Goat Cheese & Fig Toast",
      description:
        "Creamy goat cheese, roasted figs, wildflower honey, and cracked pepper.",
    },
  ];

  const lightSalads = [
    {
      name: "Watermelon & Feta",
      description:
        "Crisp watermelon, feta crumble, fresh mint, and arugula with a balsamic glaze.",
    },
    {
      name: "Garden Herb Salad",
      description:
        "Mixed greens, fresh dill, parsley, cucumber, and green apple with lemon vinaigrette.",
    },
  ];

  const wraps = [
    {
      name: "Lemon Hummus Wrap",
      description:
        "Homemade hummus, grilled zucchini, sun-dried tomatoes, and fresh basil in a soft wholewheat wrap.",
    },
  ];

  const smallPlates = [
    {
      name: "Beachside Falafel Bites",
      description: "Golden falafel with minted coconut yogurt dip.",
    },
    {
      name: "Chili Lime Edamame",
      description: "Warm edamame sprinkled with sea salt and chili-lime zest.",
    },
  ];

  //Dinner menu
  const chefSpecials = [
    {
      name: "Seaside Veggie Curry",
      description:
        "Coconut milk curry with seasonal vegetables, fresh turmeric, and steamed jasmine rice.",
    },
    {
      name: "Grilled Portobello Steak",
      description:
        "Marinated portobello mushroom grilled over open flame, served with herb-roasted potatoes.",
    },
  ];

  const grilledDishes = [
    {
      name: "Citrus Herb Tofu Skewers",
      description:
        "Grilled tofu skewers marinated in citrus and fresh herbs, served with quinoa pilaf.",
    },
    {
      name: "Stuffed Bell Peppers",
      description:
        "Baked peppers filled with herbed rice, toasted pine nuts, and sundried tomato pesto.",
    },
  ];

  const heartySalads = [
    {
      name: "Mediterranean Warm Salad",
      description:
        "Roasted eggplant, chickpeas, spinach, olives, and tahini drizzle.",
    },
    {
      name: "Sweet Potato Kale Crunch",
      description:
        "Roasted sweet potatoes, baby kale, crispy chickpeas, and lemon-tahini dressing.",
    },
  ];

  const sharedPlates = [
    {
      name: "Rustic Tapas Board",
      description:
        "Olives, marinated veggies, artisanal bread, and housemade spreads.",
    },
  ];

  const sides = [
    {
      name: "Garlic Rosemary Potatoes",
      description: "Crispy potatoes seasoned with fresh rosemary and garlic.",
    },
    {
      name: "Grilled Seasonal Veggies",
      description: "Assorted local vegetables lightly grilled and seasoned.",
    },
  ];

  //Drinks
  const smoothiesAndJuices = [
    {
      name: "Ocean Breeze Smoothie",
      description: "Pineapple, mint, spinach, and coconut water.",
    },
    {
      name: "Sunset Juice",
      description: "Carrot, orange, ginger, and turmeric.",
    },
  ];

  const herbalTeas = [
    {
      name: "Fresh Mint Tea",
      description: "Hand-picked mint leaves infused in hot water.",
    },
    {
      name: "Ginger Lemongrass Infusion",
      description: "Warm blend of ginger root and lemongrass.",
    },
  ];

  const wineAndCocktails = [
    {
      name: "House White Wine",
      description: "Light, crisp, and perfect for seaside sipping.",
    },
    {
      name: "Sangria by the Glass",
      description: "Refreshing mix of wine, fresh fruit, and citrus.",
    },
    {
      name: "Cucumber Gin & Tonic",
      description: "Classic gin & tonic with fresh cucumber slices.",
    },
  ];

  const contentDiv = document.querySelector("#content");

  const lunchMenuTitle = document.createElement("h1");
  lunchMenuTitle.innerText = "Lunch Menu";
  contentDiv.appendChild(lunchMenuTitle);

  const bowlSection = createMenuSection("Bowls", bowls);
  contentDiv.appendChild(bowlSection);

  const toastsSection = createMenuSection("Toasts", toasts);
  contentDiv.appendChild(toastsSection);

  const saladSection = createMenuSection("Light Salads", lightSalads);
  contentDiv.appendChild(saladSection);

  const wrapSection = createMenuSection("Wraps", wraps);
  contentDiv.appendChild(wrapSection);

  const smallPlatesSection = createMenuSection("Small Plates", smallPlates);
  contentDiv.appendChild(smallPlatesSection);

  const dinnerMenuTitle = document.createElement("h1");
  dinnerMenuTitle.innerText = "Dinner Menu";
  contentDiv.appendChild(dinnerMenuTitle);

  const specialsSection = createMenuSection("Chef Specials", chefSpecials);
  contentDiv.appendChild(specialsSection);

  const grilledSection = createMenuSection("Grilled Dishes", grilledDishes);
  contentDiv.appendChild(grilledSection);

  const heartySaladsSection = createMenuSection("Hearty Salads", heartySalads);
  contentDiv.appendChild(heartySaladsSection);

  const sharedPlatesSection = createMenuSection("Shared Plates", sharedPlates);
  contentDiv.appendChild(sharedPlatesSection);

  const sidesSection = createMenuSection("Sides", sides);
  contentDiv.appendChild(sidesSection);

  const drinkMenuTitle = document.createElement("h1");
  drinkMenuTitle.innerText = "Drinks";
  contentDiv.appendChild(drinkMenuTitle);

  const smoothiesSection = createMenuSection(
    "Smoothies & Juices",
    smoothiesAndJuices
  );
  contentDiv.appendChild(smoothiesSection);

  const teasSection = createMenuSection("Herbal Teas", herbalTeas);
  contentDiv.appendChild(teasSection);

  const wineCocktailsSection = createMenuSection(
    "Wine & Cocktails",
    wineAndCocktails
  );
  contentDiv.appendChild(wineCocktailsSection);
}

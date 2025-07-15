export default function loadAbout() {
  const contentDiv = document.querySelector("#content");

  const storyTitle = document.createElement("h2");
  storyTitle.innerText = "Our Story";
  contentDiv.appendChild(storyTitle);

  const storyContent = document.createElement("p");
  storyContent.innerText = `Founded in 2018, our café was born from a simple idea: create a cozy spot by the sea where people could slow down, enjoy fresh food, and feel at home. What started as a small wooden hut on the sand has grown into a meeting place for locals and travelers alike — always with the same spirit of simplicity and warmth.`;
  contentDiv.appendChild(storyContent);

  const philosophyTitle = document.createElement("h2");
  philosophyTitle.innerText = "Our Food Philosophy";
  contentDiv.appendChild(philosophyTitle);

  const philosophyContent = document.createElement("p");
  philosophyContent.innerText = `We believe that good food doesn’t need to be complicated. That’s why we focus on fresh, local ingredients, simple recipes, and bold flavors. From tropical fruits to herbs picked nearby, every dish is prepared with care — inspired by the seasons and the ocean that surrounds us.`;
  contentDiv.appendChild(philosophyContent);

  const founderTitle = document.createElement("h2");
  founderTitle.innerText = "Meet the Founder";
  contentDiv.appendChild(founderTitle);

  const founderContent = document.createElement("p");
  founderContent.innerText = `Our story begins with Emma, a traveler at heart who fell in love with coastal living. After years working in a fast-paced city, she traded office life for mornings on the beach and evenings spent cooking for friends. Opening this café was her way of sharing that lifestyle: slow, simple, and full of flavor.`;
  contentDiv.appendChild(founderContent);

  const valuesTitle = document.createElement("h2");
  valuesTitle.innerText = "What We Care About";
  contentDiv.appendChild(valuesTitle);

  const valuesContent = document.createElement("p");
  valuesContent.innerText = `At the heart of our café are a few simple values:`;
  contentDiv.appendChild(valuesContent);

  const valuesList = document.createElement("ul");
  contentDiv.appendChild(valuesList);

  const firstValue = document.createElement("li");
  firstValue.innerText = "Sustainability: we use local produce whenever possible and avoid unnecessary waste.";
  valuesList.appendChild(firstValue);

  const secondValue = document.createElement("li");
  secondValue.innerText = "Slow Living: we encourage people to pause, breathe, and enjoy their meal without rushing.";
  valuesList.appendChild(secondValue);

  const thirdValue = document.createElement("li");
  thirdValue.innerText = "Welcome to All: whether you're here for a quick juice or a long, lazy dinner, you’ll always find a spot at our table.";
  valuesList.appendChild(thirdValue);
}

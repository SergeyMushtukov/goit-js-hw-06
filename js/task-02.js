const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsListEl = document.querySelector("#ingredients");

const ingredientsItemsEl = ingredients.reduce((totalArr, ingredient) => {
  const ingridientItemEl = document.createElement("li");
  ingridientItemEl.textContent = ingredient;
  ingridientItemEl.classList.add("item");
  totalArr.push(ingridientItemEl);
  return totalArr;
}, []);

ingredientsListEl.append(...ingredientsItemsEl);

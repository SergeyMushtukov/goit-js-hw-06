function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector("#controls input");

const buttonCreateEl = document.querySelector("[data-create]");

const buttonDestroyEl = document.querySelector("[data-destroy]");

const boxesEl = document.querySelector("#boxes");

let numberOfCreatingElements;

inputEl.addEventListener("change", (evt) => {
  if (
    evt.currentTarget.valueAsNumber < 0 ||
    evt.currentTarget.valueAsNumber > evt.currentTarget.max
  ) {
    alert(
      `The number must be from ${evt.currentTarget.min} to ${evt.currentTarget.max}`
    );
    evt.currentTarget.value = 0;
    numberOfCreatingElements = 0;
    return;
  }
  numberOfCreatingElements = evt.currentTarget.valueAsNumber;
});

function createBoxes(amount) {
  destroyBoxes();
  const arrayOfElements = [];
  let width = 30;
  let height = 30;
  for (let i = 1; i <= amount; i += 1) {
    const divEl = document.createElement("div");
    divEl.style.width = `${width}px`;
    divEl.style.height = `${height}px`;
    divEl.style.backgroundColor = getRandomHexColor();
    arrayOfElements.push(divEl);
    width += 10;
    height += 10;
  }
  boxesEl.append(...arrayOfElements);
}

function destroyBoxes() {
  boxesEl.innerHTML = "";
}

buttonCreateEl.addEventListener("click", () =>
  createBoxes(numberOfCreatingElements)
);

buttonDestroyEl.addEventListener("click", destroyBoxes);

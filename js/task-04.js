const buttonDecrementEl = document.querySelector(
  'button[data-action="decrement"]'
);

const buttonIncrementEl = document.querySelector(
  'button[data-action="increment"]'
);

const counterValueEl = document.querySelector("#value");

let counterValue = 0;

buttonDecrementEl.addEventListener("click", () => {
  counterValue -= 1;
  counterValueEl.textContent = counterValue;
});

buttonIncrementEl.addEventListener("click", () => {
  counterValue += 1;
  counterValueEl.textContent = counterValue;
});

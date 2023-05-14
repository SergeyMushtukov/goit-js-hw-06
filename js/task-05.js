const textInputEl = document.querySelector("#name-input");

const outputEl = document.querySelector("#name-output");

const defaultText = outputEl.textContent;

textInputEl.addEventListener("input", () => {
  const textValue = textInputEl.value.trim();
  outputEl.textContent = textValue ? textValue : defaultText;
});

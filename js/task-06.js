const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", handleInputValidation);

function handleInputValidation() {
  const validNumber = Number(this.dataset.length);
  const NumberOfInputedSymbol = this.value.trim().length;

  if (
    NumberOfInputedSymbol === validNumber &&
    this.classList.contains("invalid")
  ) {
    this.classList.replace("invalid", "valid");
    return;
  }

  if (
    NumberOfInputedSymbol === validNumber &&
    !this.classList.contains("invalid")
  ) {
    this.classList.add("valid");
    return;
  }

  if (
    NumberOfInputedSymbol !== validNumber &&
    this.classList.contains("valid")
  ) {
    this.classList.replace("valid", "invalid");
    return;
  }

  if (
    NumberOfInputedSymbol !== validNumber &&
    !this.classList.contains("valid")
  ) {
    this.classList.add("invalid");
    return;
  }
};

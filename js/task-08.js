const formEl = document.querySelector("form.login-form");

formEl.addEventListener("submit", handleSubmit);

function handleSubmit(evt) {
  evt.preventDefault();
  const {
    elements: { email, password },
  } = evt.currentTarget;

  if (!email.value || !password.value) {
    alert("All the fields must be filled!");
    return;
  }
  console.log({
    email: email.value,
    password: password.value,
  });
  evt.currentTarget.reset();
}

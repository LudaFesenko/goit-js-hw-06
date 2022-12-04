const form = document.querySelector("form.login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const { email, password } = event.target.elements;
  if (!email.value || !password.value) {
    alert("Все поля должны быть заполнены");
  } else {
    console.log({ email: email.value, password: password.value });

    event.target.reset();
  }
});

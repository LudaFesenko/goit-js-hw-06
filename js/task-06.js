const inputEl = document.querySelector("input#validation-input");

inputEl.addEventListener("blur", (event) => {
  const { value } = event.target;
  const { length } = inputEl.dataset;

  if (value.length === Number(length)) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  }
});

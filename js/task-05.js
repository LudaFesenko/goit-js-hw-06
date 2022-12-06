const nameOutput = document.querySelector("span#name-output");

const inputEl = document.querySelector("input#name-input");

inputEl.addEventListener("input", (event) => {
  nameOutput.textContent = event.target.value || "Anonymous";
});

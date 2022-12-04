const inputControl = document.querySelector("input#font-size-control");

const spanEl = document.querySelector("span#text");

inputControl.addEventListener("input", (event) => {
  const { value } = event.target;
  spanEl.style.fontSize = `${value}px`;
});

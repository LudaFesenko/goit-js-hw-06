function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnChangeColor = document.querySelector("button.change-color");

const spanColor = document.querySelector("span.color");

btnChangeColor.addEventListener("click", (event) => {
  const color = getRandomHexColor();

  document.body.style.backgroundColor = color;

  spanColor.textContent = color;
});

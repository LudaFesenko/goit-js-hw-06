function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const inputEl = document.querySelector("input");

const btnCreate = document.querySelector("button[data-create]");

const btnDestroy = document.querySelector("button[data-destroy]");

const boxesEl = document.querySelector("div#boxes");
const createBoxes = (amount) => {
  const newElements = [];
  for (let i = 0; i < amount; i += 1) {
    const element = document.createElement("div");
    const size = `${30 + 10 * i}px`;
    element.style.width = size;
    element.style.height = size;
    element.style.backgroundColor = getRandomHexColor();

    newElements.push(element);
  }

  boxesEl.replaceChildren(...newElements);
};
btnCreate.addEventListener("click", () => {
  const elementsCount = Number(inputEl.value);
  createBoxes(elementsCount);
});

btnDestroy.addEventListener("click", () => {
  inputEl.value = "";
  boxesEl.innerHTML = "";
});

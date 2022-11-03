const inputNum = document.querySelector("#controls>input");
const onBtnCreate = document.querySelector("button[data-create]");
const onBtnDestroy = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBoxes = (amount) => {
  const divAmountToAdd = [];
  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement("div");
    div.style.height = `${30 + 10 * i}px`;
    div.style.width = `${30 + 10 * i}px`;
    div.style.background = getRandomHexColor();
    divAmountToAdd.push(div);
  }
  return divAmountToAdd;
};

function createDiv() {
  let divToAdd = createBoxes(inputNum.value);
  boxes.append(...divToAdd);
}

onBtnCreate.addEventListener("click", createDiv);

onBtnDestroy.addEventListener("click", () => {
  boxes.innerHTML = "";
});

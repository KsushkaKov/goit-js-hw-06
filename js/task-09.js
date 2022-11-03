function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const onBtnChangeColor = document.querySelector(".change-color");
const textInfoColor = document.querySelector(".color");
const bodyColor = document.querySelector("body");

function changeColor() {
  let color = getRandomHexColor();
  bodyColor.style.backgroundColor = color;
  textInfoColor.textContent = color;
}

onBtnChangeColor.addEventListener("click", changeColor);

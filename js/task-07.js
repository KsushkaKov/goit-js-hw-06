const radioInput = document.querySelector("#font-size-control");
const textSize = document.querySelector("#text");

radioInput.addEventListener("change", (event) => {
  textSize.style.fontSize = `${event.target.value}px`;
});

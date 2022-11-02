let counterValue = 0;

const displayCounter = document.querySelector("#value");
const btnMin = document.querySelector('button[data-action="decrement"]');
const btnMax = document.querySelector('button[data-action="increment"]');

btnMin.addEventListener("click", () => {
  counterValue--;
  displayCounter.textContent = counterValue;
});

btnMax.addEventListener("click", () => {
  counterValue++;
  displayCounter.textContent = counterValue;
});

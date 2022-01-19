// console.log("Hello world!");

const counter = document.querySelector("#counter");
// console.log(counter);
const minusButton = document.querySelector("#minus-btn");
const resetButton = document.querySelector("#reset-btn");
const plusButton = document.querySelector("#plus-btn");

let count = 0;

const increaseCount = () => {
  count += 1;

  counter.textContent = count;
};

function resetCount() {
  count = 0;
  counter.textContent = count;
}

const decreaseCount = () => {
  count -= 1;

  counter.textContent = count;
};

minusButton.addEventListener("click", decreaseCount);
resetButton.addEventListener("click", resetCount);
plusButton.addEventListener("click", increaseCount);

//  THEME SELECTOR

const themeButtons = document.querySelectorAll(".theme-buttons");
for (let i = 0; i < themeButtons.length; i++) {
  themeButtons[i].addEventListener("click", selectTheme);
}

function selectTheme(evt) {
  const theme = evt.target.textContent;
  document.querySelector("body").className = theme;
  document.querySelector("main").className = theme;
  document.querySelector(".theme-buttons").className = theme;
}

const mainTitle = document.querySelector("#title");
let counterValue = 0;

const btnDecrement = document.querySelector("#decrement");
const btnReset = document.querySelector("#reset");
const btnIncrement = document.querySelector("#increment");

btnIncrement.addEventListener("click", () => {
    counterValue++;
    mainTitle.innerHTML = counterValue;
});
btnReset.addEventListener("click", () => {
    counterValue = 0;
    mainTitle.innerHTML = counterValue;
});
btnDecrement.addEventListener("click", () => {
    counterValue--;
    mainTitle.innerHTML = counterValue;
});

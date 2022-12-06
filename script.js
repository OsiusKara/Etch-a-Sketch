const gridContainer = document.getElementById("grid-container");
// const colors = ["#e74c3c", "#8e44ad", "#3498db", "#e67e22", "#2ecc71"];

const range = document.getElementById("range");
const rangeValue = document.getElementById("rangeValue");

function makeRows(rows, cols) {
  gridContainer.innerHTML = "";
  gridContainer.style.setProperty("--grid-rows", rows);
  gridContainer.style.setProperty("--grid-cols", cols);
  for (i = 0; i < rows * cols; i++) {
    let cell = document.createElement("div");
    gridContainer.appendChild(cell).className = "square";
  }
}

function sliderValue() {
  makeRows(+range.value, +range.value);
}

range.addEventListener("input", sliderValue);

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

// ===================================================================
// const gridContainer = document.getElementById("grid-container");
// // const colors = ["#e74c3c", "#8e44ad", "#3498db", "#e67e22", "#2ecc71"];

// const range = document.getElementById("range"); //input Id
// const rangeValue = document.getElementById("rangeValue");
// let strToNum;

// function makeRows(rows, cols) {
//   gridContainer.style.setProperty("--grid-rows", rows);
//   gridContainer.style.setProperty("--grid-cols", cols);
//   for (i = 0; i < rows * cols; i++) {
//     let cell = document.createElement("div");
//     gridContainer.appendChild(cell).className = "square";
//   }
// }

// makeRows(32, 32);

// function sliderValue() {
//   let strToNum = parseInt(range.value);
//   console.log(strToNum);
//   return strToNum;
// }

// // sliderValue();

// range.addEventListener("input", sliderValue);

// ===============++++ORIGINAL TESTCODE FROM AFTER COLCA+++++============================
// let strToNum;

// let test = sliderValue(); //X x Y

// let SQUARES = test * test;

// for (let i = 0; i < SQUARES; i++) {
//   function createDiv() {
//     const squares = document.createElement("div");

//     squares.classList.add("square");
//     gridContainer.appendChild(squares);
//     gridContainer.style.gridTemplateColumns = `repeat(${test},1fr)`;
//     gridContainer.style.gridTemplateRows = `repeat(${test},1fr)`;
//   }
//   createDiv();
// }

// function sliderValue() {
//   let strToNum = parseInt(range.value);
//   console.log(strToNum);
//   return strToNum;
// }

// sliderValue();

// range.addEventListener("input", sliderValue);

// ==================================ORIGINAL CODE FROM LAST WEEK!=========================

// let gridSize;
// let SQUARES = 256;
// // SQUARES = `${gridSize}`;

// updateRange = () => {
//   rangeValue.innerHTML = range.value; //8x8 - 64x64
//   let strToNum = parseInt(range.value);
//   gridSize = strToNum * strToNum;
//   gridContainer.style.gridTemplateColumns = `repeat(${range.value},1fr)`;
//   gridContainer.style.gridTemplateRows = `repeat(${range.value},1fr)`;

//   for (let i = 0; i < SQUARES; i++) {
//     const square = document.createElement("div");
//     square.classList.add("square");
//     gridContainer.appendChild(square);
//   }
//   SQUARES = `${gridSize}`;
//   console.log("totalSquares: " + gridSize, "rangeValue: " + range.value);
// };

// range.addEventListener("input", updateRange);

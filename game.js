let squareColor;

function createGrid() {
  console.log("create grid");
  const game = document.querySelector("#game");
  game.innerHTML = "";
  let n = document.getElementById("gridSize").value;
  squareColor = (nameValue = document.getElementById("colorPicker").value);
  for (let i = 1; i <= n; i++) {
    //create row
    let row = document.createElement("div");
    row.classList.add("row");
    row.id = `${"row" + i}`;
    game.appendChild(row);

    let thisRow = document.querySelector(`${"#row" + i}`);
    for (let j = 1; j <= n; j++) {
      //create squares
      let square = document.createElement("div");
      square.classList.add("square");
      square.id = `${"square_" + i + "_" + j}`;
      square.style.maxWidth = square.style.maxHeight = `${500 / n}px`;
      square.style.width = square.style.height = `${80 / n}vw`;
      square.onclick = function () {
        square.style.backgroundColor = squareColor;
      };
      thisRow.appendChild(square);
    }
  }
  return false;
}

const form = document.querySelector("#instructions");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  createGrid();
  const squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
      square.onmouseenter = function() {
          square.style.backgroundColor = squareColor;
      }
  })
});

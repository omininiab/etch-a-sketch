let n = 64;
function createGrid() {
  const game = document.querySelector("#game");
  for (let i = 1; i <= n; i++) {
    //create row
    let row = document.createElement("div");
    row.classList.add("row");
    row.id = `${"row" + i}`;
    game.appendChild(row);

    let thisRow = document.querySelector(`${"#row" + i}`);
    for (let j = 1; j <= n; j++) {
      //create columns
      let square = document.createElement("div");
      square.classList.add("square");
      square.id = `${"square_" + i + "_" + j}`;
      square.style.maxWidth = square.style.maxHeight = `${500/n}px`
      square.style.width = square.style.height = `${80/n}vw`
      thisRow.appendChild(square);
    }
    
  }
}

function changeColor() {
    square = document.getElementsByClassName("square")
}

createGrid();

let n = 16;
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
      thisRow.appendChild(square);
    }
  }
}
createGrid();

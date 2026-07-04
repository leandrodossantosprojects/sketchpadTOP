let body = document.querySelector("body");
let startBtn = document.createElement("button");
let popup = document.createElement("div");
let inputContainer = document.createElement("div");
let gridSize = document.createElement("input");
let setSize = document.createElement("button");
let gridContainer = document.createElement("div");
let grid = document.createElement("div");

inputContainer.id = "inputCont";
setSize.id = "setTiles";
gridContainer.id = "gridCont";
grid.id = "grid";

Object.assign(startBtn, {
  id: "startBtn",
  textContent: "Start",
});

Object.assign(gridSize, {
  id: "gridSize",
  type: "number",
  min: "2",
  max: "100",
});

Object.assign(setSize, {
  id: "setSize",
  textContent: "Set",
});

body.appendChild(startBtn);
startBtn.addEventListener("click", () => {
  startBtn.remove();
  grid.innerHTML = "";
  gridContainer.remove();
  body.appendChild(inputContainer);
  inputContainer.appendChild(gridSize);
  gridSize.value = "";
  inputContainer.appendChild(setSize);
});

setSize.addEventListener("click", () => {
  let tiles = Number(gridSize.value);
  body.append(startBtn);
  body.appendChild(gridContainer);
  gridContainer.appendChild(grid);
  for (let i = 0; i < tiles; i++) {
    let row = document.createElement("div");
    row.className = "row";
    grid.appendChild(row);
    for (let i = 0; i < tiles; i++) {
      const tile = document.createElement("div");
      tile.className = "tile";
      row.appendChild(tile);
      tile.addEventListener(
        "mousedown",
        () => (tile.style.backgroundColor = "black"),
      );
    }
  }
  grid.style.setProperty("--tiles", tiles);
  inputContainer.remove();
});

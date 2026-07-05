let title = document.getElementById("title");
let body = document.querySelector("body");
let startBtn = document.createElement("button");
let gridSize = document.createElement("input");
let setSize = document.createElement("button");
let gridContainer = document.createElement("div");
let grid = document.createElement("div");

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
  className: "sizeInput",
});

Object.assign(setSize, {
  id: "setSize",
  textContent: "Set",
  className: "sizeBtn",
});

//Popup resize configuration
let resizeBtn = document.createElement("button");
let screenShadow = document.createElement("div");
let popup = document.createElement("div");
let popupTitle = document.createElement("div");
let popupInput = document.createElement("input");
let popupBtn = document.createElement("button");

screenShadow.id = "screenShadow";
popup.id = "popup";
resizeBtn.id = "resizeBtn";
resizeBtn.textContent = "Resize the grid";

Object.assign(popupTitle, {
  id: "popupTitle",
  textContent: "Size the grid",
  className: "popupItem",
});

Object.assign(popupInput, {
  id: "popupInput",
  type: "number",
  min: "2",
  max: "100",
  className: "popupItem",
});

Object.assign(popupBtn, {
  className: "popupBtn",
  textContent: "Set",
});

body.appendChild(startBtn);
startBtn.addEventListener("click", () => {
  startBtn.remove();
  title.remove();
  body.appendChild(screenShadow);
  screenShadow.appendChild(popup);
  popup.append(popupTitle, popupInput, popupBtn);
  popupInput.focus();
});

popupBtn.addEventListener("click", () => {
  if (
    !Number(popupInput.value) ||
    Number(popupInput.value) < 2 ||
    Number(popupInput.value) > 100
  ) {
    body.appendChild(screenShadow);
    screenShadow.appendChild(popup);
    let erroMsg = document.createElement("span");
    Object.assign(erroMsg, {
      id: "erroMsg",
      textContent: "Please input a valid number",
    });
    popup.innerHTML = "";
    popup.appendChild(erroMsg);
    let acceptBtn = document.createElement("button");
    acceptBtn.textContent = "Accept";
    acceptBtn.className = "popupBtn";
    popup.appendChild(acceptBtn);
    acceptBtn.addEventListener("click", () => {
      popup.innerHTML = "";
      popup.append(popupTitle, popupInput, popupBtn);
      popupInput.focus();
    });
    return;
  }
  let tiles = Number(popupInput.value);
  body.append(resizeBtn);
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
        "mouseover",
        () => (tile.style.backgroundColor = "black"),
      );
    }
  }
  grid.style.setProperty("--tiles", tiles);
  screenShadow.innerHTML = "";
  screenShadow.remove();

  resizeBtn.addEventListener("click", () => {
    body.appendChild(screenShadow);
    screenShadow.appendChild(popup);
    popup.append(popupTitle, popupInput, popupBtn);
    popupTitle.textContent = "Resize the grid";
    popupInput.focus();
    popupBtn.addEventListener("click", () => {
      tiles = Number(popupInput.value);
      if (
        !Number(popupInput.value) ||
        Number(popupInput.value) < 2 ||
        Number(popupInput.value) > 100
      ) {
        body.appendChild(screenShadow);
        screenShadow.appendChild(popup);
        let erroMsg = document.createElement("span");
        Object.assign(erroMsg, {
          id: "erroMsg",
          textContent: "Please input a valid number",
        });
        popup.innerHTML = "";
        popup.appendChild(erroMsg);
        let acceptBtn = document.createElement("button");
        acceptBtn.textContent = "Accept";
        acceptBtn.className = "popupBtn";
        popup.appendChild(acceptBtn);
        acceptBtn.addEventListener("click", () => {
          popup.innerHTML = "";
          popup.append(popupTitle, popupInput, popupBtn);
          popupInput.focus();
        });
        return;
      }
      grid.innerHTML = "";
      gridSize.value = "";
      for (let i = 0; i < tiles; i++) {
        let row = document.createElement("div");
        row.className = "row";
        grid.appendChild(row);
        for (let i = 0; i < tiles; i++) {
          const tile = document.createElement("div");
          tile.className = "tile";
          row.appendChild(tile);
          tile.addEventListener(
            "mouseover",
            () => (tile.style.backgroundColor = "black"),
          );
        }
      }
    });
  });
});

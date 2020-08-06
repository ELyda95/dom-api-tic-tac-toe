window.addEventListener("DOMContentLoaded", () => {
  let currentPlayerSymbol = "x";
  let squareValues = ["", "", "", "", "", "", "", "", ""];

  const board = document.getElementById("tic-tac-toe-board");

  board.addEventListener("click", (event) => {
    let startsWith = "square-";
    if (event.target.id.includes(startsWith)) {
      let squareId = event.target.id;
      let squareNum = squareId.slice(startsWith.length);
      let parsedNum = Number.parseInt(squareNum);
      if (squareValues[parsedNum] !== "") {
        return;
      }
      const img = document.createElement("img");
      img.setAttribute("class", "prof-img");
      img.src = `player-${currentPlayerSymbol}.svg`;
      event.target.appendChild(img);

      squareValues[parsedNum] = currentPlayerSymbol;
      if (currentPlayerSymbol === "x") {
        currentPlayerSymbol = "o";
      } else {
        currentPlayerSymbol = "x";
      }
    }
  });
});

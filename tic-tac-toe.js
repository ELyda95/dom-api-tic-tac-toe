window.addEventListener("DOMContentLoaded", () => {
  let currentPlayerSymbol = "x";
  let gameStatus = "";
  let squareValues = [
    "",
    "",
    "", // 0, 1, 2          //2, 4, 6       0, 3, 6
    "",
    "",
    "", // 3, 4, 5          // 0, 4, 8      1, 4, 7
    "",
    "",
    "",
  ]; //6, 7, 8                           2, 5, 8

  const board = document.getElementById("tic-tac-toe-board");

  function checkGameStatus() {
    // Check rows
    for (let i = 0; i < 9; i += 3) {
      if (
        squareValues[i] !== "" &&
        squareValues[i] === squareValues[i + 1] &&
        squareValues[i] === squareValues[i + 2]
      ) {
        gameStatus = squareValues[i];
      }
    }
    //check columns
    for (let i = 0; i < 3; i++) {
      if (
        squareValues[i] !== "" &&
        squareValues[i] === squareValues[i + 3] &&
        squareValues[i] === squareValues[i + 6]
      ) {
        gameStatus = squareValues[i];
      }
    }
    if (
      squareValues[0] !== "" &&
      squareValues[0] === squareValues[4] &&
      squareValues[0] === squareValues[8]
    ) {
      gameStatus = squareValues[0];
    }
    if (
      squareValues[2] !== "" &&
      squareValues[2] === squareValues[4] &&
      squareValues[2] === squareValues[6]
    ) {
      gameStatus = squareValues[2];
    }

    let isDraw = true;
    for (let i = 0; i < 9; i++) {
      if (squareValues[i] === "") {
        isDraw = false;
      }
    }
    if (isDraw) {
      gameStatus = "Nobody :(";
    }
    if (gameStatus !== "") {
      document.getElementById("game-status").innerHTML = `${gameStatus.toUpperCase()} wins!`;
    }
  }

  //
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
      checkGameStatus();
      //   let gameStatusHeading = document.getElementById("game-status")
      //     gameStatusHeading.innerHTML(checkGameStatus())
    }
  });
});

// function checkGameStatus() {
//     for (let i = 0; i < squareValues.length; i++) {
//         if ((squareValues[0] !== "" && squareValues[0] === squareValues[1]) && (squareValues[2] === squareValues[0])) {
//             console.log(`${currentPlayerSymbol} is the winner!`)
//         }
//         else if ((squareValues[3] === squareValues[4]) && (squareValues[5] === squareValues[3])) {
//             console.log(`${currentPlayerSymbol} is the winner!`)
//         }
//         else if ((squareValues[6] === squareValues[7]) && (squareValues[8] === squareValues[6])) {
//             console.log(`${currentPlayerSymbol} is the winner!`)
//         }
//         else if ((squareValues[2] === squareValues[4]) && (squareValues[6] === squareValues[2])) {
//             console.log(`${currentPlayerSymbol} is the winner!`)
//         }
//         else if ((squareValues[0] === squareValues[4]) && (squareValues[8] === squareValues[0])) {
//             console.log(`${currentPlayerSymbol} is the winner!`)
//         }
//         else if ((squareValues[0] === squareValues[3]) && (squareValues[6] === squareValues[0])) {
//             console.log(`${currentPlayerSymbol} is the winner!`)
//         }
//         else if ((squareValues[1] === squareValues[4]) && (squareValues[7] === squareValues[1])) {
//             console.log(`${currentPlayerSymbol} is the winner!`)
//         }
//         else if ((squareValues[2] === squareValues[5]) && (squareValues[8] === squareValues[2])) {
//             console.log(`${currentPlayerSymbol} is the winner!`)
//         }
//         else {
//             console.log("Nobody wins!")
//         }

//     }
// }

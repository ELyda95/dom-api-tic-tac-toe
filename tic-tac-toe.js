window.addEventListener("DOMContentLoaded", () => {
    
  let currentPlayerSymbol = "x";
  let gameStatus = "";
  let squareValues = ["","","", "","","","","",""];     
  const key = "tic-tac-toe-player"
  const gameStatusKey = "tic-tac-toe-status" 
  const squareValuesKey = "tic-tac-toe-values"
  
  let newButton = document.getElementById("new-game-button");
  let giveUpButton = document.getElementById("give-up-button");
  const board = document.getElementById("tic-tac-toe-board");
  let gameHeader = document.getElementById("game-status");

  loadGame();

 

  function saveGame() {
      const object = {
          currentPlayerSymbol,
          gameStatus,
          squareValues,
      }
      localStorage.setItem(key, JSON.stringify(object))
 }
    
 
  function loadGame() {
      const idk = localStorage.getItem(key)
      const idk1 = JSON.parse(idk);
      console.log(Object.values(idk1));
      [player, status, squareVals] = Object.values(idk1)
      squareValues = squareVals;
      currentPlayerSymbol = player
      gameStatus = status;
    console.log(player)
    console.log(status)
    console.log(squareVals)

      if (localStorage.playerKey){
     currentPlayerSymbol = JSON.parse(localStorage.getItem(playerKey));
      console.log(currentPlayerSymbol)

      }
      if(localStorage.gameStatusKey) {
    gameStatus = JSON.parse(localStorage.getItem(gameStatusKey));
      }
      if (localStorage.squareValuesKey){
    squareValues = JSON.parse(localStorage.getItem(squareValuesKey))
  }
}


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

      saveGame();

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
      gameHeader.innerHTML = `${gameStatus.toUpperCase()} wins!`;
      newButton.removeAttribute("disabled");
      giveUpButton.setAttribute("disabled", true);
          
      
    }
      saveGame();
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

    }
  });
  newButton.addEventListener("click", (event) => {
      currentPlayerSymbol = "x";
      squareValues = ["", "", "", "", "", "", "", "", ""];
      gameStatus = "";
     gameHeader.innerHTML = "";
     for (i = 0; i < 9; i++) {
         document
         .getElementById(`square-${i}`)
         .innerHTML = ''
     }
     document 
     .getElementById("new-game-button")
     .setAttribute("disabled", true);
     
  })
    giveUpButton.addEventListener("click", (event) => {
        if (currentPlayerSymbol === "x"){
            gameStatus = "o"
            gameHeader.innerHTML = `${gameStatus.toUpperCase()} wins!`;
        } else {
            gameStatus = "x"
            gameHeader.innerHTML = `${gameStatus.toUpperCase()} wins!`
        }
        newButton.removeAttribute("disabled");
    })

 
});

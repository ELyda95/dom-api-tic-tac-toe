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
    if (localStorage.getItem(key) !== null){
      const idk = localStorage.getItem(key)
      const idk1 = JSON.parse(idk);
      [player, status, squareVals] = Object.values(idk1)
    
      squareValues = squareVals;
      currentPlayerSymbol = player
      gameStatus = status;
    
    for (let i = 0; i < squareValues.length; i++){
      let squareValue = squareValues[i]
      if (squareValue !== ""){
         const img = document.createElement("img");
         img.setAttribute("class", "prof-img");
         img.src = `player-${squareValue}.svg`;
         let correspondingSquare = document.getElementById(`square-${i}`)
        correspondingSquare.appendChild(img);

      }
    }
    }
   checkGameStatus();

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
      giveUpButton.removeAttribute("disabled");
          
      
    }
      saveGame();
  }

  //
  board.addEventListener("click", (event) => {
    if (gameStatus !== "") return;
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
      // turnCounter();
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

     giveUpButton.removeAttribute("disabled")

    
     saveGame();
     
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
        giveUpButton.setAttribute("disabled", true)
    })

 
    function nightmareMode(){

      //If computer starts as x, then human is o
      //If human starts as x, then computer is o
      // if it is computer's turn, generate a random number between 0 - 9
      //find an empty spot and add either the x or the o to the board


    }

//     function turnCounter(){
//       let count = 0; 
//       for (let i = 0; i < squareValues.length; i++) {
//         if (squareValues[i] !== ""){
//           count++;
//           console.log(count)
//         }
//       }
            

//     }

 });

var origBoard;
const huPlayer = "O";
const aiPlayer = "X";
// var initplayer = "X";
const winCombs = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2]
];
const cells = document.querySelectorAll(".cell");
startGame();

function startGame() {
  document.querySelector(".endgame").style.display = "none";
  origBoard = Array.from(Array(9).keys());
  for (i = 0; i < cells.length; i++) {
    cells[i].innerText = "";
    cells[i].style.removeProperty("background-color");
    cells[i].addEventListener("click", turnClick, false);
  }
}

function turnClick(square) {
  if (typeof origBoard[square.target.id] == "number") {
    turn(square.target.id, huPlayer); //put initPlayer for 2 player game
    //   initplayer=initplayer=='X'?'0':'X';
    if (!chceckTie()) turn(bestSpot(), aiPlayer);
  }
}

function turn(squareId, player) {
  origBoard[squareId] = player;
  document.getElementById(squareId).innerText = player;
  let gameWon = checkWin(origBoard, player);
  if (gameWon) {
    gameOver(gameWon);
  }
}
function checkWin(board, player) {
  let plays = board.reduce((a, e, i) => (e === player ? a.concat(i) : a), []);
  let gameWon = null;
  for (let [index, win] of winCombs.entries()) {
    if (win.every(elem => plays.indexOf(elem) > -1)) {
      gameWon = { index: index, player: player };
      break;
    }
  }
  return gameWon;
}

function gameOver(gameWon) {
  for (let index of winCombs[gameWon.index]) {
    document.getElementById(index).style.backgroundColor =
      gameWon.player == huPlayer ? "blue" : "red";
  }
  for (let i = 0; i < cells.length; i++) {
    cells[i].removeEventListener("click", turnClick, false);
  }
  declareWinner(gameWon.player==huPlayer?"Human Won":"Human Lose");
}

function emptySquares(){
    return origBoard.filter(s=>typeof s=='number');
}

function bestSpot(){
    return emptySquares()[0];
}

function chceckTie(){
    if(emptySquares().length==0){
        for(let i=0;i<cells.length;i++){
            cells[i].style.backgroundColor="green";
            cells[i].removeEventListener('click',turnClick,false);
        }
        declareWinner("Tie Game");
        return true;
    }
    return false;
}

function declareWinner(who){
    document.querySelector(".endgame").style.display="block";
    document.querySelector(".endgame .text").innerText=who;
}
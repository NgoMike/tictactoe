let board = [];
let turn = true;
let player = null;
let result = false;

console.log("Make a move by typing 1-9 based on what's available...");

const playerTurn = () => {
  if (result === false) {
    turn = !turn;
  } else {
    console.log('Player ' +  player + 'won!');
  }
  if (turn === false) {
    player = 'X';
    console.log('It is player X turn!');
  } else {
    player = 'O';
    console.log('It is player O turn!');
  }
}

const makeBoard = () => {
  for (var i = 0; i < 3; i++) {
    let row = [];
    for (var j = 0; j < 3; j++) {
      row.push(' ');
    }

    board.push(row);
  }

  return board;
}

const move = (num) => {
  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board[i].length; j++) {
      if (num === 1) {
        board[0][0] = player;
      } else if (num === 2) {
        board[0][1] = player;
      } else if (num === 3) {
        board[0][2] = player;
      } else if (num === 4) {
        board[1][0] = player;
      } else if (num === 5) {
        board[1][1] = player;
      } else if (num === 6) {
        board[1][2] = player;
      } else if (num === 7) {
        board[2][0] = player;
      } else if (num === 8) {
        board[2][1] = player;
      } else if (num === 9) {
        board[2][2] = player;
      } 
    }
  }
  return board;
}

makeBoard()
playerTurn();
move(6);
playerTurn();
move(4);
console.log(board);

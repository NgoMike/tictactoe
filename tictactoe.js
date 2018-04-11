let board = [];
let turn = true;
let player = null;
let result = false;

const playerTurn = () => {
  for (var i = 0; i < 9; i++) {
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
        board[0][0] = 'X';
      }
    }
  }

  return board;
}

playerTurn();
makeBoard()
console.log(board);

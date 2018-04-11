let board = [];

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

makeBoard()
console.log(board);


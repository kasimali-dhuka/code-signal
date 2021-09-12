function chessKnight(cell) {
  var counter = 0;
  let row = cell[0].toLowerCase();
  let col = Number(cell[1]);

  let one = 1;
  let two = 2;
  let neg_one = -1;
  let neg_two = -2;

  top_right = function (row, col, x, y) {
    _row = String.fromCharCode(row.charCodeAt() + x);
    _col = col + y;
    console.log(_row, _col);
    if (
      _row.charCodeAt() >= 97 &&
      _row.charCodeAt() <= 104 &&
      _col >= 1 &&
      _col <= 8
    ) {
      counter++;
    }

    _row = String.fromCharCode(row.charCodeAt() + y);
    _col = col + x;
    if (
      _row.charCodeAt() >= 97 &&
      _row.charCodeAt() <= 104 &&
      _col >= 1 &&
      _col <= 8
    ) {
      counter++;
    }
  };

  top_right(row, col, one, two);
  top_right(row, col, neg_one, neg_two);
  top_right(row, col, one, neg_two);
  top_right(row, col, neg_one, two);

  return counter;
}

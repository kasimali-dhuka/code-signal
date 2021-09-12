function minesweeper(matrix) {
  const mineCountMatrix = [];
  let counter = 0;
  let first = 0;
  let second = 0;

  while (first < matrix.length) {
    second = 0;
    const indexArr = [];
    while (second < matrix[0].length) {
      counter = 0;
      let center = [];
      for (let i = 0; i < matrix.length; i++) {
        if (i >= first + 2 || i <= first - 2) continue;
        for (let j = 0; j < matrix[i].length; j++) {
          if (j >= second + 2 || j <= second - 2) continue;
          if (i === first && j === second) continue;
          if (matrix[i][j] === true) {
            counter++;
          }
        }
      }
      indexArr.push(counter);
      second++;
    }
    mineCountMatrix.push(indexArr);
    first++;
  }
  return mineCountMatrix;
}

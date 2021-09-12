function matrixElementsSum(matrix) {
  let sum = 0;
  let haunted = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        haunted.push(j);
      } else if (haunted.indexOf(j) === -1) {
        sum += matrix[i][j];
      }
    }
  }
  return sum;
}

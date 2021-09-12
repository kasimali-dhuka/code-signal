function differentSquares(matrix) {
  let i = 0;
  let j = 0;

  let final_arr = [];

  while (i < matrix.length - 1) {
    j = 0;

    while (j < matrix[i].length - 1) {
      let sub_arr = [];
      sub_arr.push(
        matrix[i][j],
        matrix[i][j + 1],
        matrix[i + 1][j],
        matrix[i + 1][j + 1]
      );

      let index = final_arr.findIndex(
        (el) => el.toString() == sub_arr.toString()
      );

      if (index < 0) {
        final_arr.push(sub_arr);
      }

      j++;
    }
    i++;
  }

  return final_arr.length;
}

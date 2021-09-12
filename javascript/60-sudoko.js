function sudoku(grid) {
  let dumyArr = [];

  for (let i = 0; i < grid.length; i++) {
    if (!rowCheck(grid[i], i)) {
      return false;
    }
  }

  for (let i = 0; i < grid.length; i++) {
    dumyArr = [];
    for (let j = 0; j < grid.length; j++) {
      dumyArr.push(grid[j][i]);
    }
    if (!colCheck(dumyArr)) {
      return false;
    }
  }

  for (let i = 0; i < grid.length; i += 3) {
    for (let j = 0; j < grid[0].length; j += 3) {
      if (!check3x3(grid, i, j)) {
        return false;
      }
    }
  }

  return true;
}

function rowCheck(grid, i) {
  for (let j = 1; j <= 9; j++) {
    if (grid.indexOf(j) < 0) {
      return false;
    }
  }
  return true;
}

function colCheck(arr) {
  for (let j = 1; j <= 9; j++) {
    if (arr.indexOf(j) < 0) {
      return false;
    }
  }
  return true;
}

function check3x3(grid, i, j) {
  let sum =
    grid[i][j] +
    grid[i][j + 1] +
    grid[i][j + 2] +
    grid[i + 1][j] +
    grid[i + 1][j + 1] +
    grid[i + 1][j + 2] +
    grid[i + 2][j] +
    grid[i + 2][j + 1] +
    grid[i + 2][j + 2];

  return sum === 45;
}

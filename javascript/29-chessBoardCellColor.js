function chessBoardCellColor(cell1, cell2) {
  let isSame = false;

  const isValid = function (cell) {
    if (
      (cell.charCodeAt(0) % 2 === 0 && cell[1] % 2 === 0) ||
      (cell.charCodeAt(0) % 2 !== 0 && cell[1] % 2 !== 0)
    ) {
      return true;
    } else {
      return false;
    }
  };

  if (isValid(cell1) === isValid(cell2)) {
    isSame = true;
    return isSame;
  } else {
    isSame = false;
    return isSame;
  }
}

function bishopAndPawn(bishop, pawn) {
  pawn = pawn.toLowerCase();
  bishop = bishop.toLowerCase();
  let a = "a";
  let h = "h";

  const on_top_right = function (pawn, bishop) {
    let new_bishop = bishop;
    for (let i = bishop.charCodeAt(0) + 1; i <= h.charCodeAt(0); i++) {
      new_bishop = String.fromCharCode(i) + (Number(new_bishop[1]) + 1);

      if (new_bishop == pawn) {
        return true;
      }
    }
    return false;
  };

  const on_top_left = function (pawn, bishop) {
    let new_bishop = bishop;
    for (let i = bishop.charCodeAt(0) - 1; i >= a.charCodeAt(0); i--) {
      new_bishop = String.fromCharCode(i) + (Number(new_bishop[1]) + 1);

      if (new_bishop == pawn) {
        return true;
      }
    }
    return false;
  };

  const on_bottom_right = function (pawn, bishop) {
    let new_bishop = bishop;
    for (let i = bishop.charCodeAt(0) + 1; i <= h.charCodeAt(0); i++) {
      new_bishop = String.fromCharCode(i) + (Number(new_bishop[1]) - 1);

      if (new_bishop == pawn) {
        return true;
      }
    }
    return false;
  };

  const on_bottom_left = function (pawn, bishop) {
    let new_bishop = bishop;
    for (let i = bishop.charCodeAt(0) - 1; i >= a.charCodeAt(0); i--) {
      new_bishop = String.fromCharCode(i) + (Number(new_bishop[1]) - 1);

      if (new_bishop == pawn) {
        return true;
      }
    }
    return false;
  };

  if (pawn.charCodeAt(0) > bishop.charCodeAt(0) && pawn[1] > bishop[1]) {
    return on_top_right(pawn, bishop);
  } else if (pawn.charCodeAt(0) < bishop.charCodeAt(0) && pawn[1] > bishop[1]) {
    return on_top_left(pawn, bishop);
  } else if (pawn.charCodeAt(0) > bishop.charCodeAt(0) && pawn[1] < bishop[1]) {
    return on_bottom_right(pawn, bishop);
  } else if (pawn.charCodeAt(0) < bishop.charCodeAt(0) && pawn[1] < bishop[1]) {
    return on_bottom_left(pawn, bishop);
  }

  return false;
}

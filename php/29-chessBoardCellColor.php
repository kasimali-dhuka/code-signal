function chessBoardCellColor($cell1, $cell2) {
    $isSame = false;

    $isValid = function ($cell) {
    if (
        (ord($cell[0]) % 2 === 0 && $cell[1] % 2 === 0) ||
        (ord($cell[0]) % 2 !== 0 && $cell[1] % 2 !== 0)
    ) {
        return true;
    } else {
        return false;
    }
    };

    if ($isValid($cell1) === $isValid($cell2)) {
        $isSame = true;
        return ($isSame);
    } else {
        $isSame = false;
        return $isSame;
    }
}

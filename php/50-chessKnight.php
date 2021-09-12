function chessKnight($cell) {
    global $counter;
    $counter = 0;
    $row = strtolower($cell[0]);
    $col = $cell[1];

    $one = 1;
    $two = 2;
    $neg_one = -1;
    $neg_two = -2;

    $top_right = function($row, $col, $x, $y) {
        global $counter;
        $_row = chr(ord($row)+$x);
        $_col = $col + $y;
        if((ord($_row) >= 97 && ord($_row) <= 104) && ($_col >= 1 && $_col <= 8)) {
            $counter++;
        }
        
        $_row = chr(ord($row)+$y);
        $_col = $col + $x;
        if((ord($_row) >= 97 && ord($_row) <= 104) && ($_col >= 1 && $_col <= 8)) {
            $counter++;
        }
    };

    $top_right($row, $col, $one, $two);
    $top_right($row, $col, $neg_one, $neg_two);
    $top_right($row, $col, $one, $neg_two);
    $top_right($row, $col, $neg_one, $two);
    
    return $counter;
}

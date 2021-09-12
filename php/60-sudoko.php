function sudoku($grid) {
    foreach($grid as $el) {

        for($i = 1; $i <= 9; $i++) {
            if(!in_array($i, $el)) {
                return false;
                break;
            }
        }
    }
    
    for($i = 0; $i < count($grid[0]); $i++) {
        $col_arr = array_column($grid, $i);
        for($j = 1; $j <= 9; $j++) {
          if(!in_array($j, $col_arr)) {
            return false;
            break;
          }
        }
    }
    
    for($j = 0; $j < count($grid); $j+=3) {
        for($i = 0; $i < count($grid[0]); $i+=3) {
            if(!check3x3($grid, $i, $j)) {
                echo "wrong";
                return false;
            }
        }
    }
    
    return true;
}

function check3x3($grid, $i , $j) {
    $sum = $grid[$i][$j] + $grid[$i+1][$j] + $grid[$i+2][$j] + $grid[$i][$j+1] + $grid[$i+1][$j+1] + $grid[$i+2][$j+1] + $grid[$i][$j+2] + $grid[$i+1][$j+2] + $grid[$i+2][$j+2];
    return $sum === 45;
}
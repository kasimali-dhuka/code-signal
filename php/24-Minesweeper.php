function minesweeper($matrix) {
    $mineCountMatrix = [];
    $counter = 0;
    $first = 0;
    $second = 0;

    while ($first < count($matrix)) {
    $second = 0;
    $indexArr = [];
        while ($second < count($matrix[0])) {
            $counter = 0;
            $center = [];
            for ($i = 0; $i < count($matrix); $i++) {
                if ($i >= $first + 2 || $i <= $first - 2) continue;
                for ($j = 0; $j < count($matrix[$i]); $j++) {
                    if ($j >= $second + 2 || $j <= $second - 2) continue;
                    if ($i === $first && $j === $second) continue;
                    if ($matrix[$i][$j] === true) {
                        $counter++;
                    }
                }
            }
            // indexArr.push($counter);
            array_push($indexArr, $counter);
            $second++;
        }
        // mineCountMatrix.push(indexArr);
        array_push($mineCountMatrix, $indexArr);
        $first++;
    }
    return ($mineCountMatrix);
}

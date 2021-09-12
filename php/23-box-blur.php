function boxBlur($image) {
    $bluredMatrix = [];

    $first = 0;
    $second = 0;

    while ($first <= count($image) - 3) {
    $second = 0;
    $indexArr = [];
    while ($second <= count($image[0]) - 3) {
        $center = [];
        for ($i = $first; $i < $first + 3; $i++) {
            for ($j = $second; $j < $second + 3; $j++) {
                array_push($center, $image[$i][$j]);
            }
        }
        array_push($indexArr, (int)(array_sum($center)/9));
        $second++;
    }
    array_push($bluredMatrix, $indexArr);
    $first++;
    }
    return ($bluredMatrix);
}

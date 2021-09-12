function arrayMaxConsecutiveSum($inputArray, $k) {
    $count = 0;
    $max = 0;

    for($i = 0; $i <= count($inputArray) - $k; $i++){
        $count = 0;
        for ($j = $i; $j < $i + $k; $j++) {
            $count += $inputArray[$j];
        }
        if ($count >= $max) {
            $max = $count;
        }
    }

    return ($max);
}

function absoluteValuesSumMinimization($a) {
    $min = PHP_INT_MAX;
    $index = 0;

    for ($i = 0; $i < count($a); $i++) {
        $sum = 0;
        for ($j = 0; $j < count($a); $j++) {
            $sum += abs($a[$i] - $a[$j]);
        }
        if ($sum < $min) {
            $min = $sum;
            $index = $i;
        }
    }

    return ($a[$index]);
}
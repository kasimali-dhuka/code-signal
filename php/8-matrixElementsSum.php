function matrixElementsSum($matrix) {
    $sum = 0;
    $haunted = [];
    for ($i =0; $i < count($matrix); $i++){
        for( $j = 0; $j < count($matrix[$i]); $j++){
            if ($matrix[$i][$j] === 0) {
                array_push($haunted, $j);
            }elseif (!(in_array($j, $haunted))) {
                $sum += $matrix[$i][$j];
            }
        }
    }
    return $sum;
}
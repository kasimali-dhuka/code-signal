function adjacentElementsProduct($inputArray) {
    
    $maxProduct = $inputArray[0] * $inputArray[1];

    for ($i = 0; $i < count($inputArray); $i++) {
        for ($j = $i + 1; $j < count($inputArray); $j++) {
            if ($inputArray[$i] * $inputArray[$j] >= $maxProduct && $i !== $j && $j === $i + 1) {
                 $maxProduct = $inputArray[$i] * $inputArray[$j];
            }
        }
    }
    
    return $maxProduct;
}

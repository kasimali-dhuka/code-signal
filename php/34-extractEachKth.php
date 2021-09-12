function extractEachKth($inputArray, $k) {
    $extractedArr = [];

    for ($i = 0; $i <= count($inputArray); $i++) {
        $index = $i * $k - 1;
        if ($index >= 0 && $index < count($inputArray)) {
            $inputArray[$index] = 100;
        }
    }

    foreach($inputArray as $el) {
        if ($el !== 100) {
            // extractedArr.push($el);
            array_push($extractedArr, $el);
        }
    };
    return ($extractedArr);
}

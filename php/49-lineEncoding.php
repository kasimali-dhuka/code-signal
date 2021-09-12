function lineEncoding($s) {
    $split_str = str_split($s);
    $counter = 0;
    $i = 0;
    $encodedArr = [];

    while ($i <= count($split_str)-1) {
        $counter = 0;

        for ($j = $i; $j < count($split_str); $j++) {
            if ($split_str[$i] === $split_str[$j]) {
                $counter++;
            } elseif ($split_str[$i] !== $split_str[$j]) {
                break;
            }
        }

        if (!(end($encodedArr) === $split_str[$i]) || $i == 0) {
            if ($counter >= 2) {
                array_push($encodedArr, $counter);
            }
            array_push($encodedArr, $split_str[$i]);
        }


        $i++;
    }
    return join($encodedArr);
}

function sumUpNumbers($inputString) {
    preg_match_all("/[0-9]+/i", $inputString, $matches);

    if(!$matches[0]) {
        return 0;
    }

    $sum = array_sum($matches[0]);
    return $sum;
}

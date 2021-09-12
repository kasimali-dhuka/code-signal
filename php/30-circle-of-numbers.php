function circleOfNumbers($n, $firstNumber) {
    $midNum = (int)($n / 2);

    if ($firstNumber >= $midNum) {
        return (abs($firstNumber - $midNum));
    } else if ($firstNumber < $midNum) {
        return (abs($firstNumber + $midNum));
    }
}

function isDigit($symbol) {
    return preg_match('/[0-9]/i', $symbol) ? true : false;
}

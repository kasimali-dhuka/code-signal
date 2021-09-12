function differentSymbolsNaive($s) {
    $arr = str_split($s);
    return count(array_unique($arr));
}

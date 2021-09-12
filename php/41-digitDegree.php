function digitDegree($n) {
    $newStr = $n;
    $count = 0;
    
    while(strlen($newStr) > 1){
        $newStr = str_split($newStr);
        $newStr = array_sum($newStr);
        $count++;
    }

    return $count;
}

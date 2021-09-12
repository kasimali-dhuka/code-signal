function commonCharacterCount($s1, $s2) {
    $arr = [];
    $count = 0;

    for ( $i = 0; $i < strlen($s1); $i++){
        for ( $j = 0; $j < strlen($s2); $j++) {
            if ( $s1[$i] === $s2[$j] ){
                if ( in_array($j, $arr) ){
                    continue;
                }
                $count++;
                array_push($arr, $j);
                break;
            }
        }
    }
    return $count;
}

function isLucky($n) {
    $half = strlen($n) / 2;
    $newArr = str_split($n);
    $first_add = 0;
    $second_add = 0;

    list($first, $second) = array_chunk($newArr, $half);
    
    foreach($first as $el){
        $first_add += $el;
    }
    
    foreach($second as $el){
        $second_add += $el;
    }

    if($first_add === $second_add){
        return true;
    } else {
        return false;
    }
}

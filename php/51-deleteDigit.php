function deleteDigit($n) {
    $digit_arr = str_split($n);
    $i = 0;
    $max = 0;
    
    while($i < count($digit_arr)) {
        $new_arr = $digit_arr;
        array_splice($new_arr, $i, 1);
        $sum = join($new_arr);
        if($sum >= $max) {
            $max = $sum;
        }
        $i++;
    }
    
    return ((int)$max);
}

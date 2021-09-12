function isBeautifulString($inputString) {
    global $isBeautiful;
    $isBeautiful = true;
    $count = PHP_INT_MAX;
    $split_string = str_split($inputString);
    sort($split_string);

    $split_string = array_count_values($split_string);
    
    $checkOrder = function($arr) {
        $charCode = 97;
        global $isBeautiful;
        
        foreach($arr as $arr_el){
            if (ord($arr_el) === $charCode) {
                $charCode++;
            } else {
                $isBeautiful = false;
                break;
            }
        }
    };

    $checkOrder(array_keys($split_string));
    
    foreach($split_string as $key=>$value) {
        if($count >= $value) {
            $count = $value;
        } else {
            $isBeautiful = false;
            break;
        }
    }
    
    return $isBeautiful;
}

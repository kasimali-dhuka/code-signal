function evenDigitsOnly($n) {
    $arr = str_split($n);
    
    foreach($arr as $el){
        if($el % 2 !== 0){
            return false;
        }
    }
    
    return true;
}

function firstDigit($inputString) {
    $split_string = str_split($inputString);
    
    foreach($split_string as $el){
        if(is_numeric($el)){
            return $el;
        }
    }
    
    return 0;
}

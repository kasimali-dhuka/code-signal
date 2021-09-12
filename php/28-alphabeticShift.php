function alphabeticShift($inputString) {
    $stringArr = str_split($inputString);
    $convertedArr = [];

    foreach($stringArr as $el){
        $el = (ord($el) + 1);
        
        if($el >= 123){
            $el = 97;
        }
        
        array_push($convertedArr, chr($el));
    }

    return (join("", $convertedArr));
}

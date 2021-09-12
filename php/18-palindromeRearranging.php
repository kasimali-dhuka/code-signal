function palindromeRearranging($inputString) {
    
    $stringArr = str_split($inputString);
    $counter = 0;

    $newArr = array_count_values($stringArr);

    foreach($newArr as $key => $value){
        if($value % 2 != 0){
            //echo "$key and $value <br>";
            $counter++;
        }
    }

    if($counter > 1){
        return false;
    } else {
        return true;
    }
    
}

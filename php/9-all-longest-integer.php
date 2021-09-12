function allLongestStrings($inputArray) {
    $maxLength = 0;
	$maxLengthArr = [];
    
    foreach($inputArray as $strings){
		print_r($strings . " <br>");
		if(strlen($strings) >= $maxLength){
			$maxLength = strlen($strings);
		}
    }
		
	foreach($inputArray as $str){
		if(strlen($str) === $maxLength){
			array_push($maxLengthArr, $str);
		}
	}
	
	return ($maxLengthArr);
}

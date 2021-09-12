function isIPv4Address($inputString) {
    
	$stringArr = explode('.', $inputString);
	$isIPv4 = true;
	
	if (count($stringArr) > 4 || count($stringArr) < 4) {
		$isIPv4 = false;
	}
	
	foreach($stringArr as $currArr) {
		if (
			(!$currArr && $currArr != "0") ||
			$currArr > 255 ||
			!is_numeric($currArr)
		) {
			$isIPv4 = false;
		}
		
			
		if($currArr[0] == 0 && strlen($currArr) > 1 ){
			$isIPv4 = false;
		}
	}
	
	return $isIPv4;
}

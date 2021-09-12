function addBorder($picture) {
	$blurredImg = [];

    $borderString = "";
    $borderString = str_pad($borderString, strlen($picture[0]), "*", STR_PAD_LEFT);
    
    array_push($picture, $borderString);
    array_unshift($picture, $borderString);
    
    foreach($picture as $pixel){
		$pixel = str_pad($pixel, strlen($pixel)+2, "*", STR_PAD_BOTH);
		array_push($blurredImg, $pixel);
    }


	return ($blurredImg);
}

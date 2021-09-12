function arrayReplace($inputArray, $elemToReplace, $substitutionElem) {
    $newArr = [];

    if(in_array($elemToReplace, $inputArray)){
        foreach($inputArray as $el){
            $el = str_replace($elemToReplace, $substitutionElem, $el);
            array_push($newArr, (int)$el);
        }
    } else {
        return $inputArray;
    }

    return ($newArr);
}

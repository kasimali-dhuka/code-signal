function longestDigitsPrefix($inputString) {
    if(!is_numeric($inputString[0])){
        return "";
    }elseif($inputString[0] == 0) {
        $integer = (int)$inputString;
        return "0" . strval($integer);
    }else {
        $integer = (int)$inputString;
        return strval($integer);
    }
}

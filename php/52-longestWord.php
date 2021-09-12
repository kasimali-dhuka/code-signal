function longestWord($text) {
    $max = "";
    $regex = "/[a-z]+/i";
    preg_match_all($regex, $text, $matches);

    echo "<pre>";
    
    foreach($matches[0] as $match) {
        if(strlen($match) >= strlen($max)){
            $max = $match;
        }
    }
    
    return ($max);
}

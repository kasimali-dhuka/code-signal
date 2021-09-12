function messageFromBinaryCode($code) {
    $split_code = str_split($code);
    $split_code = array_chunk($split_code, 8);
    $bin_array = [];

    foreach($split_code as $bin_code){
        $bin_code = chr(bindec(join($bin_code)));
        array_push($bin_array, $bin_code);
    }

    return (join($bin_array));
}

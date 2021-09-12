function differentSquares($matrix) {
    $i = 0;
    $j = 0;

    $final_arr = [];

    while($i < count($matrix)-1){
        $j = 0;
        
        while($j < count($matrix[$i])-1) {
            $sub_arr = [];
            array_push($sub_arr, $matrix[$i][$j], $matrix[$i][$j+1], $matrix[$i+1][$j], $matrix[$i+1][$j+1]);
            $j++;
            if(!in_array($sub_arr, $final_arr)){
                array_push($final_arr, $sub_arr);
            }
        }
        unset($sub_arr);
        $i++;
    }

    return count($final_arr);
}

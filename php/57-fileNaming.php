function fileNaming($names) {
    $counter = 0;
    $i = 1;
    while ($i < count($names)) {
        $temp_arr = array_slice($names, 0, $i);
        $counter = 0;
        for ($j = 0; $j < count($temp_arr); $j++) {
            if (in_array($names[$i], $temp_arr)) {
                ++$counter;
                if ($counter > 1) {
                    // $names[$i] =
                    // $names[$i].slice(0, $names[$i].lastIndexOf("(")) + `(${$counter})`;
                    // $names[$i] = array_slice($names[$i], 0);
                    $names[$i] = substr($names[$i], 0, strrpos($names[$i], '(')) . "(" . $counter . ")";
                } else {
                    // $names[$i] = $names[$i] + `(${$counter})`;
                    $names[$i] = $names[$i] . "(" . $counter . ")";
                }
            }
        }
        $i++;
    }
    return $names;
}

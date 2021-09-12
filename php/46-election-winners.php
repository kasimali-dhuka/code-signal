function electionsWinners($votes, $k) {
    $count = 0;
    $max = max($votes);


    foreach($votes as $vote) {
        $vote += $k;
        if ($vote > $max) {
            $count++;
        }
    }
    
    $dup_arr = array_count_values($votes);

    if ($dup_arr[$max] <= 1 && $count === 0) {
        $count++;
    }
    
    return ($count);
}

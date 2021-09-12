function makeArrayConsecutive2($statues) {
    $sum = 0;
    sort($statues);
    
    for ($i = $statues[0]; $i < $statues[count($statues) - 1]; $i++) {
        if (!in_array($i, $statues)) {
            $sum++;
        }
    }
    return $sum;
}

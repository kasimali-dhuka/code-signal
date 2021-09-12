function areSimilar($a, $b) {
    
    if (join($a) === join($b)) {
    return true;
    }

    $c = [];
    $d = [];

    for ($i = 0; $i < count($a); $i++) {
    if ($a[$i] !== $b[$i]) {
        array_push($c, $a[$i]);
        array_push($d, $b[$i]);
    }
    }

    $d = array_reverse($d);

    if (count($c) === 2 && join($c) === join($d)) {
    return true;
    }
    return false;

}

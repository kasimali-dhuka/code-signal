function centuryFromYear($year) {
    $result = str_split($year);
    if (count($result) > 3 && count($result) < 5) {
        list($one, $second, $third, $fourth) = $result;
        if ($third == 0 && $fourth == 0) {
            //  return (Number(one.concat(second)));
            return (int)($one . $second);
        } else {
            // return Number(one.concat(second)) + 1;
            return (int)($one . $second) + 1;
        }
    } elseif (count($result) > 2 && count($result) < 4) {
        list($one, $second, $third) = $result;
        if ($second == 0 && $third == 0) {
            // return (Number(one));
            return (int)($one);
        } else {
            // return (Number(one) + 1);
            return (int)($one) + 1;
        }
    } elseif (count($result) < 3) {
        return 1;
    }
}
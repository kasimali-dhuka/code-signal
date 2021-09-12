function growingPlant($upSpeed, $downSpeed, $desiredHeight) {
    $speed = 0;
    $i = 1;

    while ($speed <= $desiredHeight) {
        if ($upSpeed >= $desiredHeight) {
            break;
        }
        if ($speed <= $desiredHeight) {
            $speed += $upSpeed;
            if ($speed >= $desiredHeight) {
            break;
            }
            $speed -= $downSpeed;
            if ($speed >= $desiredHeight) {
            break;
            }
        }
        $i++;
    }

    return ($i);
}

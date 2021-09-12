function areEquallyStrong($yourLeft, $yourRight, $friendsLeft, $friendsRight) {
    $equallyStrong = false;
    $counter = 0;

    if ($yourLeft === $friendsLeft || $yourLeft === $friendsRight) {
    $counter++;
    }
    if ($yourRight === $friendsRight || $yourRight === $friendsLeft) {
    $counter++;
    }

    if ($counter >= 2) {
    $equallyStrong = true;
    }
    return ($equallyStrong);
}

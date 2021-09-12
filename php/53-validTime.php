function validTime($time) {
    $valid_time = explode(':', $time);
    
    if(count($valid_time) > 2) {
        return false;
    }
    if($valid_time[0] > 23 || $valid_time[1] > 59) {
        return false;
    }
    if(strlen($valid_time[0]) <= 1 || strlen($valid_time[1]) <= 1){
        return false;
    }
    if(is_numeric($valid_time[0]) && is_numeric($valid_time[1])) {
        return true;
    }
    return false;
}

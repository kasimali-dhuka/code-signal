function variableName($name) {
    if(preg_match('/^[_a-z][a-z0-9_]*$/i', $name)){
        return true;
    } else {
        return false;
    }
}

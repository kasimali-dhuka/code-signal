function isMAC48Address($inputString) {
    if(preg_match('/^[0-9A-F]{2}-[0-9A-F]{2}-[0-9A-F]{2}-[0-9A-F]{2}-[0-9A-F]{2}-[0-9A-F]{2}$/i', $inputString)) {
        return true;
    }
    return false;
}

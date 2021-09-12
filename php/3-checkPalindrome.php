function checkPalindrome($inputString) {
    $result = strrev("$inputString");
    if($inputString === $result) {
        return true;
    } else {
        return false;
    }
}
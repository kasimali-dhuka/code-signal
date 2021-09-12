function buildPalindrome($st) {
    $checkPalindrome = function($inputString) {
        $result = strrev("$inputString");
        if($inputString === $result) {
            return true;
        } else {
            return false;
        }
    };


    if($checkPalindrome($st)) {
        return $st;
    } else {
        $count = 1;
        while($count < strlen($st)){
            $new_str = $st;
            $sub_str = "";
            $sub_str = substr($new_str, 0, $count);
            $new_str .= strrev($sub_str);

            if($checkPalindrome($new_str)){
                return $new_str;
                break;
            }

            $count++;
        }
    }
}

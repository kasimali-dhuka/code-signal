function reverseInParentheses($inputString) {
    return preg_match('/(\(([^()]*)\))/',$inputString,$m) ? reverseInParentheses(preg_replace('/\(' . $m[2] . '\)/',strrev($m[2]),$inputString)) : $inputString;
}

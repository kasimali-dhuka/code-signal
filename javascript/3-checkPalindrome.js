function checkPalindrome(inputString) {
  const result = inputString.split("").reverse().join("");
  if (inputString === result) {
    return true;
  } else {
    return false;
  }
}

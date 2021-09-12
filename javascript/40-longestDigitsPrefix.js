function longestDigitsPrefix(inputString) {
  if (isNaN(inputString[0]) || inputString[0] == " ") {
    return "";
  } else if (inputString[0] == 0) {
    return 0 + parseInt(inputString).toString();
  } else {
    return parseInt(inputString).toString();
  }
}

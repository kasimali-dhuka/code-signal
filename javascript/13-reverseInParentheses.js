function reverseInParentheses(inputString) {
  if (inputString.includes(")")) {
    return reverseInParentheses(reverseSentence(inputString));
  }
  return inputString;
}

function reverseSentence(inputString) {
  let regExp = /\(([^()]*)\)/i;
  let subStr = regExp.exec(inputString)[1];
  subStr = subStr.split("").reverse().join("");
  return inputString.replace(regExp, subStr);
}

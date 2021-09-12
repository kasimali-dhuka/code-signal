function alphabeticShift(inputString) {
  let newStr = [];

  for (let i = 0; i < inputString.length; i++) {
    newStr.push(String.fromCharCode(inputString[i].charCodeAt() + 1));
  }

  newStr = newStr.join("").replaceAll("{", "a");

  return newStr;
}

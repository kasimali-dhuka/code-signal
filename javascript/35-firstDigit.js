function firstDigit(inputString) {
  let firstInt;

  inputString = inputString.split("");

  for (let i = 0; i < inputString.length; i++) {
    if (!isNaN(Number(inputString[i])) && inputString[i] !== " ") {
      firstInt = inputString[i];
      break;
    }
  }

  return firstInt;
}

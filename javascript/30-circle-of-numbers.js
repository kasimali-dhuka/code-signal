function circleOfNumbers(n, firstNumber) {
  let midNum = Math.trunc(n / 2);

  if (firstNumber >= midNum) {
    return Math.abs(firstNumber - midNum);
  } else if (firstNumber < midNum) {
    return Math.abs(firstNumber + midNum);
  }
}

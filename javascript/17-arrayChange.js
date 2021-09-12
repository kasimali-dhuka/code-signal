function arrayChange(inputArray) {
  let move = 0;

  let i = 1;

  while (i < inputArray.length) {
    if (inputArray[i] <= inputArray[i - 1]) {
      inputArray[i] += 1;
      move++;
    } else if (inputArray[i] > inputArray[i - 1]) {
      i++;
    }
  }
  return move;
}

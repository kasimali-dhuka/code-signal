function arrayMaximalAdjacentDifference(inputArray) {
  let maxDiff = 0;
  let currDiff;

  for (let i = 1; i < inputArray.length; i++) {
    currDiff = Math.abs(inputArray[i] - inputArray[i - 1]);
    if (currDiff >= maxDiff) {
      maxDiff = currDiff;
    }
  }

  return maxDiff;
}

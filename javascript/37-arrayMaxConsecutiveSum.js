function arrayMaxConsecutiveSum(inputArray, k) {
  let i = 0;
  let count = 0;
  let max = 0;

  while (i <= inputArray.length - k) {
    count = 0;
    for (let j = i; j < i + k; j++) {
      count += inputArray[j];
    }
    if (count >= max) {
      max = count;
    }
    i++;
  }

  return max;
}

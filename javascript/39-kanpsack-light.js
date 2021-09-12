function knapsackLight(value1, weight1, value2, weight2, maxW) {
  let maxVal = 0;

  if (weight1 + weight2 <= maxW) {
    maxVal = value1 + value2;
  } else {
    if (weight1 <= maxW && value1 > value2) {
      maxVal = value1;
    } else if (weight2 <= maxW && value2 > value1) {
      maxVal = value2;
    } else if (weight1 > maxW && weight2 <= maxW) {
      maxVal = value2;
    } else if (weight2 > maxW && weight1 <= maxW) {
      maxVal = value1;
    } else if (value1 === value2) {
      maxVal = value1;
    }
  }

  return maxVal;
}

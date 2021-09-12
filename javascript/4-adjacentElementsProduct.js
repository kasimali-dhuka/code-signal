function adjacentElementsProduct(inputArray) {
  let maxProduct = inputArray[0] * inputArray[1];

  for (let i = 0; i < inputArray.length; i++) {
    for (let j = i + 1; j < inputArray.length; j++) {
      if (
        inputArray[i] * inputArray[j] >= maxProduct &&
        i !== j &&
        j === i + 1
      ) {
        maxProduct = inputArray[i] * inputArray[j];
      }
    }
  }

  return maxProduct;
}

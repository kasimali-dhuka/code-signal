function extractEachKth(inputArray, k) {
  const extractedArr = [];

  for (let i = 0; i <= inputArray.length; i++) {
    let index = i * k - 1;
    if (index >= 0 && index < inputArray.length) {
      inputArray[index] = 100;
    }
  }

  inputArray.forEach(function (el) {
    if (el !== 100) {
      extractedArr.push(el);
    }
  });
  return extractedArr;
}

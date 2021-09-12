function allLongestStrings(inputArray) {
  let max = 0;
  let longStrings = [];
  for (const arr of inputArray) {
    if (arr.length >= max) {
      max = arr.length;
    }
  }

  console.log(max);

  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i].length === max) {
      longStrings.push(inputArray[i]);
    }
  }
  return longStrings;
}

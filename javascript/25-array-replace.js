function arrayReplace(inputArray, elemToReplace, substitutionElem) {
  const replacedArr = [];

  inputArray.forEach(function (arrElement, i, arr) {
    if (arrElement === elemToReplace) {
      arrElement = substitutionElem;
    }
    replacedArr.push(arrElement);
  });

  return replacedArr;
}

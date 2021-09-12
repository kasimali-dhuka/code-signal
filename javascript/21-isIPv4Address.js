function isIPv4Address(inputString) {
  const stringArr = inputString.split(".");
  console.log(stringArr);
  let isIPv4 = true;

  if (stringArr.length > 4 || stringArr.length < 4) {
    isIPv4 = false;
  }

  stringArr.forEach(function (currArr) {
    if (!currArr || currArr > 255 || isNaN(currArr)) {
      isIPv4 = false;
    }
    if (currArr.length > 1 && currArr[0] == 0) {
      isIPv4 = false;
    }
  });

  return isIPv4;
}

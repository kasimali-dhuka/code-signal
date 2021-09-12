function evenDigitsOnly(n) {
  const strArr = n.toString().split("");
  console.log(strArr);
  let isEven = true;

  strArr.forEach(function (arrElement) {
    if (arrElement % 2 !== 0) {
      isEven = false;
    }
  });

  return isEven;
}

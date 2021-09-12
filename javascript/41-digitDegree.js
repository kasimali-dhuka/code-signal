function digitDegree(n) {
  let splitStr = n.toString();
  let count = 0;
  let sum = 0;

  while (splitStr.length > 1) {
    splitStr = splitStr.toString().split("");
    splitStr.forEach(function (el) {
      sum += Number(el);
    });
    splitStr = sum.toString();
    sum = 0;
    count++;
  }

  return count;
}

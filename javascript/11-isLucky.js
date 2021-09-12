function isLucky(n) {
  const newNumber = n.toString().split("");
  const half = newNumber.length / 2;
  let firstHalf = 0;
  let secondHalf = 0;

  for (let i = 0; i < half; i++) {
    firstHalf += Number(newNumber[i]);
  }

  for (let i = half; i < newNumber.length; i++) {
    secondHalf += Number(newNumber[i]);
  }

  if (firstHalf === secondHalf) {
    return true;
  } else {
    return false;
  }
}

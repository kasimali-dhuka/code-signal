function sumUpNumbers(inputString) {
  let arr = inputString.match(/[0-9]+/gi);

  if (!arr) {
    return 0;
  }

  let add = arr.reduce((sum, curr) => (sum += Number(curr)), 0);
  return add;
}

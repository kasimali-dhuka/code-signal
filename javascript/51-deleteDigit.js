function deleteDigit(n) {
  let max = 0;
  let i = 0;
  const digit_arr = n.toString().split("");

  while (i < digit_arr.length) {
    var new_arr = [...digit_arr];
    new_arr.splice(i, 1);
    let sum = new_arr.join("");
    if (sum >= max) {
      max = sum;
    }
    i++;
  }
  return Number(max);
}

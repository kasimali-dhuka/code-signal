function centuryFromYear(year) {
  let result = year.toString().split("");
  if (result.length > 3 && result.length < 5) {
    const [one, second, third, fourth] = result;
    if (third == 0 && fourth == 0) {
      return Number(one.concat(second));
    } else {
      return Number(one.concat(second)) + 1;
    }
  } else if (result.length > 2 && result.length < 4) {
    const [one, second, third] = result;
    if (second == 0 && third == 0) {
      return Number(one);
    } else {
      return Number(one) + 1;
    }
  } else if (result.length < 3) {
    return 1;
  }
}

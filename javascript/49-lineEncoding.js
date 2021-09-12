function lineEncoding(s) {
  const split_str = s.split("");
  let counter = 0;
  let i = 0;
  let encodedArr = [];

  while (i < split_str.length) {
    counter = 0;

    for (let j = i; j < split_str.length; j++) {
      if (split_str[i] === split_str[j]) {
        counter++;
      } else if (split_str[i] !== split_str[j]) {
        break;
      }
    }

    if (
      !(encodedArr.lastIndexOf(split_str[i]) === encodedArr.length - 1) ||
      i == 0
    ) {
      if (counter >= 2) {
        encodedArr.push(counter);
      }
      encodedArr.push(split_str[i]);
    }

    i++;
  }

  return encodedArr.join("");
}

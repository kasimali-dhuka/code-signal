function isBeautifulString(inputString) {
  const split_string = inputString.split("").sort();
  let count = 0;
  let max = Number.MAX_SAFE_INTEGER;
  const charCode_arr = [];
  var isBeautiful = true;

  split_string.forEach(function (el) {
    el = el.charCodeAt();
    if (!(charCode_arr.indexOf(el) > -1)) {
      charCode_arr.push(el);
    }
  });

  function checkOrder(arr) {
    let charCode = 97;
    for (let i = 0; i < arr.length; i++) {
      if (charCode_arr[i] === charCode) {
        charCode++;
      } else {
        isBeautiful = false;
      }
    }
  }

  checkOrder(charCode_arr);

  for (let i = 0; i < split_string.length; i++) {
    count = 0;
    for (let j = 0; j < split_string.length; j++) {
      if (split_string[j] === split_string[i]) {
        count++;
      }
    }
    if (count <= max) {
      max = count;
    }
    if (count > max) {
      isBeautiful = false;
    }
  }

  return isBeautiful;
}

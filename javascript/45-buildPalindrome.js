function buildPalindrome(st) {
  const checkPalindrome = function (inputString) {
    const result = inputString.split("").reverse().join("");
    if (inputString === result) {
      return true;
    } else {
      return false;
    }
  };

  if (checkPalindrome(st)) {
    return st;
  } else {
    let count = 1;
    while (count < st.length) {
      let new_str = st;
      let sub_str = "";
      sub_str = new_str.substr(0, count);
      new_str += sub_str.split("").reverse().join("");

      if (checkPalindrome(new_str)) {
        return new_str;
        break;
      }

      count++;
    }
  }
}

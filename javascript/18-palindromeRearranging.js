function palindromeRearranging(inputString) {
  const uniqueArr = [...new Set([...inputString.split("")])];
  console.log(uniqueArr);
  let uniqueChar = 0;
  let isPalindrome = true;

  for (let i = 0; i < uniqueArr.length; i++) {
    let count = 0;
    for (let j = 0; j < inputString.length; j++) {
      if (uniqueArr[i] === inputString[j]) {
        count++;
      }
    }
    if (count === 1) {
      uniqueChar++;
    } else if (count % 2 !== 0) {
      uniqueChar++;
    }
  }

  if (uniqueChar >= 2) {
    isPalindrome = false;
  }

  return isPalindrome;
}

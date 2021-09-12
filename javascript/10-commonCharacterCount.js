function commonCharacterCount(s1, s2) {
  const arr = [];
  let count = 0;

  for (let i = 0; i < s1.length; i++) {
    for (let j = 0; j < s2.length; j++) {
      if (s1[i] === s2[j]) {
        if (arr.indexOf(j) >= 0) {
          continue;
        }
        count++;
        arr.push(j);
        break;
      }
    }
  }
  return count;
}

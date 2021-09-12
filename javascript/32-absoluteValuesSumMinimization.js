function absoluteValuesSumMinimization(a) {
  let min = Number.MAX_SAFE_INTEGER;
  let index;

  for (let i = 0; i < a.length; i++) {
    let sum = 0;
    for (let j = 0; j < a.length; j++) {
      sum += Math.abs(a[i] - a[j]);
      // console.log('sum => ', sum);
    }
    if (sum < min) {
      min = sum;
      index = i;
    }
    //   console.log(min, index);
  }

  return a[index];
}

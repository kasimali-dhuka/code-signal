function makeArrayConsecutive2(statues) {
  let sum = 0;

  const sortedStatues = statues.sort(function (a, b) {
    return a - b;
  });

  for (
    let i = sortedStatues[0];
    i < sortedStatues[sortedStatues.length - 1];
    i++
  ) {
    if (sortedStatues.indexOf(i) < 0) {
      sum++;
    }
  }
  return sum;
}

function electionsWinners(votes, k) {
  let count = 0;
  let max = Math.max(...votes);

  votes.forEach(function (el) {
    el += k;
    if (el > max) {
      count++;
    }
  });

  if (votes.indexOf(max) === votes.lastIndexOf(max) && count === 0) {
    count++;
  }

  return count;
}

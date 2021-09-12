function alternatingSums(a) {
  let team1 = [0];
  let team2 = [0];

  a.forEach(function (element, i) {
    if (i % 2 === 0) {
      team1.push(element);
    } else {
      team2.push(element);
    }
  });

  function addArr(arr) {
    let sum = 0;
    arr.forEach(function (e) {
      sum += e;
    });

    return sum;
  }

  const finalArr = [addArr(team1), addArr(team2)];
  return finalArr;
}

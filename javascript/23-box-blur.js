function boxBlur(image) {
  const bluredMatrix = [];

  let first = 0;
  let second = 0;

  while (first <= image.length - 3) {
    second = 0;
    const indexArr = [];
    while (second <= image[0].length - 3) {
      let center = [];
      for (let i = first; i < first + 3; i++) {
        for (let j = second; j < second + 3; j++) {
          // console.log(`[${image[i][j]}]`);
          center.push(image[i][j]);
        }
      }
      indexArr.push(
        Math.trunc(center.reduce((sum, curr) => sum + curr, 0) / 9)
      );

      second++;
    }
    bluredMatrix.push(indexArr);
    first++;
  }
  return bluredMatrix;
}

function spiralNumbers(n) {
  let spiral_arr = new Array();
  for (let i = 0; i < n; i++) {
    spiral_arr.push(new Array(n));
  }

  let count = 1;
  let r0 = 0;
  let c0 = 0;
  let rl = n;
  let cl = n;

  while (r0 < rl && c0 < cl) {
    for (let a = r0; a < cl; a++) {
      spiral_arr[r0][a] = count;
      count++;
    }
    r0++;
    for (let b = r0; b < rl; b++) {
      spiral_arr[b][cl - 1] = count;
      count++;
    }
    cl--;
    for (let c = cl - 1; c >= c0; c--) {
      spiral_arr[rl - 1][c] = count;
      count++;
    }
    rl--;
    for (let d = rl - 1; d >= r0; d--) {
      spiral_arr[d][c0] = count;
      count++;
    }
    c0++;
  }

  return spiral_arr;
}

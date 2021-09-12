function sortByHeight(a) {
  let treePosition = [];
  function getPositions() {
    for (let i = 0; i < a.length; i++) {
      if (a[i] === -1) {
        treePosition.push(i);
      }
    }
  }
  getPositions();

  const sorted = a.sort((a, b) => a - b);
  sorted.splice(0, treePosition.length);

  function addPositions() {
    for (let i = 0; i < treePosition.length; i++) {
      a.splice(treePosition[i], 0, -1);
    }
  }
  addPositions();

  return sorted;
}

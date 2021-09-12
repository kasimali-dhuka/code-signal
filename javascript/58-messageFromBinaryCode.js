function messageFromBinaryCode(code) {
  const splitArr = [];
  let codelen = 0;
  while (codelen < code.length) {
    splitArr.push(
      String.fromCharCode(parseInt(code.slice(codelen, codelen + 8), 2))
    );
    codelen += 8;
  }

  return splitArr.join("");
}

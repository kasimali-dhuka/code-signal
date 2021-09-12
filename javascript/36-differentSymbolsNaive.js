function differentSymbolsNaive(s) {
  s = s.split("");
  const unique = [...new Set(s)].length;
  return unique;
}

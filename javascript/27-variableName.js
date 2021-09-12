function variableName(name) {
  const regex = /^[a-zA-Z_$][0-9a-zA-Z_$]*$/;
  if (!isNaN(name[0])) return false;
  return regex.test(name);
}

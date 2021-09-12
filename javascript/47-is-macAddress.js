function isMAC48Address(inputString) {
  const regex =
    /^[0-9A-F]{2}-[0-9A-F]{2}-[0-9A-F]{2}-[0-9A-F]{2}-[0-9A-F]{2}-[0-9A-F]{2}$/i;
  return regex.test(inputString);
}

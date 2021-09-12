function findEmailDomain(address) {
  const split_add = address.split("@");
  const domain = split_add[split_add.length - 1];
  return domain;
}

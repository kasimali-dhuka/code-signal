function digitsProduct(product) {
  if (product == 0) {
    return 10;
  } else if (product < 10) {
    return product;
  }

  var smallPos = 0;

  while (product > 9) {
    var orginal = product;
    for (let i = 9; i > 1; i--) {
      if (product % i == 0) {
        var next_digit = product / i;
        next_digit = digitsProduct(next_digit);
        if (next_digit == -1) {
          return -1;
        }
        smallPos = smallPos * 10 + next_digit;
        product = i;
        break;
      }
    }

    if (product == orginal) {
      return -1;
    }
  }

  return smallPos * 10 + product;
}

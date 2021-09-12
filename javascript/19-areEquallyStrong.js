function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
  let equallyStrong = false;
  let counter = 0;

  if (yourLeft === friendsLeft || yourLeft === friendsRight) {
    counter++;
  }
  if (yourRight === friendsRight || yourRight === friendsLeft) {
    counter++;
  }

  console.log(counter);
  if (counter >= 2) {
    equallyStrong = true;
  }
  return equallyStrong;
}

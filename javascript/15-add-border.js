function addBorder(picture) {
  const newArray = picture.map((element) => element.split(""));
  let border = "";

  newArray.forEach(function (element) {
    console.log(element.push("*"));
  });
  newArray.forEach(function (element) {
    console.log(element.unshift("*"));
  });

  const matrix = newArray.map((element) => element.join(""));

  for (let i = 0; i < matrix[0].length; i++) {
    border += "*";
  }

  const finalMatrix = [border, ...matrix, border];
  return finalMatrix;
}

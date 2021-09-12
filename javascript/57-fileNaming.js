function fileNaming(names) {
  let counter = 0;
  let i = 1;
  while (i < names.length) {
    let temp_arr = names.slice(0, i);
    let counter = 0;
    for (let j = 0; j < temp_arr.length; j++) {
      if (temp_arr.includes(names[i])) {
        ++counter;
        if (counter > 1) {
          names[i] =
            names[i].slice(0, names[i].lastIndexOf("(")) + `(${counter})`;
        } else {
          names[i] = names[i] + `(${counter})`;
        }
      }
    }
    i++;
  }
  return names;
}

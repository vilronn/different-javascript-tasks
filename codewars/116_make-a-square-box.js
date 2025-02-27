function box(n) {
  let picture = [];

  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
      if (i === 0 || i === n - 1) {
        row += "-";
      } else if (j === 0 || j === n - 1) {
        row += "|";
      } else {
        row += " ";
      }
    }
    picture.push(row);
  }

  return picture;
}

console.log(box(5)); // Output: [
//     '-----',
//     '-   -',
//     '-   -',
//     '-   -',
//     '-----'
//   ]

function generateShape(integer) {
  let shape = "";
  for (let i = 0; i < integer; i++) {
    for (let j = 0; j < integer; j++) {
      shape += "#";
    }
    shape += "\n";
  }
  return shape;
}

console.log(generateShape(4)); //Output "####/n####/n####/n####/n"

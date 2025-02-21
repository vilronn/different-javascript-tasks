// return masked string
function maskify(cc) {
  let masked = "";
  for (let i = 0; i < cc.length - 4; i++) {
    masked += "#";
  }
  return masked + cc.substr(cc.length - 4);
}

console.log(maskify("1234567890")); // '######7890'

function hexStringToRGB(hexString) {
  let hex = hexString.replace("#", "");
  let r = parseInt(hex.substr(0, 2), 16);
  let g = parseInt(hex.substr(2, 2), 16);
  let b = parseInt(hex.substr(4, 2), 16);
  return { r, g, b };
}

console.log(hexStringToRGB("#FF0000")); // Output: {r: 255, g: 0, b: 0}
console.log(hexStringToRGB("#00FF00")); // Output: {r: 0, g: 255, b: 0}
console.log(hexStringToRGB("#FF9933")); // Output: {r: 255, g: 153, b: 51}

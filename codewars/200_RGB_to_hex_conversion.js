function rgb(r, g, b) {
  const toHex = (num) => num.toString(16).padStart(2, "0").toUpperCase();
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

console.log(rgb(255, 255, 255)); // Output: "#FFFFFF"
console.log(rgb(255, 165, 0)); // Output: "#FFA500"

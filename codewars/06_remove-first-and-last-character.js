function removeChar(str) {
  let substr = "";
  for (let i = 1; i < str.length - 1; i++) {
    substr += str[i];
  }
  return substr;
}

console.log(removeChar("Hello World")); // Output: "ello Worl"
console.log(removeChar("H")); // Output: ""
console.log(removeChar("Hel")); // Output: "e"

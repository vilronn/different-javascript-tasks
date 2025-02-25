var capitals = function (word) {
  let indexes = [];
  let CofeOfLetterA = "A".charCodeAt(0);
  let CofeOfLetterZ = "Z".charCodeAt(0);
  for (let i = 0; i < word.length; i++) {
    if (
      word.charCodeAt(i) >= CofeOfLetterA &&
      word.charCodeAt(i) <= CofeOfLetterZ
    ) {
      indexes.push(i);
    }
  }
  return indexes;
};

console.log(capitals("London")); // Output: [0]
console.log(capitals("CodEWaRs")); // Output: [0,3,4,6]

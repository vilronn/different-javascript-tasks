function arrayDiff(a, b) {
  return a.filter((value) => b.indexOf(value) === -1);
}

console.log(arrayDiff([1, 2, 2, 2, 3], [2])); //Output: [1, 3]
console.log(arrayDiff([1, 2, 3], [2, 3, 4])); //Output: [1]

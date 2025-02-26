const arrCheck = (value) => value.every(Array.isArray);

console.log(arrCheck([[1], [2]])); // true
console.log(arrCheck(["1", "2"])); // false
console.log(arrCheck([{ 1: 1 }, { 2: 2 }])); // false
console.log(arrCheck([[1, 2], [], ["a", "b"]])); // true
console.log(arrCheck([])); // true

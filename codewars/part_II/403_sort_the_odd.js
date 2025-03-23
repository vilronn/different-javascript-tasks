function sortOddNumbers(array) {
  let oddNumbers = array.filter((n) => n % 2 !== 0).sort((a, b) => a - b);

  return array.map((n) => (n % 2 !== 0 ? oddNumbers.shift() : n));
}

console.log(sortOddNumbers([7, 1])); //Output: [1, 7]
console.log(sortOddNumbers([5, 8, 6, 3, 4])); //Output: [3, 8, 6, 5, 4]
console.log(sortOddNumbers([9, 8, 7, 6, 5, 4, 3, 2, 1, 0])); //Output: [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

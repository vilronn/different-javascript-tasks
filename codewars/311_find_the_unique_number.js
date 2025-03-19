function findUnique(numbers) {
  let unique = 0;
  for (let number of numbers) {
    unique ^= number;
  }
  return unique;
}

console.log(findUnique([1, 8, 4, 4, 6, 1, 8, 7, 7])); // Output: 6

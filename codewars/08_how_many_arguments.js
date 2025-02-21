function argNumber(...args) {
  let total = 0;
  for (const arg of args) {
    total += 1;
  }
  return total;
}

let number;
console.log(argNumber(1, 2, 3, number, 4, 5)); // Output: 6

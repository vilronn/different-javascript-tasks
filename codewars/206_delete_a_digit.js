function deleteDigit(n) {
  let str = n.toString();
  if (n == 0) {
    return 0;
  }
  for (i = 0; i < str.length; i++) {
    if (str[i] <= str[i + 1]) {
      return Number(str.slice(0, i) + str.slice(i + 1));
    }
  }
  return Number(str.slice(0, -1));
}

console.log(deleteDigit(152)); // Output: 52
console.log(deleteDigit(100)); // Output: 10
console.log(deleteDigit(321)); // Output: 32
console.log(deleteDigit(999)); // Output: 99
console.log(deleteDigit(123456789)); // Output: 23456789
console.log(deleteDigit(0)); // Output: 0
console.log(deleteDigit(987654321)); // Output: 98765432

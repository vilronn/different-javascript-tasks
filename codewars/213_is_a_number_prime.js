function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

console.log(isPrime(73)); //Output: true
console.log(isPrime(43)); //Output: true
console.log(isPrime(42)); //Output: false
console.log(isPrime(5099)); //Output: true

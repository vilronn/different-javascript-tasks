function isPerfect(n) {
  let sum = 0;
  for (let i = 1; i < n; i++) {
    if (n % i === 0) {
      sum += i;
    }
  }
  if (sum === n) {
    return true;
  } else {
    return false;
  }
}
console.log(isPerfect(28)); //Output: true
console.log(isPerfect(30)); //Output: false

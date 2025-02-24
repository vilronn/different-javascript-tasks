function digPow(n, p) {
  let digits = ("" + n).split("");
  let summaDig = 0;
  for (let i = 0; i < digits.length; i++) {
    digits[i] = Number(digits[i]);
    summaDig += Math.pow(digits[i], p);
    p++;
  }
  if (summaDig % n == 0) {
    return summaDig / n;
  } else {
    return -1;
  }
}

console.log(digPow(89, 1)); //Output: 1
console.log(digPow(695, 2)); //Output: 2
console.log(digPow(46288, 3)); //Output: 51
console.log(digPow(73, 1)); //Output: -1

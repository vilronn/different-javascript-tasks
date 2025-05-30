function isHappy(n) {
  const seen = new Set();

  while (n !== 1) {
    if (seen.has(n)) return false;
    seen.add(n);
    n = [...String(n)].reduce((sum, digit) => sum + digit ** 2, 0);
  }

  return true;
}

function happyNumbersUpTo(x) {
  const result = [];
  for (let i = 1; i <= x; i++) {
    if (isHappy(i)) {
      result.push(i);
    }
  }
  return result;
}

console.log(happyNumbersUpTo(20)); //[1, 7, 10, 13, 19]

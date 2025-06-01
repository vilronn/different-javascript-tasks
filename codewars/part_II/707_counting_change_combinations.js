function countChange(amount, coins) {
  const ways = Array(amount + 1).fill(0);
  ways[0] = 1;

  for (const coin of coins) {
    for (let i = coin; i <= amount; i++) {
      ways[i] += ways[i - coin];
    }
  }

  return ways[amount];
}

console.log(countChange(4, [1, 2])); // 3: [1+1+1+1, 1+1+2, 2+2]
console.log(countChange(10, [5, 2, 3])); // 4: [5+5, 2+2+2+2+2, 2+2+3+3, 5+2+3]
console.log(countChange(11, [5, 7])); // 0

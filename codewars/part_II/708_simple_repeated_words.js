function solve(pattern, text) {
  const memo = {};

  function count(i, j) {
    const key = `${i},${j}`;
    if (key in memo) return memo[key];

    if (i === pattern.length) return 1;
    if (j === text.length) return 0;

    let total = 0;

    if (pattern[i] === text[j]) {
      total += count(i + 1, j + 1);
    }
    total += count(i, j + 1);

    memo[key] = total;
    return total;
  }

  return count(0, 0);
}

solve("zaz", "zazapulz"); //4
solve("rat", "ratatoulie"); //3
solve("code", "codeodecode"); //11

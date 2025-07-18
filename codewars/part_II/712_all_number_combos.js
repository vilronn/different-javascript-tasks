function combos(num) {
  if (typeof num !== 'number' || num <= 0 || num >= 30) {
    throw new Error('num must be a positive integer less than 30');
  }
  const result = [];

  function backtrack(remaining, combo, start) {
    if (remaining === 0) {
      result.push([...combo]);
      return;
    }

    for (let i = start; i <= remaining; i++) {
      combo.push(i);
      backtrack(remaining - i, combo, i);
      combo.pop();
    }
  }

  backtrack(num, [], 1);
  return result;
}

console.log(combos(3)); // [ [ 1, 1, 1 ], [ 1, 2 ], [ 3 ] ]
console.log(combos(1)); // [[1]]
console.log(combos(2)); // [[1, 1], [2]]
console.log(combos(3)); // [[1, 1, 1], [1, 2], [3]]
console.log(combos(4)); // [[1,1,1,1], [1,1,2], [1,3], [2,2], [4]]
console.log(combos(0)); // Error: num must be a positive integer less than 30
console.log(combos(29).length); // max num

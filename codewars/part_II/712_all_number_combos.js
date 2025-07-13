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

console.log(combos(3)); //[ [ 1, 1, 1 ], [ 1, 2 ], [ 3 ] ]

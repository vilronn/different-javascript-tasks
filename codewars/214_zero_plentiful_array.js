function zeroPlentiful(arr) {
  let result = 0;
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      count++;
    } else {
      if (count > 0 && count < 4) {
        return 0;
      }
      if (count >= 4) {
        result++;
        count = 0;
      }
    }
  }
  if (count >= 4) {
    result++;
  } else if (count > 0 && count < 4) {
    return 0;
  }

  return result;
}

console.log(zeroPlentiful([1, 0, 0, 0, 0, 0, 5, 0, 6])); // Output: 0
console.log(
  zeroPlentiful([
    0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ])
); // Output: 2
console.log(zeroPlentiful([0, 0, 0, 1, 0, 0])); // Output: 0
console.log(zeroPlentiful([0, 0, 0, 0])); // 1
console.log(zeroPlentiful([0, 0, 0])); // 0
console.log(zeroPlentiful([1, 2, 3])); // 0

function positiveSum(arr) {
  let summa = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      summa += arr[i];
    }
  }
  return summa;
}

console.log(positiveSum([1, -1, 3, 2])); //Output: 6
console.log(positiveSum([1, 3, 2])); //Output: 6

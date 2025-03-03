function findEvenIndex(arr) {
  let totalSum = arr.reduce((sum, num) => sum + num, 0);
  let leftSum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (leftSum === totalSum - leftSum - arr[i]) {
      return i;
    }
    leftSum += arr[i];
  }

  return -1;
}

console.log(findEvenIndex([20, 10, -80, 10, 10, 15, 35])); // 0
console.log(findEvenIndex([1, 100, 50, -51, 1, 1])); // 1
console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1])); // 3
console.log(findEvenIndex([1, 2, 3, 4, 5])); // -1

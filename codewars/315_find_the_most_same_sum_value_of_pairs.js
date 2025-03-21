function findPair(arr1, arr2) {
  let sums = {};

  for (let i = 0; i < arr1.length; i++) {
    let sum = arr1[i] + arr2[i];
    let pair = [arr1[i], arr2[i]];

    if (!sums[sum]) {
      sums[sum] = [];
    }
    sums[sum].push(pair);
  }

  let maxCount = 0;
  let maxSum = null;

  for (let sum in sums) {
    if (
      sums[sum].length > maxCount ||
      (sums[sum].length === maxCount && Number(sum) > maxSum)
    ) {
      maxCount = sums[sum].length;
      maxSum = Number(sum);
    }
  }

  return maxCount > 1 ? sums[maxSum] : [];
}

console.log(findPair([1, 2, 3, 4, 5], [-1, 2, -3, 4, -5])); // Output: [[1,-1],[3,-3],[5,-5]]

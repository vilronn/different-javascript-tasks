function zipWith(fn, arr1, arr2) {
  let minLength = Math.min(arr1.length, arr2.length);
  return Array.from({ length: minLength }, (_, i) => fn(arr1[i], arr2[i]));
}

console.log(zipWith(Math.pow, [10, 10, 10, 10], [0, 1, 2, 3])); //Output: [1, 10, 100, 1000]
console.log(zipWith(Math.max, [1, 4, 7, 1, 4, 7], [4, 7, 1, 4, 7, 1])); //Output: [4, 7, 7, 4, 7, 7]
console.log(zipWith((a, b) => a + b, [0, 1, 2, 3], [0, 1, 2, 3])); //Output: [0, 2, 4, 6]

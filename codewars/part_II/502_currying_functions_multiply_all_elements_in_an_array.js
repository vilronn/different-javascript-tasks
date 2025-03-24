function multiplyAll(arr) {
  return function (n) {
    return arr.map((el) => el * n);
  };
}

console.log(multiplyAll([1, 2, 3])(2)); //Output: [2, 4, 6]
console.log(multiplyAll([4, 5, 6])(3)); //Output: [12, 15, 18]
console.log(multiplyAll([])(10)); //Output: []

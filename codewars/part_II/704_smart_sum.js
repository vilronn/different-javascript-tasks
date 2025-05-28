function smartSum(...args) {
  let sum = 0;

  for (const arg of args) {
    if (typeof arg === 'number') {
      sum += arg;
    } else if (Array.isArray(arg)) {
      sum += smartSum(...arg);
    }
  }
  return sum;
}

console.log(smartSum(1, 2, 3)); //6
console.log(smartSum(1, 2, [3, 4])); //10
console.log(smartSum(1, 2, [[3, 4], 5], 6)); //21
console.log(smartSum()); //0


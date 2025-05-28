function smartSum(...args) {
  let sum = 0;

  for (const arg of args) {
    if (typeof arg === 'number') {
      sum += arg;
    } else if (Array.isArray(arg)) {
      sum += smartSum(...arg);
    } else if (arg && typeof arg === 'object') {
      sum += smartSum(...Object.values(arg));
    }
  }

  return sum;
}


console.log(smartSum(1, 2, 3)); //6
console.log(smartSum(1, 2, [3, 4])); //10
console.log(smartSum(1, 2, [[3, 4], 5], 6)); //21
console.log(smartSum()); //0
console.log(smartSum(1, 2, [3, 4], { a: 5, b: 6 })); //21
console.log(smartSum({ a: [1, 2], b: { c: 3 } }, 4)); //10
console.log(smartSum({})); //0
console.log(smartSum(null, 1, undefined, '2', true, [3])); //4



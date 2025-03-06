function indexEqualsValue(a) {
  if (!a.every((val, i, arr) => i === 0 || arr[i - 1] <= val)) {
    return -1;
  }
  
  for (let i = 0; i < a.length; i++) {
    if (a[i] === i) {
      return i;
    }
    if (a[i] > a.length - 1) {
      break;
    }
  }
  return -1;
}

console.log(indexEqualsValue([1, 2, 3, 3, 5])); // Output: 3
console.log(indexEqualsValue([1, 2, 2, 3, 4])); // Output: 2

console.log(indexEqualsValue([-1, 0, 2, 3, 5])); // 2
console.log(indexEqualsValue([1, 2, 3, 3, 0])); // -1 
console.log(indexEqualsValue([0, 2, 3, 4, 5])); // 0
console.log(indexEqualsValue([-10, -5, 0, 3, 7])); // 3
console.log(indexEqualsValue([1, 2, 2, 5, 4])); // -1 

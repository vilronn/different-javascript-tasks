function smallEnough(a, limit) {
  return a.every((num) => num <= limit);
}

console.log(smallEnough([3, 6, 8, 10], 10)); // Output: true
console.log(smallEnough([3, 6, 8, 10], 7)); // Output: false

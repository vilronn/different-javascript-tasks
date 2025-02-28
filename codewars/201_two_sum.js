function twoSum(numbers, target) {
  const map = new Map();

  for (let i = 0; i < numbers.length; i++) {
    let difference = target - numbers[i];

    if (map.has(difference)) {
      return [map.get(difference), i];
    }

    map.set(numbers[i], i);
  }
}

console.log(twoSum([1, 2, 3], 4)); // Output: [0, 2]
console.log(twoSum([3, 2, 4], 6)); // Output: [1, 2]

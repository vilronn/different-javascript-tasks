function dbSort(array) {
  let numbers = array
    .filter((x) => typeof x === "number")
    .sort((a, b) => a - b);
  let strings = array.filter((x) => typeof x === "string").sort();

  return [...numbers, ...strings];
}

console.log(dbSort([6, "banana", 2, "apple", 8, "orange", 3, "grape"])); // Output: [2, 3, 6, 8, "apple", "banana", "grape", "orange"]
console.log(dbSort(["z", "x", "y", 10, 3, 5, "a", "c"])); // Output: [3, 5, 10, "a", "c", "x", "y", "z"]
console.log(dbSort([5, "5", 1, "1", 3, "3"])); // Output: [1, 3, 5, "1", "3", "5"]

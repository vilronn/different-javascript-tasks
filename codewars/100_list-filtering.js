function filter_list(l) {
  // Return a new array with the strings filtered out
  let numbers = [];
  for (let i = 0; i < l.length; i++) {
    if (typeof l[i] == "number" && l[i] >= 0) {
      numbers.push(l[i]);
    }
  }
  return numbers;
}

console.log(filter_list([1, "g", "h", 15, 0, -1])); //Output: [1, 15, 0]

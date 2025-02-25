function filterHomogenous(arrays) {
  return arrays.filter(
    (arr) => arr.length > 0 && arr.every((val) => typeof val === typeof arr[0])
  );
}

console.log(filterHomogenous([[1, 5, 4], ["a", 3, 5], ["b"], [], ["1", 2, 3]])); //Output: [[1, 5, 4], ['b']]

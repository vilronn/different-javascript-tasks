function dropWhile(arr, predicate) {
  let i = 0;
  while (i < arr.length && predicate(arr[i])) {
    i++;
  }
  return i === arr.length ? [] : arr.slice(i);
}

function isEven(num) {
  return num % 2 === 0;
}

let seq = [2, 4, 6, 8, 1, 2, 5, 4, 3, 2];

console.log(dropWhile(seq, isEven)); //Output: [1, 2, 5, 4, 3, 2]
console.log(dropWhile([4, 6, 8, 10], isEven)); //Output: []
console.log(dropWhile([1, 3, 5, 7], isEven)); //Output: [1, 3, 5, 7]

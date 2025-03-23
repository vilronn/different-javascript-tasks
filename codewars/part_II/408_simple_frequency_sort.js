function solve(arr) {
  let freqMap = new Map();
  for (let num of arr) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }
  return arr.sort((a, b) => freqMap.get(b) - freqMap.get(a) || a - b);
}

console.log(solve([2, 3, 5, 3, 7, 9, 5, 3, 7])); //Output: [3, 3, 3, 5, 5, 7, 7, 2, 9]

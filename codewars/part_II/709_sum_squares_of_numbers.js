//Sum squares of numbers in list
//that may contain more lists

function SumSquares(array) {
  let sum = 0;

  for (let item of array) {
    if (Array.isArray(item)) {
      sum += SumSquares(item);
    } else if (typeof item === 'number') {
      sum += item * item;
    }
  }

  return sum;
}

console.log(SumSquares([1, 2, 3])); //14
console.log(SumSquares([[1, 2], 3])); //14
console.log(SumSquares([[[[[[[[[1]]]]]]]]])); //1
console.log(SumSquares([10, [[10], 10], [10]])); //400

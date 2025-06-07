//Sum squares of numbers in list
//that may contain more lists

function SumSquares(array) {
  let sum = 0;

  for (let item of array) {
    if (Array.isArray(item)) {
      sum += SumSquares(item);
    } else if (typeof item === 'number' && !isNaN(item)) {
      sum += item * item;
    }
  }

  return sum;
}

console.log(SumSquares([1, 2, 3])); //14
console.log(SumSquares([[1, 2], 3])); //14
console.log(SumSquares([[[[[[[[[1]]]]]]]]])); //1
console.log(SumSquares([10, [[10], 10], [10]])); //400

console.log(SumSquares([1, 2, "3", null])); //5
console.log(SumSquares([[4, [true]], undefined, 3])); //25
console.log(SumSquares([[[[1]]], "hello", {a: 10}])); //1
console.log(SumSquares([10, [[10], "oops"], [false, 10]])); //300


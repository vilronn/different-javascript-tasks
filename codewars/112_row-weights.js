function rowWeights(array) {
  let sumEven = 0;
  let sumOdd = 0;
  for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      sumEven += array[i];
    } else {
      sumOdd += array[i];
    }
  }
  return [sumEven, sumOdd];
}

console.log(rowWeights([13, 27, 49])); //Output: [62, 27]

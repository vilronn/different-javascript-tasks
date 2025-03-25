const compose =
  (...functions) =>
  (value) =>
    functions.reduceRight((acc, fn) => fn(acc), value);

const addOne = (a) => a + 1;
const multTwo = (b) => b * 2;

const addOneMultTwo = compose(multTwo, addOne);

console.log(addOneMultTwo(5)); //Output: 12

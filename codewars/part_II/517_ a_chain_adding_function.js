function add(n) {
  let sum = n;
  function inner(m) {
    sum += m;
    return inner;
  }

  inner.valueOf = function () {
    return sum;
  };
  return inner;
}

console.log(+add(1)(2)); // 3
console.log(+add(1)(2)(3)); // 6
console.log(+add(1)(2)(3)(4)); // 10

let addTwo = add(2);
console.log(+addTwo); // 2
console.log(addTwo + 5); // 7
console.log(+addTwo(3)); // 5
console.log(+addTwo(3)(5)); // 10

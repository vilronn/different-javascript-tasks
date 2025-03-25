function flip(fn) {
  return function (...args) {
    return fn(...args.reverse());
  };
}

function print(a, b) {
  return a + " -> " + b;
}

console.log(flip(print)(4, 5)); // "5 -> 4"

function concatWords(a, b, c) {
  return `${a} ${b} ${c}`;
}

console.log(flip(concatWords)("one", "two", "three")); // "three two one"

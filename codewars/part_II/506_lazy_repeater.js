function makeLooper(str) {
  let index = 0;
  return function () {
    const char = str[index];
    index = (index + 1) % str.length;
    return char;
  };
}

//Example:
const abc = makeLooper("abc");
console.log(abc()); // 'a'
console.log(abc()); // 'b'
console.log(abc()); // 'c'
console.log(abc()); // 'a'
console.log(abc()); // 'b'

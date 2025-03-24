function chain(input, fs) {
  return fs.reduce((acc, fn) => fn(acc), input);
}

function add(num) {
  return num + 1;
}
function mult(num) {
  return num * 30;
}

console.log(chain(2, [add, mult])); //Output: 90
console.log(chain(5, [mult, add])); //Output: 151 (5 * 30 + 1)

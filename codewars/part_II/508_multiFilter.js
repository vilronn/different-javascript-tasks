function multiFilter(...filters) {
  return function (el) {
    return filters.every((fn) => fn(el));
  };
}
function isEven(el) {
  return el % 2 === 0;
}

function isPositive(el) {
  return el > 0;
}

const result = [-1, 2, 3, 4, -10, 11, -12, 20, -21, -22].filter(
  multiFilter(isEven, isPositive)
);
console.log(result); // [2, 4, 20]

Array.prototype.reduce = function(callback, initialValue) {
    let hasInitial = arguments.length > 1;
    let acc = hasInitial ? initialValue : this[0];
    let startIndex = hasInitial ? 0 : 1;
  
    for (let i = startIndex; i < this.length; i++) {
      acc = callback(acc, this[i], i, this);
    }
    return acc;
  };

console.log([1, 2, 3].reduce((sum, n) => sum + n, 0)); //6
console.log(['a','b','a'].reduce((obj, e) => {
  if (!obj[e]) obj[e] = 0;
  obj[e]++;
  return obj;
}, {})); //{ a: 2, b: 1 }

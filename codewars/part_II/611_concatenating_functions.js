Function.prototype.pipe = function (fn) {
    const self = this;
    return function (x) {
      return fn(self(x));
    };
  };

  let addOne = function(e) {
    return e + 1;
  };
  
  let square = function(e) {
    return e * e;
  };
 
let result = [1, 2, 3, 4, 5].map(addOne.pipe(square));
console.log(result); //[4, 9, 16, 25, 36]
const double = x => x * 2;
const minusOne = x => x - 1;
const combined = addOne.pipe(double).pipe(minusOne);
console.log(combined(3)); //(((3 + 1)* 2)- 1) = 7

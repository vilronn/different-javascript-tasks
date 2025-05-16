class Lazy {
    constructor() {
      this.chain = [];
    }
  
    add(fn, ...args) {
      this.chain.push({ fn, args });
      return this;
    }
  
    invoke(target) {
      let result = target;
  
      for (const { fn, args } of this.chain) {
        result = fn.apply(null, args.concat(result));
      }
  
      return result;
    }
  }

  function max() {
    return Math.max.apply(null, arguments);
  }
  
  function filterNumbers() {
    return Array.prototype.filter.call(arguments, function (value) {
      return isNumeric(value);
    });
  }
  
  function isNumeric(n) {
    return !isNaN(n) && Number(n) === n;
  }
  
  function filterRange(min, max) {
    const args = Array.prototype.slice.call(arguments, 2);
    return Array.prototype.filter.call(args, function (value) {
      return min <= value && value <= max;
    });
  }

  const result = new Lazy()
  .add(filterNumbers)
  .add(filterRange, 2, 7)
  .add(max)
  .invoke([1, 8, 6, [], "7", -1, {v: 5}, 4]);

console.log(result); //6

Array.prototype.groupBy = function(callback) {
    const result = {};
  
    this.forEach(element => {
      const key = callback ? callback(element) : element;
      if (!result[key]) {
        result[key] = [];
      }
      result[key].push(element);
    });
  
    return result;
  };

const words = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
const grouped = words.groupBy(word => word.length);

console.log(grouped); //{ '3': [ 'one', 'two', 'six', 'ten' ], '4': [ 'four', 'five', 'nine' ], '5': [ 'three', 'seven', 'eight' ] }
console.log([1,2,3,2,4,1,5,1,6].groupBy()); //{ 1: [1, 1, 1], 2: [2, 2], 3: [3], 4: [4], 5: [5], 6: [6] }
console.log([1,2,3,2,4,1,5,1,6].groupBy(val => val % 3)); //{ 0: [3, 6], 1: [1, 4, 1, 1], 2: [2, 2, 5] }

Object.defineProperty(Array.prototype, 'insert', {
    value: function(index, value) {
      if (index >= this.length) {
        this.push(value);
      } else {
        this.splice(index, 0, value);
      }
      return this;
    },
    enumerable: false
  });

  const arr = [1, 2, 3];
arr.insert(0, 42);  //[42, 1, 2, 3]
arr.insert(10, 7);  //[42, 1, 2, 3, 7]
console.log(arr);

for (let key in arr) {
  console.log(key); //"0", "1", "2", "3", "4"
}

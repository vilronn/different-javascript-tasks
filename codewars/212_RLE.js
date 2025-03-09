var runLengthEncoding = function (str) {
  if (str.length === 0) return [];

  let result = [];
  let count = 1;

  for (let i = 1; i <= str.length; i++) {
    if (str[i] !== str[i - 1]) {
      result.push([count, str[i - 1]]);
      count = 1;
    } else {
      count++;
    }
  }

  return result;
};

console.log(runLengthEncoding("hello world!")); //Output:  [[1,'h'], [1,'e'], [2,'l'], [1,'o'], [1,' '], [1,'w'], [1,'o'], [1,'r'], [1,'l'], [1,'d'], [1,'!']]
console.log(runLengthEncoding("aaaaaaa")); //Output:  [[7,'a']]

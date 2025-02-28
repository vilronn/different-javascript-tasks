function dataReverse(data) {
  const chunkSize = 8;
  let result = [];

  for (let i = data.length; i > 0; i -= chunkSize) {
    result.push(...data.slice(i - chunkSize, i));
  }

  return result;
}
console.log(
  dataReverse([
    1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1,
    0, 1, 0, 1, 0, 1, 0,
  ])
); //Output: [
// 1, 0, 1, 0, 1, 0, 1, 0,
// 0, 0, 0, 0, 1, 1, 1, 1,
// 0, 0, 0, 0, 0, 0, 0, 0,
// 1, 1, 1, 1, 1, 1, 1, 1
// ]

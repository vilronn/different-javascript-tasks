function sortByBits(arr) {
  return arr.sort((a, b) => {
    const countBits = (n) => n.toString(2).split("1").length - 1;

    let bitCountA = countBits(a);
    let bitCountB = countBits(b);

    return bitCountA - bitCountB || a - b;
  });
}

console.log(sortByBits([7, 6, 15, 8])); //Output: [8, 6, 7, 15]
console.log(sortByBits([3, 8, 3, 6, 5, 7, 9, 1])); //Output: [1, 8, 3, 3, 5, 6, 9, 7]

function findMagic(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === i) {
      return i;
    }
  }
  return -1;
}

console.log(findMagic([-20, -10, 2, 10, 20])); //Output: 2

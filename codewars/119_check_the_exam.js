function checkExam(array1, array2) {
  let count = 0;
  for (let i = 0; i < array1.length; i++) {
    if (array2[i] === array1[i]) {
      count += 4;
    } else if (array2[i] === "") {
      count += 0;
    } else {
      count -= 1;
    }
  }
  return count > 0 ? count : 0;
}

console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"])); //Output: 6
console.log(checkExam(["h", "f", "j", "k"], ["a", "c", "b", "d"])); //Output: 0

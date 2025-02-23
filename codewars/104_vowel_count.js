function getCount(str) {
  let vowels = ["a", "e", "i", "o", "u"];
  let numVowels = 0;

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (str[i] === vowels[j]) {
        numVowels++;
      }
    }
  }
  return numVowels;
}

console.log(getCount("Hello World")); // Output: 3
console.log(getCount("javascript")); // Output: 3
console.log(getCount("mew")); // Output: 1

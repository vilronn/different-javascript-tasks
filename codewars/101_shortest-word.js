function findShort(s) {
  let words = s.split(" ");
  let shortestLength = words[0].length;
  for (let i = 0; i < words.length; i++) {
    if (words[i].length < shortestLength) {
      shortestLength = words[i].length;
    }
  }
  return shortestLength;
}

console.log(findShort("Hello world mew mew")); // Output: 3

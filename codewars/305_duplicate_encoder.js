function duplicateEncode(word) {
  word = word.toLowerCase();
  const charCount = {};

  for (const char of word) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  return [...word].map((char) => (charCount[char] === 1 ? "(" : ")")).join("");
}

console.log(duplicateEncode("din")); // "((("
console.log(duplicateEncode("recede")); // "()()()"
console.log(duplicateEncode("Success")); // ")())())"
console.log(duplicateEncode("(( @")); // "))(("

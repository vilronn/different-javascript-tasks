function removeDuplicateWords(s) {
  let words = s.split(" ");
  let seen = new Set();
  return words
    .filter((word) => (seen.has(word) ? false : seen.add(word)))
    .join(" ");
}

console.log(
  removeDuplicateWords(
    "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"
  )
); // Output: "alpha beta gamma delta"
console.log(removeDuplicateWords("apple banana apple orange")); // Output: "apple banana orange"
console.log(removeDuplicateWords("google google")); // Output: "google"

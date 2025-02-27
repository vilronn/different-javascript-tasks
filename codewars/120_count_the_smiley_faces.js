function countSmileys(arr) {
  return arr.filter((face) => /^[:;][-~]?[)D]$/.test(face)).length;
}

console.log(countSmileys([":)", ";(", ";}", ":-D"])); // Output: 2
console.log(countSmileys([";D", ":-(", ":-)", ";~)"])); // Output: 3
console.log(countSmileys([";]", ":[", ";*", ":$", ";-D"])); // Output: 1

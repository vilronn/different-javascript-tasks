function formatWords(words) {
  if (words.length === 0) return "";
  if (words.length === 1) return words[0];

  let result =
    words.slice(0, -1).join(", ") + " and " + words[words.length - 1];

  return result;
}

console.log(formatWords(["ninja", "samurai", "ronin"])); // Output: "ninja, samurai and ronin"

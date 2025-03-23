function sortStringsByVowels(strings) {
  const getMaxVowelStreak = (str) => {
    const matches = str.match(/[aeiouAEIOU]+/g) || [];
    return Math.max(...matches.map((group) => group.length), 0);
  };

  return strings.sort((a, b) => getMaxVowelStreak(b) - getMaxVowelStreak(a));
}

console.log(
  sortStringsByVowels([
    "what a beautiful day today",
    "it's okay, but very breezy",
  ])
);
// ["what a beautiful day today", "it's okay, but very breezy"]

console.log(sortStringsByVowels(["aa", "eee", "oo", "iiii"]));
// ["iiii","eee","aa","oo"]

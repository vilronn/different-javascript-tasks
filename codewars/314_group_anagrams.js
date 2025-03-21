function groupAnagrams(words) {
  let anagrams = {};

  for (let word of words) {
    let sortedWord = word.split("").sort().join("");
    if (!anagrams[sortedWord]) {
      anagrams[sortedWord] = [];
    }
    anagrams[sortedWord].push(word);
  }
  return Object.values(anagrams);
}

console.log(groupAnagrams(["tsar", "rat", "tar", "star", "tars", "cheese"])); //Output: [ [ 'tsar', 'star', 'tars' ], [ 'rat', 'tar' ], [ 'cheese' ] ]

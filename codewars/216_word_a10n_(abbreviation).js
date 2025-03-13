function abbreviate(string) {
  let result = "";
  let word = "";
  let newWord = false;

  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    let isLetter = /[a-zA-Z]/.test(char);

    if (isLetter) {
      if (!newWord) {
        newWord = true;
        word = char;
      } else {
        word += char;
      }
    } else {
      if (newWord) {
        result += abbreviateWord(word);
        newWord = false;
      }
      result += char;
    }
  }

  if (newWord) {
    result += abbreviateWord(word);
  }

  return result;
}

function abbreviateWord(word) {
  if (word.length < 4) return word;
  return word[0] + (word.length - 2) + word[word.length - 1];
}

console.log(abbreviate("elephant-rides are really fun!")); // Output: "e6t-r3s are r4y fun!"

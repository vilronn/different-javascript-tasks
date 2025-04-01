function createMessage(firstWord) {
  return function nextWord(next) {
    if (next === undefined) return firstWord;
    return createMessage(firstWord + " " + next);
  };
}

console.log(createMessage("Hello")("World!")("how")("are")("you?")()); // "Hello World! how are you?"

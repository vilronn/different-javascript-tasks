function scoreboard(string) {
  const numbers = {
    nil: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  return string
    .split(" ")
    .filter((word) => word in numbers)
    .map((word) => numbers[word]);
}

console.log(scoreboard("The score is four nil")); // [4, 0]
console.log(scoreboard("The score is three two")); // [3, 2]
console.log(scoreboard("Arsenal just conceded another goal, two nil")); // [2, 0]

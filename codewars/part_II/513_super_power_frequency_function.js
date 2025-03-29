function frequency(arr, options = {}) {
  let { criteria, compareTo } = options;
  let freqMap = new Map();

  for (let item of arr) {
    let key = criteria ? criteria(item) : item;
    freqMap.set(key, (freqMap.get(key) || 0) + 1);
  }

  let result = Array.from(freqMap.entries());

  if (compareTo) {
    result.sort((a, b) => compareTo(a[0], b[0], a[1], b[1]));
  } else {
    result.sort((a, b) => (a[0] > b[0] ? 1 : -1));
  }

  return result;
}

console.log(frequency(["Peter", "Anna", "Rose", "Peter", "Peter", "Anna"]));
// [["Anna", 2], ["Peter", 3], ["Rose", 1]]

console.log(frequency([1, 10, 12, 2, 1, 10, 2, 2]));
// [[1, 2], [2, 3], [10, 2], [12, 1]]

function alphabeticalCompare(value1, value2) {
  return String(value1).localeCompare(String(value2));
}
console.log(
  frequency([1, 10, 12, 2, 1, 10, 2, 2], { compareTo: alphabeticalCompare })
);
// [[1, 2], [10, 2], [12, 1], [2, 3]]

function frequencyCompare(value1, value2, freq1, freq2) {
  return freq2 - freq1;
}
console.log(
  frequency(["Peter", "Anna", "Rose", "Peter", "Peter", "Anna"], {
    compareTo: frequencyCompare,
  })
);
// [["Peter", 3], ["Anna", 2], ["Rose", 1]]

function isEven(number) {
  return number % 2 === 0;
}
function parity(number) {
  return isEven(number) ? "even" : "odd";
}
console.log(frequency([1, 2, 3, 4, 5, 6, 7], { criteria: parity }));
// [["even", 3], ["odd", 4]]

function profession(person) {
  return person.profession;
}
var persons = [
  { name: "Peter", profession: "teacher" },
  { name: "Michael", profession: "teacher" },
  { name: "Anna", profession: "scientific" },
  { name: "Rose", profession: "scientific" },
  { name: "Anna", profession: "scientific" },
  { name: "Anna", profession: "politician" },
];
console.log(
  frequency(persons, { criteria: profession, compareTo: frequencyCompare })
);
// [["scientific", 3], ["teacher", 2], ["politician", 1]]

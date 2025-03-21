function myLanguages(results) {
  return Object.entries(results)
    .filter(([_, score]) => score >= 60)
    .sort((a, b) => b[1] - a[1])
    .map(([language, _]) => language);
}

console.log(myLanguages({ Java: 10, Ruby: 80, Python: 65 })); //Output: ["Ruby", "Python"]
console.log(myLanguages({ Hindi: 60, Dutch: 93, Greek: 71 })); //Output: ["Dutch", "Greek", "Hindi"]
console.log(myLanguages({ "C++": 50, ASM: 10, Haskell: 20 })); //Output: []

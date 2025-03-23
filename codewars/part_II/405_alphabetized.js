function alphabetized(str) {
  return str
    .replace(/[^a-zA-Z]/g, "")
    .split("")
    .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
    .join("");
}

console.log(alphabetized("The Holy Bible")); //Output: "BbeehHilloTy"
console.log(alphabetized("Hello, World!")); //Output: "deHllloorW"
console.log(alphabetized("Hi, I'm Erika!")); //Output: "aEHiIikmr"

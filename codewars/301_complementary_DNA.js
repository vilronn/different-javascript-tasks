function dnaStrand(dna) {
  const pairs = {
    A: "T",
    T: "A",
    C: "G",
    G: "C",
  };

  return dna
    .split("")
    .map((letter) => pairs[letter])
    .join("");
}

console.log(dnaStrand("ATTGC")); // "TAACG"
console.log(dnaStrand("GTAT")); // "CATA"

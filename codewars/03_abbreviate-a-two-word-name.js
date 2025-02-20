function abbrevName(name) {
  let string = [];
  for (let i = 0; i < name.length; i++) {
    let letter = name[i];
    if (i == 0 || name[i - 1] === " ") {
      string.push(letter.toUpperCase());
    }
    if (letter === " ") {
      string.push(".");
    }
  }
  return string.join("");
}

console.log(abbrevName("Erika flower")); // "E.F"

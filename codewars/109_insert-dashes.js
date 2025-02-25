function insertDash(num) {
  const numStr = num.toString();
  const result = [];

  for (let i = 0; i < numStr.length; i++) {
    result.push(numStr[i]);
    if (
      i < numStr.length - 1 &&
      parseInt(numStr[i]) % 2 !== 0 &&
      parseInt(numStr[i + 1]) % 2 !== 0
    ) {
      result.push("-");
    }
  }

  return result.join("");
}

console.log(insertDash(454793)); // Output: "4547-9-3"

function expandedForm(num) {
  let str = num.toString();
  let result = [];

  for (let i = 0; i < str.length; i++) {
    let digit = str[i];

    if (digit !== "0") {
      result.push(digit + "0".repeat(str.length - i - 1));
    }
  }

  return result.join(" + ");
}

console.log(expandedForm(73089)); //Output: "70000 + 3000 + 80 + 9"

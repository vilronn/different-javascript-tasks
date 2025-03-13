function incrementString(strng) {
  let numPart = strng.match(/\d*$/)[0];
  let textPart = strng.slice(0, -numPart.length);

  if (numPart === "") {
    return strng + "1";
  }
  let incrementedNum = (parseInt(numPart, 10) + 1).toString();
  let paddedNum = numPart.slice(0, -incrementedNum.length) + incrementedNum;
  return textPart + paddedNum;
}

console.log(incrementString("g12gh3dfdg456gwe6f123")); // Output: "g12gh3dfdg456gwe6f124"
console.log(incrementString("123")); // Output: "124"
console.log(incrementString("999")); // Output: "1000"
console.log(incrementString("1a2b3c")); // Output: "1a2b3c1"
console.log(incrementString("z99")); // Output: "z100"
console.log(incrementString("000")); // Output: "001"
console.log(incrementString("foo9")); // Output: "foo10"
console.log(incrementString("foo99")); // Output: "foo100"
console.log(incrementString("foo099")); // Output: "foo100"

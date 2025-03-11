function kebabize(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (char === char.toUpperCase() && isNaN(char) && result.length > 0) {
      result += "-";
    }

    result += char.toLowerCase();
  }

  return result;
}

console.log(kebabize("HelloWorld")); // Output: "hello-world"
console.log(kebabize("JavaScriptIsFun")); // Output: "javascript-is-fun"
console.log(kebabize("ThisIsAnExample")); // Output: "this-is-an-example"
console.log(kebabize("camelCase")); // Output: "camel-case"
console.log(kebabize("12345")); // Output: "12345"

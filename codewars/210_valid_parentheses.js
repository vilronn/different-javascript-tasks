function validParentheses(parenStr) {
  let stack = [];
  for (let i = 0; i < parenStr.length; i++) {
    if (parenStr[i] === "(") {
      stack.push("(");
    } else if (parenStr[i] === ")") {
      if (stack.length === 0) {
        return false;
      }
      stack.pop();
    }
  }
  return stack.length === 0;
}

console.log(validParentheses("()")); // Output: true
console.log(validParentheses(")(()))")); // Output: false
console.log(validParentheses("(())((()())())")); // Output: true
console.log(validParentheses("(")); // Output: false

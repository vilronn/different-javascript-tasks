function calculate(expression) {
  let tokens = expression.split(" ").reverse();
  let stack = [];
  for (let token of tokens) {
    if (!isNaN(token)) {
      stack.push(Number(token));
    } else if (
      token === "+" ||
      token === "-" ||
      token === "*" ||
      token === "/"
    ) {
      let num2 = stack.pop();
      let num1 = stack.pop();
      switch (token) {
        case "+":
          stack.push(num2 + num1);
          break;
        case "-":
          stack.push(num2 - num1);
          break;
        case "*":
          stack.push(num2 * num1);
          break;
        case "/":
          stack.push(num2 / num1);
          break;
      }
    }
  }
  return stack[0];
}

console.log(calculate("/ + 3 5 * 2 2")); //Output: 2

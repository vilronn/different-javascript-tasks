function arithmetic(a, b, operator) {
  let operations = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => {
      return b !== 0 ? a / b : "Error: Division by zero!";
    },
  };
  if (!(operator in operations)) {
    return "Unknown operator!";
  }
  return operations[operator](a, b);
}

console.log(arithmetic(3, 5, "add")); // Output: 8
console.log(arithmetic(3, 5, "subtract")); // Output: -2
console.log(arithmetic(3, 5, "multiply")); // Output: 15
console.log(arithmetic(10, 2, "divide")); // Output: 5
console.log(arithmetic(5, 0, "divide")); // Output: Error: Division by zero!

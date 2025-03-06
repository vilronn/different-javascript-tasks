function balance(book) {
  let cleanedLines = book
    .replace(/[^a-zA-Z0-9. \n]/g, "")
    .split("\n")
    .filter((line) => line.trim() !== "");

  let originalBalance = parseFloat(cleanedLines[0]);
  let balance = originalBalance;
  let expenses = [];
  let result = [`Original Balance: ${originalBalance.toFixed(2)}`];

  for (let i = 1; i < cleanedLines.length; i++) {
    let parts = cleanedLines[i].split(/\s+/);
    let checkNumber = parts[0];
    let category = parts.slice(1, -1).join(" ");
    let amount = parseFloat(parts[parts.length - 1]);

    balance -= amount;
    expenses.push(amount);

    result.push(
      `${checkNumber} ${category} ${amount.toFixed(
        2
      )} Balance ${balance.toFixed(2)}`
    );
  }

  let totalExpense = expenses.reduce((sum, val) => sum + val, 0);
  let averageExpense = totalExpense / expenses.length;

  result.push(`Total expense: ${totalExpense.toFixed(2)}`);
  result.push(`Average expense: ${averageExpense.toFixed(2)}`);

  return result.join("\n");
}

let input = `1000.00!=
125 Market !=:125.45
126 Hardware =34.95
127 Video! 7.45
128 Book :14.32
129 Gasoline ::16.10`;

console.log(balance(input));

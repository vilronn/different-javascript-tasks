function bingo(ticket, win) {
  let summaWin = 0;

  for (let i = 0; i < ticket.length; i++) {
    let str = ticket[i][0];
    let num = ticket[i][1];

    for (let j = 0; j < str.length; j++) {
      if (str.charCodeAt(j) === num) {
        summaWin++;
        break;
      }
    }
  }

  return summaWin >= win ? "Winner!" : "Loser!";
}

console.log(
  bingo(
    [
      ["ABCABC", 65],
      ["HGRHGR", 74],
      ["BYHTBYHT", 74],
    ],
    2
  )
); // Output: "Loser!"

console.log(
  bingo(
    [
      ["ABCD", 65],
      ["XYZJ", 74],
      ["MNOJ", 74],
      ["PQRS", 80],
    ],
    3
  )
);
// Output: "Winner!"

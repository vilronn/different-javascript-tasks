function outed(meet, boss) {
  let totalOuted = 0;
  let collegues = 0;

  for (let key in meet) {
    if (key === boss) {
      totalOuted += meet[key] * 2;
    } else {
      totalOuted += meet[key];
    }
    collegues++;
  }

  console.log(totalOuted, collegues, totalOuted / collegues);

  return totalOuted / collegues < 5 ? "Get Out Now!" : "Nice Work Champ!";
}
console.log(
  outed(
    {
      tim: 0,
      jim: 2,
      randy: 0,
      sandy: 7,
      andy: 0,
      katie: 5,
      laura: 1,
      saajid: 2,
      alex: 3,
      john: 2,
      mr: 0,
    },
    "laura"
  )
); //Output: 'Get Out Now!'

console.log(
  outed(
    {
      tim: 1,
      jim: 3,
      randy: 9,
      sandy: 6,
      andy: 7,
      katie: 10,
      laura: 9,
      saajid: 9,
      alex: 9,
      john: 9,
      mr: 8,
    },
    "katie"
  )
); //Output: 'Nice Work Champ!'

function greetDevelopers(list) {
  let greetings = [];
  for (let developer of list) {
    let greeting = `Hi ${developer.firstName}, what do you like the most about ${developer.language}?`;
    greetings.push({ ...developer, greeting });
  }
  return greetings;
}

console.log(
  greetDevelopers([
    {
      firstName: "Sofia",
      lastName: "I.",
      country: "Argentina",
      continent: "Americas",
      age: 35,
      language: "Java",
    },
    {
      firstName: "Lukas",
      lastName: "X.",
      country: "Croatia",
      continent: "Europe",
      age: 35,
      language: "Python",
    },
    {
      firstName: "Madison",
      lastName: "U.",
      country: "United States",
      continent: "Americas",
      age: 32,
      language: "Ruby",
    },
  ])
); //Output: [
//     {
//       firstName: 'Sofia',
//       lastName: 'I.',
//       country: 'Argentina',
//       continent: 'Americas',
//       age: 35,
//       language: 'Java',
//       greeting: 'Hi Sofia, what do you like the most about Java?',
//     },
//     {
//       firstName: 'Lukas',
//       lastName: 'X.',
//       country: 'Croatia',
//       continent: 'Europe',
//       age: 35,
//       language: 'Python',
//       greeting: 'Hi Lukas, what do you like the most about Python?',
//     },
//     {
//       firstName: 'Madison',
//       lastName: 'U.',
//       country: 'United States',
//       continent: 'Americas',
//       age: 32,
//       language: 'Ruby',
//       greeting: 'Hi Madison, what do you like the most about Ruby?',
//     },
//   ]

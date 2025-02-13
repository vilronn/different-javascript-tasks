function evenOrOdd(number) {
    if (number % 2 === 0) {
      return "even";
    } else if (number % 2 === 1) {
      return "odd";
    } else {
      return "Not a number";
    }
  }
  
  console.log(evenOrOdd(3));
  console.log(evenOrOdd(10));
  console.log(evenOrOdd("g"));
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

console.log(isLeapYear(2020)); // Output: true
console.log(isLeapYear(2019)); // Output: false
console.log(isLeapYear(2100)); // Output: false
console.log(isLeapYear(2000)); // Output: true

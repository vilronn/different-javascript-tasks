function isLeapYear(year) {
  if (year % 400 === 0) {
    return true;
  } else if (year % 100 === 0) {
    return false;
  } else if (year % 4 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isLeapYear(2020)); // Output: true
console.log(isLeapYear(2019)); // Output: false
console.log(isLeapYear(2100)); // Output: false
console.log(isLeapYear(2000)); // Output: true

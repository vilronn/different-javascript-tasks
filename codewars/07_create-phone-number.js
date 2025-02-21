function createPhoneNumber(numbers) {
  let phone = "";
  for (let i = 0; i < numbers.length; i++) {
    let letter = numbers[i];
    if (i === 0) {
      phone += "(" + letter;
    } else if (i === 2) {
      phone += letter + ") ";
    } else if (i === 5) {
      phone += letter + "-";
    } else {
      phone += letter;
    }
  }
  return phone;
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // Output: "(123) 456-7890"

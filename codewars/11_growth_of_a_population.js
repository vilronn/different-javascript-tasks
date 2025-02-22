function nbYear(p0, percent, aug, p) {
  let population = p0;
  let years = 0;

  while (population < p) {
    population += (population * percent) / 100 + aug;
    years++;
  }
  return years;
}

console.log(nbYear(1500, 5, 100, 5000)); // Output: 15
console.log(nbYear(1500000, 2.5, 10000, 2000000)); // Output: 10

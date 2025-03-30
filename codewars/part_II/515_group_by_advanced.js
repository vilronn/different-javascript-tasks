function groupBy(array, classifier, downstream, accumulatorSupplier) {
  const result = new Map();

  for (const item of array) {
    const key = classifier(item);
    if (!result.has(key)) {
      result.set(key, accumulatorSupplier());
    }
    result.set(key, downstream(result.get(key), item));
  }

  return result;
}

const employees = [
  { name: "James", income: 1000, profession: "developer", age: 23 },
  { name: "Robert", income: 1100, profession: "qa", age: 34 },
  { name: "John", income: 1200, profession: "designer", age: 32 },
  { name: "Mary", income: 1300, profession: "designer", age: 22 },
  { name: "Patricia", income: 1400, profession: "qa", age: 23 },
  { name: "Jennifer", income: 1500, profession: "developer", age: 45 },
  { name: "Max", income: 1600, profession: "developer", age: 27 },
];

const profession2totalIncome = groupBy(
  employees,
  (employee) => employee.profession,
  (acc, employee) => acc + employee.income,
  () => 0
);

const profession2names = groupBy(
  employees,
  (employee) => employee.profession,
  (acc, employee) => [...acc, employee.name],
  () => []
);

console.log(profession2totalIncome);
// Map { 'developer' => 4100, 'qa' => 2500, 'designer' => 2500 }

console.log(profession2names);
// Map { 'developer' => ['James', 'Jennifer', 'Max'], 'qa' => ['Robert', 'Patricia'], 'designer' => ['John', 'Mary'] }

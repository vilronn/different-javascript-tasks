class Student {
  constructor(age, gpa, fullName) {
    this.age = age;
    this.gpa = gpa;
    this.fullName = fullName;
  }
}

function sort(students) {
  return students
    .sort((a, b) => {
      if (b.gpa !== a.gpa) {
        return b.gpa - a.gpa;
      }
      if (a.fullName[0] !== b.fullName[0]) {
        return a.fullName[0].localeCompare(b.fullName[0]);
      }
      return a.age - b.age;
    })
    .map((student) => student.fullName)
    .join(",");
}

// Example:
const students = [
  new Student(23, 88, "David Goodman"),
  new Student(25, 82, "Mark Rose"),
  new Student(22, 90, "Jane Doe"),
  new Student(25, 90, "Jane Dane"),
];

console.log(sort(students)); //Output: "Jane Doe,Jane Dane,David Goodman,Mark Rose"

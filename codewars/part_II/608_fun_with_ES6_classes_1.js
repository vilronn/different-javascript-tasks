class Person {
    constructor(firstName = "John", lastName = "Doe", age = 0, gender = "Male") {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.gender = gender;
    }
  
    sayFullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  
    static greetExtraTerrestrials(raceName) {
      return `Welcome to Planet Earth, ${raceName}`;
    }
  }

  const p1 = new Person("Alice", "Smith", 25, "Female");
  console.log(p1.sayFullName()); //"Alice Smith"
  
  const p2 = new Person();
  console.log(p2.sayFullName()); //"John Doe"
  
  console.log(Person.greetExtraTerrestrials("Martians")); //"Welcome to Planet Earth Martians"

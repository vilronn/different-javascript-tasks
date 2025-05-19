function nouveau(Constructor, ...args) {
    const instance = {};

    Object.setPrototypeOf(instance, Constructor.prototype);
  
    const result = Constructor.apply(instance, args);
  
    return (typeof result === 'object' && result !== null) ? result : instance;
  }

  function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  Person.prototype.introduce = function() {
    return `My name is ${this.name} and I am ${this.age}`;
  };
  
  const john = nouveau(Person, 'John', 30);
  console.log(john.introduce()); //"My name is John and I am 30"
  function ReturnsArray() {
    return [1, 2, 3];
  }
  const arr = nouveau(ReturnsArray);
  console.log(arr); //[1, 2, 3]

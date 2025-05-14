function NamedOne(first, last) {
    let _firstName = first;
    let _lastName = last;
  
    Object.defineProperty(this, 'firstName', {
      get: function() {
        return _firstName;
      },
      set: function(newFirst) {
        _firstName = newFirst;
      }
    });
  
    Object.defineProperty(this, 'lastName', {
      get: function() {
        return _lastName;
      },
      set: function(newLast) {
        _lastName = newLast;
      }
    });
  
    Object.defineProperty(this, 'fullName', {
      get: function() {
        return _firstName + ' ' + _lastName;
      },
      set: function(newFull) {
        const parts = newFull.split(' ');
        if (parts.length === 2) {
          _firstName = parts[0];
          _lastName = parts[1];
        }
      }
    });
  }

let namedOne = new NamedOne("Naomi","Wang");

console.log(namedOne.fullName); //"Naomi Wang"
namedOne.firstName = "John";
namedOne.lastName = "Doe";
console.log(namedOne.fullName); //"John Doe"

namedOne.fullName = "Bill Smith";
console.log(namedOne.firstName); //"Bill"
console.log(namedOne.lastName);  //"Smith"

namedOne.fullName = "Tom"; //invalid
console.log(namedOne.fullName); //"Bill Smith"

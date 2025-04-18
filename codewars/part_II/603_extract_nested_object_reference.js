Object.prototype.hash = function(path) {
    return path.split('.').reduce((acc, key) => {
      return acc && acc[key];
    }, this);
  };
  
  var obj = {
    person: {
      name: 'joe',
      history: {
        hometown: 'bratislava',
        bio: {
          funFact: 'I like fishing.'
        }
      }
    }
  };
  
  console.log(obj.hash('person.name')); // 'joe'
  console.log(obj.hash('person.history.bio')); // { funFact: 'I like fishing.' }
  console.log(obj.hash('person.history.homeStreet')); // undefined
  console.log(obj.hash('person.animal.pet.needNoseAntEater')); // undefined

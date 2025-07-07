function flattenMap(map) {
  const result = {};

  function flatten(obj, path) {
    for (let key in obj) {
      const value = obj[key];
      const fullPath = path ? `${path}/${key}` : key;

      if (
        value !== null &&
        typeof value === 'object' &&
        !Array.isArray(value)
      ) {
        flatten(value, fullPath);
      } else {
        result[fullPath] = value;
      }
    }
  }

  flatten(map, '');
  return result;
}

const input = {
  'a': {
    'b': {
      'c': 12,
      'd': 'Hello World'
    },
    'e': [1,2,3]
  }
};

const expectedOutput = {
  'a/b/c': 12,
  'a/b/d': 'Hello World',
  'a/e': [1,2,3]
};

const actualOutput = flattenMap(input);

console.log("actualOutput:", actualOutput);
console.log("expectedOutput:", expectedOutput);

const isEqual = JSON.stringify(actualOutput) === JSON.stringify(expectedOutput);
console.log("Test passed:", isEqual);

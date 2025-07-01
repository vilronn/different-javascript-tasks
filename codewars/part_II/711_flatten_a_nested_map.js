function flattenOneLevel(map) {
  const result = {};

  for (let key in map) {
    const value = map[key];

    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      for (let innerKey in value) {
        result[`${key}/${innerKey}`] = value[innerKey];
      }
    } else {
      result[key] = value;
    }
  }

  return result;
}

console.log(flattenOneLevel({
  a: {
    b: 1,
    c: 2
  },
  d: 3
}));
//   'a/b': 1,
//   'a/c': 2,
//   'd': 3
// }


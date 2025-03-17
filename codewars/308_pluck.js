function pluck(objs, name) {
  let results = [];
  for (let obj of objs) {
    if (obj.hasOwnProperty(name)) {
      results.push(obj[name]);
    } else {
      results.push(undefined);
    }
  }
  return results;
}

console.log(pluck([{ a: 1 }, { a: 2 }], "a")); //Output: [1,2]
console.log(pluck([{ a: 1, b: 3 }, { a: 2 }], "b")); //Output: [3, undefined]

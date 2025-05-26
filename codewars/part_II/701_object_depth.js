function getDepth(obj) {
  //null or not an object 
  if (obj === null || typeof obj !== 'object') {
    return 0;
  }

  //array
  if (Array.isArray(obj)) {
    return 0;
  }

  //empty
  const keys = Object.keys(obj);
  if (keys.length === 0) {
    return 0;
  }

  let maxChildDepth = 0;

  for (const key of keys) {
    const child = obj[key];
    const childDepth = getDepth(child);
    if (childDepth > maxChildDepth) {
      maxChildDepth = childDepth;
    }
  }

  return 1 + maxChildDepth;
}

console.log(getDepth(null)); //0
console.log(getDepth([])); //0
console.log(getDepth({}));//0
console.log(getDepth({ a: 5 })); //1
console.log(getDepth({ a: { b: 7 } })); //2
console.log(getDepth({ a: { b: { c: 100 } } }));//3

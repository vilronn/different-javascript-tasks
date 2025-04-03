function curryPartial(fn, ...args) {
  if (typeof fn === "function" && args.length >= fn.length) {
    return fn(...args);
  }

  return function curried(...newArgs) {
    const allArgs = [...args, ...newArgs].filter((arg) => arg !== undefined);

    if (allArgs.length >= fn.length) {
      return fn(...allArgs);
    }

    return curryPartial(fn, ...allArgs);
  };
}

function add(a, b, c) {
  return a + b + c;
}

console.log(curryPartial(add)(1)(2)(3)); // 6
console.log(curryPartial(add, 1)(2, 3)); // 6
console.log(curryPartial(add, 1, 2)(3)); // 6
console.log(curryPartial(add, 1, 2, 3)); // 6
console.log(curryPartial(add)(1, 2, 3)); // 6
console.log(curryPartial(add)(1, 2)(3)); // 6
console.log(curryPartial(add)()(1, 2, 3)); // 6
console.log(curryPartial(add)()(1)()()(2)(3)); // 6
console.log(curryPartial(add)()(1)()()(2)(3, 4, 5, 6)); // 6
console.log(curryPartial(add, 1)(2, 3, 4, 5)); // 6
console.log(curryPartial(curryPartial(add, 1), 2, 3)); // 6
console.log(curryPartial(curryPartial(add, 1, 2), 3)); // 6
console.log(curryPartial(curryPartial(add, 1), 2, 3)); // 6
console.log(curryPartial(curryPartial(add, 1)(2), 3)); // 6
console.log(curryPartial(curryPartial(curryPartial(add, 1)), 2, 3)); // 6

function once(fn) {
  let called = false;
  return function (...args) {
    if (!called) {
      called = true;
      return fn(...args);
    }
  };
}

logOnce = once(console.log);
logOnce("foo"); // -> "foo"
logOnce("bar"); // -> no effect

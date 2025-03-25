function memo(fn) {
  const cache = new Map();

  function memoized(arg) {
    if (cache.has(arg)) return cache.get(arg);

    const result = fn(arg);
    cache.set(arg, result);
    return result;
  }

  return function curried(...args) {
    if (args.length > 1) {
      return curried(args[0])(args.slice(1));
    }
    return memoized(args[0]);
  };
}

const fact = memo(function factorial(n) {
  return n <= 1 ? 1 : n * factorial(n - 1);
});

console.log(fact(5)); // 120
console.log(fact(6)); // 720

const fib = memo(function fibonacci(n) {
  return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
});

console.log(fib(10)); // 55
console.log(fib(20)); // 6765

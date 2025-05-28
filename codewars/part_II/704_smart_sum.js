function smartSum(...args) {
  let sum = 0;

  for (const arg of args) {
    if (typeof arg === 'number') {
      sum += arg;
    } else if (Array.isArray(arg)) {
      sum += smartSum(...arg);
    }
  }
  return sum;
}

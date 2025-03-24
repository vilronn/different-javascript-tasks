function detectInt(...lambdas) {
  let n = 1;
  while (true) {
    if (lambdas.every((lambda) => lambda(n))) {
      return n;
    }
    n++;
  }
}

let lam1 = (x) => x > 9;
let lam2 = (x) => Math.sqrt(x) % 1 === 0;

console.log(detectInt()); // 1
console.log(detectInt(lam1)); // 10
console.log(detectInt(lam2)); // 1
console.log(detectInt(lam1, lam2)); // 16

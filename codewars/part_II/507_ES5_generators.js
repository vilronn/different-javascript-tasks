function generator(sequencer, ...args) {
  const sequence = sequencer(...args);
  return {
    next: function () {
      return sequence();
    },
  };
}

function dummySeq() {
  return function () {
    return "dummy";
  };
}

function factorialSeq() {
  let n = 0,
    fact = 1;
  return function () {
    if (n > 1) fact *= n;
    n++;
    return fact;
  };
}

function fibonacciSeq() {
  let prev = 0,
    curr = 1;
  return function () {
    [prev, curr] = [curr, prev + curr];
    return prev;
  };
}

function rangeSeq(start, step) {
  let current = start;
  return function () {
    let value = current;
    current += step;
    return value;
  };
}

function primeSeq() {
  let num = 2;

  function isPrime(n) {
    for (let i = 2; i * i <= n; i++) {
      if (n % i === 0) return false;
    }
    return true;
  }

  return function () {
    while (!isPrime(num)) num++;
    return num++;
  };
}

function partialSumSeq(...numbers) {
  let sum = 0,
    index = 0;
  return function () {
    if (index >= numbers.length) return "end";
    sum += numbers[index];
    return (numbers[index++] = sum);
  };
}

const seq = generator(dummySeq);
console.log(seq.next()); // 'dummy'
console.log(seq.next()); // 'dummy'
console.log(seq.next()); // 'dummy'

const factSeq = generator(factorialSeq);
console.log(factSeq.next()); // 1
console.log(factSeq.next()); // 1
console.log(factSeq.next()); // 2
console.log(factSeq.next()); // 6
console.log(factSeq.next()); // 24

const fibSeq = generator(fibonacciSeq);
console.log(fibSeq.next()); // 1
console.log(fibSeq.next()); // 1
console.log(fibSeq.next()); // 2
console.log(fibSeq.next()); // 3
console.log(fibSeq.next()); // 5
console.log(fibSeq.next()); // 8

const range = generator(rangeSeq, 1, 2);
console.log(range.next()); // 1
console.log(range.next()); // 3
console.log(range.next()); // 5
console.log(range.next()); // 7

const primes = generator(primeSeq);
console.log(primes.next()); // 2
console.log(primes.next()); // 3
console.log(primes.next()); // 5
console.log(primes.next()); // 7
console.log(primes.next()); // 11

const sumSeq = generator(partialSumSeq, 1, 3, 7, 2, 0);
console.log(sumSeq.next()); // 1
console.log(sumSeq.next()); // 4
console.log(sumSeq.next()); // 11
console.log(sumSeq.next()); // 13
console.log(sumSeq.next()); // 13
console.log(sumSeq.next()); // "end"

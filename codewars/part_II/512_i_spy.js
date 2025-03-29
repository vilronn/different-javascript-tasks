function spyOn(func) {
  let callCount = 0;
  let calls = [];
  let returns = [];

  function spy(...args) {
    callCount++;
    calls.push(...args);
    let result = func(...args);
    returns.push(result);
    return result;
  }

  spy.callCount = () => callCount;
  spy.wasCalledWith = (val) => calls.includes(val);
  spy.returned = (val) => returns.includes(val);

  return spy;
}

function adder(n1, n2) {
  return n1 + n2;
}
var adderSpy = spyOn(adder);

console.log(adderSpy(2, 4)); // 6
console.log(adderSpy(3, 5)); // 8
console.log(adderSpy.callCount()); // 2
console.log(adderSpy.wasCalledWith(4)); // true
console.log(adderSpy.wasCalledWith(0)); // false
console.log(adderSpy.returned(8)); // true
console.log(adderSpy.returned(0)); // false

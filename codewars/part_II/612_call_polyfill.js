Function.prototype.call2 = function(context, ...args) {
    context = context || globalThis;
    const fnSymbol = Symbol('fn');
  
    context[fnSymbol] = this;
    const result = context[fnSymbol](...args);

    delete context[fnSymbol];
    return result;
};

function f(a, b) {
    return this.x + a + b;
}
const obj = { x: 100 };
console.log(f.call2(obj, 20, 3)); //123

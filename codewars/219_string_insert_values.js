var format = function (str, obj) {
  return str.replace(/\{(\w+)\}/g, (match, key) => obj[key] || match);
};

var s = "Hello {foo} - make me a {bar}";
var o = {
  foo: "Jack",
  bar: "sandwich",
};

console.log(format(s, o)); // "Hello Jack - make me a sandwich"

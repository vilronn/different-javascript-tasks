var Router = function () {
  this.routes = {};
};

Router.prototype.bind = function (path, method, action) {
  var key = this._makeKey(path, method);
  this.routes[key] = action;
};

Router.prototype.runRequest = function (path, method) {
  var key = this._makeKey(path, method);
  var action = this.routes[key];
  return action ? action() : "Error 404: Not Found";
};

Router.prototype._makeKey = function (path, method) {
  return path + "|" + method.toUpperCase();
};

var router = new Router();

router.bind("/hello", "GET", function () {
  return "hello world";
});
console.log(router.runRequest("/hello", "GET")); // hello world
console.log(router.runRequest("/hello", "POST")); // Error 404: Not Found

function Point(x, y) {
if (new.target) {
throw new Error("Please use Point.create instead");
}

const obj = Object.create(Point.prototype);
obj.x = x;
obj.y = y;
return obj;
}

Point.create = function(x, y) {
return Point.call(null, x, y);
};

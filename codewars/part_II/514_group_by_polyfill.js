if (!Object.groupBy) {
  Object.groupBy = function (items, cb) {
    return items.reduce((groups, item, index) => {
      let key = String(cb(item, index));
      (groups[key] ||= []).push(item);
      return groups;
    }, {});
  };
}

const items = [1, 4, 123, 44444, 88888, 12345];
const cb = (x) => x.toString().length;

console.log(Object.groupBy(items, cb));
// {
//   "1": [1, 4],
//   "3": [123],
//   "5": [44444, 88888, 12345]
// }

/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function (target, arr) {
  const map = new Map();
  for (let item of target) {
    if (map.has(item)) {
      map.set(item, map.get(item) + 1);
    } else {
      map.set(item, 1);
    }
  }
  for (let item of arr) {
    if (map.has(item)) {
      map.set(item, map.get(item) - 1);
    } else {
      return false;
    }
  }
  let flag = true;
  map.forEach((item) => {
    if (item != 0) {
      flag = false;
    }
  });

  return flag;
};

const target = [1, 2, 2, 3],
  arr = [1, 1, 2, 3];
console.log(canBeEqual(target, arr));

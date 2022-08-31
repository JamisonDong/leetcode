/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function (nums) {
  let map = new Map();
  let count = 0;
  map.set(0, -1);
  let res = 0;
  for (let i = 0; i < nums.length; i++) {
    console.log(map, res);
    if (nums[i] === 1) {
      count++;
    } else {
      count--;
    }
    if (map.has(count)) {
      const preIndex = map.get(count);
      res = Math.max(i - preIndex, res);
    } else {
      map.set(count, i);
    }
  }
  return res;
};

const nums = [0, 1, 0, 1, 1, 0];
console.log(findMaxLength(nums));

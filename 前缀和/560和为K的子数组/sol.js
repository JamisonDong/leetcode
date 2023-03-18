/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  const map = new Map();
  let count = 0,
    pre = 0;

  for (let i = 0; i < nums.length; i++) {
    pre += nums[i];
    if (pre === k) {
      count++;
    }
    if (map.has(pre - k)) {
      count += map.get(pre - k);
    }
    if (map.get(pre)) {
      map.set(pre, map.get(pre) + 1);
    } else {
      map.set(pre, 1);
    }
  }
  return count;
};

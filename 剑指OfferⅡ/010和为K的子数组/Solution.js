var subarraySum = function (nums, k) {
  let count = 0;
  let map = new Map();
  let pre = 0;
  for (let num of nums) {
    pre += num;
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

const nums = [1, 2, 3],
  k = 3;
console.log(subarraySum(nums, k));

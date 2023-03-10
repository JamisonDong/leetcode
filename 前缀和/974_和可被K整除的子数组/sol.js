/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function (nums, k) {
  let map = new Map();
  map.set(0, 1);
  let total = 0,
    count = 0;

  for (let item of nums) {
    total += item;
    let modulus = ((total % k) + k) % k;
    if (map.get(modulus)) {
      count += map.get(modulus);
    }
    map.set(modulus, map.get(modulus) ? map.get(modulus) + 1 : 1);
  }

  return count;
};

const nums = [-1,2,9],
  k = 2;
console.log(subarraysDivByK(nums, k));

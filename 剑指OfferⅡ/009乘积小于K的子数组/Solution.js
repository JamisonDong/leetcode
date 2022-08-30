/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {
  const len = nums.length;
  let left = 0,
    right = 0;
  let value = 1;
  let res = 0;
  while (right < len) {
    value *= nums[right];
    if (value >= k) {
      while (left <= right && value >= k) {
        value /= nums[left];
        left++;
      }
    }
    res += right - left + 1;
    right++;
  }
  return res;
};

const nums = [1, 2, 3],
  k = 0;
console.log(numSubarrayProductLessThanK(nums, k));

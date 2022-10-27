/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let len = nums.length;
  let left = 0,
    right = 0;
  let res = len + 1;  
  let sum = 0;
  while (right < len) {
    sum += nums[right];
    if (sum >= target) {
      while (sum - nums[left] >= target) {
        sum -= nums[left++];
      }
      res = Math.min(res, right - left + 1);
    }
    right++;
  }
  return res === len + 1 ? 0 : res;
};

const target = 7,
  nums = [2, 3, 1, 2, 4, 3];
console.log(minSubArrayLen(target, nums));

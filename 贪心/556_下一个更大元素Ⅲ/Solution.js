/**
 * @param {number} n
 * @return {number}
 */

const MAX = 2147483647;
var nextGreaterElement = function (n) {
  const nums = [...('' + n)];
  let len = nums.length;
  let i = len - 2;
  while (i >= 0 && nums[i] >= nums[i + 1]) {
    i--;
  }
  if (i < 0) {
    return -1;
  }
  let j = len - 1;
  while (j >= 0 && nums[i] >= nums[j]) {
    j--;
  }
  [nums[i], nums[j]] = [nums[j], nums[i]];
  reverse(nums, i + 1);
  const ans = nums.join('') * 1;
  return ans > MAX ? -1 : ans;
};
const reverse = (nums, begin) => {
  let i = begin,
    j = nums.length - 1;
  while (i < j) {
    [nums[i], nums[j]] = [nums[j], nums[i]];
    i++;
    j--;
  }
};

const n = 2123;
console.log(nextGreaterElement(n));

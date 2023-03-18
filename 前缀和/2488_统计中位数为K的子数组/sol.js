/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function (nums, k) {
  /**
   * 展开为一个数学式
   * 中位数 -> 小于它的数 = 大于它的数  （奇数）
   * 左侧小于+右侧小于 = 左侧大于+右侧大于
   * 左侧小于 - 左侧大于 = 右侧大于- 右侧小于
   */

  const n = nums.length;
  let kIndex = -1;
  for (let i = 0; i < n; i++) {
    if (nums[i] === k) {
      kIndex = i;
      break;
    }
  }

  let ans = 0;
  const counts = new Map();
  counts.set(0, 1);
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += sign(nums[i] - k);
    if (i < kIndex) {
      counts.set(sum, (counts.get(sum) || 0) + 1);
    } else {
      const prev0 = counts.get(sum) || 0;
      const prev1 = counts.get(sum - 1) || 0;
      ans += prev0 + prev1;
    }
  }
  return ans;
};

const sign = (num) => {
  if (num === 0) {
    return 0;
  }
  return num > 0 ? 1 : -1;
};

const nums = [3, 2, 1, 4, 5],
  k = 4;
console.log(countSubarrays(nums, k));

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var leastSumOfAverages = function (nums, k) {
  const len = nums.length;
  nums.sort((a, b) => a - b);
  let res = 0;
  for (let i = 0; i < k-1; i++) {
    res += nums[i];
  }
  let finAvg = 0;
  for (let i = k-1; i < len; i++) {
    finAvg += nums[i];
  }
  finAvg = finAvg / (len - k + 1);
  res = res + finAvg;
  return res;
};

const nums = [-1, 2, -1, 3],
  k = 3;
console.log(leastSumOfAverages(nums, k));

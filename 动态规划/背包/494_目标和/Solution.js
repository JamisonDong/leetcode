/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
  let sum = 0
  for (let i of nums) sum += i
  if (Math.abs(target) > sum) return 0
  if ((target + sum) % 2) return 0
  let bagSize = Math.floor((target + sum) / 2)
  let dp = new Array(bagSize + 1).fill(0)
  // dp[j] 表示：填满j（包括j）这么大容积的包，有dp[j]种方法
  dp[0] = 1
  for (let i = 0; i < nums.length; i++) {
    for (let j = bagSize; j >= nums[i]; j--) {
      dp[j] += dp[j - nums[i]]
    }
  }
  return dp[bagSize]
};
const nums = [1, 1, 1, 1, 1], target = 3
console.log(findTargetSumWays(nums, target));
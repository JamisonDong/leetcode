/**
 * @param {number[]} nums
 * @return {boolean}
 */

// 01背包
// 背包的体积为sum / 2
// 背包要放入的商品（集合里的元素）重量为 元素的数值，价值也为元素的数值
// 背包如果正好装满，说明找到了总和为 sum / 2 的子集。
// 背包中每一个元素是不可重复放入。
var canPartition = function (nums) {
  // dp[j]表示 背包总容量是j，最大可以凑成j的子集总和为dp[j]。
  let len = nums.length
  // dp[j] = max(dp[j], dp[j - nums[i]] + nums[i])
  let sum = nums.reduce((pre, cur, index, nums) => {
    return pre + cur
  })
  if (sum & 1) return false
  target = sum / 2
  let dp = Array(target + 1).fill(0)
  for (let i = 0; i < len; i++) {
    for (let j = target; j >= nums[i]; j--) {
      dp[j] = Math.max(dp[j], dp[j - nums[i]] + nums[i])
      // if (dp[j] === target) return true
    }
  }

  return dp[target] === target
};

const nums = [1, 5, 11, 5]
console.log(canPartition(nums));
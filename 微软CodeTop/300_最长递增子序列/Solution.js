/**
 * @param {number[]} nums
 * @return {number}
 */

// 贪心+二分
var lengthOfLIS = function (nums) {
  let len = nums.length
  if (len === 0) return 0
  let dp = []
  let res = 1
  dp[res] = nums[0]
  for (let i = 1; i < len; i++) {
    if (nums[i] > dp[res]) {
      dp[++res] = nums[i]
    } else {
      // 找一个位置插入
      let l = 1, r = res, pos = 0
      while (l <= r) {
        let mid = Math.floor(l + (r - l) / 2)
        if (dp[mid] < nums[i]) {
          pos = mid
          l = mid + 1
        } else {
          r = mid - 1
        }
      }
      dp[pos + 1] = nums[i]
    }
  }
  return res
}

const nums = [10, 9, 2, 5, 3, 7, 101, 18]
console.log(lengthOfLIS(nums));
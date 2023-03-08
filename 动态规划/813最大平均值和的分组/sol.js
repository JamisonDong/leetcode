/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumOfAverages = function (nums, k) {
  const len = nums.length;
  nums.sort((a,b)=>a-b);
  console.log(nums);
  const prefix = new Array(len + 1).fill(0);
  for (let i = 1; i <= len; i++) {
    prefix[i] = prefix[i - 1] + nums[i - 1];
  }
  const dp = new Array(len + 1).fill(0).map(() => new Array(k + 1).fill(0));

  for (let i = 1; i <= len; i++) {
    dp[i][1] = prefix[i] / i;
  }
  for (let j = 2; j <= k; j++) {
    for (let i = j; i <= len; i++) {
      for (let x = j - 1; x < i; x++) {
        dp[i][j] = Math.max(dp[i][j], dp[x][j - 1] + (prefix[i] - prefix[x]) / (i - x));
      }
    }
  }
  console.log(dp);
  return dp[len][k];
};

const nums = [-1, 2,-1, 3], k = 3
console.log(largestSumOfAverages(nums, k));
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let dp = []
  dp[1] = 1
  dp[2] = 2
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }
  return dp[n]
};

// 优化
var climbStairs = function (n) {
  if (n <= 1) return n
  let dp = [1, 2]
  dp[0] = 1
  dp[1] = 2
  for (let i = 3; i <= n; i++) {
    let sum = dp[0] + dp[1]
    dp[0] = dp[1]
    dp[1] = sum
  }
  return dp[1]
};

console.log(climbStairs(3));
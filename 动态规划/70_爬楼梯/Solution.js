/**
 * @param {number} n
 * @return {number}
 */
// var climbStairs = function (n) {
//   let dp = []
//   dp[1] = 1
//   dp[2] = 2
//   for (let i = 3; i <= n; i++) {
//     dp[i] = dp[i - 1] + dp[i - 2]
//   }
//   return dp[n]
// };

// // 优化
// var climbStairs = function (n) {
//   if (n <= 1) return n
//   let dp = [1, 2]
//   dp[0] = 1
//   dp[1] = 2
//   for (let i = 3; i <= n; i++) {
//     let sum = dp[0] + dp[1]
//     dp[0] = dp[1]
//     dp[1] = sum
//   }
//   return dp[1]
// };

// 一步一个台阶，两个台阶，三个台阶，直到 m个台阶，有多少种方法爬到n阶楼顶
var climbStairs = function (n, m) {
  let dp = new Array(n + 1).fill(0)
  dp[0] = 1
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= 2; j++) {
      if (i - j >= 0) dp[i] += dp[i - j]
    }
  }
  console.log(dp);
  return dp[n]
};

console.log(climbStairs(3, 2));
/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
  // dp数组及下标的含义
  // dp[i] ： 1到i为节点组成的二叉搜索树的个数为dp[i]。
  let dp = new Array(n + 1).fill(0)

  // 递推公式
  // dp[i] += dp[j-1]*dp[i-j]

  // 初始化
  dp[0] = 1
  // 遍历顺序
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      dp[i] += dp[j - 1] * dp[i - j]
    }
  }
  return dp[n]
};

console.log(numTrees(3));
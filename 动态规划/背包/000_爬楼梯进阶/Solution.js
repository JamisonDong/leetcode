/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let dp = new Array(n + 1).fill(0)
  const weight = [1, 2, 3]
  dp[0] = 1
  for (let i = 0; i <= n; i++) {//先遍历背包
    for (let j = 0; j < weight.length; j++) {// 再遍历物品
      if (i >= weight[j]) dp[i] += dp[i - weight[j]]
    }
  }

  return dp[n]
};


console.log(climbStairs(3));
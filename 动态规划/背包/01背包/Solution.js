// dp[i][j] 表示从下标为[0-i]的物品里任意取，放进容量为j的背包，价值总和最大是多少。

// 两个方向推出dp[i][j]
// 1.不放物品i
// 由dp[i - 1][j]推出，即背包容量为j，里面不放物品i的最大价值，此时dp[i][j]就是dp[i - 1][j]。
// 2.放物品i
// 由dp[i - 1][j - weight[i]]推出，dp[i - 1][j - weight[i]] 为背包容量为j - weight[i]的时候不放物品i的最大价值，
// 那么dp[i - 1][j - weight[i]] + value[i] （物品i的价值），就是背包放物品i得到的最大价值

// dp[i][j] = max(dp[i - 1][j], dp[i - 1][j - weight[i]] + value[i]);
const dp_01_bag = function (weight, bagWeight, value) {
  let weightLen = weight.length

  let dp = new Array(weightLen).fill([]).map(() => new Array(bagWeight + 1).fill(0))
  // 那么很明显当 j < weight[0]的时候，dp[0][j] 应该是 0，因为背包容量比编号0的物品重量还小。
  for (let j = 0; j < weight[0]; j++) {
    dp[0][j] = 0
  }
  // 当j >= weight[0]时，dp[0][j] 应该是value[0]，因为背包容量放足够放编号0物品。
  for (let j = weight[0]; j <= bagWeight; j++) {
    dp[0][j] = value[0]
  }
  for (let i = 1; i < weightLen; i++) {
    for (let j = 0; j <= bagWeight; j++) {
      if (j < weight[i]) dp[i][j] = dp[i - 1][j]
      else dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - weight[i]] + value[i])
    }
  }

  return dp[weightLen-1][bagWeight]
}

const weight = [1, 3, 4], value = [15, 20, 30], bagWeight = 4
console.log(dp_01_bag(weight, bagWeight, value));
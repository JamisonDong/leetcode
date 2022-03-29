/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeightII = function (stones) {
  let len = stones.length
  // dp[j] = max(dp[j], dp[j - stones[i]] + stones[i])
  const sum = stones.reduce((p, c) => p + c)
  const target = Math.floor(sum / 2)
  let dp = Array(target + 1).fill(0)
  for (let i = 0; i < len; i++) {
    for (let j = target; j >= stones[i]; j--) {
      dp[j] = Math.max(dp[j], dp[j - stones[i]] + stones[i])
    }
  }

  return sum - dp[target] - dp[target]
};

const stones = [2, 7, 4, 1, 8, 1]
console.log(lastStoneWeightII(stones));
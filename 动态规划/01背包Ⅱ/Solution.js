// 滚动数组
// dp[j] = max(dp[j], dp[j - weight[i]] + value[i])

const dp_01_bagPro = function (weight, bagWeight, value) {

  let dp = new Array(bagWeight + 1).fill(0)
  let wLen = weight.length
  for (let i = 0; i < wLen; i++) { //遍历物品
    for (let j = bagWeight; j >= weight[i]; j--) { //遍历背包容量
      dp[j] = Math.max(dp[j], dp[j - weight[i]] + value[i])
    }
  }

  return dp[bagWeight]

}

const weight = [1, 3, 4], value = [15, 20, 30], bagWeight = 4
console.log(dp_01_bagPro(weight, bagWeight, value));
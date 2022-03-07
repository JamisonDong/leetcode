/**
 * 给定一个字符串和一个字符数组，返回该字符串是否可由字符数组中的元素组成。
 * s = "microsoft", dict = ["soft", "micro", "mic"] 
 * output：true
 * @param {string} s
 * @param {string []} dict
 * @return {boolean}
 */

const isCombine = (s, dict) => {
  let len = s.length
  dp = new Array(len + 1).fill(false)
  dp[0] = true

  // 状态方程 dp[i] = check(j,i)&&dp[j]
  const check = (j, i) => {
    for (const item of dict) {
      if (item === s.slice(j, i)) {
        return true
      }
    }
    return false
  }
  for (let i = 0; i <= len; i++) {
    for (let j = 0; j < i; j++) {
      if (check(j, i) && dp[j]) {
        dp[i] = true
      }
    }
  }
  return dp[len]
}


const s = "microsoft", dict = ["soft", "micro", "mic"]
console.log(isCombine(s, dict));
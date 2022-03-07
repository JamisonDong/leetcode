/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  const len1 = text1.length
  const len2 = text2.length
  let dp = new Array(len1 + 1).fill(0).map(() => new Array(len2 + 1).fill(0))
  // dp[i][j] = dp[i-1][j-1]+1
  // if(text1[i]===text2[j]) dp[i][j] = max(dp[i-1][j],dp[i][j-1])
  for (let i = 1; i <= len1; i++) {
    let c1 = text1[i - 1]
    for (let j = 1; j <= len2; j++) {
      let c2 = text2[j - 1]
      if (c1 === c2) {
        dp[i][j] = dp[i - 1][j - 1] + 1
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
      }
    }
  }
  return dp[len1][len2]
};

const text1 = "abcde", text2 = "ace"
console.log(longestCommonSubsequence(text1, text2));
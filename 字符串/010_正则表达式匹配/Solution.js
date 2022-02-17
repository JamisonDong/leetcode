/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {

  if (s == null || p == null) return false

  const sLen = s.length, pLen = p.length
  // dp[i][j]:表示s的前i个字符，p的前j个字符是否能够匹配
  const dp = new Array(sLen + 1)

  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(pLen + 1).fill(false)
  }
  // base case
  dp[0][0] = true

  // s为空，p不为空，由于*可以匹配0个字符，所以有可能为true
  for (let j = 1; j < pLen + 1; j++) {
    if (p[j - 1] === '*') dp[0][j] = dp[0][j - 2]
  }

  for (let i = 1; i < sLen + 1; i++) {
    for (let j = 1; j < pLen + 1; j++) {
      // 文本串和模式串末位字符能匹配上
      if (s[i - 1] === p[j - 1] || p[j - 1] === '.') {
        dp[i][j] = dp[i - 1][j - 1]
      } else if (p[j - 1] === '*') {
        // 模式串末位是*
        // 模式串*的前一个字符能够跟文本串的末位匹配上
        if (s[i - 1] === p[j - 2] || p[j - 2] === '.') {
          dp[i][j] = dp[i][j - 2] // *匹配0次的情况
            || dp[i - 1][j - 2] || dp[i - 1][j]; // *匹配1次或多次的情况
        } else {
          dp[i][j] = dp[i][j - 2] // *只能匹配0次
        }
      }
    }
  }

  return dp[sLen][pLen]
};

var s = "ab", p = ".*"
console.log(isMatch(s, p));
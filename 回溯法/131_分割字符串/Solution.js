/**
 * @param {string} s
 * @return {string[][]}
 */
// 给你一个字符串 s，请你将 s 分割成一些子串，使每个子串都是 回文串 。返回 s 所有可能的分割方案。
// 回文串 是正着读和反着读都一样的字符串。
var partition = function (s) {
  let res = []
  let path = []
  // 加入记忆化
  const memo = new Array(s.length).fill().map(() => new Array(s.length).fill())
  backtracking(0)
  return res
  function backtracking(i) {
    if (i >= s.length) {
      res.push(Array.from(path))
      return
    }
    for (let j = i; j < s.length; j++) {
      if (memo[i][j] === false) continue
      if (memo[i][j] || isPalindrome(s, i, j)) {
        let str = s.substring(i, j + 1)
        path.push(str)
        backtracking(j + 1)
        path.pop()
      }
    }
  }

  function isPalindrome(s, start, end) {
    for (i = start, j = end; i < j; i++, j--) {
      if (s[i] !== s[j]) {
        memo[i][j] = false
        return false
      }
    }
    memo[i][j] = true
    return true
  }
};


// 结合动态规划
var partition = function (s) {
  const dp = new Array(s.length).fill().map(() => new Array(s.length).fill())
  const res = []
  // 状态方程
  // base j == i s[i] == s[j]
  // j - i = 1 s[i] == s[j]
  // j - i > 1 s[i] == s[j] && dp[i+1][j-1] = true

  for (let j = 0; j < s.length; j++) {
    for (let i = 0; i <= j; i++) {
      if (i === j) {
        dp[i][j] = 1
      } else if (j - i === 1 && s[i] === s[j]) {
        dp[i][j] = 1
      } else if (j - i > 1 && s[i] === s[j] && dp[i + 1][j - 1]) {
        dp[i][j] = 1
      } else {
        dp[i][j] = 0
      }
    }
  }

  function dfs(temp, start) {
    if (start === s.length) {
      res.push(temp.slice())
      return
    }
    for (let i = start; i < s.length; i++) {
      if (dp[start][i]) {
        temp.push(s.substring(start, i + 1))
        dfs(temp, i + 1)
        temp.pop()
      }
    }
  }
  dfs([], 0)
  return res
};


const s = "efe"
console.log(partition(s));
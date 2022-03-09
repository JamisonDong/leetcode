/**
 * @param {string} s
 * @return {string[][]}
 */
// 给你一个字符串 s，请你将 s 分割成一些子串，使每个子串都是 回文串 。返回 s 所有可能的分割方案。
// 回文串 是正着读和反着读都一样的字符串。
var partition = function (s) {
  let res = []
  let path = []
  backtracking(0)
  return res
  function backtracking(i) {
    if (i >= s.length) {
      res.push(Array.from(path))
      return
    }
    for (let j = i; j < s.length; j++) {
      if (!isPalindrome(s, i, j)) continue
      let str = s.substring(i, j + 1)
      console.log(str);
      path.push(str)
      backtracking(j + 1)
      path.pop()
    }
  }

  function isPalindrome(s, start, end) {
    for (i = start, j = end; i < j; i++, j--) {
      if (s[i] !== s[j]) return false
    }
    return true
  }
};

const s = "aab"
console.log(partition(s));
/**
 * @param {string} s
 * @return {string}
 */
// 给你一个字符串 s，找到 s 中最长的回文子串。
var longesPalindrome = function (s) {
  let sLen = s.length
  if (sLen < 2) {
    return s
  }
  let res = ''
  const helper = (s, l, r) => {
    while (s[l] === s[r] && l >= 0 && r < sLen) {
      l--;
      r++
    }
    if (r - l - 1 > res.length) {
      res = s.slice(l + 1, r)
    }
  }

  for (let i = 0; i < sLen; i++) {
    helper(s, i, i)
    helper(s, i, i + 1)
  }
  return res
}

var s = "babad"
console.log(longesPalindrome(s));
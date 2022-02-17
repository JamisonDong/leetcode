/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let len = s.length
  if (len < 2)
    return s
  let res = ''
  for (let i = 0; i < len; i++) {
    getMaxLen(s, i, i)
    getMaxLen(s, i, i + 1)
  }
  function getMaxLen(s, i, j) {
    while (s[i] === s[j] && i >= 0 && j < len) {
      i--
      j++
    }
    if (j - i - 1 > res.length) {
      res = s.slice(i + 1, j)
    }
  }

  return res
}

let s = "babad"
console.log(longestPalindrome(s))
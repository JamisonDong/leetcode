/**
 * @param {string} s
 * @return {number}
 */


// 递推公式
// if (s[i] === s[j]) {
//   if (j - i <= 1) {
//     result++
//     dp[i][j] = true

//   } else if (dp[i + 1][j - 1]) {
//     result++
//     dp[i][j] = true
//   }

// }
var countSubstrings = function (s) {
  const len = s.length
  let result = 0
  let dp = new Array(len).fill([]).map(() => new Array(len).fill(false))
  for (let i = s.length - 1; i >= 0; i--) {
    for (let j = i; j < s.length; j++) {
      if (s[i] === s[j]) {
        if (j - i <= 1) {
          result++
          dp[i][j] = true

        } else if (dp[i + 1][j - 1]) {
          result++
          dp[i][j] = true
        }

      }
    }
  }
  return result

}
const s = "aaa"
console.log(countSubstrings(s))
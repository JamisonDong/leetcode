/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (digits.length == 0) return [];
  const res = [];
  const map = { '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl', '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz' };

  const dfs = (curStr, i) => {
    if (i >= digits.length) {
      res.push(curStr)
      return

    }
    const letters = map[digits[i]]
    for (const letter of letters) {
      dfs(curStr + letter, i + 1)
    }
  }
  dfs('', 0)
  return res
};

var digits = "23"
console.log(letterCombinations(digits));
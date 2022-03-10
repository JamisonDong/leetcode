/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (digits.length == 0) return [];
  const res = [];
  const path = []
  const map = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];

  const backtracking = function (index) {
    if (index === digits.length) {
      res.push(path.join(""))
      return
    }
    for (const item of map[digits[index]]) {
      path.push(item)
      backtracking(index + 1)
      path.pop()
    }
  }

  backtracking(0)
  return res
};

const digits = "233"
console.log(letterCombinations(digits));
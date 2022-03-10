/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */

// 找出所有相加之和为 n 的 k 个数的组合，且满足下列条件：

// 只使用数字1到9
// 每个数字 最多使用一次 
// 返回 所有可能的有效组合的列表 。该列表不能包含相同的组合两次，组合可以以任何顺序返回。

var combinationSum3 = function (k, n) {
  let res = []
  let path = []
  let sum = 0
  function backtracking(startIndex) {
    if (sum > n) return
    if (path.length === k) {
      if (sum === n) {
        res.push([...path])
      }
      return
    }
    for (let i = startIndex; i <= 9 - (k - path.length) + 1; i++) {
      path.push(i)
      sum += i
      backtracking(i + 1)
      path.pop()
      sum -= i
    }
  }

  backtracking(1)
  return res
};

const k = 3, n = 9
console.log(combinationSum3(k, n));
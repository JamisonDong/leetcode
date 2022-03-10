/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

//  给定一个候选人编号的集合 candidates 和一个目标数 target ，
//  找出 candidates 中所有可以使数字和为 target 的组合。
//  candidates 中的每个数字在每个组合中只能使用 一次 。


var combinationSum2 = function (candidates, target) {
  const res = []
  const path = []
  let sum = 0
  candidates.sort((a, b) => a - b)
  // used 同一树层需要去重  同一树枝为一个组合不用去重
  const backtracking = function (index, used) {
    if (sum === target) {
      res.push([...path])
      return
    }
    // sum + candidates[i] <= target 剪枝
    for (let i = index; i < candidates.length && sum + candidates[i] <= target; i++) {
      // 在candidates[i] == candidates[i - 1]相同的情况下
      // used[i - 1] == true，说明同一树枝candidates[i - 1]使用过
      // used[i - 1] == false，说明同一树层candidates[i - 1]使用过
      if (i > 0 && candidates[i] === candidates[i - 1] && used[i - 1] === false) {
        continue
      }
      path.push(candidates[i])
      sum += candidates[i]
      used[i] = true
      backtracking(i + 1, used)
      path.pop()
      sum -= candidates[i]
      used[i] = false
    }
  }
  backtracking(0, new Array(candidates.length).fill(false))
  return res
};

const candidates = [2, 2, 2], target = 2
console.log(combinationSum2(candidates, target));
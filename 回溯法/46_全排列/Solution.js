// /给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var permute = function (nums) {
  const res = []
  const path = []

  function backtracking(nums, used) {
    if (path.length === nums.length) {
      res.push([...path])
      return
    }
    for (let i = 0; i < nums.length; i++) {
      // 每个元素在一个排列中只能使用一次
      if (used[i]) continue
      used[i] = true
      path.push(nums[i])
      backtracking(nums, used)
      path.pop()
      used[i] = false
    }
  }

  backtracking(nums, new Array(nums.length).fill(false))

  return res
}

const nums = [1, 2, 3]
console.log(permute(nums));
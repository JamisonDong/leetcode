/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  function getIndex(nums, target, lower) {
    const len = nums.length
    let left = 0, right = len - 1, res = len
    while (left <= right) {
      let mid = Math.floor(left + (right - left) / 2)
      if (nums[mid] > target || (lower && nums[mid] >= target)) {
        right = mid - 1
        res = mid
      } else {
        left = mid + 1
      }
    }
    return res
  }

  let ans = [-1, -1]
  // 第一个大于等于target的元素下标
  const leftIndex = getIndex(nums, target, true)
  // 第一个大于target的元素下标
  const rightIndex = getIndex(nums, target, false) - 1
  if (leftIndex <= rightIndex && rightIndex < nums.length && nums[leftIndex] === target && nums[rightIndex] === target) {
    ans = [leftIndex, rightIndex]
  }
  return ans
};

const nums = [1], target = 1
console.log(searchRange(nums, target));
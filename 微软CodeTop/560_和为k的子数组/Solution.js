/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// 给你一个整数数组 nums 和一个整数 k ，请你统计并返回该数组中和为 k 的连续子数组的个数。

// 前缀和
var subarraySum = function (nums, k) {
  let prefixSum = 0
  let map = { 0: 1 }
  let count = 0
  for (let i = 0; i < nums.length; i++) {
    prefixSum += nums[i]
    if (map[prefixSum - k]) {
      count += map[prefixSum - k]
    }
    if (map[prefixSum]) {
      map[prefixSum]++
    } else {
      map[prefixSum] = 1
    }
  }
  return count
};

const nums = [1, 2, 3], k = 3
console.log(subarraySum(nums, k));
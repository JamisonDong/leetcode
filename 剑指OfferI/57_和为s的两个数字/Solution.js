/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
/* 
输入一个递增排序的数组和一个数字s，在数组中查找两个数，
使得它们的和正好是s。
如果有多对数字的和等于s，则输出任意一对即可。
输入：nums = [2,7,11,15], target = 9
输出：[2,7] 或者 [7,2]
*/
var twoSum = function (nums, target) {
    let len = nums.length
    let i = 0
    let j = len - 1
    for (let i = 0; i < len - 1; i++) {
        let ans = findValue(nums, i + 1, j, target - nums[i])
        if (ans > 0) {
            return [nums[i], nums[ans]]
        }
    }

    function findValue(nums, i, j, target) {
        let ans = -1
        while (i <= j) {
            let mid = Math.floor(i + (j - i) / 2)
            if (nums[mid] === target) {
                return mid
            } else if (nums[mid] > target) {
                j = mid - 1
            } else {
                i = mid + 1
            }

        }
        return ans
    }
};
let nums = [10, 26, 30, 31, 47, 60], target = 40
console.log(twoSum(nums, target));
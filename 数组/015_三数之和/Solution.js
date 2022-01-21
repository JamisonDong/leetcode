/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    var res = []
    let len = nums.length
    nums.sort((a, b) => { return a - b })
    for (let i = 0; i < len - 2; i++) {
        let j = i + 1
        let k = len - 1
        if (i > 0 && nums[i] === nums[i-1]) {
            continue
        }
        while (j < k) {
            if (nums[i] + nums[j] + nums[k] < 0) {
                j++
                while (j < k && nums[j] === nums[j - 1]) {
                    j++
                }
            } else if (nums[i] + nums[j] + nums[k] > 0) {
                k--
                while (j < k && nums[k] === nums[k + 1]) {
                    k--
                }
            } else {
                res.push([nums[i], nums[j], nums[k]])
                j++
                k--
                while (j < k && nums[j] === nums[j - 1]) {
                    j++
                }
                while (j < k && nums[k] === nums[k + 1]) {
                    k--
                }
            }
        }
    }
    return res
}

var nums = [-1, 0, 1, 2, -1, -4]
console.log(threeSum(nums));
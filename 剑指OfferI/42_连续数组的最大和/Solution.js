/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let pre = 0
    let maxAns = 0
    nums.forEach((item) => {
        pre = Math.max(pre + item, item)
        maxAns = Math.max(pre, maxAns)
    })
    return maxAns
};


var nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
console.log(maxSubArray(nums));
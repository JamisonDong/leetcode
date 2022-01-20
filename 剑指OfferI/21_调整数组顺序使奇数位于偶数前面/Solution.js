/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function (nums) {
    let len = nums.length
    let i = 0
    let j = len - 1
    while (i <= j) {
        if (nums[i] % 2 == 0 && nums[j] % 2 != 0) {
            [nums[i], nums[j]] = [nums[j], nums[i]]
        } else {
            if (nums[i] % 2 !== 0) {
                i++
            }
            if (nums[j] % 2 === 0) {
                j--
            }
        }
    }

    return nums
};

let nums = [1, 2, 3, 4]
console.info(exchange(nums))
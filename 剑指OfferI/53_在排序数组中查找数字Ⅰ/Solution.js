/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let ans = 0
    for (let i of nums) {
        if (i == target) {
            ans++
        }
    }
    return ans
};

const binarySearch = (nums, target, lower) => {
    let left = 0, right = nums.length - 1, res = nums.length
    while (left <= right) {
        let middle = Math.floor((left + right) / 2)
        if (nums[middle] > target || (lower && nums[middle] >= target)) {
            right = middle - 1
            res = middle
        } else {
            left = middle + 1
        }
    }

    return res
}

var search = function (nums, target) {
    let res = 0
    let leftIndex = binarySearch(nums, target, true)
    let rightIndex = binarySearch(nums, target, false) - 1
    if (rightIndex >= leftIndex && rightIndex < nums.length && nums[leftIndex] === target && nums[rightIndex] === target) {
        return rightIndex - leftIndex + 1
    }

    return res
};




var nums = [5, 7, 7, 8, 8, 10], target = 8
console.log(search(nums, target));
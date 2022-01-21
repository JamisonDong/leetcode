/**
 * @param {number[]} nums
 * @return {number[]}
 */

var sortArray = function (nums) {
    let n = nums.length
    const quick = (left, right) => {
        if (left > right) return
        let random = Math.floor(Math.random() * (right - left + 1)) + left
        swap(nums, random, right)
        let index = partition(nums, left, right)
        quick(index + 1, right)
        quick(left, index - 1)
    }
    quick(0, n - 1)
    return nums
}

function partition(nums, left, right) {
    let pivot = nums[right]
    let pivotIndex = left
    for (let i = left; i < right; i++) {
        if (nums[i] < pivot) {
            swap(nums, i, pivotIndex)
            pivotIndex++
        }
    }
    swap(nums, right, pivotIndex)
    return pivotIndex
}


function swap(nums, l, q) {
    let temp = nums[l]
    nums[l] = nums[q]
    nums[q] = temp
}

var nums = [-4, 0, 7, 4, 9, -5, -1, 0, -7, -1]
console.log(sortArray(nums));
/**
 * @param {number[]} nums
 * @return {number}
 */
// var findRepeatNumber = function (nums) {
//     let res = []
//     nums.reduce((pre, cur, index, nums) => {
//         if (!pre.includes(cur)) {
//             pre.push(cur)
//         } else {
//             res.push(cur)
//         }
//         return pre
//     },[]);

//     return res[0]
// }

var findRepeatNumber = function (nums) {
    let map = new Map()
    for (let i of nums) {
        if (map.has(i)) return i
        map.set(i, 1)
    }
}

// 原地交换
var findRepeatNumber = function (nums) {
    let len = nums.length
    let i = 0
    while (i < len) {
        if (i == nums[i]) {
            i++
            continue
        }
        if (nums[i] == nums[nums[i]]) {
            return nums[i]
        }
        swap(nums, i, nums[i])
    }

    return -1
}

function swap(nums, i, j) {
    let temp = nums[i]
    nums[i] = nums[j]
    nums[j] = temp
}
var nums = [2, 3, 1, 0, 2, 5, 3]
console.log(findRepeatNumber(nums))

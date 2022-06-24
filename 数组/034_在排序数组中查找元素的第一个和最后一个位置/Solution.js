// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
// var searchRange = function (nums, target) {
//   function getIndex(nums, target, lower) {
//     const len = nums.length
//     let left = 0, right = len - 1, res = len
//     while (left <= right) {
//       let mid = Math.floor(left + (right - left) / 2)
//       if (nums[mid] > target || (lower && nums[mid] >= target)) {
//         right = mid - 1
//         res = mid
//       } else {
//         left = mid + 1
//       }
//     }
//     return res
//   }

//   let ans = [-1, -1]
//   // 第一个大于等于target的元素下标
//   const leftIndex = getIndex(nums, target, true)
//   // 第一个大于target的元素下标
//   const rightIndex = getIndex(nums, target, false) - 1
//   if (leftIndex <= rightIndex && rightIndex < nums.length && nums[leftIndex] === target && nums[rightIndex] === target) {
//     ans = [leftIndex, rightIndex]
//   }
//   return ans
// };

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    const len = nums.length;
    function getIndex(lower) {
        let left = 0,
            right = len - 1,
            res = len;
        while (left <= right) {
            let mid = Math.floor(left + (right - left) / 2);
            if (nums[mid] > target || (lower && nums[mid] >= target)) {
                right = mid - 1;
                res = mid;
            } else {
                left = mid + 1;
            }
        }
        return res;
    }

    let res = [-1, -1];
    let left = getIndex(true);
    let right = getIndex(false) - 1;
    console.log(left, right);
    if (
        left <= right &&
        right < len &&
        nums[left] === target &&
        nums[right] === target
    ) {
        res = [left, right];
    }

    return res;
};

const nums = [5, 7, 7, 8, 8, 10],
    target = 8;
console.log(searchRange(nums, target));

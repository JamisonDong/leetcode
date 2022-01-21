/**
 * 
 * 
 * 给你一个数组 nums 和一个值 val，你需要 原地 移除所有数值等于 val 的元素，并返回移除后数组的新长度。
    不要使用额外的数组空间，你必须仅使用 O(1) 额外空间并 原地 修改输入数组。
    元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    const length = nums.length
    if (length === 0)
        return 0
    var head = 0, end = length-1
    while (head <= end) {
        if (nums[head] === val) {
            nums[head] = nums[end]
            end--
        } else {
            head++
        }
    }
    return head
};
// var removeElement = function(nums, val) {
//     let left = 0, right = nums.length;
//     while (left < right) {
//         if (nums[left] === val) {
//             nums[left] = nums[right - 1];
//             right--;
//         } else {
//             left++;
//         }
//     }
//     return left;
// };

const nums = [3, 2, 2, 3], val = 2
console.log(removeElement(nums, val));
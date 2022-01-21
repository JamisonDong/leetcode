/**
 * @param {number[]} nums
 * @return {number}
 * 
 * 给你一个有序数组 nums ，请你 原地 删除重复出现的元素，使每个元素 只出现一次 ，返回删除后数组的新长度。
    不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。
 */
var removeDuplicates = function (nums) {
    const n = nums.length;
    if (n === 0) {
        return 0;
    }
    var i = 0
    for (let j = 1; j < n; j++) {
        if (nums[i] === nums[j]) {
            continue
        } else {
            nums[++i] = nums[j]
        }
    }
    return ++i
};

const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
console.log(removeDuplicates(nums));

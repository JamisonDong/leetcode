/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortedSquares = function (nums) {
    let left = 0;
    let len = nums.length;
    let right = len - 1;
    let res = Array(len);
    let k = nums.length - 1
    while (left <= right) {
        let leftSquare = nums[left] * nums[left];
        let rightSquare = nums[right] * nums[right];
        if (leftSquare <= rightSquare) {
            res[k--] = rightSquare;
            right--;
        } else {
            res[k--] = leftSquare;
            left++;
        }
    }
    return res;
};
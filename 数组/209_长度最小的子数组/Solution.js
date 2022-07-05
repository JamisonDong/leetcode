/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */

var minSubArrayLen = function (target, nums) {
    const len = nums.length;
    let left = 0,
        right = 0,
        res = len + 1;
    let sum = 0;
    while (right < len) {
        sum += nums[right];
        if (sum >= target) {
            res = Math.min(res, right - left + 1);
            sum -= nums[left++];
        }
        right++;
    }
    return res === len + 1 ? 0 : res;
};
let target = 7,
    nums = [7, 1, 1, 1, 7];
console.log(minSubArrayLen(target, nums));

// ts
/* function minSubArrayLen(target: number, nums: number[]): number {
    let left: number = 0, right: number = 0;
    let res: number = nums.length + 1;
    let sum: number = 0;
    while (right < nums.length) {
        sum += nums[right];
        if (sum >= target) {
            // 不断移动左指针，直到不能再缩小为止
            while (sum - nums[left] >= target) {
                sum -= nums[left++];
            }
            res = Math.min(res, right - left + 1);
        }
        right++;
    }
    return res === nums.length + 1 ? 0 : res;
}; */

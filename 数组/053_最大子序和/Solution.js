/**
 * 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和
 * @param {number[]} nums
 * @return {number}
 */
// 动态规划
var maxSubArray = function (nums) {
    let ans = nums[0]
    let sum = 0
    for( const num of nums){
        if(sum > 0){
            sum += num
        }else{
            sum = num
        }
        ans = Math.max(ans, sum)
    }
    return ans
};
var maxSubArray = function(nums) {
    let pre = 0, maxAns = nums[0];
    nums.forEach((x) => {
        pre = Math.max(pre + x, x);
        maxAns = Math.max(maxAns, pre);
    });
    return maxAns;
};

var nums = [-1,0,-2]
console.log(maxSubArray(nums));
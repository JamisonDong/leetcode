/**
 * @param {number[]} nums
 * @return {number}
 */
// 动态规划
/**
 * 从头往后存储一个dp数组存储第i个元素可以达到到最大值
 * 第i+1个元素则在满足条件的情况下可以达到的最大值为dp[i]+1
 * 状态转移方程：dp[i]=max(dp[j])+1,其中0≤j<i且num[j]<num[i]
 * 结果：LIS length=max(dp[i]),其中0≤i<n
 */
var lengthOfLIS = function (nums) {
    let n = nums.length - 1
    if (n === 0) return 0
    let dp = new Array(n).fill(0)
    let res = 1
    for (let i = 1; i <= n; i++) {
        dp[i] = 1
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                dp[i] = Math.max(dp[i], dp[j] + 1)
            }
        }
        res = Math.max(res, dp[i])
    }
    return res
};


// 贪心+二分
/**
 * 使用dp数组存储子序列
 * 遍历过程中比较元素与dp数组最后一个元素的大小
 *  如果nums[i]>dp[final] 则直接push
 *  如果小于 二分查找dp中第一个小于nums[i]的元素 计下标为j
 *      更新dp[j+1] = nums[i]
 */
var lengthOfLIS = function (nums) {
    let n = nums.length
    if (n === 0) {
        return 0
    }
    let dp = []
    let len = 1
    dp[len] = nums[0]
    for (let i = 1; i < n; i++) {
        if (nums[i] > dp[len]) {
            dp[++len] = nums[i]
        } else {
            let l = 1, r = len, pos = 0
            while (l <= r) {
                let mid = Math.floor(l + (r - l) / 2)
                if (dp[mid] < nums[i]) {
                    pos = mid
                    l = mid + 1
                } else {
                    r = mid - 1
                }
            }
            dp[pos + 1] = nums[i]
        }
    }
    return len
}

let nums = [0,1,0,3,2,3]
console.log(lengthOfLIS(nums));
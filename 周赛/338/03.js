/**
 * 首先我们需要观察数据规模。数组 nums 的长度为 n，数组 queries 的长度为 m，其中 n 和 m 最大为 10^5。因此我们需要一个时间复杂度为 O(n + m) 的算法。
对于每个查询，我们需要找到 nums 数组中所有元素变为 queries[i] 所需的操作次数。我们可以先计算出 nums 中所有元素与 queries[i] 的差值，然后统计这些差值的绝对值之和。
设 nums 中元素的和为 S，那么 queries[i] 与 nums 中元素的差值为 diff = queries[i] * n - S。因为我们可以任意增大或减小 nums 中的元素，所以我们可以将所有元素增大或减小同一个数值 k，这样可以使 nums 中所有元素与 queries[i] 的差值减少 kn，也就是说，对于任意的 k，nums 中所有元素与 queries[i] 的差值之和都是 diff - kn 的绝对值之和。
因此，我们只需要找到使得 diff - k*n 的绝对值之和最小的 k 值即可。由于差值可能是负数，我们需要对 diff 进行分类讨论：

如果 diff < 0，说明 nums 的和比 queries[i] 的总和小，因此需要将 nums 中的元素增大。此时，我们应该选择 k 使得 nums 中的最小值加上 k 的值等于 queries[i]，即 k = (queries[i] - min(nums))/n，其中 min(nums) 表示 nums 中的最小值。如果 queries[i] 比 nums 中的最小值还要小，那么 k 的值为负数，此时我们需要将 k 的值调整为 0。
如果 diff >= 0，说明 nums 的和比 queries[i] 的总和大，因此需要将 nums 中的元素减小。此时，我们应该选择 k 使得 nums 中的最大值减去 k 的值等于 queries[i]，即 k = (max(nums) - queries[i])/n，其中 max(nums) 表示 nums 中的最大值。如果 queries[i] 比 nums 中的最大值还要大，那么 k 的值为负数，此时我们需要将 k 的值调整为 0。
最终的答案即为每个查询中找到的最小的 k 值与 diff 的绝对值之和。
时间复杂度分析：
本算法的时间复杂度为 O(n + m)，其中 n 和 m 分别是 nums 和 queries 的长度。
 * 
 */


/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var minOperations = function (nums, queries) {
  const n = nums.length;
  // 前缀和
  const prefix = new Array(n + 1).fill(0);
  for (let i = 1; i <= n; ++i) {
    prefix[i] = prefix[i - 1] + nums[i - 1];
  }
  // ans
  const ans = [];
  for (let query of queries) {
    const diff = query * n - prefix[n];
    let k = 0;
    if (diff < 0) {
      const minVal = Math.min(...nums);
      k = Math.ceil((query - minVal) / n);
      k = Math.max(k, 0);
    } else {
      const maxVal = Math.max(...nums);
      k = Math.ceil((maxVal - query) / n);
      k = Math.max(k, 0);
    }
    let cur = 0;
    for (let i = 0; i < n; ++i) {
      const num = nums[i] + k * (diff < 0 ? -1 : 1);
      cur += Math.abs(query - num);
    }
    ans.push(cur);
  }
  return ans;
};

// const nums = [3, 1, 6, 8], queries = [1, 5]
const nums = [2, 9, 6, 3], queries = [10];
console.log(minOperations(nums, queries));
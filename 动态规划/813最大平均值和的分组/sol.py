from typing import List
from itertools import accumulate

class Solution:
    def largestSumOfAverages(self, nums: List[int], k: int) -> float:
        n = len(nums)
        # 前缀和
        prefix = list(accumulate(nums, initial=0))
        # 使用dp[i][j]表示nums在区间[0,i-1]被切分成j个子数组的最大平均值和
        dp = [[0.0] * (k + 1) for _ in range(n + 1)]
        for i in range(1, n + 1):
            dp[i][1] = prefix[i] / i
        # 分组个数
        for j in range(2, k + 1):
            for i in range(j, n + 1):
                # 分成[0,x-1] 和[x, i-1]两部分 x>=j-1
                for x in range(j - 1, i):
                    dp[i][j] = max(dp[i][j], dp[x][j - 1] + (prefix[i] - prefix[x]) / (i - x))
        return dp[n][k]


Sol = Solution()
nums = [-1, 2,-1, 3]
k = 3
res = Sol.largestSumOfAverages(nums, k)
print(res)
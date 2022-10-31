class Solution:
    def climbStairs(self, n: int) -> int:
        dp = [0]*(n + 1)
        dp[0] = 1
        m = 3
        # 遍历背包
        for j in range(n + 1):
            # 遍历物品
            for step in range(1, m + 1):
                if j >= step:
                    dp[j] += dp[j - step]
        return dp[n]


sol = Solution()
print(sol.climbStairs(3))
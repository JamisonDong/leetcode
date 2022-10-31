# -*- coding:utf-8 -*-


class LongestSubstring:
    def findLongest(self, A, n, B, m):
        dp = [[0 for i in range(m+1)] for j in range(n+1)]
        mmax = 0
        for i in range(n):
            for j in range(m):
                if A[i] == B[j]:
                    dp[i+1][j+1] = dp[i][j]+1
                    if dp[i+1][j+1] > mmax:
                        mmax = dp[i+1][j+1]
        return mmax

    def longestCommonSubsequence(self, A, n, B, m) -> int:
        len1, len2 = n+1, m+1
        dp = [[0 for _ in range(len1)] for _ in range(len2)] # 先对dp数组做初始化操作
        for i in range(1, len2):
            for j in range(1, len1): # 开始列出状态转移方程
                if A[j-1] == B[i-1]:
                    dp[i][j] = dp[i-1][j-1]+1 
                else:
                    dp[i][j] = max(dp[i-1][j], dp[i][j-1])
        return dp[-1][-1]


sol = LongestSubstring()
val = sol.findLongest('abcdesadsa',10,'azsadxxzsa',5)
val2 = sol.longestCommonSubsequence('abcdesdad',9,'acesdad',7)
print(val2)


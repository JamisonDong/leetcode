from typing import List
from itertools import accumulate

class Solution:
    def minSubArray(self, nums: List[int], p:int)->int:
        s = list(accumulate(nums, initial = 0))
        x = s[-1] % p
        if x == 0: return 0 # 移除空子数组（这行可以不要）

        ans = n = len(nums)
        last = {}
        for i, v in enumerate(s):
            last[v % p] = i
            j = last.get((v-x) % p, -n) # 如果不存在，-n 可以保证 i-j >= n
            ans = min(ans, i-j)
        return ans if ans < n else -1

Sol = Solution()
res = Sol.minSubArray([11,2,5,7,8,9], 10)
print(res)
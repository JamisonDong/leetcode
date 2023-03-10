from typing import List

class Solution:
    def subarraySum(self, nums: List[int], k: int) -> int:
        pre = 0
        count = 0
        dict = {0:1}
        for num in nums:
            pre+=num
            count+=dict.get(pre-k, 0)
            dict[pre] = dict.get(pre, 0) +1
        return count



Sol = Solution()
res = Sol.subarraySum([1, 2, 3], 3)
print(res)
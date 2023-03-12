# class Solution:
#     def subsets(self, nums: List[int]) -> List[List[int]]:
#         res = []
#         for i in range(len(nums)+1):
#             for item in itertools.combinations(nums, i):
#                 res.append(item)
#         return res

from typing import List

# class Solution:
#     def subsets(self, nums: List[int]) -> List[List[int]]:
#         res = [[]]
#         for i in nums:
#             res = res + [[i] + num for num in res]
#             print(res)
#         return res


class Solution:
    def subsets(self, nums: List[int]) -> List[List[int]]:
      res = []
      n = len(nums)
      def backtracking(i, temp):
        res.append(temp)
        for j in range(i, n):
          backtracking(j+1, temp+[nums[j]])
      backtracking(0, [])
      return res

Sol = Solution()
res = Sol.subsets([1,2,3])
print(res)

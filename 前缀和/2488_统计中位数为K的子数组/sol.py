class Solution:
    def countSubarrays(self, nums: List[int], k: int) -> int:

        '''
        * 展开为一个数学式
        * 中位数 -> 小于它的数 = 大于它的数  （奇数）
        * 左侧小于 + 右侧小于 = 左侧大于 + 右侧大于
        * 左侧小于 - 左侧大于 = 右侧大于 - 右侧小于
        '''
        
        pos = nums.index(k)
        cnt, x = Counter({0:1}), 0
        for i in range(pos-1,-1,-1):
            x += 1 if nums[i] < k else - 1
            cnt[x] += 1
        
        ans, x = cnt[0] + cnt[-1], 0
        for i in range(pos+1, len(nums)):
            x += 1 if nums[i] > k else - 1
            ans += cnt[x] + cnt[x - 1]
        return ans


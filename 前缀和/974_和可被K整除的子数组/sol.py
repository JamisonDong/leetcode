class Solution:
    def subarraysDivByK(self, nums: List[int], k: int) -> int:
        dic = {}
        total = count = 0
        for num in nums:
            total += num
            modulus = total % k
            same += dic.get(modulus, 0)
            count+=same
            dic[modulus] = same=1
        return count

        
        
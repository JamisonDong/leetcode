var subarraySum = function (nums, k) {
  let len = nums.length;
  let res = 0;
  let left = 0,
    right = 0;
  let sum = 0;
  while (right < len) {
    sum += nums[right];
    if (sum === k) {
      res++;
    }
    if (sum !== k) {
      while (sum !== k && left < right) {
        sum -= nums[left];
        left++;
        if (sum === k) {
          res++;
        }
      }
    }
    right++;
  }

  return res;
};

const nums = [1, 2, 3],
  k = 3;
console.log(subarraySum(nums, k));

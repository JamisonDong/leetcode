/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  const biranySearch = (arr, val) => {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
      let middle = Math.floor(left + (right - left) / 2);
      if (arr[middle] < val) {
        left = middle + 1;
      } else {
        right = middle - 1;
      }
    }
    return left;
  };
  let stack = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    console.log(stack, nums[i]);
    if (nums[i] > stack[stack.length - 1]) {
      stack.push(nums[i]);
    } else {
      let index = biranySearch(stack, nums[i]);
      stack[index] = nums[i];
    }
  }
  return stack.length;
};

const nums = [10, 9, 2, 5, 3, 7, 101, 18];
console.log(lengthOfLIS(nums));

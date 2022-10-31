const sol = (n, nums) => {
  let res = 0;
  let maxNum = 0;
  let stack = [nums[0]];
  for (let i = 1; i < n; i++) {
    if (nums[i] > stack[stack.length - 1]) {

    }
    stack.push(nums[i]);
  }
};
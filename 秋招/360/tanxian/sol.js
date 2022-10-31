const getKeys = (nums) => {
  let stack = [];
  let res = [];
  let index = 1;
  for (let i = 1; i <= nums.length; i++) {
    if (nums[i - 1] !== index) {
      stack.push(nums[i - 1]);
    } else {
      res.push(i);
      index++;
      stack.sort((a, b) => a - b);
      while (stack.length) {
        if (stack[0] === index) {
          res.push(i);
          stack.shift();
          index++;
        } else {
          break;
        }
      }
    }
  }
  return res;
}


const nums = [5, 3, 1, 2, 4]
// 3 4 4 5 5
console.log(getKeys(nums).join(" "));
const getX = (n, nums) => {
  let res = [];
  let flag = 1;
  let top = 0;
  let bottom = 0;
  for (let i = 0; i < n; i++) {
    top = nums[0];
    bottom = nums[nums.length - 1];
    if (flag) {
      if (top > bottom) {
        res.push(top);
        nums.shift();
      } else {
        res.push(bottom);
        nums.pop();
      }
      flag = 0;
    } else {
      if (top > bottom) {
        res.push(bottom);
        nums.pop();
      } else {
        res.push(top);
        nums.shift();
      }
      flag = 1;
    }
  }
  return res;
}
let nums = [21, 3, 4, 16, 1, 17, 2, 20, 18, 15, 19, 14, 13, 12, 11, 10, 89, 7, 8, 5, 6];
console.log(getX(21, nums).join(" "))
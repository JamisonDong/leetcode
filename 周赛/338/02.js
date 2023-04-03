/**
 * 质数减法运算
 * 给你一个下标从 0 开始的整数数组 nums ，数组长度为 n 。

你可以执行无限次下述运算：

选择一个之前未选过的下标 i ，并选择一个 严格小于 nums[i] 的质数 p ，从 nums[i] 中减去 p 。
如果你能通过上述运算使得 nums 成为严格递增数组，则返回 true ；否则返回 false 。

严格递增数组 中的每个元素都严格大于其前面的元素
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var primeSubOperation = function (nums) {
  const n = nums.length;
  const MAX_NUM = Math.max(...nums);
  const p = getP(MAX_NUM);
  for (let i = n - 2; i >= 0; i--) {
    if (nums[i] >= nums[i + 1]) {
      for (let item of p) {
        if (item < nums[i] && nums[i] - item < nums[i + 1]) {
          nums[i] -= item;
          break;
        }
      }
    }
  }
  let flag = 1;
  for (let i = 0; i < n - 1; i++) {
    if (nums[i] < nums[i + 1]) {
      continue
    } else {
      flag = 0;
    }
  }
  if (flag) return true;

  return false;

};

const getP = (n) => {
  let res = [];
  for (let i = 2; i < n; i++) {
    let flag = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j == 0) {
        flag = false;
      }
    }
    if (flag == true) {
      res.push(i)
    }
  }
  return res;
}


let nums1 = [4, 9, 6, 10]
let nums2 = [6, 8, 11, 12]
let nums3 = [5, 8, 3]

console.log(primeSubOperation(nums3));

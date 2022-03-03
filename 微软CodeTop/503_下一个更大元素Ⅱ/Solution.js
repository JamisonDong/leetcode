/**
 * @param {number[]} nums
 * @return {number[]}
 */
// const nextGreaterElements = function (nums) {
//   let res = []
//   let i = 0, j = 1
//   while (i < nums.length) {
//     if (i === j) {
//       res.push(-1)
//       i++
//       j++
//     }
//     if (nums[j] > nums[i]) {
//       res.push(nums[j])
//       i++
//       j = i + 1
//     } else {
//       j++
//     }
//     j %= (nums.length)
//   }
//   return res
// };
// 单调栈
const nextGreaterElements = function (nums) {
  let stack = []
  let len = nums.length
  let res = new Array(len).fill(-1);
  // 增加长度
  for (let i = 0; i < nums.length * 2 - 1; i++) {
    // 栈顶元素小于当前元素 当前元素为栈顶元素的下一个更大元素
    // 栈顶元素大于当前元素，则当前元素是前面一些元素的下一个更大元素 逐个弹出栈顶元素 直到当前元素比栈顶元素小为止
    while (stack.length && nums[stack[stack.length - 1]] < nums[i % len]) {
      res[stack[stack.length - 1]] = nums[i % len]
      stack.pop()
    }
    // 栈为空则入栈 || 栈顶元素大于当前元素的值
    stack.push(i % len)
  }
  return res
}

const nums = [5, 4, 3, 2, 1]
console.log(nextGreaterElements(nums));
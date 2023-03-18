/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
  this.nums = nums;
  this.original = nums.slice();

};

/**
* @return {number[]}
*/
Solution.prototype.reset = function () {
  this.nums = this.original.slice();
  return this.nums;
};

/**
* @return {number[]}
*/
// Solution.prototype.shuffle = function () {
//   const shuffled = new Array(this.nums.length).fill(0);
//   const list = [...this.nums];
//   for (let i = 0; i < this.nums.length; i++) {
//     const j = Math.random() * list.length;
//     shuffled[i] = list.splice(j, 1)[0];
//   }
//   return shuffled;
// };
// 优化
Solution.prototype.shuffle = function () {
  for (let i = 0; i < this.nums.length; i++) {
    const j = Math.floor(Math.random() * (this.nums.length - i)) + i;
    [this.nums[i], this.nums[j]] = [this.nums[j], this.nums[i]]
  }
  return this.nums;
};


// 回溯暴力 超时
/* Solution.prototype.permute = function (nums) {
  const res = []
  const path = []

  function backtracking (nums, used) {
    if (path.length === nums.length) {
      res.push([...path])
      return
    }
    for (let i = 0; i < nums.length; i++) {
      // 每个元素在一个排列中只能使用一次
      if (used[i]) continue
      used[i] = true
      path.push(nums[i])
      backtracking(nums, used)
      path.pop()
      used[i] = false
    }
  }

  backtracking(nums, new Array(nums.length).fill(false))

  return res
} */


let Sol = new Solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
// console.log(Sol.reset());
console.log(Sol.shuffle());
console.log(Sol.shuffle());
console.log(Sol.shuffle());
console.log(Sol.shuffle());
console.log(Sol.shuffle());
console.log(Sol.shuffle());
console.log(Sol.shuffle());


/**
* Your Solution object will be instantiated and called as such:
* var obj = new Solution(nums)
* var param_1 = obj.reset()
* var param_2 = obj.shuffle()
*/
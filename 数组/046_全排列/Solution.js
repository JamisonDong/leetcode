/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  if (nums.length === 1) {
    return [nums]
  }
  let cur = []
  for (let i of nums) {
    const arr = nums.filter(item => item !== i)
    permute(arr).forEach(item => {
      cur.push([i, ...item])
    })
  }
  return cur
};

var nums = [1, 2, 3]
console.log(permute(nums));
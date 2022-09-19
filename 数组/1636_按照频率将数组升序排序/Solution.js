/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function (nums) {
  let map = new Map();
  for (let num of nums) {
    if (map.has(num)) {
      map.set(num, map.get(num) + 1);
    } else {
      map.set(num, 1);
    }
  }
  nums.sort((a, b) => {
    const cnt1 = map.get(a),
      cnt2 = map.get(b);
    return cnt1 !== cnt2 ? cnt1 - cnt2 : b - a;
  });

  return nums;
};

let nums = [1, 1, 2, 2, 2, 3];
console.log(frequencySort(nums));

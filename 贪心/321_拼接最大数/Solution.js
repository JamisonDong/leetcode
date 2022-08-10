/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[]}
 */
var maxNumber = function (nums1, nums2, k) {
  const pickmax = (nums, k) => {
    let stack = [];
    let remain = nums.length - k;
    for (let i of nums) {
      while (stack.length && i > stack[stack.length - 1] && remain) {
        stack.pop();
        remain--;
      }
      stack.push(i);
    }
    return stack.slice(0, k);
  };
  const merge = (A, B) => {
    let res = [];
    while (A.length || B.length) {
      let bigger = A > B ? A : B;
      res.push(bigger.shift());
    }
    return res;
  };
  let res = new Array(k).fill(0);
  const len1 = nums1.length;
  const len2 = nums2.length;
  if (len1 + len2 === k) {
    return merge(pickmax(nums1, len1), pickmax(nums2, len2));
  }
  for (let i = 1; i <= k; i++) {
    if (i <= len1 && k - i <= len2) {
      const curRes = merge(pickmax(nums1, i), pickmax(nums2, k - i));
      res = curRes > res ? curRes : res;
    }
  }
  return res;
};

console.log(
  maxNumber(
    [
      5, 7, 7, 0, 1, 6, 7, 2, 2, 4, 6, 8, 9, 2, 0, 9, 8, 7, 6, 3, 9, 4, 8, 8, 4,
      5, 3, 3, 7, 4, 3, 2, 8, 9, 8, 4, 0, 2, 0, 2, 2, 0, 4, 2, 2, 8, 6, 7, 1, 0,
      8, 7, 5, 4, 6, 4, 1, 7, 4, 4, 3, 7, 5, 8, 8, 0, 3, 1, 3, 4, 6, 0, 6, 9, 6,
      6, 4, 2, 1, 9, 3, 7, 4, 4, 4, 2, 1, 9, 5, 2, 1, 7, 6, 0, 1, 3, 5, 3, 7, 7,
    ],
    [8, 3, 7, 8, 6, 9, 1, 5, 5, 0, 5, 2, 8, 7, 8, 3, 3, 7, 9, 2],
    100,
  ),
);

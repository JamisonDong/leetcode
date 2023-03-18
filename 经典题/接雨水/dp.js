/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  const n = height.length;
  const maxLeft = new Array(n).fill(0);
  const maxRight = new Array(n).fill(0);

  for (let i = 1; i < n; i++) {
    maxLeft[i] = Math.max(height[i - 1], maxLeft[i - 1])
  }
  for (let i = n - 2; i >= 0; i--) {
    maxRight[i] = Math.max(height[i + 1], maxRight[i + 1])
  }
  let ans = 0;
  for (let i = 0; i < n; i++) {
    let subHeight = Math.min(maxLeft[i], maxRight[i]);
    if (subHeight > height[i]) {
      ans += subHeight - height[i]
    }
  }
  return ans;
};

const height = [4, 2, 0, 3, 2, 5];
console.log(trap(height));
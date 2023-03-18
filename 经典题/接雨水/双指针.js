/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  const n = height.length;
  let left = 1, right = n - 2;
  let maxLeft = 0, maxRight = 0;
  let ans = 0;
  while (left <= right) {
    // 从左往右
    if (height[left - 1] < height[right + 1]) {
      maxLeft = Math.max(height[left - 1], maxLeft);
      if (maxLeft > height[left]) {
        ans += maxLeft - height[left];
      }
      left++;
    } else {
      maxRight = Math.max(height[right + 1], maxRight);
      if (maxRight > height[right]) {
        ans += maxRight - height[right];
      }
      right--;
    }
  }
  return ans;
};

const height = [4, 2, 0, 3, 2, 5];
console.log(trap(height));
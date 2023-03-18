/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let ans = 0;
  const stack = [];
  let current = 0;
  const n = height.length;
  while (current < n) {
    while (stack.length && height[current] > height[stack[stack.length - 1]]) {
      let h = height[stack[stack.length - 1]];
      stack.pop();
      if (!stack.length) {
        break;
      }
      let distance = current - stack[stack.length - 1] - 1;
      let min = Math.min(height[stack[stack.length - 1]], height[current]);
      ans += distance * (min - h);
    }
    stack.push(current);
    current++;
  }
  return ans;
};

const height = [4, 2, 0, 3, 2, 5];
console.log(trap(height));
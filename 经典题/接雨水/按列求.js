/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let ans = 0;
  for (let i = 0; i < height.length; i++) {
    const subHeight = getSubHeight(height, i);
    if (subHeight > height[i]) {
      ans += subHeight - height[i];
    }
  }
  return ans;
};

const getSubHeight = (height, index) => {
  let subHeight1 = height[index];
  let subHeight2 = height[index];

  for (let i = 0; i < index; i++) {
    if (height[i] > subHeight1) {
      subHeight1 = height[i];
    }
  }
  for (let i = index + 1; i < height.length; i++) {
    if (height[i] > subHeight2) {
      subHeight2 = height[i];
    }
  }
  return subHeight1 < subHeight2 ? subHeight1 : subHeight2;
}
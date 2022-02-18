/**
 * @param {number[]} height
 * @return {number}
 */
// var maxArea = function (height) {
//   let res = 0
//   for (let i = 0; i < height.length - 1; i++) {
//     for (let j = i + 1; j < height.length; j++) {
//       if (height[i] >= height[j]) {
//         res = height[j] * (j - i) > res ? height[j] * (j - i) : res
//       } else {
//         res = height[i] * (j - i) > res ? height[i] * (j - i) : res
//       }
//     }
//   }

//   return res
// };


var maxArea = function (height) {
  let res = 0
  let left = 0
  let right = height.length - 1
  while (right > left) {
    let h = height[right] >= height[left] ? height[left] : height[right]
    let cur = h * (right - left)
    res = cur > res ? cur : res
    if (height[left] < height[right]) {
      left++
    } else {
      right--
    }
  }
  return res
}


var height = [2, 3, 4, 5, 18, 17, 6]
console.log(maxArea(height));
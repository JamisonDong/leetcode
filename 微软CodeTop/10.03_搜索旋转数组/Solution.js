/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var search = function (arr, target) {
  const len = arr.length
  let i = 0
  while (i < len) {
    if (arr[i] === target) {
      return i
    }
    if (arr[i + 1] && arr[i + 1] < arr[i]) {
      break
    } else {
      i++
    }
  }
  let left = i + 1
  let right = len - 1
  while (left <= right) {
    let middle = Math.floor(left + (right - left) / 2)
    if (arr[middle] === target) {
      while (middle > 0 && arr[middle - 1] === arr[middle]) {
        middle--
      }
      return middle
    } else if (arr[middle] > target) {
      right = middle - 1
    } else {
      left = middle + 1
    }

  }
  return -1
};


var search = function (arr, target) {
  const len = arr.length
  let left = 0
  let right = len - 1
  if (right === -1) return -1
  while (left <= right) {
    // 当left符合时直接返回, 因为找的是最小的索引
    if (arr[left] === target) return left
    let mid = Math.floor(left + (right - left) / 2)
    // 当中间值等于目标值，将右边界移到中间，因为左边可能还有相等的值
    if (arr[mid] === target) {
      right = mid
    } else if (arr[0] < arr[mid]) {
      if (arr[0] <= target && target < arr[mid]) {
        right = mid - 1
      } else {
        left = mid + 1
      }
    } else if (arr[0] > arr[mid]) {
      if (arr[mid] < target && target <= arr[len - 1]) {
        left = mid + 1
      } else {
        right = mid - 1
      }
    } else {
      // 当中间数字与左边数字相等时，将左边界右移
      left += 1
    }
  }
  return -1
};

var arr = [1, 1, 1, 1, 1, 2, 1, 1, 1], target = 2
console.log(search(arr, target));
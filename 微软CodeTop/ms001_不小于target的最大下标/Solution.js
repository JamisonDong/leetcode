/**
 * 给定一个数字和一个target，返回数组中不大于target的元素最大下标
 * @param {number []} list
 * @param {number} target
 * @return {number}
 */

const maxIndex = (list, target) => {
  let left = 0
  let right = list.length - 1
  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2)
    if (list[mid] > target) {
      right = mid - 1
    } else {
      if (mid === list.length - 1 || list[mid + 1] > target) {
        return mid
      } else {
        left = mid + 1
      }
    }
  }

  return -1
}

const list = [1, 2, 2, 5, 6], target = 5
console.log(maxIndex(list, target));
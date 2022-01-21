/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function (arr, k) {
    return arr.sort((a, b) => a - b).slice(0, k);
};



function partition(arr, start, end) {
    const k = arr[start];
    let left = start + 1,
        right = end;
    while (1) {
        while (left <= end && arr[left] <= k) ++left;
        while (right >= start + 1 && arr[right] >= k) --right;

        if (left >= right) {
            break;
        }

        [arr[left], arr[right]] = [arr[right], arr[left]];
        ++left;
        --right;
    }
    [arr[right], arr[start]] = [arr[start], arr[right]];
    return right;
}

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function(arr, k) {
    const length = arr.length;
    if (k >= length) return arr;
    let left = 0,
        right = length - 1;
    let index = partition(arr, left, right);
    while (index !== k) {
        if (index < k) {
            left = index + 1;
            index = partition(arr, left, right);
        } else if (index > k) {
            right = index - 1;
            index = partition(arr, left, right);
        }
    }

    return arr.slice(0, k);
};




//测试用例
const arr = [4, 2, 9, 99, 0, 199, 100, 22, 1, 8, 96, 92, 98];
console.log(getLeastNumbers(arr, 3));
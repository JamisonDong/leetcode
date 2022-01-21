/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// var findKthLargest = function (nums, k) {
//     return nums.sort((a, b) => b - a)[k - 1]
// };


var findKthLargest = (nums, k) => {
    const n = nums.length;

    const quick = (l, r) => {
        if (l > r) return;
        let random = Math.floor(Math.random() * (r - l + 1)) + l; // 随机选取一个index
        swap(nums, random, r);  // 将它和位置r的元素交换，让 nums[r] 作为 pivot 元素

        // 选定一个 pivot 元素，根据它进行分区。让左边的元素都比pivot小，右边的元素都比pivot大
        let pivotIndex = partition(nums, l, r);
        // 希望pivotIndex 正好是 n-k，如果小于他，则再其左边继续查找，如果大于他，就在其右边继续查找
        if (n - k < pivotIndex) {
            quick(l, pivotIndex - 1);
        } else {
            quick(pivotIndex + 1, r);
        }
    };

    quick(0, n - 1);
    return nums[n - k];
};

function partition(nums, left, right) {
    let pivot = nums[right];
    let pivotIndex = left;
    // 遍历数组，和pivot进行比较，如果比他小，就将他换到pivotIndex的位置              
    for (let i = left; i < right; i++) {
        if (nums[i] < pivot) {
            swap(nums, i, pivotIndex);
            pivotIndex++;
        }
    }
    // 循环结束之后， pivotIndex左边都是比pivot小的数，让其与right交换，更新pivot元素                                  
    swap(nums, right, pivotIndex);
    return pivotIndex;
}

// 交换函数
function swap(nums, p, q) {
    const temp = nums[p];
    nums[p] = nums[q];
    nums[q] = temp;
}

/**
 * @param {number[]} nums 
 * @param {number} k 
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    const n = nums.length
    const quick = (l, r) => {
        if (l > r) return
        let random = Math.floor(Math.random() * (r - l + 1)) + l
        swap(nums, random, r)
        let pivotIndex = partition(nums, l, r)
        if (n - k < pivotIndex) {
            quick(l, pivotIndex - 1)
        } else {
            quick(pivotIndex + 1, r)
        }
    }

    quick(0, n - 1)
    return nums[n - k]
};

function swap(nums, p, q) {
    const temp = nums[p]
    nums[p] = nums[q]
    nums[q] = temp
}

function partition(nums, left, right) {
    let pivot = nums[right]
    let pivotIndex = left
    for (let i = left; i < right; i++) {
        if (nums[i] < pivot) {
            swap(nums, i, pivotIndex)
            pivotIndex++
        }
    }
    swap(nums, right, pivotIndex)
    return pivotIndex
}
var nums = [1], k = 1
console.log(findKthLargest(nums, k));
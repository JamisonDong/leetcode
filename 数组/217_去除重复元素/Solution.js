/**
 * @param {number[]} nums
 * @return {boolean}
 * 给定一个整数数组，判断是否存在重复元素。
 * 如果存在一值在数组中出现至少两次，函数返回 true 。
 * 如果数组中每个元素都不相同，则返回 false 。
 */
// 暴力
var containsDuplicate = function (nums) {
    var len = nums.length
    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            if (nums[i] === nums[j]) {
                return true
            }
        }
    }
    return false
};

/**
 * 方法一：排序
    在对数字从小到大排序之后，数组的重复元素一定出现在相邻位置中。
    因此，我们可以扫描已排序的数组，每次判断相邻的两个元素是否相等，
    如果相等则说明存在重复的元素。
 */
var containsDuplicate = function (nums) {
    // 升序
    nums.sort((a, b) => a - b)
    const len = nums.length
    for (let i = 0; i < len - 1; i++) {
        if (nums[i] === nums[i + 1]) { return true }
    }

    return false
};


/**
 * 哈希表
 * 对于数组中每个元素，我们将它插入到哈希表中。如果插入一个元素时发现该元素已经存在于哈希表中，则说明存在重复的元素。
 */
var containsDuplicate = function (nums) {
    const set = new Set()
    for(let i of nums){
        if(set.has(i)){
            return true
        }else{
            set.add(i)
        }
    }

    return false
};
var nums = [1, 2, 3, 4, 1]
console.log(containsDuplicate(nums));

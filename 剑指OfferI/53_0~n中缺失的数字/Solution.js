/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    let len = nums.length
    let i = 0
    while (i <= len) {
        if (i === nums[i]) {
            i++
            continue
        }
        return i
    }

};

// 二分
var missingNumber = function (nums) {
    let right = nums.length - 1
    let left = 0
    while (left <= right) {
        let middle = Math.floor((left + right) / 2)
        if(nums[middle]=== middle){
            left = middle+1
        }else{
            right = middle -1
        }
    }

    return left
}


var nums = [0]
console.log(missingNumber(nums))
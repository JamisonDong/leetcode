/**
 * @param (number[]) nums
 * @return (number[])
 */

var sortArray = function (nums) {



    return nums
}

function swap(nums,left,right){
    var temp =nums[left]
    nums[left] = nums[right]
    nums[right] = temp
}

var nums = [5, 1, 1, 2, 0, 0]
console.log(sortArray(nums));
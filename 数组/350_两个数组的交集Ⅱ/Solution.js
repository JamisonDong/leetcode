/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * 给定两个数组，编写一个函数来计算它们的交集。
 */
var intersect = function (nums1, nums2) {

    if (nums1.length > nums2.length) {
        return intersect(nums2, nums1)
    }
    var map = new Map()
    var ans = []

    nums1.forEach((x) => {
        if (map.has(x)) {
            map.set(x, map.get(x) + 1)
        } else {
            map.set(x, 1)
        }
    })
    nums2.forEach((x) => {
        if (map.has(x)) {
            if (map.get(x) > 0) {
                map.set(x, map.get(x) - 1)
                ans.push(x)
            }
        }
    })
    return ans
};

// 当两个数组有序时使用排序+双指针法
var intersect = function (nums1, nums2) {
    var ans = []
    nums1.sort((a, b) => a - b)
    nums2.sort((a, b) => a - b)
    var i = 0, j = 0
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] === nums2[j]) {
            ans.push(nums1[i])
            i++
            j++
        } else if (nums1[i] < nums2[j]) {
            i++
        } else {
            j++
        }
    }

    return ans
};

var nums1 = [1, 2, 2, 1], nums2 = [2, 2]
console.log(intersect(nums1, nums2));
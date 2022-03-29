function sol(arr, n) {
    let len = arr.length
    if (len < n) return arr
    let res = 0
    let max = 0
    for (let i = 0; i < n; i++) {
        max += arr[i]
    }
    for (let i = 1; i < len; i++) {
        let cur = 0
        cur = getSum(arr, i, i + n)
        if (cur > max) {
            max = cur
            res = i
        }
    }

    let j = n
    let ans = []
    while (j > 0) {
        ans.push(arr[res])
        res++
        j--
    }
    return ans// arr的长度为n的子数组，且在所有长度为n的子数组中的和最大

}

function getSum(arr, l, r) {
    if (r > arr.length) {
        return 0
    }
    let sum = 0
    for (let i = l; i < r; i++) {
        sum += arr[i]
    }
    return sum
}


let arr = [1, 2, 3, 4, 5, 3, 4, 2, 1]
console.log(sol(arr, 4))
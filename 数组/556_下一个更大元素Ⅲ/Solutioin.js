/**
 * @param {number} n
 * @return {number}
 * 给你一个正整数 n ，请你找出符合条件的最小整数，其由重新排列 n 中存在的每位数字组成，并且其值大于 n 。
 * 如果不存在这样的正整数，则返回 -1 。
 * 注意 ，返回的整数应当是一个 32 位整数 ，如果存在满足题意的答案，但不是 32 位整数 ，同样返回 -1 。
 */
var nextGreaterElement = function (n) {
    console.log(n);
    let str = n.toString().split('').map(Number)
    let i = str.length - 2, j = str.length - 1
    while (i >= 0 && str[i + 1] <= str[i]) {
        i--
    }
    if (i < 0) {
        return -1
    }
    while (j >= 0 && str[j] <= str[i]) {
        j--
    }
    swap(str, i, j)
    reverse(str, i + 1)
    function swap(str, i, j) {
        let temp = str[i];
        str[i] = str[j];
        str[j] = temp;
    }
    function reverse(str, start) {
        let i = start, j = str.length - 1;
        while (i < j) {
            swap(str, i, j);
            i++;
            j--;
        }
    }
    let res = Number(str.join(''))
    return res > 2 ** 31 - 1 ? -1 : res;
};

var nextGreaterElement = function(n) {
    let s = ('' + n).split('');
    let i = s.length - 2;
    while (s[i] >= s[i + 1]) i--; // 从右开始，找第一个严格降序的数字
    if (i < 0) return -1; // 不存在，返回-1
    let j = s.length - 1;
    while (s[j] <= s[i]) j--; // 从右开始，找到第一个比上一步找到数字大的
    [ s[i], s[j] ] = [ s[j], s[i] ]; // 换位
    let res = parseInt(s.slice(0, i + 1).join('') + s.slice(i + 1).reverse().join('')); // 反转右边
    return res > 2 ** 31 - 1 ? -1 : res;
};


var n = 2147483476
console.log(nextGreaterElement(n));
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 * 计算两个数之和
 * @param s string字符串 表示第一个整数
 * @param t string字符串 表示第二个整数
 * @return string字符串
 */
function solve(s, t) {
    // write code here
    if (s == '') return t
    if (t == '') return s
    if (s == '' && t == '') return ''
    let res = []
    let i = s.length - 1, j = t.length - 1, plus = 0
    while (i >= 0 || j >= 0 || plus !== 0) {
        let p = i >= 0 ? s[i] - 0 : 0
        let q = j >= 0 ? t[j] - 0 : 0
        let sum = p + q + plus
        let cur = sum % 10
        res.unshift(cur)
        plus = sum >= 10 ? 1 : 0
        j--
        i--
    }
    return res.join('')
}
var s = '9', t = '99999999999999999999999999999999999999999999999999999999999994'
console.log(solve(s, t));
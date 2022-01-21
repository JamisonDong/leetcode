/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function (n) {
    let res = []
    let num = 1
    while (res.length < n) {
        while (num <= n) {
            res.push(num)
            num *= 10
        }
        while (num % 10 === 9 || num > n) {
            num = Math.floor(num / 10)
        }
        num++
    }
    return res
};


console.log(lexicalOrder(13));
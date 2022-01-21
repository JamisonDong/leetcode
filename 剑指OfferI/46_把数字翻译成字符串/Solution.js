/**
 * @param {number} num
 * @return {number}
 */
var translateNum = function (num) {
    let src = num.toString()
    let a = 1, b = 1
    for (let i = 2; i <= src.length; i++) {
        let pre = src.substring(i - 2, i)

        let c = (Number(pre) <= 25 && Number(pre) >= 10) ? a + b : a
        console.log(a, b, c);
        b = a
        a = c
    }
    return a
};

let num = 25
console.log(translateNum(num));

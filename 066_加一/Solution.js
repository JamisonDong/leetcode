/**
 * @param {number[]} digits
 * @return {number[]}
 * 给定一个由 整数 组成的 非空 数组所表示的非负整数，在该数的基础上加一。
 * 最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。
 * 你可以假设除了整数 0 之外，这个整数不会以零开头。
 */
// var plusOne = function (digits) {
//     let s_digits = digits.join('')
//     let n_digits = Number.parseInt(s_digits) + 1
//     console.log(n_digits);
//     // 61453902 => [6, 1, 4, 5, 3, 9, 0, 2]
//     let s2_digits = n_digits.toString().split('').map(_ => +_)

//     return s2_digits
// };
var plusOne = function (digits) {
    let len = digits.length 
    var flag = 1, i = len - 1
    if(len === 1 && digits[0] === 9){
        return [1, 0]
    }
    while(i>=0 && flag===1){
        if(digits[i] * 1 + 1 === 10){
            digits[i] = 0
            flag = 1
            --i
            
        }else{
            digits[i] = digits[i] * 1 + 1 
            flag = 0
        }
        if(i===-1 && flag === 1){
            digits.unshift(1)
        }
    }

    return digits
};
var digits = [9,9]
console.log(plusOne(digits));
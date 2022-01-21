/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 * 给你两个二进制字符串，返回它们的和（用二进制表示）。
 * 输入为 非空 字符串且只包含数字 1 和 0。
 */
var addBinary = function (a, b) {
    let ans = ''
    let ca = 0
    for(let i = a.length -1, j = b.length -1; i>=0||j>=0;i--,j--){
        let sum = ca
        sum += i>=0? parseInt(a[i]):0
        sum += j>=0? parseInt(b[j]):0
        ans += sum % 2
        ca = Math.floor(sum / 2);
    }
    ans += ca == 1 ? ca : '';
    return ans.split('').reverse().join('');
};

// var addBinary = function(a, b) {
//     let ans = "";
//     let ca = 0;
//     for(let i = a.length - 1, j = b.length - 1;i >= 0 || j >= 0; i--, j--) {
//         let sum = ca;
//         sum += i >= 0 ? parseInt(a[i]) : 0;
//         sum += j >= 0 ? parseInt(b[j]) : 0;
//         ans += sum % 2;
//         ca = Math.floor(sum / 2);
//     }
//     ans += ca == 1 ? ca : "";
//     return ans.split('').reverse().join('');
// };


var a = "10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101",
b = "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011"
console.log(addBinary(a, b));
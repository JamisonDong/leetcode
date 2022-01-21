/**
 * @param {number} x
 * @return {number}
 */
//  var reverse = function(x) {
//     let res = 0;
//     while( x!== 0){
//         res = x * 10 + x % 10
//         if(res > Math.pow(2,31) -1 || res < Math.pow(-2,31)) return 0;
//         x =  ~~(x / 10);
//     }
//     return res;
// };

 /* ~是js里的按位取反操作符，~~就是执行两次按位取反，其实就是保持原值，
但是注意虽然是原值，但是对布尔型变量执行这个操作，
会转化成相应的数值型变量，
也就是~~true === 1，~~false === 0。 */
var reverse = function(x) {
    let rev = 0;
    while (x !== 0) {
        const digit = x % 10;
        x = ~~(x / 10);
        rev = rev * 10 + digit;
        if (rev < Math.pow(-2, 31) || rev > Math.pow(2, 31) - 1) {
            return 0;
        }
    }
    return rev;
};


console.log(reverse(12345));
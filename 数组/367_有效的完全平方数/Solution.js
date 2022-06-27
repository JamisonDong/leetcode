/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
    let right = Math.floor(num / 2);
    let left = 1;
    if (num === 1) return true;
    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2);
        if (mid * mid === num) return true;
        else if (mid * mid > num) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return false;
};

var num = 1;
console.log(isPerfectSquare(num));

var num = 14;
console.log(isPerfectSquare(num));

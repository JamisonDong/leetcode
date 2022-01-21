/**
 * @param {number} x
 * @return {boolean}
 */
/*  var isPalindrome = function(x) {
    if (x < 0 || (x % 10 == 0 && x != 0)) {
        return false;
    }
    let y = 0;
    while(x>y){
        y = y*10 + x%10;
        x = ~~(x/10);
        console.log(x,y);
    }
    return x == y || x == ~~(y/10);

}; */

var isPalindrome = function(x) {
    if(x < 0 || (!(x % 10) && x)) return false;
    let x2 = x, res = 0;
    while(x2){
        res = res * 10 + x2 % 10;
        x2 = ~~(x2 / 10);
    }
    return res === x;
};


/* let isPalindrome = function (x) {
    let arr = x.toString().split('').reverse().join('');
    if (x >= (-2) ** 31 && x <= 2 ** 31 - 1) {
        let result = (x == arr) ? true : false;
        return result;
    } else {
        return false;
    }
}; */

console.log(isPalindrome(121));
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    if (x === 0 || x === 1) return x
    var l = -1
    var r = x
    while (l + 1 !== r) {
        var mid = Math.floor((l + r) / 2)
        if (mid * mid <= x) {
            l = mid
        } else {
            r = mid
        }
    }
    return l
};
var mySqrt = function(x) {
    let n = x
    while( n * n > x){
        n = Math.floor((n+x/n)/2)
    }
    return n
};
var mySqrt = function (x){
    let l = 0;
    let r = x
    while( l < r ){
        let mid = l+r+1 >> 1
        if(mid <= x / mid){
            l = mid 
        }else{
            r = mid - 1
        }
    }
    return l
}

var x = 8
console.log(mySqrt(x));
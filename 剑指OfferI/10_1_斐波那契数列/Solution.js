/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
    let n1 = 0, n2 = 1, sum = 0
    for (let i = 0; i < n; i++) {
        sum = (n1 + n2) % 1000000007
        n1 = n2
        n2 = sum
    }
    return n1
};

var fib = function (n) {
    const MOD = 1000000007;
    if (n < 2) {
        return n;
    }
    let p = 0, q = 0, r = 1;
    for (let i = 2; i <= n; ++i) {
        p = q;
        q = r;
        r = (p + q) % MOD;
    }
    return r;
};

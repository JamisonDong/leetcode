/**
 * @param {number} n
 * @return {number}
 */
var numWays = function (n) {
    if (n === 0) return 1
    if (n <= 2) {
        return n
    }
    const MOD = 1000000007
    let n1 = 0, n2 = 1, n3 = 2
    for (let i = 2; i < n; i++) {
        n1 = n2
        n2 = n3
        n3 = (n1 + n2) % MOD
    }
    return n3
};

console.log(numWays(7))
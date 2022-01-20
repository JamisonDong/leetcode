/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function (s, n) {
    let s1 = s.slice(0,n)
    let s2 = s.slice(n,s.length)
    let res = s2+s1

    return res
};

var s = "lrloseumgh", k = 6
console.log(reverseLeftWords(s, k));
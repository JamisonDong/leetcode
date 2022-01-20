/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    if (s.length < 2) {
        return s
    }
    let res = ''
    for (let i = 0; i < s.length; i++) {
        helper(s, i, i)
        helper(s, i, i + 1)
    }
    function helper(s, i, j) {
        while (i >= 0 && j < s.length && s[i] == s[j]) {
            i--
            j++
        }
        if (j - i - 1 > res.length) {
            res = s.slice(i + 1, j)
        }
    }
    return res

};


var s = "babad"
console.log(longestPalindrome(s));
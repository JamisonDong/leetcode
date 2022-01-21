/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let i = -1, j = 0
    let len = s.length
    let map = new Map()
    let maxLen = 0
    while (j < len) {
        if (map.has(s[j])) {
            i = Math.max(map.get(s[j]), i)
        }
        maxLen = Math.max(j - i, maxLen)
        map.set(s[j], j)
        j++
    }
    return maxLen
};

let s = "abcabcbb"
console.log(lengthOfLongestSubstring(s));
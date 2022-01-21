/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function (s) {
    let res = 0
    let map = {}
    for (let left = 0, right = 0; right < s.length; right++) {
        const char = s[right]
        if(map[char]>=0 && map[char]>=left){
            left = map[char]+1
        }
        res = Math.max(right-left+1,res)
        map[char] = right
    }
    return res
}
var s = "abcabcbb"
console.log(lengthOfLongestSubstring(s));
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。
 * 注意：若 s 和 t 中每个字符出现的次数都相同，则称 s 和 t 互为字母异位词。
 */
var isAnagram = function (s, t) {
    let len1 = s.length
    let len2 = t.length
    if (len1 !== len2) {
        return false
    }
    let map = new Map()
    for (let [i, ch] of Array.from(s).entries()) {
        if (map.has(ch)) {
            map.set(ch, map.get(ch) + 1)
        } else {
            map.set(ch, 1)
        }
    }
    for (let [i, ch] of Array.from(t).entries()) {
        if (!map.has(ch)) {
            return false
        } else {
            if (map.get(ch) > 0) {
                map.set(ch, map.get(ch) - 1)
            } else {
                return false
            }
        }
    }
    return true
};

// 排序
var isAnagram = function (s, t) {
    return s.length == t.length && [...s].sort().join('') === [...t].sort().join('')
}

// 哈希表
var isAnagram = function (s, t) {
    if (s.length !== t.length) {
        return false;
    }
    const table = new Array(26).fill(0);
    for (let i = 0; i < s.length; ++i) {
        table[s.codePointAt(i) - 'a'.codePointAt(0)]++;
    }
    for (let i = 0; i < t.length; ++i) {
        table[t.codePointAt(i) - 'a'.codePointAt(0)]--;
        if (table[t.codePointAt(i) - 'a'.codePointAt(0)] < 0) {
            return false;
        }
    }
    return true;
};

var isAnagram = function (s, t) {
    if (s.length !== t.length) {
        return false
    }
    var table = new Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
        table[s.charCodeAt(i)-'a'.charCodeAt()]++
        table[t.charCodeAt(i)-'a'.charCodeAt()]--
    }
    for (let i = 0; i < 26; i++) {
        if (table[i] !== 0) {
            return false
        }
    }
    return true
}

var s = "rat", t = "car"
console.log(isAnagram(s, t));
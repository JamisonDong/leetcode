/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function (s) {
    if (s === '') {
        return ' '
    }
    let map = new Map()
    for (let i of s) {
        if (map.has(i)) {
            map.set(i, map.get(i) + 1)
        } else {
            map.set(i, 1)
        }
    }
    let res = new Array(1).fill(' ')
    let flag = 0
    map.forEach((item, index, map) => {
        if (map.get(index) === 1) {
            flag = 1
            res.push(index)
        }
    })

    return res[flag]
};
var firstUniqChar = function (s) {
    // let arr = s.split("");
    for (let i = 0; i < s.length; i++) {
        k = s.indexOf(s[i]);
        e = s.indexOf(s[i], k + 1);
        if (e == -1) return s[i];
    }
    return " ";
};

var s = "ccd"
console.log(firstUniqChar(s));
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    const ht = new Map();
    for (const c of t) {
        ht.set(c, ht.has(c) ? ht.get(c) + 1 : 1);
    }
    let needType = ht.size;
    let res = "";
    let right = 0;
    let left = 0;
    while (right < s.length) {
        let c = s[right];
        if (ht.has(c)) {
            ht.set(c, ht.get(c) - 1);
            if (ht.get(c) === 0) needType -= 1;
        }
        while (needType === 0) {
            const newRes = s.substring(left, right + 1);
            if (!res || newRes.length < res.length) res = newRes;
            const c2 = s[left];
            if (ht.has(c2)) {
                ht.set(c2, ht.get(c2) + 1);
                if (ht.get(c2) === 1) needType += 1;
            }
            left++;
        }
        right++;
    }
    return res;
};

const s = "ADOBECODEBANC",
    t = "ABC";
console.log(minWindow(s, t));

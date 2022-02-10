function lengthOfLongestSubstring(s: string): number {
    let max = 0
    const subStr: string[] = []

    for (let i = 0; i < s.length; i++) {
        const firstRepeatIndex = subStr.indexOf(s[i])

        if (firstRepeatIndex >= 0) subStr.splice(0, firstRepeatIndex + 1)

        subStr.push(s[i])
        max = Math.max(subStr.length, max)
    }

    return max
};


function lengthOfLongestSubstring(s: string): number {
    let i = 0
    let j = 0
    let max = 0
    while (i < s.length) {
        for (let k = 0; k < i; k++) {
            if (s[k] !== s[i]) {
                continue
            } else {
                max = Math.max(max, i - j)
                j = k + 1
            }
        }
        i++
    }
    return Math.max(max, i - j)
}

function lengthOfLongestSubstring(s: string): number {
    let i = -1
    let j = 0
    let max = 0
    let map = new Map()
    while (j < s.length) {
        if (map.has(s[j])) {
            i = Math.max(map.get(s[j]), i)
        }
        max = Math.max(j - i, max)
        map.set(s[j], j)
        j++
    }

    return max
}

let str = "abcabcbb"
console.log(lengthOfLongestSubstring(str));
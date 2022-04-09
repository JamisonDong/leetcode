function isnixu(x) {
    let y = x * 4
    let temp = []
    while (x) {
        temp.push(Math.floor(x % 10))
        x = Math.floor(x / 10)
    }
    let z = Number(temp.join(""))
    if (y === z) return y
    return false
}

console.log(isnixu(2178));
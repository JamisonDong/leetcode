var m, n
var line
var cur

function isWaterFlower(k) {
  let x = k / 100
  let y = k % 10 / 10
  let z = k % 100
  if (x ** 3 + y ** 3 + z ** 3 === k) {
    return true
  }
  return false
}
while (line = read_line()) {
  cur = line.split(" ")
  m = parseInt(cur[0])
  n = parseInt(cur[1])
  var flag = 0
  for (let i = m; i <= n; i++) {
    if (isWaterFlower(i)) {
      flag = 1
      console.log(i)
    }
  }
  if (!flag) {
    console.log('no')
  }
}
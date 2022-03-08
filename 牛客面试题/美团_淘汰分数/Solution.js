const [n, x, y] = readline().split(" ").map(Number)
let scores = readline().split(" ").map(Number).sort((a, b) => a - b)

const getMinLine = function () {
  if (n < x * 2 || n > y * 2) return -1

  let min = n > x + y ? n - y : x
  while (min < scores.length && scores[min] === scores[min + 1]) min++
  if (n - min < x) {
    return -1
  }
  return scores[min - 1]
}

console.log(getMinLine());

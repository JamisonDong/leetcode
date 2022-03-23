let startTime = new Date().getTime()
let count = 0
// setInterval(function () {
//   let i = 0
//   while (i++ < 10000000);
// }, 0)

function fixed() {
  count++
  let offset = new Date().getTime() - (startTime + count * 1000)
  let nextTime = 1000 - offset
  if (nextTime < 0) nextTime = 0
  setTimeout(fixed, nextTime)

  console.log(new Date().getTime() - (startTime + count * 1000));
}

setTimeout(fixed, 1000)
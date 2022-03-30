let startTime = new Date().getTime()
let count = 0

function fixed() {
  count++
  let offset = new Date().getTime() - (startTime + count * 1000)
  let nextTime = 1000 - offset
  if (nextTime < 0) nextTime = 0
  setTimeout(fixed, nextTime)

  console.log(new Date().getTime() - (startTime + count * 1000));
}

// setTimeout(fixed, 1000)



const Solution = function () {
  let startTime, // 开始时间
    count, // 计数器
    runTime, // 当前时间
    downSecond = 1200,  // 倒计时时间
    loopTimer = null;

  // 重置
  function resetDefaultValue() {
    startTime = new Date().getTime()
    count = 0
    runTime = 0
  }

  function loop() {
    runTime = Date.now();
    let offsetTime = runTime - (startTime + count * 1000); //时间差
    count++;
    let nextTime = 1000 - offsetTime; //下一次定时器需要的时间
    nextTime = nextTime > 0 ? nextTime : 0;
    downSecond--;
    console.log('时间差：' + offsetTime, '，下一次需要时间：' + nextTime)
    if (downSecond <= 0) {
      // 结束定时器
      clearTimeout(loopTimer)
      loopTimer = null;
      return false;
    }
    loopTimer = setTimeout(loop, nextTime);
  }
  resetDefaultValue()
  loop()
}

Solution()
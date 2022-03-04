for (let i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000 * i);
}

function sleep(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, time)
  })
}


(function () {
  for (let i = 0; i < 5; i++) {
    sleep(1000 * i).then(function () {
      console.log(i)
    })
  }
})()
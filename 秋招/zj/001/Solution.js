// 统计说谎的人

// const getNum = (scores) => {
//   scores.sort();
//   console.log(scores);
//   const len = scores.length;
//   let mid = Math.floor((len - 1) / 2);
//   let res = Math.floor(len / 2);
//   for (let i = mid; i >= 0; i--) {
//     if (scores[i] === scores[mid + 1]) {
//       res++;
//     }
//   }
//   return res
// }


const getNum = (scores) => {
  let len = scores.length;
  let res = 0;
  for (let i = 0; i < len; i++) {
    let m = 0;
    let n = 0;
    for (let j = 0; j < len; j++) {
      if (i === j) {
        continue
      } else {
        if (scores[j] <= scores[i]) {
          m++
        } else {
          n++
        }
      }
    }
    if (m >= n) {
      res++
    }
  }
  return res;
}



// const scores = [19, 27, 73, 55, 88];
const scores = [100, 100, 100];
// 3
console.log(getNum(scores));
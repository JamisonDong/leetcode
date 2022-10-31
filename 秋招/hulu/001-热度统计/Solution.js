const getDays = (logs, n) => {
  logs.sort((a, b) => a[1] - b[1]);
  let map = new Map();
  let end = 0
  while (n > 0) {
    for (let item of logs) {
      if (map.has(item[0])) {
        continue;
      } else {
        map.set(item[0], 1)
        n--;
        end = item[1];
      }
    }
  }
  if (n === 0) {
    return end - logs[0][1] + 1
  }
  return -1;
}

/**
 * 
 * [
  [ 'a', 20210101 ],
  [ 'b', 20210101 ],
  [ 'a', 20210101 ],
  [ 'c', 20210102 ],
  [ 'b', 20210105 ],
  [ 'b', 20210110 ]
]

 */
const logs = [
  ['a', 20210101],
  ['b', 20210101],
  ['b', 20210105],
  ['a', 20210101],
  ['b', 20210110],
  ['c', 20210102]
]
let date = new Date('2021-01-01')
let date2 = new Date('2021-01-02')
console.log((date2 - date));
console.log(date2.getDay());


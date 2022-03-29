// 标题
// 打印json中所有叶子节点的路径
// const json_str = {
//   "a": [
//     { "b": "b1" },
//     { "c": "c1" }
//   ],
//   "d": {
//     "e": "e1"
//   }
// }
// 实现一个function，function(json_str)输出:
// ["a.list.b.b1", "a.list.c.c1", "d.e.e1"]


const getRes = (json_str) => {
  let res = []
  let path = []
  function backtracking(obj) {

    for (let i of Object.keys(obj)) {
      path.push(i + ".")
      if (Array.isArray(obj[i])) {
        path.push('list.')
        for (let j of obj[i]) {
          // path.push(".")
          backtracking(j)
          path.pop()
        }
        path.pop()
      } else if (typeof obj[i] === 'object') {
        backtracking(obj[i])
      } else {
        path.push(obj[i])
        res.push([...path].join(""))
      }
      path.pop()
    }
  }

  backtracking(json_str)
  return res
}

const json_str = {
  "a": [
    { "b": "b1" },
    { "c": "c1" }
  ],
  "d": {
    "e": "e1"
  }
}
console.log(getRes(json_str));
// ["a.list.b.b1", "a.list.c.c1", "d.e.e1"]



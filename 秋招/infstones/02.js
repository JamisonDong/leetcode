//初始化树状数据状态
//给定树状结构及被选中的叶子节点数组，计算出每一个节点的选中状态
// status定义为
// 0 所有子节点均未被选中
// 1 同时存在被选中的子节点和未被选中的子节点
// 2 所有子节点均为被选中


/**
 * ["1-1-1","1-1-2","1-2-1"] 
 *
 * {"name":"1","status":0,"children":[{"name":"1-1","status":0,"children":[{"name":"1-1-1","status":0},{"name":"1-1-2","status":0}]},{"name":"1-2","status":0,"children":[{"name":"1-2-1","status":0},{"name":"1-2-2","status":0},{"name":"1-2-3","status":0}]}]}
 */
// let rootObj = {
//   "name": "1", "status": 0, "children":
//     [
//       {
//         "name": "1-1", "status": 0, "children":
//           [
//             { "name": "1-1-1", "status": 0 },
//             { "name": "1-1-2", "status": 0 }
//           ]
//       },
//       {
//         "name": "1-2", "status": 0, "children":
//           [
//             { "name": "1-2-1", "status": 0 },
//             { "name": "1-2-2", "status": 0 },
//             { "name": "1-2-3", "status": 0 }
//           ]
//       }
//     ]
// }

const initTreeStatus = (arr, rootObj) => {

  const helper = (obj, name) => {
    if (obj.name === name) {
      obj.status = '2';
    } else if (obj.children !== undefined) {
      let count = obj.children.length;
      obj.children.forEach(item => {
        helper(item, name);
      })
      let cur = 0
      obj.children.forEach(item => {
        if (item.status === '2') {
          cur++;
        }
      })
      if (cur === count) obj.status = '2';
      if (cur < count && cur > 0) obj.status = '1';
    }
  }
  for (let item of arr) {
    helper(rootObj, item);
  }
  console.log(JSON.stringify(rootObj));
}


let arr = ["1-1-1", "1-1-2", "1-2-1"];
let rootObj = {
  "name": "1", "status": 0, "children":
    [
      {
        "name": "1-1", "status": 0, "children":
          [
            { "name": "1-1-1", "status": 0 },
            { "name": "1-1-2", "status": 0 }
          ]
      },
      {
        "name": "1-2", "status": 0, "children":
          [
            { "name": "1-2-1", "status": 0 },
            { "name": "1-2-2", "status": 0 },
            { "name": "1-2-3", "status": 0 }
          ]
      }
    ]
}
initTreeStatus(arr, rootObj);

/**
 * {"name":"1","status":1,"children":[{"name":"1-1","status":2,"children":[{"name":"1-1-1","status":2},{"name":"1-1-2","status":2}]},{"name":"1-2","status":1,"children":[{"name":"1-2-1","status":2},{"name":"1-2-2","status":0},{"name":"1-2-3","status":0}]}]}
 */
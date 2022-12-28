// 已知数据格式，实现一个函数 fn ，给一个 id 找出链条中其对应的所有的父级 name
// 示例1: 传入 id ddrr2, 返回 广东省深圳市福田区A街道
// 示例2: 传入 id sdsd, 返回 广东省深圳市
const cityData = [{
  id: 'axzx',
  name: '广东省',
  children: [
    {
      id: 'sdsd',
      name: '深圳市',
      children: [
        {
          id: '45dss',
          name: '南山区'
        },
        {
          id: 'sdsd11',
          name: '福田区',
          children: [{
            id: 'ddrr2',
            name: 'A街道'
          }]
        }
      ]
    },
    {
      id: '2323d',
      name: '东莞市',
      children: [
        {
          id: 'xxs2',
          name: 'A区'
        },
        {
          id: 'kklio2',
          name: 'B区',
        }
      ]
    }
  ]
}];


const getAddrDetail = (arr, id) => {
  let res = '';
  const dfs = (arr, id, curRes) => {
    for (const node of arr) {
      if (node.id === id) {
        curRes += node.name;
        res = curRes
      } else if (node.children) {
        curRes += node.name;
        dfs(node.children, id, curRes)
      }
    }
  }

  dfs(arr, id, '');
  return res;
}







console.log(getAddrDetail(cityData, 'ddrr2'))
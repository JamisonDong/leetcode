const JSONData = [
  {
    id: 1001,
    label: "一级目录1",
    show: true,
    children: [
      {
        id: 1008,
        label: "新目录1-1",
        show: true,
        children: [
          {
            id: 1009,
            label: "新目录1-1-1",
            show: true,
            children: [],
          },
        ],
      },
    ],
  },
  {
    id: 1002,
    label: "一级目录2",
    show: true,
    children: [
      {
        id: 1016,
        label: "新目录2-1",
        show: true,
        children: [
          {
            id: 1016,
            label: "新目录2-1-1",
            show: true,
            children: [],
          },
        ],
      },
      {
        id: 1017,
        label: "新目录2-2",
        show: true,
        children: [],
      },
    ],
  },
  {
    id: 1003,
    label: "一级目录3",
    show: true,
    children: [],
  }
];


function getDirLevelArr (JSONData) {
  // 叶子节点数组
  const leafDirArr = [];

  // 获取所有叶子节点
  function getLeafDirArr (_JSONData) {
    for (let i = 0; i < _JSONData.length; i++) {
      if (_JSONData[i].children.length === 0) {
        leafDirArr.push(_JSONData[i].label);
      } else {
        getLeafDirArr(_JSONData[i].children);
      }
    }
  }

  getLeafDirArr(JSONData);

  // 检测是否有重复值
  const initArr = [];
  for (let i = 0; i < leafDirArr.length; i++) {
    if (initArr.indexOf(leafDirArr[i]) < 0) {
      initArr.push(leafDirArr[i]);
    } else {
      alert(`"${leafDirArr[i]}"名称已经重复，请确保所有文件夹中只有一个"${leafDirArr[i]}"。`);
      return false;
    }
  }

  const targetData = {};

  function loops (data = [], parent) {
    return data.map(({ children, label: value }) => {
      const node = {
        value,
        parent,
      };
      targetData[value] = node;
      node.children = loops(children, node);
      return;
    });
  }

  function getNode (value) {
    let node = [];
    let currentNode = targetData[value];
    node.push(currentNode.value);
    if (currentNode.parent) {
      node = [...getNode(currentNode.parent.value), ...node];
    }
    return node;
  }

  loops(JSONData);

  const singalDirLevelArr = [];
  const multiDirLevelArr = [];

  for (let i = 0; i < leafDirArr.length; i++) {
    const target = getNode(leafDirArr[i]);
    if (target.length > 1) {
      multiDirLevelArr.push(target.join("/"));
    } else {
      singalDirLevelArr.push(target.join("/"));
    }
  }

  return {
    singalDirLevelArr,
    multiDirLevelArr
  }
}
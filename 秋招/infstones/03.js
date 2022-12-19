// 2、使用 react 实现一个选择组件，要求如下:
// a、通过参数 options 传入的数组渲染选择组件，label 为展示内容
// b、通过 multiple 参数控制单选 / 多选
// c、onChange 接收一个function，参数为当前选中 value
// d、样式自由发挥，增加基本布局及选中效果

// 调用方式如下:

import React, { useState } from 'react';

export default function Letter ({
  letter,
  onToggle,
  isSelected,
}) {
  return (
    <li className={
      isSelected ? 'selected' : ''
    }>
      <label>
        <input
          type="checkbox"
          checked={isSelected}
          onChange={() => {
            onToggle(letter.id);
          }}
        />
        {letter.subject}
      </label>
    </li>
  )
}

function CheckGroup () {
  const [selectedIds, setSelectedIds] = useState([]);
  const { value, options, multiple, onChange } = props;

  let newData = options.map(item => {…item, isChecked: false });
  const [data, setData] = useState(newData)

  function handleToggle (toggledId) {
    if (multiple) {
      if (selectedIds.includes(toggledId)) {
        setSelectedIds(selectedIds.filter(id =>
          id !== toggledId
        ));
      } else {
        setSelectedIds([
          ...selectedIds,
          toggledId
        ]);
      }
    } else {
      setSelectedIds([
        toggledId
      ]);
    }
  }

  return (
    <>
      <h2>Inbox</h2>
      <ul>
        {newData.map(item => (
          <Letter
            key={item.value}
            letter={item}
            isSelected={
              selectedIds.includes(item.id)
            }
            onToggle={handleToggle}
          />
        ))}
        <hr />
      </ul>
    </>
  );
}

<CheckGroup
  value={checkedValue}
  options={[{
    value: 1,
    label: '选项A'
  }, {
    value: 2,
    label: '选项B'
  }]}
  multiple={true}
  onChange={handleChange}
/>



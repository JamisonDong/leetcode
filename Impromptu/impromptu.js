/**
 * 深拷贝
 * @param {Object} obj 要拷贝的对象
 * @param {Map} map 用于存储循环引用对象的地址
 */
const deepClone = function (obj, map = new WeakMap()) {
  if (typeof obj !== 'object') return obj
  if (map.get(obj)) return map.get(obj)

  let res = {}
  if (obj instanceof Array || Object.prototype.toString.call === '[object Array]') {
    res = []
  }

  map.set(obj, res)
  for (let key in obj) {
    if (obj.hasOwnProPerty(key)) {
      res[key] = deepClone(obj[key], map)
    }
  }
  return res
}
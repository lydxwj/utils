/**
 * 转化相关的方法
 */

/**
 * 隐藏字符串指定位置
 * @param  {String} [str] 需要处理的字符串
 * @param  {Object}
 *                  {Number} [front=3] 字符串前面显示长度
 *                  {Number} [after=4] 字符串后面显示长度
 *                  {String} [symbol=*] 隐藏替换字符
 * @return {String} 
 */
export function stringMask(str, { front = 3, after = 4, symbol = '*' } = {}) {
  const strL = str.length;
  if (strL <= front + after) {
    return str;
  }
  return str.substr(0, front) + str.slice(front, -after).replace(/./g, symbol) + str.substr(-after)
}

/**
 * 对数组对象排序
 * @param {Array} [array] 需要排序数组
 * @param {String} [key] 排序依据的数组对象键
 * @param {Boolean} [desc=true] 升序或者降序
 * @return {Array}
 */
export function arraySortKey(array, key, desc = true) {
  const arr = [ ...array ];
  arr.sort((a, b) => {
    if (desc) {
      return a[key] - b[key];
    }
    return b[key] - a[key];
  });
  return arr;
}

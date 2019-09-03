/**
 * 数字相关的方法
 */

/**
 * 保留指定小数位数
 * @param {Number} [num=0] 需要处理的数值
 * @param {Number} [accuracy=0] 保留小数位数
 * @param {String} [type='round'] 转化类型 round： 四舍五入  floor： 向下取整  ceil： 向上取整
 * @param {Boolean} [complement=true] 位数不够是否用0补全
 * @returns {String}
 */
export function toFixed(num = 0, accuracy = 0, type = 'round', complement = true) {
  const numTem = isNaN(Number(num)) ? 0 : Number(num);
  let decimal = isNaN(Number(accuracy)) ? 0 : Math.ceil(Number(accuracy));
  if (decimal < 0) {
    decimal = 0;
  }
  let numRes;
  if (type == 'ceil') {
    numRes = Math.ceil(numTem * Math.pow(10, decimal)) / Math.pow(10, decimal);
  } else if (type == 'floor') {
    numRes = Math.floor(numTem * Math.pow(10, decimal)) / Math.pow(10, decimal);
  } else {
    numRes = Math.round(numTem * Math.pow(10, decimal)) / Math.pow(10, decimal);
  }
  if (complement && decimal != 0) {
    const numArr = numRes.toString().split('.');
    numArr[1] = numArr[1] ? numArr[1].padEnd(decimal, '0') : ''.padEnd(decimal, '0');
    return numArr.join('.');
  }
  return numRes.toString();
}

/**
 * 数字千分位加逗号
 * @param {Number} [num=0] 需要处理的数字
 * @returns {String}
 */
export function thousandCents(num = 0) {
  const numRes = Number(num);
  if (isNaN(numRes)) {
    return '0';
  }
  const numArr = numRes.toString().split('.');
  if (numArr[1]) {
    let result = '', counter = 0;
    for (let i = 0; i <= numArr[1].length - 1; i++) {
      counter++;
      result = result + numArr[1].charAt(i);
      if (!(counter % 3) && i != numArr[1].length - 1 && i != 0) {
        result = result + ',';
      }
    }
    numArr[1] = result;
  }
  let result = '', counter = 0;
  for (let i = numArr[0].length - 1; i >= 0; i--) {
    counter++;
    result = numArr[0].charAt(i) + result;
    if (!(counter % 3) && i != 0) {
      result = ',' + result;
    }
  }
  numArr[0] = result;
  return numArr.join('.');
}

/**
 * 生成指定范围随机数
 * @param {Number} [min=0] 起始区间，整数
 * @param {Number} [max=0] 结束区间，整数
 * @param {String} [type='round'] 转化类型 none：不取整数  round：四舍五入取整  floor：向下取整  ceil：向上取整
 * @returns {Number}
 */
export function random(min = 0, max = 1, type = 'round') {
  let minTem = isNaN(Number(min)) ? 0 : Math.ceil(Number(min));
  let maxTem = isNaN(Number(max)) ? 1 : Math.ceil(Number(max));
  if (minTem == maxTem) {
    return minTem;
  }
  if (minTem > maxTem) {
    [ minTem, maxTem ] = [ maxTem, minTem ];
  }
  if (type == 'none') {
    return minTem + Math.random() * (maxTem - minTem);
  } else if (type == 'floor') {
    return Math.floor(minTem + Math.random() * ((maxTem+1) - minTem));
  } else if (type == 'ceil') {
    return Math.ceil(minTem + Math.random() * (maxTem - minTem));
  } else {
    return Math.round(minTem + Math.random() * (maxTem - minTem));
  }
}

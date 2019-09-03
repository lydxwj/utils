/**
 * 验证相关的方法
 */

/**
 * 判断是否为手机号
 * @param  {String|Number} [tel] 需要检测的手机号
 * @param  {Boolean} [strict=false] 是否进行严格检验
 * @return {Boolean} 
 */
export function isPhoneNum(tel, strict = false) {
	if (strict) {
		return /^(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/.test(tel);
	}
	return /^1[0-9]{10}$/.test(tel);
}

/**
 * 
 * @desc   判断是否为邮箱地址
 * @param  {String} email 需要检测的邮箱地址
 * @return {Boolean} 
 */
export function isEmail(email) {
	return /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(email);
}

/**
 * 判断是否为身份证号
 * @param {String|Number} [cardId] 需要检测的身份证号
 * @param {Boolean} [isShort=false] 是否支持15位身份证号
 * @param {String} [strict='middle'] 检验强度 low：低  middle：中  high：高
 * @returns {Boolean}
 */
export function isCardID({ cardId, isShort = false, strict = 'middle' }) {
	if (strict === 'low') {
		if (isShort) {
			return /(^\d{15}$)|(^\d{17}(\d|X|x)$)/.test(cardId);
		} else {
			return /(^\d{17}(\d|X|x)$)/.test(cardId);
		}
	}
	let middleVer;
	if (isShort) {
		middleVer = /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1|2]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(cardId);
	} else {
		middleVer = /^[1-9]\d{5}[1|2]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$/.test(cardId);
	}
	if (strict === 'middle') {
		return middleVer;
	} else if (!middleVer) {
		return middleVer;
	}
	//身份证城市
	const city = {11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外"};
	if(!city[parseInt(cardId.substr(0,2))]) {
		return false;
	}
	if (isShort && cardId.length == 15) {
		return true;
	}
	// 出生日期验证
	const birthday = cardId.substr(6,4) + "/" + Number(cardId.substr(10,2)) + "/" + Number(cardId.substr(12,2));
	const d = new Date(birthday);
	if(birthday != (d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate())) {
		return false;
	}
	// 身份证号码校验
	let sum = 0;
	const weights = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
	const codes = "10X98765432";
	for (let i = 0; i < cardId.length - 1; i++) {
		sum += cardId[i] * weights[i];
	}
	const last = codes[sum % 11];
	const cardIdLast = /x/i.test(cardId[cardId.length - 1]) ? 'X' : cardId[cardId.length - 1];
	return cardIdLast == last;
}

/**
 * 检验密码强度
 * @param {String} [password=''] 需要检测的密码
 * @param {Array} [length=[0, 0]] 密码长度限制，0表示没限制
 * @param {Boolean} [isCaps=false] 是否区分大小写字母
 * @returns {Number}
 */
export function checkPassWord ({ password = '', length = [0, 0], isCaps = false }) {
	let min = length[0];
	let max = length[1] ? length[1] : 0;
	if (max < min && max != 0) {
		[min, max] = [max, min];
	}
  let level = 0;
  if (password.length < min) {
    return level;
	}
	if (max != 0 && password.length > max) {
    return level;
	}
	if (isCaps) {
		if (/[a-z]/.test(password)) {
			level++;
		}
		if (/[A-Z]/.test(password)) {
			level++;
		}
	} else {
		if (/[a-zA-Z]/.test(password)) {
			level++;
		}
	}
  if (/[0-9]/.test(password)) {
    level++;
  }
  if (/[\.|-|_]/.test(password)) {
    level++;
  }
  return level;
}

/**
 * 检测姓名
 * @param {String} [name=''] 需要检测的姓名
 * @returns {Boolean}
 */
export function checkName(name = '') {
  if (/^[\u4e00-\u9fa5]{2,}$/.test(name)) {
    return true;
  } else {
    return false;
  }
}

/**
 * 获取数据类型
 * @param {All} [o] 需要检测的数据
 * @returns {String}
 */
export function getType(o){
  return Object.prototype.toString.call(o).slice(8,-1);
}

/**
 * 判断是否是指定数据类型
 * @param {All} [o] 需要检测的数据
 * @param {String} [type] 数据类型
 * @returns {Boolean}
 */
export function isKeyType(o, type) {
	return getType(o).toLowerCase() === type.toLowerCase();
}

/**
 * 判断是否是字符串
 * @param {All} [o] 需要检测的数据
 * @returns {Boolean}
 */
export function isString (o) {
  return isKeyType(o, 'String');
}

/**
 * 判断是否是字符串
 * @param {All} [o] 需要检测的数据
 * @returns {Boolean}
 */
export function isNumber (o) { //是否数字
  return getType(o) === 'Number'
}

/**
 * 判断是否是布尔
 * @param {All} [o] 需要检测的数据
 * @returns {Boolean}
 */
export function isBoolean (o) { 
  return Object.prototype.toString.call(o).slice(8, -1) === 'Boolean'
}

/**
 * 判断是否是函数
 * @param {All} [o] 需要检测的数据
 * @returns {Boolean}
 */
export function isFunction (o) {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Function'
}

/**
 * 判断是否是Null
 * @param {All} [o] 需要检测的数据
 * @returns {Boolean}
 */
export function isNull (o) {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Null'
}

/**
 * 判断是否是Undefined
 * @param {All} [o] 需要检测的数据
 * @returns {Boolean}
 */
export function isUndefined (o) {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Undefined'
}

/**
 * 判断是否是对象
 * @param {All} [o] 需要检测的数据
 * @returns {Boolean}
 */
export function isObj (o) {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Object'
}

/**
 * 判断是否是数组
 * @param {All} [o] 需要检测的数据
 * @returns {Boolean}
 */
export function isArray (o) {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Array'
}

/**
 * 判断是否是时间对象
 * @param {All} [o] 需要检测的数据
 * @returns {Boolean}
 */
export function isDate (o) {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Date'
}

/**
 * 判断是否是正则
 * @param {All} [o] 需要检测的数据
 * @returns {Boolean}
 */
export function isRegExp (o) {
  return Object.prototype.toString.call(o).slice(8, -1) === 'RegExp'
}

/**
 * 判断是否是错误对象
 * @param {All} [o] 需要检测的数据
 * @returns {Boolean}
 */
export function isError (o) {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Error'
}

/**
 * 判断是否是Symbol
 * @param {All} [o] 需要检测的数据
 * @returns {Boolean}
 */
export function isSymbol (o) {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Symbol'
}

/**
 * 判断是否是Promise
 * @param {All} [o] 需要检测的数据
 * @returns {Boolean}
 */
export function isPromise (o) {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Promise'
}

/**
 * 判断是否是Set对象
 * @param {All} [o] 需要检测的数据
 * @returns {Boolean}
 */
export function isSet (o) {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Set'
}

/**
 * 判断是否是false
 * @param {All} [o] 需要检测的数据
 * @returns {Boolean}
 */
export function isFalse (o) {
  if (!o || o === 'null' || o === 'undefined' || o === 'false' || o === 'NaN') return true
  return false
}

/**
 * 判断是否是true
 * @param {All} [o] 需要检测的数据
 * @returns {Boolean}
 */
export function isTrue (o) {
  return !this.isFalse(o)
}
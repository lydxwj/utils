/**
 * 实用工具方法
*/

import { isKeyType } from './verification';

// 导出数字相关的方法
export * from './number';

// 导出验证相关的方法
export * from './verification';

// 导出日期相关的方法
export * from './date';

// 导出存储相关的方法
export * from './storage';

// 导出URL相关的方法
export * from './url';

// 导出转化相关的方法
export * from './transform';

// 导出系统相关的方法
export * from './system';

/**
 * 字符串转js
 * @param  {String} [fn] 需要转化的字符串
 * @return {ALL}
 */
export function evil(fn) {
	let res = fn;
	try {
		const Fn = Function;
		res = new Fn('return ' + fn)();
	} catch (e) {}
	return res;
}

/**
 * 深拷贝，支持常见类型 object Date Array等引用类型
 * @param {Any} sth
 * @return {Any}
 */
export function deepClone(sth) {
  let copy;
  if (null == sth || "object" != typeof sth) return sth;
  if (isKeyType(sth, 'date')) {
    copy = new Date();
    copy.setTime(sth.getTime());
    return copy;
  }
  if (isKeyType(sth, 'array')) {
    copy = [];
    for (let i = 0, len = sth.length; i < len; i++) {
      copy[i] = deepClone(sth[i]);
    }
    return copy;
  }
  if (isKeyType(sth, 'object')) {
    copy = {};
    for (let attr in sth) {
      if (sth.hasOwnProperty(attr)) copy[attr] = deepClone(sth[attr]);
    }
    return copy;
  }
  return null;
}

/**
 * 函数节流。throttle-debounce包源码v2.1.0
 * 适用于限制`resize`和`scroll`等函数的调用频率
 *
 * @param  {Number}    delay          0 或者更大的毫秒数。 对于事件回调，大约100或250毫秒（或更高）的延迟是最有用的。
 * @param  {Boolean}   noTrailing     可选，默认为false。
 *                                    如果noTrailing为true，当节流函数被调用，每过`delay`毫秒`callback`也将执行一次。
 *                                    如果noTrailing为false或者未传入，`callback`将在最后一次调用节流函数后再执行一次.
 *                                    （延迟`delay`毫秒之后，节流函数没有被调用,内部计数器会复位）
 * @param  {Function}  callback       延迟毫秒后执行的函数。`this`上下文和所有参数都是按原样传递的，
 *                                    执行去节流功能时，调用`callback`。
 * @param  {Boolean}   debounceMode   可选，如果`debounceMode`为true，`clear`在`delay`ms后执行。
 *                                    如果debounceMode是false，`callback`在`delay` ms之后执行。
 *
 * @return {Function}  新的节流函数
 */
export function throttle(delay, noTrailing, callback, debounceMode) {
	var timeoutID;
	var cancelled = false;
	var lastExec = 0;
	function clearExistingTimeout () {
		if ( timeoutID ) {
			clearTimeout(timeoutID);
		}
	}
	function cancel () {
		clearExistingTimeout();
		cancelled = true;
	}
	if ( typeof noTrailing !== 'boolean' ) {
		debounceMode = callback;
		callback = noTrailing;
		noTrailing = undefined;
	}

	function wrapper () {

		var self = this;
		var elapsed = Date.now() - lastExec;
		var args = arguments;

		if (cancelled) {
			return;
		}
		function exec () {
			lastExec = Date.now();
			callback.apply(self, args);
		}
		function clear () {
			timeoutID = undefined;
		}

		if ( debounceMode && !timeoutID ) {
			exec();
		}

		clearExistingTimeout();

		if ( debounceMode === undefined && elapsed > delay ) {
			exec();
		} else if ( noTrailing !== true ) {
			timeoutID = setTimeout(debounceMode ? clear : exec, debounceMode === undefined ? delay - elapsed : delay);
		}

	}
	wrapper.cancel = cancel;
	return wrapper;
};

/**
 * 函数防抖 throttle-debounce包源码v2.1.0
 * 与throttle不同的是，debounce保证一个函数在多少毫秒内不再被触发，只会执行一次，
 * 要么在第一次调用return的防抖函数时执行，要么在延迟指定毫秒后调用。
 * @example 适用场景：如在线编辑的自动存储防抖。
 * @param  {Number}   delay         0或者更大的毫秒数。 对于事件回调，大约100或250毫秒（或更高）的延迟是最有用的。
 * @param  {Boolean}  atBegin       可选，默认为false。
 *                                  如果`atBegin`为false或未传入，回调函数则在第一次调用return的防抖函数后延迟指定毫秒调用。
 *                                  如果`atBegin`为true，回调函数则在第一次调用return的防抖函数时直接执行
 * @param  {Function} callback      延迟毫秒后执行的函数。`this`上下文和所有参数都是按原样传递的，
 *                                  执行去抖动功能时，，调用`callback`。
 *
 * @return {Function} 新的防抖函数。
 */
export function debounce(delay, atBegin, callback) {
  return callback === undefined ? throttle(delay, atBegin, false) : throttle(delay, callback, atBegin !== false);
};

/**
 * 存储相关的方法
 * 参考 js-cookie 2.2.0
 */

/**
 * 根据key获取cookie
 * @param {String} [key] cookie对应的键
 * @param {Boolean} [json] 取出值是否转化为json对象
 * @return {Object | Array | String | Undefined} 
 */
export function getCookie(key, json) {
  function decode(s) {
    return s.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
  }
  const cookieObj = {};
  const cookies = document.cookie ? document.cookie.split('; ') : [];
  for (let i = 0; i < cookies.length; i++) {
    const parts = cookies[i].split('=');
    let cookie = parts.slice(1).join('=');
    if (!json && cookie.charAt(0) === '"') {
      cookie = cookie.slice(1, -1);
    }
    try {
      const name = decode(parts[0]);
      cookie = decode(cookie);
      if (json) {
        try {
          cookie = JSON.parse(cookie);
        } catch (e) {}
      }
      cookieObj[name] = cookie;
      if (key === name) {
        break;
      }
    } catch (e) {}
  }

  return key ? cookieObj[key] : cookieObj;
}

/**
 * 设置Cookie
 * @param {String} [key] cookie的键
 * @param {All} [value] cookie的值
 * @param {Object} [attributes={}] cookie的配置参数
 *                  path 存储URL路径
 *                  expires 有效期天数
 *                  domain 有效域
 * @return {String}  
 */
export function setCookie(key, value, attributes = {}) {
  if (!key) return;
  const _default = {
    path: '/',
    ...attributes
  };
  if (_default.expires != '' && Number(_default.expires).toString() != 'NaN') {
    const day = _default.expires;
    const date = new Date();
    date.setDate(date.getDate() + day);
    _default.expires = date ? date.toUTCString() : '';
  }
  try {
    const result = JSON.stringify(value);
    if (/^[\{\[]/.test(result)) {
      value = result;
    }
  } catch (e) {}
  value = encodeURIComponent(String(value))
      .replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
  key = encodeURIComponent(String(key))
    .replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
    .replace(/[\(\)]/g, escape);
  let stringifiedAttributes = '';
  for (let attributeName in _default) {
    if (!_default[attributeName]) {
      continue;
    }
    stringifiedAttributes += '; ' + attributeName;
    if (_default[attributeName] === true) {
      continue;
    }
    stringifiedAttributes += '=' + _default[attributeName].split(';')[0];
  }
  return (document.cookie = key + '=' + value + stringifiedAttributes);
}

/**
 * 根据key删除cookie
 * @param  {String} key
 * @param {Object} [attributes={}] cookie的配置参数
 *                  path 存储URL路径
 * @return {}
 */
export function removeCookie(key, attributes ={}) {
  const attr = {
    ...attributes,
    expires: -1
  }
  setCookie(key, '', attr);
}

/**
 * 设置localStorage
 * @param {String} [key] localStorage的键
 * @param {All} [value] localStorage的值
 * @return  
 */
export function setLocalStorage(key, value) {
  try {
    const result = JSON.stringify(value);
    if (/^[\{\[]/.test(result)) {
      value = result;
    }
  } catch (e) {}
  localStorage.setItem(key, value);
}

/**
 * 根据key获取localStorage
 * @param {String} [key] localStorage对应的键
 * @param {Boolean} [json] 取出值是否转化为json对象
 * @return {Object | Array | String | Null}  
 */
export function getLocalStorage(key, json) {
  let value = localStorage.getItem(key);
  if (json) {
    try {
      value = JSON.parse(value);
    } catch (e) {}
  } 
  return value;
}

/**
 * 根据key删除localStorage
 * @param {String} [key] localStorage对应的键
 * @return {}  
 */
export function removeLocalStorage(key) {
  localStorage.removeItem(key);
}

/**
 * 设置有期限的localStorage
 * @param {String} [key] localStorage的键
 * @param {All} [value] localStorage的值
 * @param {Number} [day] localStorage的期限天数
 * @return  
 */
export function setLocalStorageLimit(key, value, day) {
  let data = {
    value,
    expires: day 
  };
  if (Number(data.expires).toString() != 'NaN') {
    const day = Number(data.expires);
    const date = new Date();
    date.setDate(date.getDate() + day);
    data.expires = date.toString();
  }
  setLocalStorage(key, data);
}

/**
 * 根据key获取有期限的localStorage
 * @param {String} [key] localStorage的键
 * @return {Object | Array | String | Null} 
 */
export function getLocalStorageLimit(key) {
  const data = getLocalStorage(key, true);
  let result = data;
  if (Object.prototype.toString.call(data).slice(8, -1) === 'Object') {
    if (data.expires) {
      const nowD = new Date().getTime();
      const expiresD = new Date(data.expires) == 'Invalid Date' ? '' : new Date(data.expires).getTime();
      if (expiresD != '') {
        if (nowD > expiresD) {
          result = null;
          removeLocalStorage(key);
        } else {
          result = data.value;
        }
      } else {
        result = data.value ? data.value : data;
      }
    } else {
      result = data.value ? data.value : data;
    }
  }
  return result ? result : null;
}

/**
 * 设置sessionStorage
 * @param {String} [key] sessionStorage的键
 * @param {All} [value] sessionStorage的值
 * @return  
 */
export function setSessionStorage(key, value) {
  try {
    const result = JSON.stringify(value);
    if (/^[\{\[]/.test(result)) {
      value = result;
    }
  } catch (e) {}
  sessionStorage.setItem(key, value);
}

/**
 * 根据key获取sessionStorage
 * @param {String} [key] sessionStorage对应的键
 * @param {Boolean} [json] 取出值是否转化为json对象
 * @return {Object | Array | String | Null}  
 */
export function getSessionStorage(key, json) {
  let value = sessionStorage.getItem(key);
  if (json) {
    try {
      value = JSON.parse(value);
    } catch (e) {}
  } 
  return value;
}

/**
 * 根据key删除sessionStorage
 * @param {String} [key] sessionStorage对应的键
 * @return 
 */
export function removeSessionStorage(key) {
  sessionStorage.removeItem(key);
}
import { getType, evil } from './index';
/**
 * URL参数转对象
 * @param  {String} [url] 需要处理的URL
 * @return {Object} 
 */
export function parseQuery(url) {
  url = url ? url: window.location.href; 
  const index = url.indexOf('?');
  if (index == -1) return {};
  const search = url.substring(index + 1);
  if (!search) return {};
  const parts = search.split('&', 1000);
  const result = {};
  for (let i = 0; i < parts.length; i++) {
    const ele = parts[i];
    const pos = ele.indexOf('=');
    let key, val;
    if (pos == -1) {
      key = decodeURIComponent(ele);
      val = '';
    } else {
      key = decodeURIComponent(ele.slice(0, pos));
      val = decodeURIComponent(ele.slice(pos + 1));
    }
    if (val && result[key]) {
      const type = getType(result[key]);
      if (type == 'String') {
        val = [ result[key], val ];
      } else if (type === 'Array') {
        val = [ ...result[key], val ];
      }
    }
    if (result[key]) {
      result[key] = val ? val : result[key];
    } else {
      result[key] = val;
    }
  }
  const temRes = { ...result };
  Object.entries(temRes).forEach(item => {
    if (getType(item[1]) === 'String' && /^[\{\[]/.test(item[1])) {
      try {
        result[item[0]] = JSON.parse(item[1]);
      } catch(e) {
        try {
          result[item[0]] = evil(item[1]);
        } catch(e) {}
      }
    } else if (getType(item[1]) === 'Array') {
      const temVal = [ ...item[1] ];
      item[1].forEach((child, idx) => {
        if (/^[\{\[]/.test(child)) {
          try {
            temVal[idx] = JSON.parse(child);
          } catch(e) {
            try {
              temVal[idx] = evil(child);
            } catch(e) {}
          }
        }
      });
      result[item[0]] = temVal;
    }
  });
  return result;
}

/**
 * 通过键名获取URL参数
 * @param  {String} [name] URL参数对应的键名
 * @param  {String} [url] 需要处理的URL
 * @return {Object|Array|String} 
 */
export function getQuery(name, url){
  const obj = parseQuery(url);
  return name ? obj[name] : obj;
}

/**
 * 对象转化成URL参数
 * @param  {Object} [obj] 需要处理的对象
 * @param  {Boolean} [prefix=true] 是否需要加前缀?
 * @return {String} 
 */
export function stringQuery(obj, prefix=true){
  let res = '';
  if (prefix) {
    res += '?';
  }
  if (getType(obj) !== 'Object') return res;
  const array = Object.entries(obj); 
  array.forEach((item, index) => {
    res += encodeURIComponent(item[0]) + '=';
    const type = getType(item[1]);
    if (type == 'Object' || type == 'Array') {
      res += encodeURIComponent(JSON.stringify(item[1]));
    } else {
      res += encodeURIComponent(item[1]);
    }
    if (index != array.length - 1) {
      res += '&';
    }
  });
  return res;
}

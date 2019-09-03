/**
 * 是否为移动端
 * @param {String} [ua]  需要判断的ua
 * @returns {Boolean}
 */
export function isMobile(ua) {
  const userAgent = ua || navigator.userAgent;
  const agents = [
    'Android', 
    'iPhone', 
    'SymbianOS',
    'Windows Phone',
    'iPad',
    'iPod',
    'BlackBerry'
  ];
  let flag = false;
  for (let i = 0; i < agents.length; i++) {
    if (userAgent.indexOf(agents[i]) > 0) {
      flag = true;
      break;
    }
  }
  return flag;
}

/**
 * 是否为PC端
 * @param {String} [ua]  需要判断的ua
 * @returns {Boolean}
 */
export function isPC(ua) {
  return !isMobile(ua);
}

/**
 * 是否为Android
 * @param {String} [ua]  需要判断的ua
 * @returns {Boolean}
 */
export function isAndroid(ua) {
  const userAgent = ua || navigator.userAgent;
  return /Android|adr/.test(userAgent);
}

/**
 * 是否为IOS
 * @param {String} [ua]  需要判断的ua
 * @returns {Boolean}
 */
export function isIOS(ua) {
  const userAgent = ua || navigator.userAgent;
  return /\(i[^;]+;( U;)? CPU.+Mac OS X/i.test(userAgent);
}

/**
 * 获取当前APP类型
 * @param {String} [ua]  需要判断的ua
 * @returns {String}
 */
export function getAppType(ua) {
  const userAgent = ua || navigator.userAgent;
  if (userAgent.indexOf('ucbrowser') >= 0) return 'UC';
  if (userAgent.indexOf('micromessenger') >= 0) return 'WECHAT';
  if (new RegExp('qq/\\d+\\.\\d+\\.\\d+\\.\\d+', 'i').test(userAgent)) return 'QQ';
  if (new RegExp('weibo__\\d+\\.\\d+\\.\\d+', 'i').test(userAgent)) return 'WEIBO';
  return 'OTHERS';
}

/**
 * 获取当前浏览器类型
 * @param {String} [ua]  需要判断的ua
 * @returns {String}
 */
export function getBrowserType(ua) {
  const userAgent = ua || navigator.userAgent;
  const isOpera = userAgent.indexOf('Opera') > -1;
  const isIE = userAgent.indexOf('compatible') > -1 && userAgent.indexOf('MSIE') > -1 && !isOpera;
  const isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf('rv:11.0') > -1;
  const isEdge = userAgent.indexOf('Edge') > -1 && !isIE;
  const isFF = userAgent.indexOf('Firefox') > -1;
  const isSafari = userAgent.indexOf('Safari') > -1 && userAgent.indexOf('Chrome') == -1;
  const isChrome = userAgent.indexOf('Chrome') > -1 && userAgent.indexOf('Safari') > -1;
  if (isIE) {
    const reIE = new RegExp('MSIE (\\d+\\.\\d+);');
    reIE.test(userAgent);
    const fIEVersion = parseFloat(RegExp['$1']);
    if(fIEVersion == 7) return 'IE7'
    else if(fIEVersion == 8) return 'IE8';
    else if(fIEVersion == 9) return 'IE9';
    else if(fIEVersion == 10) return 'IE10';
    else return 'IE7以下';
  }
  if (isIE11) return 'IE11';
  if (isEdge) return 'Edge';
  if (isFF) return 'Firefox';
  if (isOpera) return 'Opera';
  if (isSafari) return 'Safari';
  if (isChrome) return 'Chrome';
  return 'Other'
}
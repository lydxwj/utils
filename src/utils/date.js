/**
 * 日期格式化
 * @param {String} [formatStr=''] YYYY/yyyy/YY/yy 表示年份  MM/M 月份  W/w 星期  dd/DD/d/D 日期  
 * hh/HH/h/H 时间   mm/m 分钟  ss/SS/s/S 秒  例如：YYYY-MM-DD 星期W HH:mm
 * @param {String | Date | Number} [datetime=''] 需要处理的日期
 * @returns {String}
 */
export function formatDate(formatStr = '', datetime = '') {
	let nowDate = datetime ? new Date(datetime) : new Date();
	let str = formatStr;
	const weekArr = [ '日', '一', '二', '三', '四', '五', '六' ];
	const year = nowDate.getFullYear().toString();
	const month = (nowDate.getMonth() + 1).toString();
	const week = weekArr[nowDate.getDay()];
	const date = nowDate.getDate().toString();
	const hours = nowDate.getHours().toString();
	const minutes = nowDate.getMinutes().toString();
	const seconds = nowDate.getSeconds().toString();
	str = str.replace(/yyyy|YYYY/, year);
	str = str.replace(/yy|YY/, year.slice(-2));
	str = str.replace(/MM/, month.padStart(2, '0'));
	str = str.replace(/M/g, month);
	str = str.replace(/w|W/g, week);
	str = str.replace(/dd|DD/, date.padStart(2, '0'));
	str = str.replace(/d|D/g, date);
	str = str.replace(/hh|HH/, hours.padStart(2, '0'));
	str = str.replace(/h|H/g, hours);
	str = str.replace(/mm/, minutes.padStart(2, '0'));
	str = str.replace(/m/g, minutes);
	str = str.replace(/ss|SS/, seconds.padStart(2, '0'));
	str = str.replace(/s|S/g, seconds);
	return str;
}

/**
 * 根据生日得到年龄
 * @param {String | Date | Number} [birthday] 生日
 * @returns {Number}
 */
export function getAgeByBirth(birthday){
	let age;
	const nowDate = new Date();
	const birthDate = birthday ? new Date(birthday) : new Date();
	const nowY = nowDate.getFullYear();
	const birthY = birthDate.getFullYear();
	const nowM = nowDate.getMonth();
	const birthM = birthDate.getMonth();
	const nowD = nowDate.getDate();
	const birthD = birthDate.getDate();
	if (nowDate.getTime() < birthDate.getTime()) {
		age = 0;
	} else {
		if (nowY == birthY) {
			age = 0;
		} else {
			age = nowY - birthY;
			if (nowM < birthM) {
				age--;
			} else if (nowM == birthM && nowD < birthD) {
				age--;
			}
		}
	}
	return age;
}

/**
 * 距现在的已过时间
 * @param  {String | Date | Number} [startTime] 开始时间 
 * @return {String}
 */
export function formatPassTime(startTime) {
	const now = new Date();
	const nowSconds = now.getTime();
	const start = startTime ? new Date(startTime) : new Date();
	const startSconds = start.getTime();
 	const time = nowSconds - startSconds;
	const	day = Math.floor(time / (1000 * 60 * 60 * 24));
	if (time < 0) return;
	if (day >= 28) {
		// 大于等于28天有可能是一个月，使用Date对象判断
		const nowYear = now.getFullYear();
		const startYear = start.getFullYear();
		const nowMouth = now.getMonth();
		const startMonth = start.getMonth();
		const nowday = now.getDate();
		const startday = start.getDate();
		const year = nowYear - startYear;
		if (year > 0) {
			// 跨年处理
			if (nowMouth > startMonth) {
				return year + "年前";
			} else if (nowMouth == startMonth) {
				if (nowday >= startday) {
					return year + "年前";
				} else if (year > 1) {
					return (year - 1) + "年前";
				} else {
					return (nowMouth + 12 - startMonth) + "月前";
				}
			} else {
				if (year > 1) {
					return (year - 1) + "年前";
				} else if (nowday >= startday) {
					return (nowMouth + 12 - startMonth) + "月前";
				} else if ((nowMouth + 11 - startMonth) > 0) {
					return (nowMouth + 11 - startMonth) + "月前";
				} else {
					return day + "天前";
				}
			}
		} else {
			// 不跨年
			if (nowday >= startday && nowMouth != startMonth) {
				return (nowMouth - startMonth) + "月前";
			} else if (nowday < startday && (nowMouth - startMonth - 1) > 0) {
				return (nowMouth - startMonth - 1) + "月前";
			} else {
				return day + "天前";
			}
		}
	} else {
		const hour = Math.floor(time / (1000 * 60 * 60));
		const min = Math.floor(time / (1000 * 60));
		if (day) return day + "天前";
		if (hour) return hour + "小时前";
		if (min) return min + "分钟前";
		return '刚刚';
	}
}

/**
 * 倒计时
 * @param  {String | Date | Number} [endTime] 结束时间  
 * @param  {String} [format] d天数 h小时 m分钟 s秒  例如：'d天h小时m分钟s秒'  
 * @return {String}
 */
export function formatCountdown(endTime, format) {
	let formatStr = format || 'd天h小时m分钟s秒';
	const startDate = new Date(); //开始时间
	const endDate = new Date(endTime); //结束时间
	const t = endDate.getTime() - startDate.getTime(); //时间差
	let d = 0,
		h = 0,
		m = 0,
		s = 0;
	if (t >= 0) {
		d = Math.floor(t / 1000 / 3600 / 24);
		h = Math.floor(t / 1000 / 60 / 60 % 24);
		m = Math.floor(t / 1000 / 60 % 60);
		s = Math.floor(t / 1000 % 60);
		formatStr = formatStr.replace(/d/, d);
		formatStr = formatStr.replace(/h/, h);
		formatStr = formatStr.replace(/m/, m);
		formatStr = formatStr.replace(/s/, s);
		return formatStr;
	}
	return '已结束';
}

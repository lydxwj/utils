# utils

**前端工具方法**

- 数字相关--number
  - 保留指定小数位数--toFixed
  - 数字千分位加逗号--thousandCents
  - 生成指定范围随机数--random
- 验证相关--verification
  - 判断是否为手机号--isPhoneNum
  - 判断是否为邮箱地址--isEmail
  - 判断是否为身份证号--isCardID
  - 检验密码强度--checkPassWord
  - 检测姓名--checkName
  - 获取数据类型--getType
  - 判断是否是指定数据类型--isKeyType
- 日期相关--date
  - 日期格式化--formatDate
  - 根据生日得到年龄--getAgeByBirth
  - 距现在的已过时间--formatPassTime
  - 倒计时--formatCountdown
- 存储相关--storage
  - 设置Cookie--setCookie
  - 根据key获取cookie--getCookie
  - 根据key删除cookie--removeCookie
  - 设置localStorage--setLocalStorage
  - 设置有期限的localStorage--setLocalStorageLimit
  - 根据key获取localStorage--getLocalStorage
  - 根据key获取有期限的localStorage--getLocalStorageLimit
  - 根据key删除localStorage--removeLocalStorage
  - 设置sessionStorage--setSessionStorage
  - 根据key获取sessionStorage--getSessionStorage
  - 根据key删除sessionStorage--removeSessionStorage
- URL相关--url
  - URL参数转对象--parseQuery
  - 通过键名获取URL参数--getQuery
  - 对象转化成URL参数--stringQuery
- 转化相关--transform
  - 隐藏字符串指定位置--stringMask
  - 对数组对象排序--arraySortKey
- 系统相关--system
  - 是否为PC端--isPC
  - 是否为移动端--isMobile
  - 是否为IOS--isIOS
  - 是否为Android--isAndroid
  - 获取当前浏览器类型--getBrowserType
  - 获取当前APP类型--getAppType

本项目是对方法的使用示例，详细说明

所有方法都在`src/utils`文件夹下，没有任何依赖，隐藏方法等你发现

## 安装依赖

```
npm install
```

### 运行项目
```
npm run serve
```

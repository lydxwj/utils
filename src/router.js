import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

const Layout = () => import( /* webpackChunkName: "home" */ './layout/index.vue');
const Home = () => import( /* webpackChunkName: "home" */ './pages/home/index.vue');
// 数值相关
const Num = () => import( /* webpackChunkName: "number" */ './pages/number/number.vue');
const ToFixed = () => import( /* webpackChunkName: "number" */ './pages/number/item/toFixed.vue');
const ThousandCents = () => import( /* webpackChunkName: "thousandCents" */ './pages/number/item/thousandCents.vue');
const Random = () => import( /* webpackChunkName: "random" */ './pages/number/item/random.vue');
// 验证相关
const Verification = () => import( /* webpackChunkName: "verification" */ './pages/verification/verification.vue');
const IsEmail = () => import( /* webpackChunkName: "verification" */ './pages/verification/item/isEmail.vue');
const IsPhoneNum = () => import( /* webpackChunkName: "isPhoneNum" */ './pages/verification/item/isPhoneNum.vue');
const IsCardID = () => import( /* webpackChunkName: "isCardID" */ './pages/verification/item/isCardID.vue');
const CheckPassWord = () => import( /* webpackChunkName: "checkPassWord" */ './pages/verification/item/checkPassWord.vue');
const CheckName = () => import( /* webpackChunkName: "checkName" */ './pages/verification/item/checkName.vue');
const GetType = () => import( /* webpackChunkName: "getType" */ './pages/verification/item/getType.vue');
const IsKeyType = () => import( /* webpackChunkName: "isKeyType" */ './pages/verification/item/isKeyType.vue');
// 日期相关
const DateCmp = () => import( /* webpackChunkName: "date" */ './pages/date/date.vue');
const FormatDate = () => import( /* webpackChunkName: "date" */ './pages/date/item/formatDate.vue');
const GetAgeByBirth = () => import( /* webpackChunkName: "getAgeByBirth" */ './pages/date/item/getAgeByBirth.vue');
const FormatPassTime = () => import( /* webpackChunkName: "formatPassTime" */ './pages/date/item/formatPassTime.vue');
const FormatCountdown = () => import( /* webpackChunkName: "formatCountdown" */ './pages/date/item/formatCountdown.vue');
// 存储相关
const Storage = () => import( /* webpackChunkName: "storage" */ './pages/storage/storage.vue');
const SetCookie = () => import( /* webpackChunkName: "storage" */ './pages/storage/item/setCookie.vue');
const GetCookie = () => import( /* webpackChunkName: "getCookie" */ './pages/storage/item/getCookie.vue');
const RemoveCookie = () => import( /* webpackChunkName: "removeCookie" */ './pages/storage/item/removeCookie.vue');
const SetLocalStorage = () => import( /* webpackChunkName: "setLocalStorage" */ './pages/storage/item/setLocalStorage.vue');
const SetLocalStorageLimit = () => import( /* webpackChunkName: "setLocalStorageLimit" */ './pages/storage/item/setLocalStorageLimit.vue');
const GetLocalStorage = () => import( /* webpackChunkName: "getLocalStorage" */ './pages/storage/item/getLocalStorage.vue');
const GetLocalStorageLimit = () => import( /* webpackChunkName: "getLocalStorageLimit" */ './pages/storage/item/getLocalStorageLimit.vue');
const RemoveLocalStorage = () => import( /* webpackChunkName: "removeLocalStorage" */ './pages/storage/item/removeLocalStorage.vue');
const SetSessionStorage = () => import( /* webpackChunkName: "setSessionStorage" */ './pages/storage/item/setSessionStorage.vue');
const GetSessionStorage = () => import( /* webpackChunkName: "getSessionStorage" */ './pages/storage/item/getSessionStorage.vue');
const RemoveSessionStorage = () => import( /* webpackChunkName: "removeSessionStorage" */ './pages/storage/item/removeSessionStorage.vue');

// URL相关
const Url = () => import( /* webpackChunkName: "url" */ './pages/url/url.vue');
const ParseQuery = () => import( /* webpackChunkName: "url" */ './pages/url/item/parseQuery.vue');
const GetQuery = () => import( /* webpackChunkName: "getQuery" */ './pages/url/item/getQuery.vue');
const StringQuery = () => import( /* webpackChunkName: "stringQuery" */ './pages/url/item/stringQuery.vue');

// 转化相关
const Transform = () => import( /* webpackChunkName: "transform" */ './pages/transform/transform.vue');
const StringMask = () => import( /* webpackChunkName: "transform" */ './pages/transform/item/stringMask.vue');
const ArraySortKey = () => import( /* webpackChunkName: "arraySortKey" */ './pages/transform/item/arraySortKey.vue');

// 系统相关
const System = () => import( /* webpackChunkName: "system" */ './pages/system/system.vue');
const IsMobile = () => import( /* webpackChunkName: "system" */ './pages/system/item/isMobile.vue');
const IsPC = () => import( /* webpackChunkName: "isPC" */ './pages/system/item/isPC.vue');
const IsIOS = () => import( /* webpackChunkName: "isIOS" */ './pages/system/item/isIOS.vue');
const IsAndroid = () => import( /* webpackChunkName: "isAndroid" */ './pages/system/item/isAndroid.vue');
const GetAppType = () => import( /* webpackChunkName: "getAppType" */ './pages/system/item/getAppType.vue');
const GetBrowserType = () => import( /* webpackChunkName: "getBrowserType" */ './pages/system/item/getBrowserType.vue');

export default new Router({
	linkActiveClass: 'selectedItem',
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [{
		path: '/',
		name: 'layout',
		component: Layout,
		redirect: '/home',
		children: [{
				path: '/home',
				component: Home,
				name: 'home'
			},
			{
				path: '/number',
				component: Num,
				name: 'number',
				redirect: '/number/toFixed',
				children: [
					{
						path: '/number/toFixed',
						component: ToFixed,
						name: 'toFixed'
					},
					{
						path: '/number/thousandCents',
						component: ThousandCents,
						name: 'thousandCents'
					},
					{
						path: '/number/random',
						component: Random,
						name: 'random'
					}
				]
			},
			{
				path: '/verification',
				component: Verification,
				name: 'verification',
				redirect: '/verification/isPhoneNum',
				children: [
					{
						path: '/verification/isEmail',
						component: IsEmail,
						name: 'isEmail'
					},
					{
						path: '/verification/isPhoneNum',
						component: IsPhoneNum,
						name: 'isPhoneNum'
					},
					{
						path: '/verification/isCardID',
						component: IsCardID,
						name: 'isCardID'
					},
					{
						path: '/verification/checkPassWord',
						component: CheckPassWord,
						name: 'checkPassWord'
					},
					{
						path: '/verification/checkName',
						component: CheckName,
						name: 'checkName'
					},
					{
						path: '/verification/getType',
						component: GetType,
						name: 'getType'
					},
					{
						path: '/verification/isKeyType',
						component: IsKeyType,
						name: 'isKeyType'
					},
				]
      },
			{
				path: '/date',
				component: DateCmp,
				name: 'date',
				redirect: '/date/formatDate',
				children: [
					{
						path: '/date/formatDate',
						component: FormatDate,
						name: 'formatDate'
					},
					{
						path: '/date/getAgeByBirth',
						component: GetAgeByBirth,
						name: 'getAgeByBirth'
					},
					{
						path: '/date/formatPassTime',
						component: FormatPassTime,
						name: 'formatPassTime'
					},
					{
						path: '/date/formatCountdown',
						component: FormatCountdown,
						name: 'formatCountdown'
					},
				]
			},
			{
				path: '/storage',
				component: Storage,
				name: 'storage',
				redirect: '/storage/setCookie',
				children: [
					{
						path: '/storage/setCookie',
						component: SetCookie,
						name: 'setCookie'
					},
					{
						path: '/storage/getCookie',
						component: GetCookie,
						name: 'getCookie'
					},
					{
						path: '/storage/removeCookie',
						component: RemoveCookie,
						name: 'removeCookie'
					},
					{
						path: '/storage/setLocalStorage',
						component: SetLocalStorage,
						name: 'setLocalStorage'
					},
					{
						path: '/storage/setLocalStorageLimit',
						component: SetLocalStorageLimit,
						name: 'setLocalStorageLimit'
					},
					{
						path: '/storage/getLocalStorage',
						component: GetLocalStorage,
						name: 'getLocalStorage'
					},
					{
						path: '/storage/getLocalStorageLimit',
						component: GetLocalStorageLimit,
						name: 'getLocalStorageLimit'
					},
					{
						path: '/storage/removeLocalStorage',
						component: RemoveLocalStorage,
						name: 'removeLocalStorage'
					},
					{
						path: '/storage/setSessionStorage',
						component: SetSessionStorage,
						name: 'setSessionStorage'
					},
					{
						path: '/storage/getSessionStorage',
						component: GetSessionStorage,
						name: 'getSessionStorage'
					},
					{
						path: '/storage/removeSessionStorage',
						component: RemoveSessionStorage,
						name: 'removeSessionStorage'
					},
				]
			},
			{
				path: '/url',
				component: Url,
				name: 'url',
				redirect: '/url/parseQuery',
				children: [
					{
						path: '/url/parseQuery',
						component: ParseQuery,
						name: 'parseQuery'
					},
					{
						path: '/url/getQuery',
						component: GetQuery,
						name: 'getQuery'
					},
					{
						path: '/url/stringQuery',
						component: StringQuery,
						name: 'stringQuery'
					},
				]
			},
			{
				path: '/transform',
				component: Transform,
				name: 'transform',
				redirect: '/transform/stringMask',
				children: [
					{
						path: '/transform/stringMask',
						component: StringMask,
						name: 'stringMask'
					},
					{
						path: '/transform/arraySortKey',
						component: ArraySortKey,
						name: 'arraySortKey'
					},
				]
			},
			{
				path: '/system',
				component: System,
				name: 'system',
				redirect: '/system/isMobile',
				children: [
					{
						path: '/system/isMobile',
						component: IsMobile,
						name: 'isMobile'
					},
					{
						path: '/system/isPC',
						component: IsPC,
						name: 'isPC'
					},
					{
						path: '/system/isIOS',
						component: IsIOS,
						name: 'isIOS'
					},
					{
						path: '/system/isAndroid',
						component: IsAndroid,
						name: 'isAndroid'
					},
					{
						path: '/system/getAppType',
						component: GetAppType,
						name: 'getAppType'
					},
					{
						path: '/system/getBrowserType',
						component: GetBrowserType,
						name: 'getBrowserType'
					},
				]
			},
    ]
  }, {
		path: '*',
		redirect: '/home',
	}]
});
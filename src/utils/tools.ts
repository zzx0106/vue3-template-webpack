import { RouteRecordRaw } from 'vue-router';

interface AnyObj {
  [key: string]: any;
}

function setStorage(key: string, value: { [key: string]: any } | any[]) {
  localStorage.setItem(key, JSON.stringify(value));
}
function removeStorage(key: string) {
  localStorage.removeItem(key);
}
function getStorage(key: string) {
  const data = localStorage.getItem(key);
  return JSON.parse((data === 'undefined' ? '""' : data) as string);
}

/**
 * @desc 函数防抖
 * @param {Function} func 回调函数
 * @param {Number} delay 防抖时间
 * @param {Object} options {
 * leading: true, // 是否在延迟之前调用
 * context: null, // 上下文
 * }
 */
function debounce(func: Function, delay = 17, options = { leading: true, context: null }) {
  let timer: number | undefined;
  const _debounce = function (...args: any[]) {
    if (timer) {
      clearTimeout(timer);
    }
    if (options.leading && !timer) {
      // @ts-ignore
      timer = setTimeout(null, delay); // @ts-ignore
      func.apply(options.context || this, args);
    } else {
      timer = window.setTimeout(() => {
        // @ts-ignore
        func.apply(options.context || this, args);
        timer = undefined;
      }, delay);
    }
  };
  _debounce.cancel = function () {
    clearTimeout(timer);
    timer = undefined;
  };
  return _debounce;
}
// 使用方式
const ad = throttle<(progress: number) => void>((progress) => {});
ad(123);
interface ThrottleController {
  cancel(): void;
}
/**
 * 根据时间进行节流，防止一定时间内多次触发
 * @param {Function} fn 函数方法
 * @param {Number} delay 时间
 */
function throttle<T extends (...args: any[]) => any>(
  func: T,
  delay = 1000,
  opts?: { leading?: boolean; trailing?: boolean; context?: any }
) {
  let previous = new Date(0).getTime();
  let timer: number | undefined;
  let options = { ...{ leading: true, trailing: false, context: null }, ...(opts || {}) };
  const _throttle = function (this: any, ...args: any[]) {
    const now = new Date().getTime();
    if (!options.leading) {
      if (timer) return;
      timer = window.setTimeout(() => {
        timer = undefined;
        func.apply(options.context || this, args);
      }, delay);
    } else if (now - previous > delay) {
      func.apply(options.context || this, args);
      previous = now;
    } else if (options.trailing) {
      clearTimeout(timer);
      timer = window.setTimeout(() => {
        func.apply(options.context || this, args);
      }, delay);
    }
  };
  _throttle.cancel = () => {
    previous = 0;
    clearTimeout(timer);
    timer = undefined;
  };
  return _throttle as T & ThrottleController;
}
interface IEntryTarget extends Element {
  src?: string;
  dataset?: {
    src: string;
  };
}
interface IEntry extends IntersectionObserverEntry {
  target: IEntryTarget;
}
/**
 * 图片懒加载
 * 需要在标签上使用data-src
 */
function lazyImageLoad() {
  let imgList = [...document.querySelectorAll('img')];
  console.log('lazyImageLoad', imgList);
  let num = imgList.length;
  let lazyLoad = function () {};
  if (window['IntersectionObserver']) {
    /**当 img 标签进入可视区域时会执行实例化时的回调，
     * 同时给回调传入一个 entries 参数，保存着实例观察的所有元素的一些状态，
     * 比如每个元素的边界信息，当前元素对应的 DOM 节点，
     * 当前元素进入可视区域的比率，每当一个元素进入可视区域，
     * 将真正的图片赋值给当前 img 标签，同时解除对其的观察
     */
    lazyLoad = function () {
      let observer = new IntersectionObserver((entries) => {
        entries.forEach((entry: IEntry) => {
          if (entry.intersectionRatio > 0) {
            entry.target.src = entry.target.dataset?.src;
            observer.unobserve(entry.target);
          }
        });
      });
      imgList.forEach((img) => {
        if (img.dataset.src) {
          observer.observe(img);
        }
      });
    };
  } else {
    // 兜底方案
    lazyLoad = (function () {
      let count = 0;
      return function () {
        const deleteIndexList: number[] = [];
        imgList.forEach((img, index) => {
          const rect = img.getBoundingClientRect();
          if (rect.top < window.innerHeight) {
            if (img.dataset.src) img.src = img.dataset.src;
            deleteIndexList.push(index);
            count++;
            if (count === num) {
              document.removeEventListener('scroll', lazyLoad);
            }
          }
        });
        imgList = imgList.filter((_, index) => !deleteIndexList.includes(index));
      };
    })();
    document.addEventListener('scroll', throttle(lazyLoad, 100));
  }
  return lazyLoad();
}
/**
 * @desc 私有化对象属性
 * @param {Object} obj 需要私有化的变量名以 _ 开头
 */
function privatization(obj: any) {
  if (!window['Proxy']) {
    throw new Error('"Proxy" not support, you need babel-polyfill');
  }
  return new Proxy(obj, {
    get(target, key: string) {
      if (key.startsWith('_')) {
        throw new Error('private key');
      }
      return Reflect.get(target, key);
    },
    ownKeys(target) {
      return Reflect.ownKeys(target).filter((key) => !(key as string).startsWith('_'));
    },
  });
}
/**
 * @desc async/await优化处理
 * @param {Function} asyncFunc promise对象
 * @param {Object | String} asyncFunc 传参
 * @returns {Array} [error , res]
 */
async function errorCaptured<T>(asyncFunc: (params: AnyObj) => Promise<T>, params: AnyObj) {
  try {
    let res = await asyncFunc(params);
    return [null, res];
  } catch (error) {
    return [error, null];
  }
}
/**
 * @desc 对象Key排序并生成key=value&
 * @param {Object} jsonObj 排序对象
 * @param {Boolean} isSort 是否排序
 */
function jsonSort(jsonObj: AnyObj, isSort = true) {
  let arr = [];
  for (let key in jsonObj) {
    if (jsonObj.hasOwnProperty(key)) arr.push(key);
  }
  isSort && arr.sort();
  let str = '';
  for (let i in arr) {
    // 过滤掉 Array.prototype.xxx进去的字段
    if (arr.hasOwnProperty(i)) str += arr[i] + '=' + jsonObj[arr[i]] + '&';
  }
  return str.substr(0, str.length - 1);
}
/**
 * 对象排序,升序
 */
function sortAsc(propertyName: string) {
  return function (object1: AnyObj, object2: AnyObj) {
    const value1 = object1[propertyName];
    const value2 = object2[propertyName];
    if (value2 < value1) {
      return 1;
    } else if (value2 > value1) {
      return -1;
    } else {
      return 0;
    }
  };
}
// 精度计算
function P() {
  /*
   * 判断obj是否为一个整数
   */
  function isInteger(obj: number) {
    return Math.floor(obj) === obj;
  }

  /*
   * 将一个浮点数转成整数，返回整数和倍数。如 3.14 >> 314，倍数是 100
   * @param floatNum {number} 小数
   * @return {object}
   *   {times:100, num: 314}
   */
  function toInteger(floatNum: number) {
    let ret = { times: 1, num: 0 };
    let isNegative = floatNum < 0;
    if (isInteger(floatNum)) {
      ret.num = floatNum;
      return ret;
    }
    let strfi = floatNum + '';
    let dotPos = strfi.indexOf('.');
    let len = strfi.substr(dotPos + 1).length;
    let times = Math.pow(10, len);
    let intNum = parseInt(`${Math.abs(floatNum) * times + 0.5}`, 10);
    ret.times = times;
    if (isNegative) {
      intNum = -intNum;
    }
    ret.num = intNum;
    return ret;
  }

  /**
   * 核心方法，实现加减乘除运算，确保不丢失精度
   * 思路：把小数放大为整数（乘），进行算术运算，再缩小为小数（除）
   *
   * @param a {number} 运算数1
   * @param b {number} 运算数2
   * @param op {string} 运算类型，有加减乘除（add/subtract/multiply/divide）
   *
   */
  function operation(a: number, b: number, op: string): number {
    let o1 = toInteger(a);
    let o2 = toInteger(b);
    let n1 = o1.num;
    let n2 = o2.num;
    let t1 = o1.times;
    let t2 = o2.times;
    let max = t1 > t2 ? t1 : t2;
    let result = null;
    switch (op) {
      case 'add':
        if (t1 === t2) {
          // 两个小数位数相同
          result = n1 + n2;
        } else if (t1 > t2) {
          // o1 小数位 大于 o2
          result = n1 + n2 * (t1 / t2);
        } else {
          // o1 小数位 小于 o2
          result = n1 * (t2 / t1) + n2;
        }
        return result / max;
      case 'subtract':
        if (t1 === t2) {
          result = n1 - n2;
        } else if (t1 > t2) {
          result = n1 - n2 * (t1 / t2);
        } else {
          result = n1 * (t2 / t1) - n2;
        }
        return result / max;
      case 'multiply':
        result = (n1 * n2) / (t1 * t2);
        return result;
      case 'divide':
        result = (n1 / n2) * (t2 / t1);
        return result;
      default:
        return 0;
    }
  }

  function add(a: number, b: number) {
    return operation(a, b, 'add');
  }
  function subtract(a: number, b: number, digits: number) {
    return operation(a, b, 'subtract').toFixed(digits);
  }
  function multiply(a: number, b: number, digits: number) {
    return operation(a, b, 'multiply').toFixed(digits);
  }
  function divide(a: number, b: number, digits: number) {
    return operation(a, b, 'divide').toFixed(digits);
  }

  // exports
  return {
    add,
    subtract,
    multiply,
    divide,
  };
}
/**
 * @desc 过滤掉空对象
 * @param {Object} body
 */
function filter(body: AnyObj) {
  // 过滤掉所有key为空的字段
  if (body && Object.keys(body).length > 0) {
    body = Object.keys(body).reduce((target, key) => {
      if (body[key] !== '') {
        // 要设置不等于'' 因为可能出现0
        target[key] = body[key];
      }
      return target;
    }, {} as AnyObj);
  }
  return body;
}
/**
 *
 * @desc 获取滚动条距顶部的距离
 */
function getScrollTop() {
  return (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
}
/**
 *
 * @desc  获取一个元素的距离文档(document)的位置，类似jQ中的offset()
 * @param {HTMLElement} ele
 * @returns { {left: number, top: number} }
 */
function offset(ele: HTMLElement) {
  let pos = {
    left: 0,
    top: 0,
  };
  while (ele) {
    pos.left += ele.offsetLeft;
    pos.top += ele.offsetTop;
    ele = ele.offsetParent as HTMLElement;
  }
  return pos;
}
function isAndroid() {
  let u = navigator.userAgent;
  // 安卓
  let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1;
  return isAndroid;
}
function isIOS() {
  let u = navigator.userAgent;
  let isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
  return isIOS;
}
function isNull(data: any) {
  // 解决处理判断数字0=''的问题
  if (data === 0) {
    data = data.toString();
  }
  if (Array.isArray(data)) {
    return data.length === 0;
  }
  return data == null || data === '' || data === 'undefined';
}
/**
 * 获取url的params
 * @param name
 * @param url
 * @returns
 */
function getUrlParam(name: string, url: string) {
  let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
  let r;
  if (isNull(url)) {
    r = window.location.search.substr(1).match(reg);
  } else {
    let ParamList = url.split('?');
    if (ParamList.length > 1) {
      r = ParamList[1].substr(0).match(reg);
    } else {
      return url;
    }
  }
  let context = '';
  if (r != null) {
    context = r[2];
  }
  return context == null || context === '' || context === 'undefined' ? '' : context;
}

/**
 * 传入路由结构，返回{path:string,name:string}结构
 * @param {Array} 子路由列表
 * @param {String} 上一级路由地址
 */
function createNavStructure(routers: RouteRecordRaw[], rootPath = ''): RouteRecordRaw[] {
  const navs = [];
  for (let i = 0; i < routers.length; i++) {
    const route = routers[i];
    const children = route.children;
    let path = rootPath;
    // 如果传入的是''，那么就赋值当前路由地址，因为子路由没有/
    if (!path) {
      path = `/${route.path}`;
    } else {
      if (route.path !== '/') {
        path = `${rootPath}/${route.path}`; // 子路由没有/所以得加上
      }
    }
    const target: AnyObj = {
      path: path,
      _path: `/${route.path}`, // _path存储没有拼接的路由，有利于作比较
      icon: route.path,
      meta: route?.meta,
      name: route?.meta?.title ?? route.name,
    };
    if (children && children.length > 0) {
      target['children'] = createNavStructure(children, path);
    }
    navs.push(target);
  }
  return navs as RouteRecordRaw[];
}
// 这个只需要获取一次即可
let __cacheRouteTree: RouteRecordRaw[] = [];
/**
 * 传入路由结构，返回{path:string,name:string}结构
 * @param {Array} routers 子路由列表
 * @param {Boolean} catchRefresh 是否刷新缓存
 */
function getNavStructure(routers: RouteRecordRaw[], catchRefresh = false) {
  if (!__cacheRouteTree.length || catchRefresh) {
    __cacheRouteTree = createNavStructure(routers);
  }
  return __cacheRouteTree;
}
/**
 * 路由过滤器，过滤出需要用的路由，远程路由hash没有改变，则取
 * @param {Router} local 本地路由
 * @param {Array} remote 远程路由
 */
function routeFilterRemote(local: RouteRecordRaw[], remote: any[]) {
  return remote.reduce((t, RRoute) => {
    const LRoutes = local.filter((l) => l?.meta?.id === RRoute.id); // 过滤出id相同的路由
    if (LRoutes.length === 1) {
      const LRoute = LRoutes[0];
      // 如果存在相同的路由，而且路由存在子路由，则递归进行过滤
      if (RRoute.children && LRoute.children) {
        // 替换过滤后的子路由
        LRoute.children = routeFilter(LRoute.children, RRoute.children);
      }
      if (LRoute.meta) {
        LRoute.meta.nav_title = RRoute.nav_title;
      }
      t.push(LRoute);
    }

    return t;
  }, []);
}

/**
 * 过滤路由
 * @param {Object} root 路由结构
 * @param {Object} sysPms 权限字典
 */
function routeFilter(root: RouteRecordRaw[], sysPms: AnyObj) {
  return root.reduce((t, RRoute) => {
    const pms = (RRoute.meta?.pms as any[])?.some((p) => sysPms[p]) ?? true; // 过滤出id相同的路由
    // 是否有RRoute的mate然后如果没有就返回true如果有找pms如果有pms就判断权限 如果没有就直接抛出true
    if (pms) {
      if (RRoute.children) {
        RRoute.children = routeFilter(RRoute.children, sysPms);
      }
      t.push(RRoute);
    }
    return t;
  }, [] as RouteRecordRaw[]);
}
//封装检测数据类型的函数
function checkedType(data: any) {
  return Object.prototype.toString.call(data).slice(8, -1);
}
/**
 * 深度克隆
 * @param {any} target
 */
function deepClone<T>(target: AnyObj): T | AnyObj {
  let result,
    targetType = checkedType(target);
  if (targetType == 'Object') {
    result = {};
  } else if (targetType == 'Array') {
    result = [];
  } else {
    return target; //普通数据类型直接返回
  }

  for (let i in target) {
    if (target.hasOwnProperty(i)) {
      let value = target[i];
      if (checkedType(value) == 'Object' || checkedType(value) == 'Array') {
        // @ts-ignore TODO 优化types
        result[i] = deepClone(value);
      } else {
        // @ts-ignore TODO 优化types
        result[i] = value;
      }
    }
  }
  return result;
}
const a = {
  a: 1,
  b: 2,
  c: 3,
};
const c = deepClone<typeof a>(a);
c.a;
/**
 * 对象深度合并
 * @param  {...Object} objArr 需要合并的对象 内部不允许有数组
 */
function deepMerge(...objArr: any[]) {
  let ret = {};
  function handler(key: string, source: AnyObj, ret: AnyObj) {
    let isObj = typeof source[key] == 'object'; //判断是否是对象
    if (isObj) {
      if (!ret[key]) {
        ret[key] = {}; //键名不存在，拷贝键名
      }
      // 由于是对象、递归深度拷贝
      Object.keys(source[key]).forEach((_key) => {
        handler(_key, source[key], ret[key]);
      });
    } else {
      // 是非引用类型、直接拷贝键名所对应的值
      ret[key] = source[key];
    }
  }
  // 遍历需要拷贝的对象、逐一深度拷贝
  objArr.forEach((obj, idx, _self) => {
    Object.keys(obj).forEach((key) => {
      handler(key, obj, ret);
    });
  });
  return ret;
}
/**
 * 获取系统语言
 * @return {string} zh en
 */
function getSysLanguage() {
  return 'en';
  // return window.navigator.language.slice(0, 2);  （产品林鑫要求默认是英文，不需要根据用户浏览器）
}
/**
 * 判断当前浏览器是否是Chrome
 * @returns {String} chrome | safari | iex | edge | ff | opera
 */
function getBrowser() {
  const userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
  const isOpera = userAgent.indexOf('Opera') > -1; //判断是否Opera浏览器
  // let isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera; //判断是否IE浏览器
  const isIE = window.ActiveXObject || 'ActiveXObject' in window;
  // let isEdge = userAgent.indexOf("Windows NT 6.1; Trident/7.0;") > -1 && !isIE; //判断是否IE的Edge浏览器
  const isEdge = userAgent.indexOf('Edge') > -1; //判断是否IE的Edge浏览器
  const isFF = userAgent.indexOf('Firefox') > -1; //判断是否Firefox浏览器
  const isSafari = userAgent.indexOf('Safari') > -1 && userAgent.indexOf('Chrome') == -1; //判断是否Safari浏览器
  const isChrome = userAgent.indexOf('Chrome') > -1 && userAgent.indexOf('Safari') > -1 && !isEdge; //判断Chrome浏览器

  if (isIE) {
    const reIE = new RegExp('MSIE (\\d+\\.\\d+);');
    reIE.test(userAgent);
    const fIEVersion = parseFloat(RegExp['$1']);
    if (userAgent.indexOf('MSIE 6.0') != -1) {
      return 'ie6';
    } else if (fIEVersion == 7) {
      return 'ie7';
    } else if (fIEVersion == 8) {
      return 'ie8';
    } else if (fIEVersion == 9) {
      return 'ie9';
    } else if (fIEVersion == 10) {
      return 'ie10';
    } else if (userAgent.toLowerCase().match(/rv:([\d.]+)\) like gecko/)) {
      return 'ie11';
    } else {
      return '0';
    } //IE版本过低
  } //isIE end
  if (isFF) {
    return 'ff';
  }
  if (isOpera) {
    return 'opera';
  }
  if (isSafari) {
    return 'safari';
  }
  if (isChrome) {
    return 'chrome';
  }
  if (isEdge) {
    return 'edge';
  }
}
/**
 * 给元素设置transform
 * @param {Element} ele dom
 * @param {CSSStyleSheet} style transform对应的属性
 */

function setTransform(ele: HTMLElement, style: string) {
  if (!style || !ele) return;
  ele.style.webkitTransform = style;
  // @ts-ignore
  ele.style.MozTransform = style;
  // @ts-ignore
  ele.style.msTransform = style;
  // @ts-ignore
  ele.style.OTransform = style;
  ele.style.transform = style;
}
/**
 * pc端实现移动端滑动页面的效果
 * @param {String} domName
 * @param {Object} options { scrollY: true, scrollX: true } 滑动的轴
 */
function touchController(domName: string, options: AnyObj = {}) {
  options = Object.assign({ scrollY: true, scrollX: true }, options);
  const dom = document.querySelector(domName) as HTMLElement;
  dom.onmousedown = function (e) {
    let el = e || event;
    let Y = el.clientY;
    let X = el.clientX;
    const _dom = document.querySelector(domName) as HTMLElement;
    let ToTop = _dom.scrollTop;
    let Toleft = _dom.scrollLeft;
    dom.onmousemove = throttle(function (ev) {
      ev = ev || event;
      const subY = ev.clientY - Y;
      const subX = ev.clientX - X;
      Y = ev.clientY;
      X = ev.clientX;
      ToTop -= subY;
      Toleft -= subX;
      if (options.scrollY) {
        document.querySelector(domName)!.scrollTop = ToTop;
      }
      if (options.scrollX) {
        document.querySelector(domName)!.scrollLeft = Toleft;
      }
    }, 10);
    document.onmouseup = function () {
      dom.onmousemove = function () {
        null;
      };
    };
  };
}
function timeToTime(start: number, end: number) {
  const arr = [];
  if (!start) {
    const h = new Date().format('HH');
    const m = new Date().format('MM');
    start = +h;
    if (+m < 30) {
      arr.push(`${h}:30`);
    }
    start++;
  }
  while (end > start) {
    const h = `${start}`.addLeftZero();
    arr.push(`${h}:00`, `${h}:30`);
    start++;
  }
  return arr;
}
function dayToDay(num: number) {
  const days = ['今天', '明天'];
  if (num <= 2) return days;
  const now = new Date().getTime();
  let time = 2; // 从第三天开始算
  num -= 2; // 减去今明两天的
  while (time <= num) {
    days;
    days.push(new Date(now + time * 24 * 3600 * 1000).format('mm.dd (ddd)'));
    time++;
  }
  return days;
}
/**
 * 将权限mark fq_导航_一级页面_二级页面_三级页面转化成 {fq_导航: { 一级页面: { 二级页面: { 三级页面: {} } } } }
 * @param {Array} list
 * @return {Object}
 */
function formatePms(list: any[]) {
  if (!list) list = [];
  return list.reduce((obj, pms) => {
    obj[pms.mark] = pms;
    return obj;
  }, {});
}
/**
 * 将权限mark fq_导航_一级页面_二级页面_三级页面转化成 {fq_导航: { 一级页面: { 二级页面: { 三级页面: {} } } } }
 * @param {Array} list
 * @return {Object}
 */
// function formatePms(list) {
//   return list.reduce((obj, { mark }) => {
//     const p = mark.split('_'); // [fq, a, b, c]
//     const navName = `${p.shift()}_${p.shift()}`;
//     if (!obj[navName]) obj[navName] = {};
//     let to = obj[navName]; // 指针
//     while (p.length) {
//       const child = p.shift();
//       if (!to[child]) {
//         to[child] = {};
//       }
//       to = to[child]; // 指针后移
//     }
//     return obj;
//   }, {});
// }

/**  获取36位不重复唯一ID （uuid） */
function uuid() {
  let chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
  let uuid = [],
    i,
    r;
  // uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
  uuid[14] = '4'; // bits 12-15 of the time_hi_and_version field to 0010
  for (i = 0; i < 36; i++) {
    if (!uuid[i]) {
      r = 0 | (Math.random() * 16);
      uuid[i] = chars[i == 19 ? (r & 0x3) | 0x8 : r];
    }
  }
  return uuid.join('');
}
/**
 * 时间差值计算
 * @param {Number} a 时间戳
 * @param {Number} b 时间戳
 */
function timeDayGap(a: number, b: number) {
  return Math.floor((a - b) / 86400000);
}
/**
 * 计算两日期差  兼容谷歌，火狐浏览器
 * @param time1  例如（2017-09-10）
 * @param time2  例如（2017-09-14）
 * @returns {string}
 */
function diy_time(time1: number, time2: number) {
  let $time1 = Date.parse(new Date(time1).toString());
  let $time2 = Date.parse(new Date(time2).toString());
  let $time3 = Math.abs(parseInt(String(($time2 - $time1) / 1000 / 3600 / 24))); //两日期差天数
  return $time3;
}
/**
 * 字符串日期格式化成date
 * @param {String} strDate 时间 yyyy-MM-dd
 */
function dateFormat(strDate = '') {
  const date = strDate
    .replace(/\d+(?=-[^-]+$)/, function (a) {
      return String(parseInt(a, 10) - 1);
    })
    .match(/\d+/g);
  // @ts-ignore
  return new Date(...date);
}
/**
 * 给字符串日期添加指定天数
 * @param {String} formatDate yyyy-MM-dd hh:mm:ss 格式的参数
 * @param {Number} count 天数
 */
function addDay(formatDate: string, count: number) {
  let dateStr;
  let year, month, day;
  let date = dateFormat(formatDate); // 字符串日期格式化成date
  date.setDate(P().add(date.getDate(), count));
  year = date.getFullYear();
  month = date.getMonth() + 1;
  day = date.getDate();
  if (month.toString().length == 1) {
    month = '0' + month;
  }
  if (day.toString().length == 1) {
    day = '0' + day;
  }
  dateStr = year + '-' + month + '-' + day;
  return dateStr;
}
/** 判断对象是否是promise对象 */
function isPromise(obj: Promise<any>) {
  return (
    !!obj && //有实际含义的变量才执行方法，变量null，undefined和''空串都为false
    (typeof obj === 'object' || typeof obj === 'function') && // 初始promise 或 promise.then返回的
    typeof obj.then === 'function'
  );
}

/**
 * 将数字进行千分位转换
 * @param num {Number|String} 数字或者数字的字符串格式
 * @param decimal {Number} 转换之后的字符串需要保留的小数点后的位数
 * @returns {string}
 */
function thousands(num: number | string) {
  // const _num = !decimal ? Number(num) : Number(num).toFixed(+decimal);
  let str = '--';
  if (num === 0 || num) {
    str = `${num}`.replace(/\d{1,3}(?=(\d{3})+(\.\d+)?$)/g, '$&,');
  }
  return str;
}
export {
  isPromise,
  addDay,
  dateFormat,
  sortAsc,
  uuid,
  formatePms,
  timeToTime,
  dayToDay,
  touchController, // pc端实现移动端滑动页面的效果
  setTransform, // 给元素设置transform
  getSysLanguage,
  getBrowser,
  setStorage,
  removeStorage,
  getStorage,
  isAndroid,
  isIOS,
  debounce, // 防抖
  throttle, // 节流
  lazyImageLoad, // 图片懒加载
  privatization, // 私有化对象属性
  errorCaptured, // async/await优化处理
  jsonSort, //对象Key排序并生成key=value&
  P, // 精度计算
  filter, // 过滤掉空对象
  getScrollTop, // 获取滚动条距顶部的距离
  offset, // 获取一个元素的距离文档(document)的位置，类似jQ中的offset()
  isNull, // 判断数据是否为空
  getUrlParam, //附件名字
  getNavStructure, // 格式化路由，拼接路由数据
  routeFilter, // 路由过滤器
  deepClone, // 深克隆
  deepMerge, // 深合并
  timeDayGap,
  diy_time,
  thousands, // 数字千分位
};




//const designWidth = 6080;
//const designHeight = 2160;

const designWidth = 3264;
const designHeight =  2160;


const sipsd_prefix = 'sipsd';

let styleUtil = {
  // 开发测试用
  px2vwT: function (_px) {
    return _px + "px";
  },

  px2vhT: function (_px) {
    return _px + "px";
  },

  px2fontT: function (_px) {
    return _px + "px";
  },
  px2sizeT: function (_px) {
    return _px;
  },

  // 换算
  px2vw: function (_px) {
    return (_px * 100.0) / designWidth + "vw";
  },

  px2vh: function (_px) {
    return (_px * 100.0) / designHeight + "vh";
  },

  px2font: function (_px) {
    return (_px * 100.0) / designWidth + "vw";
  },
  px2px: function (_px) {
    return (_px * window.innerWidth) / designWidth;
  },

  //样式类名添加前缀
  prefixName: function (classname) {
    return sipsd_prefix + "-" + classname;
  }
};

export {styleUtil}

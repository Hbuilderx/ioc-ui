<template>
  <div class="marquee" :default-style="myStyle">
    <div class="marquee-scroll">
      {{ content }}
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { styleUtil } from "./../../../common/utils/styleUtils";
export default {
  name: "ioc-marquee",
  props: {
    defaultStyle: {
      type: Object,
      default: () => ({}),
    },
    content: {
      type: String,
      default: "这是一段会滚动的文字，你可以将它替换掉",
    },
  },
  data() {
    return {
      myStyle: {},
    };
  },
  mounted() {
    if (this.defaultStyle) {
      this.initCustomStyle();
    }
    //系统错误捕获
    const errorHandler = (error, vm) => {
      console.error("抛出全局异常");
      console.error(vm);
      console.error(error);
    };

    Vue.config.errorHandler = errorHandler;
  },

  methods: {
    initCustomStyle() {
      if (
        typeof this.defaultStyle.width === "number" &&
        typeof this.defaultStyle.height === "number"
      ) {
        this.myStyle = {
          width: styleUtil.px2vw(this.defaultStyle.width),
          height: styleUtil.px2vh(this.defaultStyle.height),
        };
      } else {
        Vue.prototype.$throw = "长宽必须是数字";
        // (error)=> errorHandler(error,this);
        // throw "长宽必须是数字";
      }
    },
  },
};
</script>

<style lang="scss" scoped="scoped">
@import "./packages/common/style/variables.scss";
@import "./packages/common/style/mixin.scss";

.marquee {
  color: $color-success;
  overflow: hidden;
  // border: 1px solid red;
  .marquee-scroll {
    width: 100%;
    height: 100%;
    overflow: hidden;
    animation: scrollToLeft 20s linear infinite;
    transform-origin: 0 0;
    z-index: 1;
    font-size: px2font(24);
  }
}

@keyframes scrollToLeft {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(-100%);
  }
}
</style>
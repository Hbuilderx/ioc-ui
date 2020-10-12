<template>
  <div class="marquee" :default-style="myStyle">
    <!-- 三目运算符法 suck  -->
    <!-- 
      <div :class="direction === 'L2R' ? 'marqueeScroll_L2R' : 'marqueeScroll_R2L'" ref="marquee" :style="{ '--speed': speed }">
      {{ content }}
    </div>
    -->

    <!-- v-if方法  good -->
    <div v-if="direction === 'L2R'">
      <div ref="marquee" :class="[L2R]" :style="{ '--speed': speed }">
        {{ content }}
      </div>
    </div>

    <div v-else-if="direction === 'R2L'">
      <div ref="marquee" :class="[R2L]" :style="{ '--speed': speed }">
        {{ content }}
      </div>
    </div>

    <!-- 尝试写法 尽量减少重复css,通过参数控制部分css属性  better -->
    <!-- <div v-if="direction === 'R2L'">
      <div ref="marquee" :class="[R2L]" :style="{ '--scroll_direction':direction,'--speed': speed }">
        {{ content }}
      </div>
    </div> -->

    <!-- 尝试写法 suck -->
    <!-- <div ref="marquee" class="marquee-scroll"  :style="{width: '100%',height:'100%',overflow: 'hidden',transformOrigin: '0 0',zIndex: 1,animation: scrollToLeft +'20s linear infinite',}"> -->

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
    direction: {
      type: String,
      default: "L2R",
      // default: "R2L",
    },
    speed: {
      type: String,
      default: "1s",
    },
  },
  data() {
    return {
      myStyle: {},
      marquee: null,
      // 一般写法
      L2R: "marqueeScroll_L2R",
      R2L: "marqueeScroll_R2L",

      // 高级写法
      // L2R: "scrollToRight",
      // R2L: "scrollToLeft",
      // scrollToLeft: ` from {transform: translateX(100%);}to {transform: translateX(-100%)}`,
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
      if (typeof this.defaultStyle.width === "number" && typeof this.defaultStyle.height === "number") {
        this.myStyle = {
          width: styleUtil.px2vw(this.defaultStyle.width),
          height: styleUtil.px2vh(this.defaultStyle.height),
        };
      } else {
        Vue.prototype.$throw = "长宽必须是数字";
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
  .marqueeScroll_L2R {
    width: 100%;
    height: 100%;
    overflow: hidden;
    animation: scrollToRight var(--speed) linear infinite;
    transform-origin: 0 0;
    z-index: 1;
    font-size: px2font(24);
  }
  .marqueeScroll_R2L {
    width: 100%;
    height: 100%;
    overflow: hidden;
    animation: scrollToLeft var(--speed) linear infinite;
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
    transform: translateX(0%);
  }
}
@keyframes scrollToRight {
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(100%);
  }
}
// 保留以下注释
// TODO:
// 期望 marqueeScroll_L2R  marqueeScroll_R2L 合并成为 一个css类，只替换 animation的第一个参数，通过传入move 来控制方向

// .marquee {
//   color: $color-success;
//   overflow: hidden;
//   .marqueeScroll {
//     width: 100%;
//     height: 100%;
//     overflow: hidden;
//     // animation: scrollToRight #{$time1} linear infinite;//可用最低级写法
//     // animation: #{$scrollToRight} var(--speed) linear infinite;
//     animation: var(--scroll_direction) var(--speed) linear infinite;
//     transform-origin: 0 0;
//     z-index: 1;
//     font-size: px2font(24);
//   }
// }

// @mixin keyframes($animationName) {
//   @-webkit-keyframes #{$animationName} {
//     @content;
//   }
//   @-moz-keyframes #{$animationName} {
//     @content;
//   }
//   @-o-keyframes #{$animationName} {
//     @content;
//   }
//   @keyframes #{$animationName} {
//     @content;
//   }
// }

// @keyframes #{$scrollToRight}  {
//   from {
//     transform: translateX(0%);
//   }
//   to {
//     transform: translateX(100%);
//   }
// }

// @include keyframes(move) {
//   from {
//     transform: translateX(0%);
//   }
//   to {
//     transform: translateX(100%);
//   }
// }
</style>

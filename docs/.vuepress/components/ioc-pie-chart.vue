<template>
    <div>
        <ioc-card>
            <div class="wrap">
                <ioc-chart></ioc-chart>
            </div>
            <template v-slot:code>
                <pre v-highlightjs>
                  <code class="vue">{{code}}</code>
                </pre>
            </template>
        </ioc-card>

    </div>
</template>
<script>
  import IocChart from "../../../packages/components/Chart/src/Chart";
  import hljs from 'highlight.js';
  // 样式文件
  import('highlight.js/styles/atom-one-dark.css');
  export default {
    data() {
      return {
        code: `
            <ioc-chart
                :extra-option="chartOption"
                :chart-type="chartType"
                :data-list="chartData"
            />
    `
      };
    },
    components: {
      "ioc-chart": IocChart
    },
    directives: {
      highlightjs: {
        inserted (el) {
          // 遍历元素并且使用 highlight 进行处理
          const preEl = document.querySelectorAll('pre code');
          preEl.forEach(el => {
            hljs.highlightBlock(el);
          });
        }
      }
    },
  };
</script>
<style lang="scss" scoped>
    .wrap{
        width: 500px;
        height: 400px;
    }
</style>


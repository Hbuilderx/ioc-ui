/*
* @Author: zhu.ds
* @Description:基础饼图组件
* @Date: 2020-07-27 10:19:30
* @Last Modified by:
* @Last Modified time:2020年7月27日
*/

<template>
  <div class="chart"></div>
</template>

<script>
import { merge } from "lodash";
import echart from "echarts";
import { BASIC_OPTION } from "./defaultOption";
import ResizeListener from "element-resize-detector";
export default {
  name: "ioc-chart",
  props: {
    // 单独业务数据(可选)
    dataList: {
      type: Array,
      default: () => [],
    },
    // 额外的配置
    extraOption: {
      type: Object,
      default: () => ({}),
    },
    //图表类型(必须传入)
    chartType: {
      type: String,
      required: true,
    },
    autoplay: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      chart: null,
      fullOption: null,
    };
  },

  created() {},
  mounted() {
    this.chart = echart.init(this.$el);
    this.updateChartView();
    window.addEventListener("resize", this.handleWindowResize);
    this.addChartResizeListener();
    if (this.autoplay && this.fullOption) {
      this.chartsAutoplay();
    }
  },

  beforeDestroy() {
    window.removeEventListener("resize", this.handleWindowResize);
  },

  methods: {
    /**
     * @desc 将业务数据加入到基础样式配置中
     * @returns {Object} 完整的echart配置
     */
    assembleDataToOption() {
      return merge(
        {},
        BASIC_OPTION.option1,
        {
          series: [
            {
              data: this.dataList,
              type: this.chartType,
            },
          ],
        },
        this.extraOption
      );
    },

    /**
     * 更新echart视图
     */
    updateChartView() {
      if (!this.chart) return;
      const fullOption = this.assembleDataToOption();
      this.fullOption = fullOption;
      this.chart.setOption(fullOption, true);
    },

    /**
     * 当窗口缩放时，echart动态调整自身大小
     */
    handleWindowResize() {
      if (!this.chart) return;
      this.chart.resize();
    },

    /**
     * 对chart元素尺寸进行监听，当发生变化时同步更新echart视图
     */
    addChartResizeListener() {
      const instance = ResizeListener({
        strategy: "scroll",
        callOnAdd: true,
      });

      instance.listenTo(this.$el, () => {
        if (!this.chart) return;
        this.chart.resize();
      });
    },

    chartsAutoplay() {
      if (this.fullOption) {
        let options = this.fullOption;
        let myChart = this.chart;

        let currentIndex = -1;
        setInterval(function () {
          var dataLen = options.series[0].data.length;
          // 取消之前高亮的图形
          myChart.dispatchAction({
            type: "downplay",
            seriesIndex: 0,
            dataIndex: currentIndex,
          });
          currentIndex = (currentIndex + 1) % dataLen;
          // 高亮当前图形
          myChart.dispatchAction({
            type: "highlight",
            seriesIndex: 0,
            dataIndex: currentIndex,
          });
          // 显示 tooltip
          myChart.dispatchAction({
            type: "showTip",
            seriesIndex: 0,
            dataIndex: currentIndex,
          });
        }, 1000);
      }
    },
  },
  watch: {
    dataList: {
      deep: true,
      handler: () => this.updateChartView,
    },
  },
};
</script>

<style lang="scss" scoped="scoped">
.chart {
  height: 100%;
  width: 100%;
}
</style>
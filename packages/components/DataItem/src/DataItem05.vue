<template>
    <div
        class="box"
        @mouseover="mouseOver"
        @mouseleave="mouseLeave"
        :class="active?'box-active':''"
    >
        <div class="num">{{num}}</div>
        <div class="name">{{type}}</div>
        <div class="total" ref="total">
            <div
                class="now"
                ref="now"
                :style="{width:nowDomWidth}"
            ></div>
        </div>
        <div class="percent" >{{percent}}</div>
        <div class="value" >{{value}}</div>
    </div>
</template>

<script>
  import {styleUtil} from "./../../../common/utils/styleUtils"
  export default {
    name: "ioc-dataItem05",
    props:{
      num:{
        type: Number,
        default: 3
      },
      type:{
        type:String,
        default:()=>('类型none')
      },
      total:{
        type:Number,
        default:1000
      },
      value:{
        type:Number,
        default:230
      }
    },
    data(){
      return{
        percent:0,
        nowDomWidth:'',
        active:false
      };
    },

    mounted(){
      let that=this
      this.initStatus();
      window.onresize=()=>{
        this.initStatus();
      }

    },

    methods:{
        initStatus(){
          let that=this;
          let ratio=this.value/this.total;
          let totalDomWidth=this.$refs.total.offsetWidth;
          this.nowDomWidth=(totalDomWidth*ratio)+'px'
          this.percent=(ratio*100).toFixed(1)+'%';
        },

       mouseOver(){
         this.active=true;
       },

       mouseLeave(){
         this.active=false;
      },
    },
    watch:{
      /* total: {
        deep: true,
        immediate: true
      } */
    }

  }
</script>

<style lang="scss" scoped>
    @import "./packages/common/style/mixin.scss";
    .box{
        width: px2vw(560);
        height: px2vh(75);
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        background-color: #0E1F38;
        transition: all .5s;
    }

    .box-active{
        outline: 1px solid #104DBA;
        background-color: #122D4D;
        cursor: pointer;
        transition: all .5s;
    }


    .box .num{
        width: px2vw(45);
        height: px2vw(45);
        color: #fff;
        text-align: center;
        font-size: px2font(20);
        font-weight: 600;
        line-height:px2vw(45) ;
    }

    .box .name{
        font-size: px2font(20);
        color: #8FB3D3;
    }

    .box .total{
        width: px2vw(215);
        height: px2vh(18);
        border-radius: px2vh(10);
        background-color: #1A3565;
        position: relative;
    }

    .box .total .now{
        height: px2vh(18);
        border-radius: px2vh(10);
        background-image: linear-gradient(to right,#108AF7, #0FDAF9);
        position: absolute;
    }

    .box .percent{
        color: #FFCC00;
        font-size: px2font(23);
    }

    .box .value{
        color: #fff;
        font-size: px2font(32);
    }

</style>
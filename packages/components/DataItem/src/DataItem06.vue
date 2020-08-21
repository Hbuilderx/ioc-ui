<template>
    <div class="box">
        <div class="name" >{{name}}</div>
        <div class="value" >{{value}}</div>
        <div class="total" ref="total">
            <div
                class="now"
                ref="now"
                :style="{width:nowDomWidth,background:background}"
            ></div>
        </div>
        
    </div>
</template>

<script>
  import {styleUtil} from "./../../../common/utils/styleUtils"
  export default {
    name: "ioc-dataItem06",
    props:{
      name:{
        type:String,
        default:()=>('数据名称')
      },
      total:{
        type:Number,
        default:()=>(24)
      },
      value:{
        type:Number,
        default:()=>(18)
      },
      background:{
        type:String,
        default:()=>('#108AF7')
      }
    },
    data(){
      return{
        nowDomWidth:'',
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
        width: px2vw(260);
        height: px2vh(55);
        position: relative;
     
       
    }
    .box .name{
        position: absolute;
        font-size: px2font(23);
        color: #fff;
        left: 0;
        top: 0;
    }

    .box .total{
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: px2vh(10);
        border-radius: px2vh(5);
        background-color:#3F4D61;
    }

    .box .total .now{
        height: px2vh(10);
        border-radius: px2vh(5);
        position: absolute;
    }


    .box .value{
        position: absolute;
        color: #fff;
        font-size: px2font(30);
        right: 0;
        top: 0;
    }

</style>
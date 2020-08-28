<template>
  <div class="wrap">
    <img :src="icon" alt="" class="icon">
    <div class="name">{{name}}</div>
    <div class="value">{{value}}</div>
  </div>
</template>

<script>
  export default {
    name: "ioc-dataItem10",
    props:{
      icon:{
        type:String,
        default:()=>('')
      },
      value:{
        type:String,
        default:()=>('12345')
      },
      name:{
        type:String,
        default:()=>('数据名称')
      },
    }
  }
</script>

<style scoped="scoped" lang="scss">
    @import "./packages/common/style/mixin.scss";
    .wrap{
      height: px2vh(150);
      width: px2vw(150);
     // border: 1px solid red;
      position: relative;
      .name{
        position: absolute;
        color: #fff;
        text-align: center;
        width: 100%;
        font-size: px2font(20);
        top: 0;
      }
      
      .icon{
        position: absolute;
        width: px2vw(60);
        left: px2vw(45);
        top: px2vh(25);
        
      }
      
      .value{
        position: absolute;
        text-align: center;
        bottom: px2vh(18);
        width: 100%;
        color: #fff;
        font-size: px2font(30);
        font-weight: 600;
      }
    }
</style>

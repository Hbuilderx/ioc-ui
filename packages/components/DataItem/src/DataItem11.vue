<template>
  <div class="wrap">
    <div class="name">{{name}}</div>
    <div class="num">
      <span class="value" :style="{color:color}">{{value}}</span>
      <span class="percentage">{{ratio}}</span>
    </div>
  </div>
</template>

<script>
  export default{
    name:"ioc-dataItem11",
    props:{
      total:{
        type:Number,
        default:()=>(0)
      },
      value:{
        type:Number,
        default:()=>(0)
      },
      name:{
        type:String,
        default:()=>('')
      },
      color:{
        type:String,
        default:()=>('')
      }
    },
    data(){
      return{
        ratio:""
      };
    },
    
    mounted() {
      this.ratio=((this.value/this.total)*100).toFixed()+"%"
    }
  }
</script>

<style lang="scss" scoped="scoped">
   @import "./packages/common/style/mixin.scss";
   .wrap{
     width: px2vw(160);
     height: px2vh(70);
     position: relative;
     //border: 1px solid red;
     .name{
       text-align: left;
       color: #fff;
       font-size: px2font(20);
       width: 100%;
       float: left;     
     }
     .num{
       display:table-cell; 
       vertical-align:bottom;
       float: left;
       display: flex;
       justify-content: flex-start;
       align-items: baseline;
       .value{
         font-weight: 600;
         font-size: px2font(28);
       }
       .percentage{
         text-align: left;
         color: #fff;
         font-size: px2font(20);
         margin-left: px2vw(8);
       }
     }
   }
</style>

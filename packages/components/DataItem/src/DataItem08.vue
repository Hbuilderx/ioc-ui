<template>
    <div
        class="box"
        @mouseover="mouseOver"
        @mouseleave="mouseLeave"
        :class="active?'box-active':''"
    >
        <div class="num">{{num}}</div>
        <div class="name">{{updateName}}</div>
        <div :class="isStrong?'strong':'value'">
          {{value}} <span>亿</span>
        </div>
    </div>
</template>

<script>
  import {styleUtil} from "./../../../common/utils/styleUtils"
  export default {
    name: "ioc-dataItem08",
    props:{           
      name:{
        type: String,
        default:""
      },  
      num:{
        type:Number,
        default:3
      },
      value:{
        type:Number,
        default:230
      },
    },
    data(){
      return{
        active:false,
        isStrong:false,
        updateName: this.name
      };
    },

    mounted(){
      if(this.value>4){
        this.isStrong=true
      };
      if(this.name.length>12){
        this.updateName =this.name.substr(0,12)+'...'
      }
    },

    methods:{
       mouseOver(){
         this.active=true;
       },

       mouseLeave(){
         this.active=false;
      },
    },

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
        width: px2vw(58);
        height: px2vw(58);
        color: #fff;
        text-align: center;
        font-size: px2font(20);
        font-weight: 600;
        line-height:px2vw(58) ;
    }

    .box .name{
        font-size: px2font(23);
        color: #fff;
    }


    .box .value{
        color: #fff;
        font-size: px2font(28);
        font-weight: 600;
        span{
          font-size: px2font(23);
           font-weight: 200;
        }
    }
    
    .strong{
      color:#FFCC00;
      font-size: px2font(32);
      font-weight: 600;
      span{
        font-size: px2font(23);
        font-weight: 200;
      }
    }
    
 
    
    

</style>
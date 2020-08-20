<template>
    <div class="item">
        <span class="item-icon"></span>
        <span class="item-name">{{name}}</span>
        <span class="item-value">{{value}}</span>
        <span class="item-unit">个</span>
    </div>
</template>

<script>
  export default {
    name: "ioc-dataItem01",
    props:{
        name:{
          type:String,
          default:()=>('')
        },
        value:{
          type: String,
          default:()=>('0')
        }
    },
    data(){
      return{

      };
    },
    methods:{
      
    },


  }
</script>

<style lang="scss" scoped="scoped">
    @import "./packages/common/style/mixin.scss";
    .item{
        width: px2vw(220);
        height: px2vh(40);
        display: flex;
        justify-content: flex-start;
        align-items: center;
     //   border: 1px solid red;
        span{
            color: #fff;
        }
        .item-icon {
            width: px2vw(20);
            height: px2vw(20);
            background-color: #27A6FF;
            border-radius: 50%;
        }

        .item-name{
            font-size: px2font(24);
            margin-left: px2vw(18);
        }

        .item-value{
            font-size: px2font(28);
            font-weight: 700;
            margin-left: px2vw(22);
        }
        .item-unit{
            font-size: px2font(24);
            margin-left: px2vw(8);
        }

    }

</style>
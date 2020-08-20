<template>
    <div class="item">
        <span class="item-value">{{value}}</span>
        <span class="item-name">{{name}}</span>
    </div>
</template>

<script>
  export default {
    name: "ioc-dataItem02",
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
        width: px2vw(172);
        height: px2vh(94);
       // border: 1px solid red;
        span{
            color: #fff;
            float: left;
            display: block;
            width: 100%;
        }

        .item-name{
            font-size: px2font(20);
            height: px2vh(20);
        }

        .item-value{
            font-size: px2font(40);
            height: px2vh(40);
            color: #0EB3FF;
            font-weight: 700;
            margin-bottom: px2vh(12);
        }


    }

</style>
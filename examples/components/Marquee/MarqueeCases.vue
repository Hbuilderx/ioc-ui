<template>
  <div class="marquee-wrap">
      <div class="marquee-wrap-item">
          <ioc-marquee :time="time"></ioc-marquee>

      </div>
  </div>
</template>

<script>
  export default{
    name:"MarqueeCases,",
    data(){
      return{

      };
    },
  }
</script>


<style lang="scss" scoped>
    @import "./../../assets/css/theme.scss";
    .marquee-wrap{
       // width: 100%;
         // border: 1px solid red;
          float: left;
        overflow: hidden;
        .marquee-wrap-item{
            width: 350px;
            height: 300px;
            float: left;
            background-color:$component-bg;
            box-shadow: $component-shadow;
            border-radius: $component-radius;
            margin: 10px;
        }
    }
</style>

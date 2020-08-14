<template>
    <div class="video-wrap">
        <div class="video-wrap-item">
            <ioc-video :setting="setting"/>
        </div>
    </div>
</template>

<script>
    export default {
        name: "VideoCases",
        data(){
            return{
              setting:{
                  id:111,
                  width:570,
                  height:500,
                  src:"http://hls.open.ys7.com/openlive/f01018a141094b7fa138b9d0b856507b.m3u8",
                  showFooter:true,
              },
            };
        }
    }
</script>

<style lang="scss" scoped>
    @import "./../../assets/css/theme.scss";
    .video-wrap{
       // width: 100%;
         // border: 1px solid red;
          float: left;
        overflow: hidden;
        .video-wrap-item{
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
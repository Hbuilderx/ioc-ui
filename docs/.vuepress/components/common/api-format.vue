<template>
  <div class="container">
    <p class="attr">Attributes</p>
    <div class="form">
      <div class="form-main">
        <slot name="form-header"></slot>
        <slot name="form-body"></slot>
      </div>            
    </div>
  </div>
</template>

<script>
export default {
    name:'apiFormat',
}
</script>

<style lang="scss" scoped>
*{
  padding: 0;
  margin:0;
  box-sizing: border-box;
}
.container{
    font-family: 'Helvetica Neue',Helvetica,'PingFang SC','Hiragino Sans GB','Microsoft YaHei',SimSun,sans-serif;
    font-size:14px;
    color: #5e6d82;
    border-radius: 3px;
    margin-top: 3em;
    .attr{
      color: #1f2f3d;
      font-size: 22px;
      font-weight: 400;
    }
    .form{
      padding: 0.1em 0em;
      .form-main{
        width: 100%;
        .formHead{
          display: block;
          padding: 0.1em 0.1em;
          padding-bottom: 0;
          .formHeadRow{
            border: none;
            display: flex;//实现按比例填充
            border-bottom: 1px solid #ebebeb;
            .formHeadCol{
              border: none;
              font-weight: normal;
              margin: 0 0.1em;
              padding: 0.8em 0;
              display: flex;                          
            }
            .formHeadCol:nth-child(1){ width: 25%; }
            .formHeadCol:nth-child(2){ width: 28%; }
            .formHeadCol:nth-child(3){ width: 10%; }
            .formHeadCol:nth-child(4){ width: 22%; }
            .formHeadCol:nth-child(5){ width: 15%; }
          }
        }
        .formBody{
          display: block;
          padding: 0.1em 0.1em;
          .formBodyRow{
            border: none;
            display: flex;
            background: #fff;
            border-bottom: 1px solid #ebebeb;
            .formBodyCol{
              border: none;
              margin: 0 0.1em;
              padding: 0.8em 0;
              display: flex;
            }
            .formBodyCol:nth-child(1){ width: 25%; }
            .formBodyCol:nth-child(2){ width: 28%; }
            .formBodyCol:nth-child(3){ width: 10%; }
            .formBodyCol:nth-child(4){ width: 22%; }
            .formBodyCol:nth-child(5){ width: 15%; }
          }
        }
      }
    }
}
</style>

/*
* @Author: zhu.ds
* @Description: 表格
* @Date: 2020-07-27 14:06:40
* @Last Modified by:
* @Last Modified time:
*/

<template>
  <div class='table-container'>
    <div class='table-header'>
      <span class='table-header-item' v-for='(item, index) in columns' :key='index'>
        {{item.name}}
      </span>
    </div>
    <div class='table-body'>
      <div class='scroll-wrapper'>
        <div class='table-body-row' v-for='(row, index) in source' :key='index'>
            <span
              class='table-body-col'
              v-for='(col, colIdx) in columns'
              :key='colIdx'
              :title='row[col.key]'
              :class="switchClass(row[col.key])"
            >
            {{row[col.key]}}
           </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'ioc-table01',
    props: {
      columns: {
        type: Array,
        default: () => [
          { name: '事件类型', key: 'type' },
          { name: '事件名称', key: 'name' },
          { name: '地址', key: 'address' },
          { name: '来源', key: 'source' },
        ],
      },
      source: {
        type: Array,
        default: () => [
          { type: '测试类型', name: '新增·测试事件', address: '吴中区', source: 'PC录入', time: '2020-07-27' },
          { type: '测试类型', name: '新增·测试事件', address: '吴中区', source: 'PC录入', time: '2020-07-27' },
          { type: '测试类型', name: '新增·测试事件', address: '吴中区', source: 'PC录入', time: '2020-07-27' },
          { type: '测试类型', name: '新增·测试事件', address: '相城区', source: 'PC录入', time: '2020-07-27' },
          { type: '测试类型', name: '新增·测试事件', address: '吴中区', source: 'PC录入', time: '2020-07-27' },
          { type: '测试类型', name: '新增·测试事件', address: '姑苏区', source: 'PC录入', time: '2020-07-27' },
          { type: '测试类型', name: '新增·测试事件', address: '吴中区', source: 'PC录入', time: '2020-07-27' },
          { type: '测试类型', name: '新增·测试事件', address: '吴中区', source: 'PC录入', time: '2020-07-27' },
          { type: '测试类型', name: '新增·测试事件', address: '吴中区', source: 'PC录入', time: '2020-07-27' },
          { type: '测试类型', name: '新增·测试事件', address: '吴中区', source: 'PC录入', time: '2020-07-27' },
        ],
      },
    },
    data() {
      return {}
    },

    methods:{
      switchClass(type){
        if(type.indexOf("相城区")>-1){
          return 'table-body-col-warn'
        }
        if(type.indexOf("姑苏区")>-1){
          return 'table-body-col-success'
        }
      },
    },
  }
</script>
<style lang="scss" scoped="scoped">
  .table-container{
    width: 100%;
    height: 100%;
    overflow: hidden;

    .table-header{
      width: 100%;
      height: 30px;
      line-height: 30px;
      text-align: center;
      display: flex;
      z-index: 2;

      .table-header-item{
        background-color: #123052;
        display: block;
        flex: 1;
        text-align: center;
        color: #26a9fc;
      }
    }

    .table-body{
      width: 100%;
      height: calc( 100% - 30px );
      overflow: hidden;

      .scroll-wrapper{
        width: 100%;
        overflow: hidden;
        animation: tableScoll 20s linear infinite;
        transform-origin: 0 0;
        z-index: 1;

        .table-body-row{
          width: 100%;
          height: 30px;
          line-height: 30px;
          color: #fff;
          text-align: center;
          display: flex;
         // border: 1px solid red;

          /*&:first-child{
            .table-body-col{
              color: rgb(163, 21, 46);
            }
          }

          &:nth-child(2){
            .table-body-col{
              color: rgb(255, 91, 245);
            }
          }

          &:nth-child(3){
            .table-body-col{
              color: rgb(255, 221, 96);
            }
          }

          &:nth-child(even){
            .table-body-col{
              background-color: rgba(17, 67, 157, .8);
            }
          }*/

          .table-body-col{
            font-weight: 200;
            flex: 1;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            border-bottom: 1px solid #283951;
            background-color: #10233d;
            color: #fff;
          }

          .table-body-col-warn{
            color: red;
          }

          .table-body-col-success{
            color: green;
          }

        }
      }
    }

  }
  @keyframes tableScoll {
    from {
      transform: translateY(0%)
    }
    to {
      transform: translateY(-100%)
    }
  }
</style>



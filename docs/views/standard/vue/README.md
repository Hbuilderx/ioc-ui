---
title: 'Vue规范'
sidebarDepth: 3
---

## 



### Vue开发规范

> `常规的一些规范同JS`

### 组件命名规范
- 组件名应该始终是多个单词的，根组件APP除外
- 有意义的名词、简短、具有可读性
- 命名及使用遵循kebab-case约定
- 导入及注册组件时，遵循PascalCase(单词首字母大写命名)约定
### method命名规范
- 常用方法名不按以下规则（如：`init`、`refresh`）
- 驼峰式命名，统一使用动词或者动词+名词形式
- 请求数据方法，统一以`data`结尾
- 尽量使用常用单词开头(`set` `get` `go` `can` `has` `is`)

### 注释规范
- 需要注释的事项
```
1、公共组件说明
2、各组件中重要函数或者类说明
3、复杂的业务逻辑处理说明
4、特殊情况的代码处理说明，对于代码中特殊用途的变量、存在临界值、函数中使用的hack、使用了某种算法或思路等需要进行注释描述
5、多重if判断语句
6、注释块必须以`/** (至少两个星号开头) **/`
7、单行注释使用//
```
- 单行注释：注释单独一行，不要在代码后的同一行内加注释
- 多行注释
```
组件使用说明和调用说明
/**
* 组件名称
* @module 组件存放位置
* @desc 组件描述
* @author 组件作者
* @date 2020年7月23日14:02:30
* @param {Object} [title]   - 参数说明
* @param {Object} [columns] - 参数说明
* @param {String} [columns] - 参数说明
* @example 调用示例
* <hbTable :title="title" :columns="columns" :tableData="tableData"></hbTable>
**/
```

### 源码风格
- 使用ES6风格编码
- 数组成员对变量赋值时，优先使用解构赋值
- 函数的参数如果是对象的成员，优先使用解构赋值
- 使用扩展运算符(`...`)拷贝数组
```javascript
const items = [1, 2, 3, 4, 5]
 
// bad
const itemsCopy = items
 
// good
const itemsCopy = [...items]
```
- 需要函数表达式的场合，尽量的使用箭头函数

### 指令规范
- 指令有缩写一律采用缩写形式(如：`@click代替v-on:click`)
- v-for循环必须加上key属性，在整个for循环中key需要唯一
- 避免`v-if`和`v-for`同时用在一个元素上（性能问题）
### Props规范
- Props定义应该尽量详细
例如：
```js

props: {
  status: {
    type: String,
    required: true,
    validator: function (value) {
      return [
        'syncing',
        'synced',
        'version-conflict',
        'error'
      ].indexOf(value) !== -1
    }
  }
}
```
---
title: 'CSS代码规范'
sidebarDepth: 3
---

## CSS代码规范

### 样式表编码
> @charset规则一定要在样式文件的第一行首个字符位置开始，否则的话就会有机会让 BOM 设置生效（如果有设置 BOM 的话）而优于 @charset 作为样式表的编码

> @charset ""; 一定要写上，并且用小写字母，不能出现转义符

_推荐写法：_
```css

@charset "UTF-8";
/**
 * @desc File Info
 * @author Author Name
 * @date 2015-10-10
 */

.box{}
```

_不推荐写法：_
```css

/**
 * @desc File Info
 * @author Author Name
 * @date 2015-10-10
 */

/* @charset规则不在文件首行首个字符开始 */
@charset "UTF-8";

.box{}

```
```css
@CHARSET "UTF-8";
/* @charset规则没有用小写 */

.box{}
```
```css

/* 无@charset规则 */
.box{}

```

### 代码格式化
样式书写一般有两种：一种是紧凑格式 (Compact)
```css
.name{ display: block;width: 50px;}
```
一种是展开格式（Expanded）
```css
.name{
    display: block;
    width: 50px;
}
```

> **统一使用展开格式书写样式**
### 代码大小写
样式选择器，属性名，属性值关键字全部使用小写字母书写，属性字符串允许使用大小写。
```css
/* 推荐 */
.title{
	display:block;
}

/* 不推荐 */
.TITLE{
	DISPLAY:BLOCK;
}
```
### 选择器
- 尽量少用通用选择器 `*`
- 不使用 ID 选择器
- 不使用无具体语义定义的标签选择器
```css
/* 推荐 */
.box {}
.box li {}
.box li p{}

/* 不推荐 */
*{}
#box {}
.box div{}
```
### 代码缩进
统一使用四个空格进行代码缩进，使得各编辑器表现一致（各编辑器有相关配置）
```css
.name {
    width: 100%;
    height: 100%;
}
```

### 代码易读性
左括号与类名之间一个空格，冒号与属性值之间一个空格

```css
/* 推荐 */
.name {
    width: 100%;
    height: 100%;
}

/* 不推荐 */
.name{
    width:100%;
}
```

逗号分隔的取值，逗号之后一个空格
```css
/* 推荐 */
.box {
    box-shadow: 1px 1px 1px #333, 2px 2px 2px #ccc;
}

/* 不推荐 */
.box{
    width:100%;
}
```
为单个css选择器或新申明开启新行

```css
/* 推荐 */
.box,
.box_title,
.jdc_title_content {
    color: #ff0;
}
.nav{
    color: #fff;
}

/* 不推荐 */
.jdc,box_title,.jdc_title_content {
    color: #ff0;
}.nav{
    color: #fff;
}
```

 颜色值 `rgb() rgba() hsl() hsla() rect() `中不需有空格，且取值不要带有不必要的 0

```css
/* 推荐 */
.box {
    color: rgba(255,255,255,.5);
}

/* 不推荐 */
.box {
    color: rgba( 255, 255, 255, 0.5 );
}
```
属性值十六进制数值能用简写的尽量用简写
```css
/* 推荐 */
.box {
    color: #fff;
}

/* 不推荐 */
.box {
    color: #ffffff;
}
```
不要为 0 指明单位
```css
/* 推荐 */
.box {
    margin: 0 10px;
}

/* 不推荐 */
.box {
    margin: 0px 10px;
}
```
### 属性值引号
css属性值需要用到引号时，统一使用单引号
```css
/* 推荐 */
.box {
	font-family: 'Hiragino Sans GB';
}

/* 不推荐 */
.box {
	font-family: "Hiragino Sans GB";
}

```
属性书写顺序
建议遵循以下顺序

- 布局定位属性：display / position / float / clear / visibility / overflow
- 自身属性：width / height / margin / padding / border / background
- 文本属性：color / font / text-decoration / text-align / vertical-align / white- space / break-word
- 其他属性（CSS3）：content / cursor / border-radius / box-shadow / text-shadow / background:linear-gradient …
```css
.box {
    display: block;
    position: relative;
    float: left;
    width: 100px;
    height: 100px;
    margin: 0 10px;
    padding: 20px 0;
    font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
    color: #333;
    background: rgba(0,0,0,.5);
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    -o-border-radius: 10px;
    -ms-border-radius: 10px;
    border-radius: 10px;
}
```
### CSS3浏览器私有前缀写法
CSS3 浏览器私有前缀在前，标准前缀在后
```css
.box {
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    -o-border-radius: 10px;
    -ms-border-radius: 10px;
    border-radius: 10px;
}
```
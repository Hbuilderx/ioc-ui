---
title: 'HTML代码规范'
sidebarDepth: 3
---


[[toc]]

## HTML代码规范
### DOCTYPE 声明
HTML文件必须加上,并统一使用 HTML5 的文档声明：
```html
<!DOCTYPE html>
```
### 编码 :grinning:

一般情况下统一使用 “UTF-8”
```html
<meta charset="UTF-8">
```
### 标签写法
- 所有具有开始标签和结束标签的元素都要写上起止标签，某些允许省略开始标签或和束标签的元素亦都要写上。
- 空元素标签都不加 “/” 字符

_推荐写法：_
```html
<div>
    <h1>我是标题</h1>
    <p>我是一段文字，我有始有终</p>
</div>
	
<br>
```
_不推荐写法：_
```html
<div>
    <h1>我是标题</h1>
    <p>我是一段文字，我有始无终
</div>

<br/>
```

### HTML代码大小写
HTML标签名、类名、标签属性和大部分属性值统一用小写
_推荐写法：_
```html
<div class="case" data-id="12"></div>
```
_不推荐写法：_
```html
<div class="CASE" data-ID="12"></div>
```

### 类型属性
- 不需要为 CSS、JS 指定类型属性，HTML5 中默认已包含

_推荐写法：_
```html
<link rel="stylesheet" href="" >
<script src=""></script>
```
_不推荐写法：_
```html
<link rel="stylesheet" type="text/css" href="" >
<script type="text/javascript" src="" ></script>
```

### 元素属性
- 元素属性值使用双引号语法
- 元素属性值可以写上的都写上

_推荐写法：_
```html
<input type="text">
	
<input type="radio" name="name" checked="checked" >
```
_不推荐写法：_
```html
<input type=text>	
<input type='text'>
	
<input type="radio" name="name" checked >
```

### 特殊字符引用
在 HTML 中不能使用小于号 “<” 和大于号 “>”特殊字符，浏览器会将它们作为标签解析，若要正确显示，在 HTML 源代码中使用转义字符
_推荐写法：_
```html
<a href="#">详情&gt;&gt;</a>
```
_不推荐写法：_
```html
<a href="#">详情>></a>
```

### 代码缩进
统一使用4个空格进行代码缩进，（各编辑器有相关配置）
```html
<div class="demo">
    <a href="#"></a>
</div>
```

### 纯数字输入框
使用 `type="tel"` 而不是 `type="number"`
```html
<input type="tel">
```

### 代码嵌套
元素嵌套规范，每个块状元素独立一行，内联元素可选

_推荐写法：_
```html
<div>
    <h1></h1>
    <p></p>
</div>	
<p><span></span><span></span></p>

<p>
    <span></span>
    <span></span>
</p>

```
_不推荐写法：_
```html
<div>
    <h1></h1><p></p>
</div>	

```
段落元素与标题元素只能嵌套内联元素 :poop:

_推荐写法：_
```html
<h1><span></span></h1>
<p><span></span><span></span></p>
```
_不推荐写法：_
```html
<h1><div></div></h1>
<p><div></div><div></div></p>
```


---
title: 'HTML注释规范'
sidebarDepth: 3
---


[[toc]]

## HTML注释规范
### 单行注释
一般用于简单的描述，如某些状态描述、属性描述等

注释内容前后各一个空格字符，注释位于要注释代码的上面，单独占一行

_推荐写法：_
```html
<!-- 注释内容 -->
<div>...</div>
```
_不推荐写法：_
```html
<div>...</div><!-- 注释内容 -->	
	
<div><!-- 注释内容 -->
    ...
</div>
```

### 模块注释
一般用于描述模块的名称以及模块开始与结束的位置

注释内容前后各一个空格字符，`<!-- Start 模块名 --> `表示模块开始，`<!-- End 模块名 -->` 表示模块结束，模块与模块之间相隔一行

_推荐写法：_
```html
<!-- Start Comment Text A -->	
<div class="module_a">
    ...
</div>
<!-- End Comment Text A -->
	
<!-- Start Comment Text B -->	
<div class="module_b">
    ...
</div>
<!-- Eed Comment Text B -->
```

_不推荐写法：_
```html
<!-- Start Comment Text A -->	
<div class="module_a">
    ...
</div>
<!-- End Comment Text A -->	
<!-- Start Comment Text B -->	
<div class="module_b">
    ...
</div>
```

### 嵌套模块注释
当模块注释内再出现模块注释的时候，为了突出主要模块，嵌套模块不再使用
```html
<!-- Start Comment Text -->
<!-- End Comment Text -->
```
而改用
```html
<!-- /Comment Text -->
```

注释写在模块结尾标签底部，单独一行。
```html
<!-- Start Comment Text A -->
<div class="module_a">
		
    <div class="module_b">
        ...
    </div>
    <!-- /module_b -->
    	
    <div class="module_b">
    	...
    </div>
    <!-- /module_b -->
		
</div>
<!-- End Comment Text A -->
```
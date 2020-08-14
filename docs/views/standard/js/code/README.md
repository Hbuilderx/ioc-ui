---
title: '代码规范'
sidebarDepth: 3
---



## 

> 维护统一的代码规范有利于代码的迭代和后期维护

### 单行代码块
在单行代码块中使用空格
```js
/* 不推荐 */
function foo () {return true}
if (foo) {bar = 0}

/* 推荐 */
function foo () { return true }
if (foo) { bar = 0 }

```
### 大括号风格
在编程过程中，大括号风格与缩进风格紧密联系，用来描述大括号相对代码块位置的方法有很多。在 JavaScript 中，主要有三种风格，如下：
- One True Brace Style
```js
if (foo) {
  bar()
} else {
  baz()
}
```
- Stroustrup

```js
if (foo) {
  bar()
}
else {
  baz()
}
```
- Allman

```js
if (foo)
{
  bar()
}
else
{
  baz()
}
```
> 我们约定使用 `One True Brace Style` 风格

### 变量命名
当命名变量时，主流分为驼峰式命名（variableName）和下划线命名（variable_name）两大阵营。
> 团队约定使用驼峰式命名
```js
let userLoginData='';

const itemStyle='';

var isShow=true;
```
### 拖尾逗号
在 ECMAScript5 里面，对象字面量中的拖尾逗号是合法的，但在 IE8（非 IE8 文档模式）下，当出现拖尾逗号，则会抛出错误。

拖尾逗号的例子：

```js
var foo = {
  name: 'foo',
  age: '22',
}

var bar = { sex: '男', id: 12 }

```
拖尾逗号的好处是，简化了对象和数组添加或删除元素，我们只需要修改新增的行即可，并不会增加差异化的代码行数。

> 因为拖尾逗号有好也有不好，所以团队约定允许在最后一个元素或属性与闭括号 `]` 或` }` 在不同行时，可以（但不要求）使用拖尾逗号。当在同一行时，禁止使用拖尾逗号。

### 逗号空格
逗号前后的空格可以提高代码的可读性，团队约定在逗号后面使用空格，逗号前面不加空格。
```js
/* 不推荐 */
var foo = 1,bar = 2
var foo = 1 , bar = 2
var foo = 1 ,bar = 2

/* 推荐 */
var foo = 1, bar = 2

```

### 逗号风格
逗号分隔列表时，在 JavaScript 中主要有两种逗号风格
- 标准风格，逗号放置在当前行的末尾
- 逗号前置风格，逗号放置在下一行的开始位置
> 团队约定使用标准风格
```js
/* 不推荐 */
var foo = 1
,
bar = 2

var foo = 1
, bar = 2

var foo = ['name'
          , 'age']
          
/* 推荐 */
 var foo = 1,
     bar = 2
 
 var foo = ['name',
             'age']         

```
### 计算属性的空格
团队约定在对象的计算属性内，禁止使用空格
```js
/* 不推荐 */
obj['foo' ]
obj[ 'foo']
obj[ 'foo' ]

/* 推荐 */
obj['foo']

```
### 拖尾换行
在非空文件中，存在拖尾换行是一个常见的 UNIX 风格，它的好处是可以方便在串联和追加文件时不会打断 Shell 的提示。在日常的项目中，保留拖尾换行的好处是，可以减少版本控制时的代码冲突。
```js
/* 不推荐 */
function func () {
  // do something
}

/* 推荐 */
function func () {
  // do something
}
  // 此处是新的一行
```

> 可以通过 .editorconfig 添加 EOL

### 函数调用
为了避免语法错误，约定在函数调用时，禁止使用空格
```js
/* 不推荐 */
fn ()
fn
()

/* 推荐 */
fn()
```
### 对象字面量的键值缩进
约定对象字面量的键和值之间不能存在空格，且要求对象字面量的冒号和值之间存在一个空格
```js
/* 不推荐 */
var obj = { 'foo' : 'haha' }

/* 推荐 */
var obj = { 'foo': 'haha' }
```
### 构造函数首字母大写
在 JavaScript 中 new 操作符用来创建某个特定类型的对象的一个实例，该类型的对象是由一个构造函数表示的。由于构造函数只是常规函数，唯一区别是使用 `new` 来调用。所以我们约定构造函数的首字母要大小，以此来区分构造函数和普通函数。

```js
/* 不推荐 */
var fooItem = new foo()

/* 推荐 */
var fooItem = new Foo()
```

### 构造函数的参数
在 JavaScript 中，通过 `new` 调用构造函数时，如果不带参数，可以省略后面的圆括号。但这样会造成与整体的代码风格不一致，所以约定使用圆括号

```js
/* 不推荐 */
var person = new Person

/* 推荐 */
var person = new Person()
```

### 链式赋值
链式赋值容易造成代码的可读性差，所以团队约定禁止使用链式赋值
```js
/* 不推荐 */
var a = b = c = 1

/* 推荐 */
var a = 1
var b = 1
var c = 1
```

### 变量声明
JavaScript 允许在一个声明中，声明多个变量。团队约定在声明变量时，一个声明只能有一个变量
```js
/* 不推荐 */
var a, b, c

/* 推荐 */
var a
var b
var c
```

### 函数声明的空格
当格式化一个函数，函数名或 function 关键字与左括号之间允许有空白。命名函数要求函数名和 function 关键字之间有空格，但是匿名函数要求不加空格。

> 团队约定函数括号前要加空格
```js
/* 不推荐 */
function func(x) {
  // ...
}

/* 推荐 */
function func (x) {
  // ...
}
```

### 操作符的空格
团队约定操作符前后都需要添加空格
```js
/* 不推荐 */
var sum = 1+2

/* 推荐 */
var sum = 1 + 2
```
---
title: 'CSS样式规范'
sidebarDepth: 3
---


## 样式规范
### 重置样式
- 移动端
```css
* {
-webkit-tap-highlight-color: transparent;
    outline: 0;
    margin: 0;
    padding: 0;
    vertical-align: baseline;
}

body,
 h1,
 h2,
 h3,
 h4,
 h5,
 h6,
 hr,
 p,
 blockquote,
 dl,
 dt,
 dd,
 ul,
 ol,
 li,
 pre,
 form,
 fieldset,
 legend,
 button,
 input,
 textarea,
 th,
 td {
    margin: 0;
    padding: 0;
    vertical-align: baseline;
 }

img {
    border: 0 none;
    vertical-align: top;
}
i, em {
    font-style: normal;
}
ol,
ul {
    list-style: none;
}
input,
select,
button,
h1,
h2,
h3,
h4,
h5,
h6 {
    font-size: 100%;
    font-family: inherit;
}
table {
    border-collapse: collapse;
    border-spacing: 0;
}
a {
    text-decoration: none;
    color: #666;
 }
body {
    margin: 0 auto;
    min-width: 320px;
    max-width: 640px;
    height: 100%;
    font-size: 14px;
    font-family: -apple-system,Helvetica,sans-serif;
    line-height: 1.5;
    color: #666; -webkit-text-size-adjust: 100% !important;
    text-size-adjust: 100% !important;
}
input[type="text"],
textarea {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
}


```
- PC端
> 由于太长，不作展开了
```css
html, body, div, h1, h2, h3, h4, h5, h6, p, dl, dt, dd, ol, ul, li, fieldset, form, label, input, legend, table, caption, tbody, tfoot, thead, tr, th, td, textarea, article, aside, audio, canvas, figure, footer, header, mark, menu, nav, section, time, video { margin: 0; padding: 0; }
h1, h2, h3, h4, h5, h6 { font-size: 100%; font-weight: normal }
article, aside, dialog, figure, footer, header, hgroup, nav, section, blockquote { display: block; }
ul, ol { list-style: none; }
img { border: 0 none; vertical-align: top; }
blockquote, q { quotes: none; }
blockquote:before, blockquote:after, q:before, q:after { content: none; }
table { border-collapse: collapse; border-spacing: 0; }
strong, em, i { font-style: normal; font-weight: normal; }
ins { text-decoration: underline; }
del { text-decoration: line-through; }
mark { background: none; }
input::-ms-clear { display: none !important; }
body { font: 12px/1.5 \5FAE\8F6F\96C5\9ED1, \5B8B\4F53, "Hiragino Sans GB", STHeiti, "WenQuanYi Micro Hei", "Droid Sans Fallback", SimSun, sans-serif; background: #fff; }
a { text-decoration: none; color: #333; }
a:hover { text-decoration: underline; }

```
### 媒体查询
[设备尺寸参考 ：Mobile devices](http://cssmediaqueries.com/overview.html)

[媒体查询类型浏览器支持情况：CSS3 Media Queries overview](http://cssmediaqueries.com/overview.html)
##### 判断设备横竖屏
```css
/* 横屏 */
@media all and (orientation :landscape) {

}

/* 竖屏 */
@media all and (orientation :portrait) {

}

```

##### 判断设备宽高
```css
/* 设备宽度大于 320px 小于 640px */
@media all and (min-width:320px) and (max-width:640px) {

}
```

##### 判断设备像素比
```css
/* 设备像素比为 1 */
@media only screen and (-webkit-min-device-pixel-ratio: 1), only screen and (min-device-pixel-ratio: 1) {

}

/* 设备像素比为 1.5 */
@media only screen and (-webkit-min-device-pixel-ratio: 1.5), only screen and (min-device-pixel-ratio: 1.5) {

}

/* 设备像素比为 2 */
@media only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min-device-pixel-ratio: 2) {

}

```
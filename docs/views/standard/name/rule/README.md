[[toc]]
# 命名规范
尽量做到见名知意，使用常见的文件夹名命
### 目录命名
- src:入口
- image:图片资源
- style:样式文件
- common:公用资源
- data:静态数据
- api:接口
- views：vue单文件页面
- components:组件
- children:隶属于于同一路由的其他界面
- config:自定义的配置文件
- utils:常用工具
- assets:其他特殊资源(其子目录见名知意即可)

使用案例
```
   ├── src
   │   ├── views
   │   │   └── children
   │   ├── components
   │   ├── style
   │   ├── common
   │   │   ├── data
   │   │   └── utils
   │   ├── assets
   │   │   ├── pdf
   │   │   └── module
   │   ├── image
   │   └── api
   │
   ├── public
   ├── node_modules
   ├── vue.config.js
   ├── package.json
   └── README.md
```

### 图片命名
图片命名建议以以下顺序命名：
**图片业务（可选） +（mod_）图片功能类别（必选）+ 图片模块名称（可选） + 图片精度（可选）**
- 图片业务：
  - ioc_：ioc
  - boc_：boc
  - sipsd_：sipsd

…
- 图片功能类别：
  - pub_：是否公共，可选
  - icon：模块类固化的图标
  - logo：LOGO类
  - sprite：单页面各种元素合并集合
  - btn：按钮
  - bg：可平铺或者大背景
  - banner: 轮播图或首页横图
…
- 图片模块名称：

  - goodsList：商品列表
  - goodsInfo：商品信息
  - userAvatar：用户头像
…
- 图片精度：
  - 普清：@1x
  - Retina：@2x | @3x
…

如下面例子：
```
公共模块：
ioc_pub_btn_goodList@2x.png
boc_pub_btn_goodList.png
pub_btn_goodList.png

非公共模块：
ioc_btn_goodList@2x.png
ioc_btn_goodList.png
btn_goodList.png
```
处理高清图片的时候，命名应该加上图片相应的精度说明
```
推荐：
ioc_logo@1x.png
ioc_logo@2x.png

不推荐：
ioc_logo.png
ioc_logo_retina.png
```
### HTML/CSS文件命名
确保文件命名总是以字母开头而不是数字，且字母一律小写，以下划线连接且不带其他标点符号，如：
```
<!-- HTML -->
chart.html
chart_list.html
chart_list_detail.html

<!-- SASS -->
chart.scss
chart_list.scss
chart_list_detail.scss
```
### ClassName命名
ClassName的命名应该尽量精短、明确，必须以字母开头命名，且全部字母为小写，单词之间统一使用下划线 “_” 连接


##### 模块命名
全站公共模块：以 `mod_` 开头
```html
<div class="mod_logo_box"></div>
```
业务公共模块：以 业务名`_mod_` 开头
```html
<div class="user_mod_login"></div>

```

##### 基于姓氏命名法（继承 + 外来），如下图：
祖先模块不能出现下划线，除了是全站公用模块，如 mod_ 系列的命名：
__推荐__
```html
<div class="modulename">
	<div class="modulename_info">
		<div class="modulename_son"></div>
		<div class="modulename_son"></div>
		...
	</div>
</div>

<!-- 这个是全站公用模块，祖先模块允许直接出现下划线 -->
<div class="mod_info">
	<div class="mod_info_son"></div>
	<div class="mod_info_son"></div>
	...
</div>

```
__不推荐__
```html
<div class="modulename_info">
	<div class="modulename_info_son"></div>
	<div class="modulename_info_son"></div>
	...
</div>

```

在子孙模块数量可预测的情况下，严格继承祖先模块的命名前缀
```html
<div class="modulename">
	<div class="modulename_cover"></div>
	<div class="modulename_info"></div>
</div>
```

当子孙模块超过4级或以上的时候，可以考虑在祖先模块内具有识辨性的独立缩写作为新的子孙模块,不应继续继承前缀
```html
<div class="modulename">
	<div class="modulename_cover"></div>
	<div class="modulename_info">
    	<div class="modulename_info_user">
    		<div class="modulename_info_user_img">
    			<img src="" alt="">
    			<!-- 这个时候 miui 为 modulename_info_user_img 首字母缩写-->
    			<div class="miui_tit"></div>
    			<div class="miui_txt"></div>
    			...
    		</div>
    	</div>
    	<div class="modulename_info_list"></div>
	</div>
</div>
```
##### 常用命名推荐
> 注意：ad、banner、gg、guanggao 等有机会和广告挂勾的字眠不建议直接用来做ClassName，因为有些浏览器插件（Chrome的广告拦截插件等）会直接过滤这些类名，因此
```html
<div class="ad"></div>
```
这种广告的英文或拼音类名不应该出现

另外，敏感不和谐字眼也不应该出现，如：
```html
<div class="fuck"></div>
<div class="jer"></div>
<div class="sm"></div>
<div class="gcd"></div>
<div class="ass"></div>
<div class="KMT"></div>
...

```
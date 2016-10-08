## 云书webapp技术文档

### 项目目录
- /pages : 该目录存放所有的html文件
- ／source : 该目录存放所有的资源文件
    - /source/css : 存放css文件，由 /source/less目录中的less文件编译而来
    - /source/js : 存放js文件
    - /source/images : 存放一些零散的图片
    - /source/less : 存放less文件，/source/css目录中的css文件与该目录的less文件一一对应
    - /source/mui : mui框架
    - /source/plunges : 目前只放了一个fontAwesome，没什么用，可以删除
    - /source/webslice : 存放由云书ui提供的页面切图
    - /source/webview : 云书提供的webview所需要用到的资源目录

### 使用less编写css
- 我们使用less，进过一次编译后形成css；[相关文档](http://less.bootcss.com/)
- init.less 定义了公用的变量，如颜色等，以及基础函数


### js结构
- mui.js 一个移动端ui框架；[相关文档](http://dev.dcloud.net.cn/mui/ui/#accordion);
- ajax.js 
	- 1－3299行，主要是提供相关数据处理的底层服务，由 云书的 @叶旭 提供
	- 注意3397行$.ajaxSetup，给所有的ajax进行了配置；
	- 3315行 检验cookie： ``` var cookieObj = getCookieObj(); ``` 
		- 如果cookie不存在 或 isLogin 为false 或 token 不存在，那么执行 ``` successHandle({"resultCode":402}); ``` 进行登录
		- 如果获取到的cookie中不包含cityInfo和cityName，那么跳转页面至index.html进行地点获取；否则默认使用cookie中保存的城市地址。
	- 3356行 ``` function successHandle(data){ //... } ``` 对ajax返回成功，对返回码非200的情况做统一处理
	- 3406行开始，为所有的ajax服务函数，返回$.Deferred对象，交由html页面中的$.when()获取；
- ajax_my.js
	- 与ajax.js相似，但是只包含ajax服务函数，返回$.Deferred对象，交由html页面中的$.when()获取；
- public.js
	- 主要是各个页面都会用到的js函数，具体见注释

### html 结构
- 由于微信浏览器自带的一些诡异bug，我们将页面内的JavaScript放置于head内，并在jquery的``` $(function(){//...}) ```函数体内执行。
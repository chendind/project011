# 云书webapp技术文档

## 项目目录
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

## 编写css
- 我们使用less，进过一次编译后形成css；[相关文档](http://less.bootcss.com/)

## js结构
- ajax.js
启动项目

```
$ yarn 
$ yarn start
```

提供一种解决前端开源库 bug 的一般思路，以 single-spa 为例

```
# clone 目标代码库，并yarn link
$ git clone https://github.com/single-spa/single-spa.git
$ cd single-spa
$ yarn link
$ cd your_repo
$ yarn link single-spa

# 配置 webpack resolve alias
{
  resolve:{
    alias:{
      'single-spa':'single-spa/src/single-spa.js'
    }
  }
}
```
打开 chrome devtools，切换到 sources，打开FileSystem，导入 single-spa 文件夹，这样就可以在源码打断点了，观察调用栈，判断执行逻辑

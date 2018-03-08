### 命令行

```
安装依赖
yarn

运行开发环境
yarn run dev

打包
yarn run build

查看有没有错误
yarn run lint
```

这个  模板是基于 vue-cli 3.0.0-bera.6 版本做的改进。

配置文件：vue.config.js
在这个文件里面可以做你想要的配置，至于怎么写。可以参考[这篇文章](https://www.uis.cc/2018/02/27/New-features-of-vue-cli-3-speed/)

<font color="red">目前加了如下的配置：</font>

* 打包输出位置改为：/www

* 打包输出的文件名以及位置为： chunks/[name].[hash:16].js
* 基础路径： '/'
* devServer 的端口改为:9999
  后续有什么要加的话再说啦····

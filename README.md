### 前端项目脚手架的工程化

>输入初始化命令--->执行交互的js--->与用户交互--->根据用户指令下载模板--->模板下载成功

### 项目积累
1. 利用node操作命令行
2. 脚手架工具常用的包
3. 做一个自己的vue-cli

### 使用到的包模块说明
```
const ora = require('ora')  //显示转圈-进度条
const chalk = reuqire('chalk')  //打印五颜六色的字体
const commander = require('commander') //简化node命令行的开发
const inquirer = require('inquirer') //交互式命令行
```

**本项目仅做本地模板的下载，利用数据驱动开发模式，将本地模板进行数据化处理，再统一进行download，测试脚本如下：**

```
my-cli2 init test
```


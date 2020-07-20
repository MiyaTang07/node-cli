const ora = require('ora');  //显示转动条
const chalk = require('chalk')  //配合console和转动条显示五颜六色字体
const spinner = ora(chalk.rgb(212,99,23).bgRgb(33,44,55)('hello ora')).start()
spinner.color = "yellow";
console.log(chalk.rgb(212,99,23).bgRgb(33,44,55)('hello world'))
setTimeout(()=>{
    spinner.stop()
},3000)
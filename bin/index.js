const ora = require('ora');
const chalk = require('chalk');
const fs = require('fs')
function a(name){
    var demoPath = './project'
    var targetPath = './'+name
    const spinner = ora(chalk.rgb(212,99,23).bgRgb(33,44,55)('下载中'))
    
    function down(arr){
        function finish(){
            spinner.stop()
            console.log(chalk.green('下载完成'))
        }
        while(arr.length){
            var item = arr.shift()
            if(item[0] === 'file'){
                var data = fs.readFileSync(item[1]);
                fs.writeFileSync(targetPath + '/' + item[1].replace('./project','.'),data)
            }else{
                var path = targetPath + '/' + item[1].replace('./project','.');
                fs.mkdirSync(path)
            }
            finish()
        }
    }
   
   function makearr(){
       var arr = [];
       function read(path){
           var files = fs.readdirSync(path);
           console.log(files) // ['app.js','src']
           files.forEach(function(item,index){
               var nowpath = path + '/' + item;
               var stat = fs.statSync(nowpath);
               if(stat.isDirectory()){
                   arr.push(['dir',nowpath])
                   read(nowpath)
               }else{
                   arr.push(['file',nowpath])
               }
           })
       }
       read(demoPath)

       return arr
   }
   //创建文件夹
   fs.mkdir('./' + name, function(){
       down(makearr())
   })
}

module.exports = a;
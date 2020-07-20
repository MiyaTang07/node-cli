#!/usr/bin/env node
const commander = require('commander')  //提供命令
const inquirer = require('inquirer')  //提问
commander.version('1.0.0','-v --version')
commander.command('init <name>').action(function(name){
    inquirer.prompt([
        {
         type:'input',  //radio
         name:'anthor',
         message:'what is your name?'
        }
    ]).then(answer=>{
       //console.log(answer)
       require('./bin')(answer.anthor)
    })
})

commander.parse(process.argv)

//1，模板放在git上
//2，脚手架一起



var fs = require('fs');

var dirName = process.argv[2]; //获取第二个参数为目录名称

fs.mkdirSync('./'+dirName); //创建目录

process.chdir('./'+dirName); //进入目录

fs.mkdirSync('js'); //生成js目录

fs.mkdirSync('css'); //css目录

fs.writeFileSync('./index.html','<!DOCTYPE html>\n<title>Hello</title>\n<h1>Hi</h1>');
fs.writeFileSync('./css/style.css','h1{color:red;}');
fs.writeFileSync('./js/main.js','var string = \"Hello Wrold\"\nalert(string)');

process.exit(0);

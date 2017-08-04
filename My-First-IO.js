var fs=require('fs'); //for global file system module
var num=fs.readFileSync(process.argv[2],'utf8').split('\n').length-1;
console.log(num);
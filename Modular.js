var solutionModule=require('./require-modular.js');
var dirName=process.argv[2];
var fileExt=process.argv[3];

var callback=function(error,fileNames){
    if(error)
    return console.error("I caught an error : ",error);
    fileNames.forEach(callback2)
};
var callback2=function(file){
    console.log(file);
}
solutionModule(dirName,fileExt,callback);
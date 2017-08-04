var fs=require('fs');
var path=require('path');

var dirpath=process.argv[2];
var filext=process.argv[3];

function getFiles(dirpath,filext,callback)
{
  fs.readdir(dirpath,'utf8',function(error,files)
  {
      if(error)
      return callback(error);

      files=files.filter(function(eachfile)
      {
          return path.extname(eachfile)==='.'+filext;
      })

      callback(null,files);
  })
}

var callback=function(error,filenames){
    if(error)
    return console.error('Error caught!');
    
    filenames.forEach(function(file) {
        console.log(file);
    });
};

getFiles(dirpath,filext,callback);
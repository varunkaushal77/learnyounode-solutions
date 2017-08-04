var fs=require('fs');
var path=require('path');

module.exports=function(dirName,extName,callback)
{
    fs.readdir(dirName,'utf8',function(error,files)
    {
        if(error)
        return callback(error);

        files=files.filter(function(eachFile)
        {
            return path.extname(eachFile)==='.'+extName;
        })
        callback(null,files)
    })
}
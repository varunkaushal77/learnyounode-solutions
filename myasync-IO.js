var fs=require('fs');
var file=process.argv[2]; //path to the file passed in command line
fs.readFile(file,'utf8',function(err,data)
{
    if(err)
    throw errr;
    else
    console.log(data.split('\n').length-1); //data will be of type string due to 'utf8'
}
);
var http=require('http');
var url=process.argv[2];
var string='';

http.get(url,function(response)
{
response.on('data',function(characters)
{
    string+=characters;
});
response.on('end',function()
{
    console.log(string.length);
    console.log(string);
})
}).on('error',console.error);
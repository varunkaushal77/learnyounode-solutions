var sum=0; //to store the sum of the values passed in the command line args 

for(var i=2;i<process.argv.length;i++) //process is a global object consisting of argv as an array of strings of command line args
sum+=Number(process.argv[i]); //Number is used to convert string into a number

console.log(sum);
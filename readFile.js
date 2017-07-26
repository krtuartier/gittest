var fs=require('fs');
var data=fs.readFile('readme.txt',function(err,data){
 if(err) return console.error(err);
 console.log(data.toString());
});
console.log('³ÌĞòÖ´ĞĞ½áÊø');
/*
Write code to read contents of a file and print it to the console. 
You can use the fs library to as a black box, the goal is to understand async tasks. 
Try to do an expensive operation below the file read and see how it affects the output. 
Make the expensive operation more and more expensive and see how it affects the output.  
*/
const fs=require("fs")
fs.readFile("file.txt","utf-8",(err,data)=>{
    console.log("The content of the file is:-",data)
})
console.log("Hello all!")
let a=1;
for(let i=1;i<=10000000000000;i++){
    a=a+i;
}
/*
Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks. 
*/
const fs=require("fs");
let data="Inserting the data using writeFile method of fs library"
//Writing the data into the file
fs.writeFile("file.txt",data,(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("File writen successfully!")
    }
})

//reading the data from the file
fs.readFile("file.txt","utf-8",(err,data)=>{
    console.log("Content present in file are:-",data)
})
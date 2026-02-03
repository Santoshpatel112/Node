import express from "express";
import fs from "fs";
const app=express();

const PORT=3000;

app.get("/",(req,res)=>{
    res.send("Hello from Express Server");
})
// WriteFile Sync
fs.writeFileSync("./ds-b.txt","Hello ABES College Students");
fs.writeFileSync("./Abes.txt","Hii ABES Students");

// readFileSync
const data=fs.readFileSync("./Abes.txt","utf-8");
console.log(data);
const data2=fs.readFileSync("./ds-b.txt","utf-8");
console.log(data2);


// writeFile Async

fs.writeFile("./demo.txt","this is the demo file of the write file async",()=>{
    console.log("File is created successfully");
})

// readFile Async
const d1=fs.readFile("./demo.txt","utf-8",(err,data)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(data);
    }
})

app.listen(PORT,()=>{
    console.log('Server is running on port '+PORT);
})

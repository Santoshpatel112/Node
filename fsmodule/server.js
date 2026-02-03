import express from "express";
import fs from "fs";
const app=express();

const PORT=3000;

app.get("/",(req,res)=>{
    res.send("Hello from Express Server");
})
// WriteFile Sync
fs.writeFileSync("./ds-b.tsxt","Hello ABES College Students");


fs.writeFileSync("./Abes.txt","Hii ABES Students");
const data=fs.readFileSync("./Abes.txt","utf-8");
console.log(data);
app.listen(PORT,()=>{
    console.log('Server is running on port '+PORT);
})

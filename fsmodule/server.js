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
// console.log(data);
const data2=fs.readFileSync("./ds-b.txt","utf-8");
// console.log(data2);


// writeFile Async

fs.writeFile("./demo.txt","this is the demo file of the write file async",()=>{
    // console.log("File is created successfully");
})

// readFile Async
const d1=fs.readFile("./demo.txt","utf-8",(err,data)=>{
    if(err){
        console.log(err);
    }
    else{
        // console.log(data);
    }
})
// Classwork A1,A2,A3,A4,A5,A6 || B1.B2,B3,B4,B5,B6

// 3 Sync methods and 3 Async methods of fs module
fs.writeFileSync("./A1.txt","this is A1 file");
fs.writeFileSync("./A2.txt","this is A2 file");
fs.writeFileSync("./A3.txt","this is A3 file");

// Async methods

fs.writeFile("./B1.txt","this is the B1 file",()=>{
    // console.log("B1 file created");
})
fs.writeFile("./B2.txt","this is the B2 file",()=>{
    // console.log("B2 file created");
}
)
fs.writeFile("./B3.txt","this is the B3 file",()=>{
    // console.log("B3 file created");
}
)

// readFileSync || writeFileSync
const A2data=fs.readFileSync("./A2.txt","utf-8");
// console.log(A2data);    
const A3data=fs.readFileSync("./A3.txt","utf-8");
// console.log(A3data);
const A1data=fs.readFileSync("./A1.txt","utf-8");
// console.log(A1data);
// readFile Async
fs.readFile("./B1.txt","utf-8",(err,data)=>{
    if(err){
        console.log(err);
    }
    else{
        // console.log(data);
    }
}
)
fs.readFile("./B2.txt","utf-8",(err,data)=>{
    if(err){
        console.log(err);
    }
    else{
        // console.log(data);
    }
})
fs.readFile("./B3.txt","utf-8",(err,data)=>{
    if(err){
        console.log(err);
    }
    else{
        // console.log(data);
    }
})




// Append File Sync
fs.appendFileSync("./Abes.txt","\nWelcome to ABES College of Engineering");
const appendAbes=fs.readFileSync("./Abes.txt","utf-8");
// console.log(appendAbes);
fs.appendFileSync("./Abes.txt","\nSantosh Patel",()=>{
    // console.log("File Appended Successfully");
});
const appendAbes2=fs.readFileSync("./Abes.txt","utf-8");
// console.log(appendAbes2);



// Copy data from one file to another

fs.cpSync("./Abes.txt","./AbesCopy.txt");

// copy Async
fs.cp("./ds-b.txt","./ds-bcopy.txt",()=>{
    // console.log("File Copied Successfully");
})

app.listen(PORT,()=>{
    console.log('Server is running on port '+PORT);
})

import express from "express";

const app=express();

app.get("/",(req,res)=>{
    res.send("Hello World");
});

// data base {json}

const student =[
    {
        id:1,
        name:"deepak"},
        {
            id:2,
            name:"rupak"
        }
]

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
}); 

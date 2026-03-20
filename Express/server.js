import express from "express";

const app=express();
app.use(express.json()); // parse JSON request bodies

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

//API for read data

app.get("/read",(req,res)=>{
    res.json(student)
})
//api read data by id

app.get("/read/:id",(req,res)=>{
    const id=req.params.id;
        res.json(student.find((s)=>s.id==id));
    
});

// API for create data
app.post("/add",(req,res)=>{
    const newStudent={
        id:student.length+1,
        ...req.body
    }
    student.push(newStudent);
    res.json({message :"Student added successfully", student:newStudent});
})
app.listen(3000,()=>{
    console.log("Server is running on port 3000");
}); 

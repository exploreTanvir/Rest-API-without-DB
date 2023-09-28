const express=require("express")
const cors=require("cors")
const bodyParser=require("body-parser")
const urlencoded = require("body-parser/lib/types/urlencoded")
const app=new express()
app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
const router=require("./route/usersRoute")
app.use(router)



//Home route
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/view/index.html")
})

// Route not found
app.use((req,res,next)=>{
    res.status(404).json({message:"404 Not found and route undefined"})
})

// server error
app.use((err,req,res,next)=>{
    res.status(500).json({message:"Something is wrong"})
})



module.exports=app
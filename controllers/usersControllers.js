let users=require("../models/userModel")
const {v4:uuidv4}=require("uuid")

// get users
const allUsers=(req,res)=>{
    res.status(201).json(users)
}


//create users
const createUsers=(req,res)=>{
    const user={
    id:uuidv4(),
    name:req.body.name,
    email:req.body.email,
    roll:req.body.roll
    }
    users.push(user)
    res.status(201).json({users})
}

// Update user
const updateUser=(req,res)=>{
    const id=req.params.id
    const name=req.body.name
    const email=req.body.email
    const roll=req.body.roll 

    users.filter((user)=>user.id==id).map((selectedUser)=>{
        selectedUser.email=email
        selectedUser.name=name
        selectedUser.roll=roll
    })
    res.status(201).json(users)
}


// Delete User
const deleteUser=(req,res)=>{
    const id=req.params.id
    users=users.filter((user)=>user.id!==id)
    res.status(201).json(users)
}
module.exports={allUsers,createUsers,updateUser,deleteUser}
const express=require("express")
const { allUsers, createUsers, updateUser, deleteUser } = require("../controllers/usersControllers")
const router=express.Router()


router.get("/users",allUsers)
router.post("/users",createUsers)
router.put("/users/:id",updateUser)
router.delete("/users/:id",deleteUser)


module.exports=router
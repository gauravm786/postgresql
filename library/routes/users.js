//3,4,10,11 April

/*
//here we are creating routes for users endpoint

import express from "express"
//while runnung the application node will try to include code of express to your code  
//we need to use express for router

import {getUsers,createUser,getUserById,deleteUserById,updateUserById} from '../controllers/users.js'
//to import multiple functions at same time we use import{}
// and using '../controllers/users.js' we go back to previous folder and import function from the given folder.Here it is controller


const router = express.Router();
//we will need to get router which we will get from express so for that we will use const variable

router.get("/",getUsers)
router.get("/:id",getUserById) //it should be used as variable and hence colon is used
router.post("/",createUser)
router.delete("/:id",deleteUserById)//it should be used as variable and hence colon is used
router.patch("/:id",updateUserById) //patch is basically used to update a particular entry and update is use to update the entire entry



//http://localhost:7777/user?name=gaurav&gender=male&age=22&city=Mumbai
//here name,gender,age,city are query

export default router //router is exported to index.js*/
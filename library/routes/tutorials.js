//9may

/*
//creating new router for postgresql

import express from "express"
//while runnung the application node will try to include code of express to your code  
//we need to use express for router

import {getAllTutorialsByTitle} from '../controllers/tutorial.js'
//to import multiple functions at same time we use import{}
// and using '../controllers/users.js' we go back to previous folder and import function from the given folder.Here it is controller


const router = express.Router();
//we will need to get router which we will get from express so for that we will use const variable

router.get("/",getAllTutorialsByTitle)

export default router
*/

//15 may

/*
//creating new router for postgresql

import express from "express"
//while runnung the application node will try to include code of express to your code  
//we need to use express for router

import {getAllTutorialsByTitle} from '../controllers/tutorial.js'
//to import multiple functions at same time we use import{}
// and using '../controllers/users.js' we go back to previous folder and import function from the given folder.Here it is controller


const router = express.Router();
//we will need to get router which we will get from express so for that we will use const variable

router.get("/",getAllTutorialsByTitle)

export default router
*/

//16 may

/*
//creating new router for postgresql

import express from "express"
//while running the application node will try to include code of express to your code  
//we need to use express for router

import {getAllTutorialsByTitle,createTutorial,deleteTutorialById,updateTutorialById,deleteTutorials} from '../controllers/tutorial.js'
//to import multiple functions at same time we use import{}
// and using '../controllers/users.js' we go back to previous folder and import function from the given folder.Here it is controller


const router = express.Router();
//we will need to get router which we will get from express so for that we will use const variable

router.get("/",getAllTutorialsByTitle)
router.post("/",createTutorial)
router.delete("/",deleteTutorials)
router.delete("/:id",deleteTutorialById)
router.put("/:id",updateTutorialById)
export default router
*/
